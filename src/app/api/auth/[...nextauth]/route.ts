import NextAuth from 'next-auth'
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { Role, User } from '@prisma/client';


const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session:{
        strategy:'jwt'
    },
   pages:{
        signIn:'/login'
   },
    providers : [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email:{
                    label: "Email",
                    type : "email",
                },
                password:{
                    label: "Password",
                    type: "password"
                }

            },
            async authorize(credentials) {

                console.log("Received credentials:", credentials);

                if (!credentials?.email || !credentials?.password){
                    console.log("Missing email or password in credentials");
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                console.log(user?.email, user?.lastName, user?.firstName)

                if (!user) {
                    console.log("User not found or password is null");
                    return null
                }

                if (user.password === null) {
                    console.log("Password is null");
                    return null;
                  }

                const isPasswordMatch = await compare(credentials.password, user.password);

                console.log(isPasswordMatch)
                console.log(user.password)

                if (!isPasswordMatch) {
                    console.log("Password does not match");

                    return null
                }

                return {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role
                   
                }

            }
        }),

    ],

    callbacks:{
        session:({session, token}) => {
            return{
                ...session,
                user:{
                    ...session.user,
                    id: token.id,
                    firstName: token.firstName,
                    lastName: token.lastName, 
                    role: token.role                   
                },
                
            }
        },
        jwt: async ({token, user}) => {
            if (user){
                const u = user as unknown as User
                return Promise.resolve({
                    ...token,
                    id: u.id,
                    firstName: u.firstName,
                    lastName: u.lastName,
                    role: u.role

                })
            }

            return Promise.resolve(token)
        }
    }
}

const handler = NextAuth(options)

export {handler as GET, handler as POST}