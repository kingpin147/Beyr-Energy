import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyBeyond from "@/components/home/WhyBeyond";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "BEYR Energy | Premium Alternative Energy Rental — Dubai, UAE",
  description:
    "Beyond Rental (BEYR Energy) provides industrial-grade BESS, solar hybrid systems, temporary power solutions & alternative energy equipment rental across UAE & GCC. Fast deployment, 24/7 technical support.",
  openGraph: {
    title: "BEYR Energy | Premium Alternative Energy Rental — Dubai, UAE",
    description:
      "Industrial-grade BESS, solar hybrid systems, and temporary power solutions for the GCC market. Fast deployment, modular, scalable.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BEYR Energy — Beyond Rental of Alternative Energy Equipment LLC",
  description: "Industrial-grade BESS, solar hybrid, and temporary power rental solutions across UAE & GCC.",
  url: "https://beyrenergy.com",
  telephone: "+971000000000",
  email: "info@beyrenergy.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"],
  sameAs: ["https://linkedin.com/company/beyrenergy"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Energy Rental Solutions",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Energy Storage (BESS) Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Hybrid Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Temporary Power Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Backup Power" } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <WhoWeAre />
      <SolutionsSection />
      <WhyBeyond />
      <IndustriesSection />
      <CTABanner />
    </>
  );
}
