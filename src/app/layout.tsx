import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/app/menu";
import { getServerSession } from "next-auth";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlton At Home",
  description: "Carlton's home website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Menu />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
