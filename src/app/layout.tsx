import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
