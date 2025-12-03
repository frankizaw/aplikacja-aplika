import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers"; // <-- używamy wrappera
import MainNavbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Projekt",
  description: "Next.js + Tailwind + NextUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <MainNavbar />
          <div className="min-h-screen bg-gray-100 text-gray-900">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
