import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Case Studies | BEYR Energy Dubai",
  description:
    "Explore BEYR Energy's portfolio of successful alternative energy rental deployments across the UAE and GCC.",
};

const projects = [
  {
    title: "Off-Grid Solar Hybrid Power for Remote Pipeline Camp",
    client: "Major EPC Contractor",
    location: "Abu Dhabi, UAE",
    tech: "500kW Solar + 1MWh BESS",
    savings: "65% Fuel Reduction",
    desc: "Deployed a fully autonomous hybrid microgrid for a 500-man remote camp in the desert. The system replaced three constantly running 500kVA diesel generators, dramatically cutting diesel logistics, noise, and emissions while providing completely stable 24/7 power.",
  },
  {
    title: "Zero-Emission Temporary Power for Urban Music Festival",
    client: "Global Events Agency",
    location: "Dubai, UAE",
    tech: "2MWh Silent BESS fleet",
    savings: "100% Noise Reduction",
    desc: "Provided clean, completely silent battery power for main stage broadcasting and VIP hospitality areas at a major outdoor festival. Eliminated the need for noisy generators near the audience, ensuring an uninterrupted premium experience.",
  },
  {
    title: "Peak Shaving & Backup for Manufacturing Plant",
    client: "Industrial Manufacturer",
    location: "Sharjah, UAE",
    tech: "3MWh Grid-Tied BESS",
    savings: "30% Demand Charge Cut",
    desc: "Integrated a large-scale BESS to shave evening peak demand charges and provide instant UPS-grade backup during brownouts. The rental model required zero CAPEX from the client while delivering immediate monthly operational savings.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-dark-grid" />
        <div className="glow-dot w-96 h-96 bg-energy top-0 right-0 opacity-10" />
        <div className="container-wide relative z-10">
          <div className="section-label">
            <span className="w-8 h-px bg-energy" />
            Projects & Case Studies
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-5xl text-white leading-tight max-w-3xl mb-6">
            Proven Performance in the{" "}
            <span className="text-gradient-green">Toughest Environments</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Discover how BEYR Energy delivers reliable, cost-saving rental power solutions to complex projects across the GCC.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-28 lg:py-40">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="group border border-gray-100 rounded-3xl p-10 hover:border-green-500/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-energy transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  <MapPin className="w-3.5 h-3.5 text-energy" /> {proj.location}
                </div>

                <h2 className="font-display font-bold text-navy-900 text-xl mb-4 group-hover:text-energy transition-colors">
                  {proj.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {proj.desc}
                </p>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Client:</span>
                    <span className="font-semibold text-navy-900">{proj.client}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t border-gray-200 pt-3">
                    <span className="text-gray-500">Tech:</span>
                    <span className="font-semibold text-navy-900">{proj.tech}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t border-gray-200 pt-3">
                    <span className="text-gray-500">Result:</span>
                    <span className="font-bold text-energy">{proj.savings}</span>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white border-2 border-gray-100 rounded-xl text-navy-900 font-bold text-sm hover:border-energy hover:text-energy transition-colors">
                  Inquire About Similar Solution
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl">
              <Zap className="w-5 h-5 text-energy" />
              <span className="text-navy-900 font-medium">Looking for a specific application?</span>
              <Link href="/contact" className="text-energy font-bold hover:underline">Contact our engineering team.</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
