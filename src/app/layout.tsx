import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header, Footer, GoogleAnalytics, StructuredData } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MYTE Technology | Managed IT & Cybersecurity",
    template: "%s | MYTE Technology",
  },
  description:
    "MYTE Technology provides managed IT services and cybersecurity solutions for small and mid-sized businesses. Proactive support, expert guidance, real results.",
  metadataBase: new URL("https://mytetechnology.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalytics />
        <StructuredData />
      </body>
    </html>
  );
}
