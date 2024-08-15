import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import prisma from "../../prisma/client";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email..." },
                password: { label: "Password", type: "password", placeholder: "Password..." },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });

                if (user && (await bcrypt.compare(credentials.password, user.password))) {
                    return {
                        id: user.id,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                    };
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
        async signIn({ user, account, profile }: any) {
            if (account.provider === "google") {
                const email = user.email!;
                const firstname = profile?.given_name || user.name?.split(" ")[0] || "";
                const lastname = profile?.family_name || user.name?.split(" ")[1] || "";

                const existingUser = await prisma.user.findFirst({ where: { email } });

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            firstname,
                            lastname,
                            email,
                            password: "google-oauth", // No password needed for Google accounts
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
        async jwt({ token, user }: any) {
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
