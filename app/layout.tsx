import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RouteChangeHandler from "./RouteChangeHandler";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamroz Khan - Portfolio",
  description:
    "Frontend Developer specialized in React, Next.js, and modern web technologies. I build responsive, user-friendly, and high-performance web applications that deliver exceptional digital experiences.",
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RouteChangeHandler />
        <FloatingNavbar />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
