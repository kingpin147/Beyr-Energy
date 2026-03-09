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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <SolutionsSection />
      <WhyBeyond />
      <IndustriesSection />
      <CTABanner />
    </>
  );
}
