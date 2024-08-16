import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "@/components/authProvider";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestMe Platform",
  description: "Test your level and know your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />

      </Head>
      <body className={`${inter.className} relative`}>
        <AuthProvider>
          <Toaster richColors />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
