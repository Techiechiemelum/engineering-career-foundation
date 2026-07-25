import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Engineering Career Foundation | Empowering Engineers. Building Futures.",
  description:
    "We equip undergraduate and early-career engineers in Nigeria with the skills, mindset, and opportunities to thrive in their careers and make lasting impact.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
  {children}
  <Footer />
</body>
    </html>
  );
}
