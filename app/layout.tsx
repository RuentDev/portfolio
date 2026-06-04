import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { NavigationV2 } from "@/components/navigationV2";
import { FooterV2 } from "@/components/footerV2";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruentgen Comia | Full Stack JavaScript Developer",
  description: "Full Stack JavaScript Developer",
  generator: "Ruentgen Comia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anybody:wght@100..900&family=Geist:wght@100..900&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NavigationV2 />
        {children}
        <FooterV2 />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
