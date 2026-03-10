import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Energy Rental — BEYR Energy Dubai",
  description:
    "BEYR Energy provides industrial-grade alternative energy rental solutions for Construction, Oil & Gas, Manufacturing, Events, Utilities, and Infrastructure across the GCC.",
};

const industries = [
  {
    id: "construction",
    title: "Construction",
    desc: "Powering the UAE's most ambitious mega-projects with reliable, scalable temporary power.",
    details: "Construction sites require flexible power that grows with the project phases. Our containerised BESS and solar hybrid solutions replace noisy, inefficient diesel generators, providing silent, emission-free power for tower cranes, site offices, and heavy machinery, while significantly reducing fuel costs.",
    benefits: ["Silent operation for urban sites", "Scalable power as site grows", "Significant fuel savings vs diesel", "Zero emissions for green building ratings"],
    bg: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    desc: "Resilient off-grid power for the harshest environments in the GCC.",
    details: "Remote drilling sites, pipelines, and processing facilities demand power that never fails. BEYR Energy provides ruggedized, desert-rated hybrid power systems that reduce diesel logistics and ensure continuous operation in temperatures up to 55°C.",
    benefits: ["Desert-rated (55°C) equipment", "Reduced fuel logistics to remote sites", "24/7 satellite monitoring", "Zone-compliant options available"],
    bg: "from-red-500/10 to-orange-600/10",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    desc: "Protecting production lines and reducing energy costs for industrial plants.",
    details: "Power interruptions can cost manufacturing facilities millions in ruined materials and downtime. Our industrial BESS units provide seamless UPS-grade backup while also performing peak shaving to reduce utility demand charges during high-tariff periods.",
    benefits: ["UPS-grade seamless backup", "Peak demand charge reduction", "Power quality improvement", "No capital expenditure required"],
    bg: "from-blue-500/10 to-indigo-500/10",
  },
  {
    id: "events",
    title: "Events & Exhibitions",
    desc: "Silent, emission-free power for the GCC's premier events and festivals.",
    details: "Major concerts, sporting events, and outdoor exhibitions in Dubai and across the region require massive temporary power without the noise and fumes of traditional generators. Our BESS units deliver completely silent, clean power to stages, broadcasting equipment, and VIP areas.",
    benefits: ["Completely silent operation", "Zero emissions and fumes", "Rapid 24h deployment", "Reliable broadcasting power"],
    bg: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: "utilities",
    title: "Utilities",
    desc: "Grid stabilisation and frequency regulation for national power grids.",
    details: "We partner with utility providers across the GCC to deploy multi-MW battery storage systems that stabilize the grid, manage peak loads, and integrate renewable energy sources. Our containerised units can be deployed rapidly to address localized grid constraints.",
    benefits: ["Rapid stabilization deployment", "Frequency regulation support", "Renewables integration", "Substation peak shaving"],
    bg: "from-teal-500/10 to-cyan-500/10",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    desc: "Critical backup power for hospitals, airports, and data centres.",
    details: "Urban infrastructure cannot afford to lose power. We provide high-capacity, ultra-reliable emergency backup systems that deploy faster than permanent installations, offering a bridge solution during upgrades or an immediate response to critical failures.",
    benefits: ["High-capacity emergency backup", "Bridge power during facility upgrades", "N+1 redundancy configurations", "Rapid deployment for disaster recovery"],
    bg: "from-green-500/10 to-emerald-500/10",
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-dark-grid" />
        <div className="glow-dot w-96 h-96 bg-blue-500 top-0 right-0 opacity-10" />
        <div className="container-wide relative z-10">
          <div className="section-label">
            <span className="w-8 h-px bg-energy" />
            Industries We Serve
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            Powering the GCC's{" "}
            <span className="text-gradient-green">Critical Sectors</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            From remote oil fields to urban mega-projects, BEYR Energy delivers tailored, scalable rental power solutions designed for the unique demands of your industry.
          </p>
          <div className="flex flex-wrap gap-3">
            {industries.map(ind => (
              <a key={ind.id} href={`#${ind.id}`} className="px-4 py-2 rounded-full bg-white/10 hover:bg-energy/20 border border-white/20 text-white text-sm font-medium transition-colors">
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-28 lg:py-40">
        <div className="container-wide space-y-32">
          {industries.map((ind, i) => (
            <div key={ind.id} id={ind.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} scroll-mt-32`}>
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="section-label mb-4">{ind.title}</div>
                <h2 className="section-title mb-6 leading-tight">{ind.desc}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{ind.details}</p>

                <h3 className="font-display font-bold text-navy-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {ind.benefits.map(benefit => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-energy flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-outline-green">
                  Request a Solution for {ind.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`relative rounded-[2rem] h-[400px] lg:h-[500px] bg-gradient-to-br ${ind.bg} border border-gray-100 shadow-xl overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-dark-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display font-black text-4xl text-navy-900/50 mb-2">BEYR ENERGY</div>
                    <div className="text-navy-900/40 font-bold uppercase tracking-widest">{ind.title} Division</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-hero-gradient relative overflow-hidden">
        <div className="container-wide text-center relative z-10">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6">Don't See Your Industry?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">Our modular energy systems can be adapted to almost any application that requires reliable, off-grid or backup power.</p>
          <Link href="/contact" className="btn-primary px-8 py-4">
            Consult Our Engineering Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
