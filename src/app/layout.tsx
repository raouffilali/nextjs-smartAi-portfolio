import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Abderraouf FILALI",
    default: "Abderraouf FILALI",
  },
  description:
    "Explore my intelligent portfolio website featuring a personalized AI chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <ThemeProvider attribute="class">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-4xl px-3 py-10">{children}</main>
      <Footer />
      </body>
      </ThemeProvider>
    </html>
  );
}
