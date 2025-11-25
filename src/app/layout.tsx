import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sell Your House Fast | SwiftHomeBuyers",
  description: "We buy houses in Dallas, TX. Get a fair cash offer for your home in any condition. No fees, no repairs, close in 7 days.",
  keywords: ["sell house fast", "cash home buyers", "dallas real estate", "sell my house for cash", "we buy houses dallas"],
  openGraph: {
    title: "Sell Your House Fast | SwiftHomeBuyers",
    description: "Get a fair cash offer for your home in any condition. No fees, no repairs, close in 7 days.",
    url: "https://swifthomebuyers.com",
    siteName: "SwiftHomeBuyers",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
