import type { Metadata } from "next";
import Link from "next/link";
import { Battery, Sun, Zap, TrendingDown, AlertTriangle, Wifi, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Energy Rental Solutions | BESS, Solar Hybrid & More — BEYR Energy",
  description:
    "Explore BEYR Energy's full range of alternative energy rental solutions: BESS, solar hybrid systems, temporary power, peak shaving, emergency backup and off-grid power for UAE & GCC.",
};

const solutions = [
  {
    icon: Battery,
    title: "Battery Energy Storage (BESS) Rental",
    desc: "Industrial-scale containerised BESS units for grid-tied and off-grid applications. Ideal for peak shaving, backup power, and grid stabilisation across UAE construction and industrial sites.",
    href: "/solutions/bess",
    features: ["50 kWh – 10+ MWh capacity", "IEC certified equipment", "Remote monitoring included", "Fast 48h deployment"],
    tag: "Most Popular",
  },
  {
    icon: Sun,
    title: "Solar Hybrid Rental",
    desc: "Integrated diesel-solar-battery hybrid systems that dramatically reduce fuel consumption and emissions for remote project sites across the GCC.",
    href: "/solutions/solar-hybrid",
    features: ["Up to 80% fuel savings", "Modular solar array", "Smart hybrid controller", "Full O&M support"],
    tag: null,
  },
  {
    icon: Zap,
    title: "Temporary Power Solutions",
    desc: "Fast-deploy temporary power infrastructure for construction, industrial projects, and events. Generator + BESS hybrid configurations available for ultra-low noise operation.",
    href: "/solutions/temporary-power",
    features: ["Generator + BESS hybrid", "Silent operation", "Quick-connect switchgear", "Load monitoring"],
    tag: null,
  },
  {
    icon: TrendingDown,
    title: "Peak Shaving Systems",
    desc: "Intelligent BESS-driven systems that automatically discharge during peak demand periods, reducing utility charges and protecting against demand tariffs.",
    href: "/solutions/peak-shaving",
    features: ["Automated peak detection", "Smart BMS integration", "Demand charge reduction", "ROI analysis included"],
    tag: null,
  },
  {
    icon: AlertTriangle,
    title: "Emergency Backup Power",
    desc: "Rapid-response backup power deployment for critical operations. Our emergency fleet can be mobilised within hours to keep your facilities running.",
    href: "/solutions/emergency-backup",
    features: ["4-hour emergency response", "24/7 monitoring", "UPS-grade switchover", "Critical load prioritization"],
    tag: "Critical Response",
  },
  {
    icon: Wifi,
    title: "Off-Grid & Remote Site Power",
    desc: "Fully autonomous microgrid solutions for remote locations with no grid connection. Designed for harsh GCC environments including desert, offshore, and high-temperature sites.",
    href: "/solutions",
    features: ["Zero grid dependency", "Desert-rated enclosures", "Satellite SCADA monitoring", "Water-cooled BESS options"],
    tag: null,
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-dark-grid" />
        <div className="glow-dot w-96 h-96 bg-energy top-0 left-0 opacity-10" />
        <div className="container-wide relative z-10">
          <div className="section-label">
            <span className="w-8 h-px bg-energy" />
            Our Solutions
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            Complete Alternative{" "}
            <span className="text-gradient-green">Energy Rental Ecosystem</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From BESS to off-grid microgrids — every solution is modular, scalable, and deployable within 48 hours across the UAE & GCC.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <div key={sol.title} className="group border border-gray-100 rounded-3xl p-8 hover:border-green-500/30 hover:shadow-[0_20px_60px_rgba(0,200,81,0.08)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-energy to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {sol.tag && (
                  <div className="absolute top-6 right-6">
                    <span className="tag-badge">{sol.tag}</span>
                  </div>
                )}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-energy/10 border border-energy/20 flex items-center justify-center flex-shrink-0 group-hover:bg-energy/20 transition-colors">
                    <sol.icon className="w-7 h-7 text-energy" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-navy-900 text-xl mb-2 group-hover:text-energy transition-colors">{sol.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-gray-600 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-energy flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href={sol.href} className="flex items-center gap-2 text-energy text-sm font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="section-title mb-4">Need a Custom Energy Solution?</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">Our engineers will design a tailored rental package for your specific project requirements.</p>
          <Link href="/contact" className="btn-primary">
            Get a Custom Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
