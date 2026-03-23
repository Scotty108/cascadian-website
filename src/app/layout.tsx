import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cascadian | Pure Water, Naturally",
  description:
    "Cascadian delivers premium whole-home water filtration systems. Clean, pure, toxin-free water for your family — backed by a lifetime warranty.",
  keywords: [
    "water filtration",
    "whole home water system",
    "reverse osmosis",
    "water softener",
    "clean water",
    "Cascadian",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
