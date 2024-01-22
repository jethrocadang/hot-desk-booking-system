import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const options: NextAuthOptions = {
    pages:{
        signIn: '/login'
    },
    providers : [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email:{
                    label: "Email",
                    type : "email",
                    placeholder : "youremail@example.com"
                },
                password:{
                    label: "Password",
                    type: "password"
                }

            },
            async authorize(credentials) {
                if (credentials?.email || !credentials.password){
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) {
                    return null
                }
            }
        })
    ]
}