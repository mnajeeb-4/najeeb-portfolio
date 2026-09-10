import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Muhammad Najeeb Brohi | AI & Python Software Engineer",
  description: "Architecting scalable enterprise Hybrid RAG systems, engineering autonomous scraping engines, and transforming raw data into high-accuracy intelligent applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}