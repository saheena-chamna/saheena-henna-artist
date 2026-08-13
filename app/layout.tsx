import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "../components/WhatsAppButton";
import BackgroundPattern from "@/components/BackgroundPattern";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saheena Henna Artist",
  description:
    "Bridal, Arabic, Eid, Party & Kids Henna | Home Service Across Cape Town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white relative overflow-x-hidden">

        {/* Background Henna Patterns */}
        <BackgroundPattern />

        {/* Main Website */}
        <main className="relative z-10 flex-1">
          {children}
        </main>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

      </body>
    </html>
  );
}