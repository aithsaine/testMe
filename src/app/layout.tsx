import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "@/components/authProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestMe Platform",
  description: "test you level and know your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className + "  relative "}>


        <AuthProvider>

          <Toaster richColors />
          <main className="">

            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
