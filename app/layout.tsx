import type { Metadata } from "next";
import { Playfair_Display, Manrope, DM_Mono } from "next/font/google";
import ScrollProgress from "./components/motion/ScrollProgress";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PUCC — Be Present | Digital Wellness Movement",
  description: "PUCC — Be Present | Digital Wellness Movement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
