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
  metadataBase: new URL("https://engineering-career-foundation-1xdo.vercel.app"),
  title: {
    default: "Engineering Career Foundation | Empowering Engineers. Building Futures.",
    template: "%s | Engineering Career Foundation",
  },
  description:
    "We equip undergraduate and early-career engineers in Nigeria with the skills, mindset, and opportunities to thrive in their careers and make lasting impact.",
  openGraph: {
    title: "Engineering Career Foundation",
    description:
      "Empowering undergraduate and early-career engineers in Nigeria through mentorship, technical training, and career development.",
    url: "https://engineering-career-foundation-1xdo.vercel.app",
    siteName: "Engineering Career Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Career Foundation",
    description:
      "Empowering undergraduate and early-career engineers in Nigeria through mentorship, technical training, and career development.",
  },
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
