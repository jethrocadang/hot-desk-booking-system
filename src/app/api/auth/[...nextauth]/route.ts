import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { Role, User } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client"


const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    // signOut:'/'
  },
  providers: [
    // CredentialsProvider({
    //     name: 'Credentials',
    //     credentials:{
    //         email:{
    //             label: "Email",
    //             type : "email",
    //         },
    //         password:{
    //             label: "Password",
    //             type: "password"
    //         }

    //     },
    //     async authorize(credentials) {

    //         console.log("Received credentials:", credentials);

    //         if (!credentials?.email || !credentials?.password){
    //             console.log("Missing email or password in credentials");
    //             return null
    //         }

    //         const user = await prisma.user.findUnique({
    //             where: {
    //                 email: credentials.email
    //             }
    //         })

    //         console.log(user?.email, user?.lastName, user?.firstName)

    //         if (!user) {
    //             console.log("User not found or password is null");
    //             return null
    //         }

    //         if (user.password === null) {
    //             console.log("Password is null");
    //             return null;
    //           }

    //         const isPasswordMatch = await compare(credentials.password, user.password);

    //         console.log(isPasswordMatch)
    //         console.log(user.password)

    //         if (!isPasswordMatch) {
    //             console.log("Password does not match");

    //             return null
    //         }

    //         return {
    //             id: user.id,
    //             email: user.email,
    //             firstName: user.firstName,
    //             lastName: user.lastName,
    //             role: user.role

    //         }

    //     }
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role,
        };
      },
    }),

    
  ],


  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
          role: token.role,
        },
      };
    },
    jwt: async ({ token, user }) => {
      if (user) {
        const u = user as unknown as User;
        return {
          ...token,
          id: u.id,
          name: u.name,
          email: u.email,
          image: u.image,
          role: u.role,
        };
      }

      return token;
    },

    // async jwt ({token, user}){
    //     return {...token, ...user}
    // },

    // async session({session, token}){
    //     session.user.role = token.role;

    //     return session
    // },

    // async signIn({ profile }) {
    //   if (!profile?.email) {
    //     throw new Error("no Profile");
    //   }

    //   await prisma.user.upsert({
    //     where: {
    //       email: profile.email,
    //     },
    //     create: {
    //       email: profile.email,
    //       name: profile.name,
    //       image: profile.image,
    //     },
    //     update: {
    //       name: profile.name,
    //       image: profile.image,
    //     },
    //   });

    //   return true;
    // },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
