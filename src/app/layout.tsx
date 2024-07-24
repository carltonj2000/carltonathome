import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlton At Home",
  description: "Carlton's Home Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
