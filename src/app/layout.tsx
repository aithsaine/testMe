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
  keywords: "online test, skill assessment, TestMe, online quiz, evaluate skills, testing platform",
  creator: "Ismail Ait Hsaine",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "TestMe Platform",
    description: "Test your level and know your skills on the TestMe platform.",
    type: "website",
    url: "https://onlinetestme.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-8061884677342984" />
        <link rel="icon" href="./favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8061884677342984"
          crossOrigin="anonymous"></script>
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
