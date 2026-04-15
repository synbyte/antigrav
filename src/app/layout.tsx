import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sell Your House Fast | True Home Capital",
  description: "We buy houses nationwide. Get a fair cash offer for your home in any condition. No fees, no repairs, close in 7 days.",
  keywords: ["sell house fast", "cash home buyers", "nationwide real estate", "sell my house for cash", "we buy houses", "True Home Capital"],
  icons: {
    icon: '/logo_nobg.png',
  },
  openGraph: {
    title: "Sell Your House Fast | True Home Capital",
    description: "Get a fair cash offer for your home in any condition. No fees, no repairs, close in 7 days.",
    url: "https://truehomecapital.com",
    siteName: "True Home Capital",
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
        className={`${poppins.variable} antialiased`}
      >
        <CopilotKit publicApiKey="ck_pub_b6c29a1db431c592d75d490eace6c893">
          <JsonLd />
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
