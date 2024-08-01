import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "../../../../../prisma/client";
import bcrypt from "bcrypt";
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", placeholder: "Email ..." },
                password: { label: "Password", placeholder: "Password..." }
            },
            async authorize(credentials, req) {

                if (!credentials || !credentials.email || !credentials.password)
                    return null;
                const user = await prisma.user.findFirst({
                    where: { email: credentials.email },
                })
                console.log(user)
                if (user && await bcrypt.compare(credentials.password, user.password)) {
                    return user;
                }
                prisma.$disconnect()
                return null;
                // } catch (error) {
                //     console.log(error)

                // } finally {
                //     await prisma.$disconnect()
                // }

            }
        })
    ],
    secret: process.env.JWT_SECRET!,
    pages: {
        signIn: '/login' // Custom login page
    },



}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }