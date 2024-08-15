import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "@/components/authProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Head from "next/head";

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
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* You can also add other favicon sizes if needed */}

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
