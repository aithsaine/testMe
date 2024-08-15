import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../../prisma/client";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", placeholder: "Email ..." },
                password: { label: "Password", placeholder: "Password..." },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) return null;

                const user = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });

                if (user && (await bcrypt.compare(credentials.password, user.password))) {
                    return { id: user.id, email: user.email, firstname: user.firstname, lastname: user.lastname };
                }

                return null;
            },
        }),
    ],
    secret: process.env.JWT_SECRET!,
    pages: {
        signIn: "/login", // Custom login page
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "google") {
                const email = user.email;
                const firstname = profile.given_name || user.name?.split(" ")[0];
                const lastname = profile.family_name || user.name?.split(" ")[1];

                const existingUser = await prisma.user.findFirst({ where: { email } });

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            firstname: String(firstname),
                            lastname: String(lastname),
                            email: String(email),
                            password: process.env.JWT_SECRET, // No password needed for Google accounts
                        },
                    });
                }
            }
            return true;
        },
        async session({ session, token }: any) {
            if (token) {
                session.user.id = token.id;
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.email = user.email;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
