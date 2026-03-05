import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import Schema from "@/components/Schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://beyrenergy.com"),
  title: {
    default: "BEYR Energy | Reliable Energy. When You Need It.",
    template: "%s | BEYR Energy"
  },
  description: "Beyond Rental (BEYR Energy) is a Dubai-based company focused on rental of alternative energy equipment including BESS, Solar Hybrid, and Temporary Power Solutions.",
  keywords: ["Energy Rental Dubai", "BESS Rental GCC", "Solar Hybrid Rental UAE", "Temporary Power Solutions", "Beyond Rental", "BEYR Energy"],
  authors: [{ name: "BEYR Energy" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://beyrenergy.com",
    title: "BEYR Energy | Reliable Energy. When You Need It.",
    description: "Premium alternative energy equipment rental in the GCC. Specialized in BESS, Solar Hybrid, and Temporary Power.",
    siteName: "BEYR Energy",
    images: [
      {
        url: "/hero-bess.png",
        width: 1200,
        height: 630,
        alt: "BEYR Energy - BESS Industrial Container",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEYR Energy | Reliable Energy. When You Need It.",
    description: "Premium alternative energy equipment rental in the GCC.",
    images: ["/hero-bess.png"],
  },
  alternates: {
    canonical: "https://beyrenergy.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans bg-background text-foreground`}>
        <Schema />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
