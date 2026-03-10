import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingCallButton from "@/components/FloatingCallButton";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://beyrenergy.com"),
  title: {
    default: "BEYR Energy | Battery & Alternative Energy Rental — Dubai, UAE",
    template: "%s | BEYR Energy",
  },
  description:
    "Beyond Rental (BEYR Energy) provides premium BESS, solar hybrid, temporary power & alternative energy equipment rental across UAE & GCC. Fast deployment, 24/7 support.",
  keywords: [
    "BESS rental Dubai",
    "battery energy storage rental UAE",
    "solar hybrid rental GCC",
    "temporary power solutions Dubai",
    "energy equipment rental UAE",
    "peak shaving UAE",
    "emergency backup power Dubai",
    "off-grid power GCC",
    "alternative energy rental",
    "Beyond Rental energy",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://beyrenergy.com",
    siteName: "BEYR Energy",
    title: "BEYR Energy | Battery & Alternative Energy Rental — Dubai, UAE",
    description:
      "Premium BESS, solar hybrid, temporary power & alternative energy equipment rental across UAE & GCC. Fast deployment, 24/7 support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BEYR Energy - Alternative Energy Rental Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEYR Energy | Battery & Alternative Energy Rental — Dubai, UAE",
    description:
      "Premium BESS, solar hybrid, temporary power & alternative energy equipment rental across UAE & GCC.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <FloatingCallButton />
      </body>
    </html>
  );
}
