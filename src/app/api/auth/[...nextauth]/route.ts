import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/client";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", placeholder: "Email ..." },
                password: { label: "Password", placeholder: "Password..." },
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password)
                    return null;
                const user = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });
                if (user && (await bcrypt.compare(credentials.password, user.password))) {
                    console.log(user);
                    return { id: user.id, email: user.email, firstname: user.firstname, lastname: user.lastname };
                }
                prisma.$disconnect();
                return null;
            },
        }),
    ],
    secret: process.env.JWT_SECRET!,
    pages: {
        signIn: "/login", // Custom login page
    },
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.firstname = token.firstname as string;
                session.user.lastname = token.lastname as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.firstname = user?.firstname;
                token.lastname = user?.lastname;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
