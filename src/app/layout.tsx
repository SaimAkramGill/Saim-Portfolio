import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Saim — Full-Stack Engineer & Problem Solver",
    template: "%s | Saim",
  },
  description:
    "Full-Stack Engineer specializing in Next.js, TypeScript, and scalable web applications. Building digital products that matter.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Saim" }],
  creator: "Saim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saim.dev",
    title: "Saim — Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in Next.js, TypeScript, and scalable web applications.",
    siteName: "Saim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saim — Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in Next.js, TypeScript, and scalable web applications.",
    creator: "@saim_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
