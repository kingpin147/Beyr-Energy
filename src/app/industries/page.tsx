"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HardHat, Droplets, Factory, Music, ZapOff, Building2, ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Construction",
    description: "Reliable, fast-deployment power for massive construction projects. From site offices to heavy machinery, we ensure your timeline stays on track with zero power interruptions.",
    icon: <HardHat className="w-12 h-12" />,
    href: "/industries/construction",
    stats: "40% Fuel Savings"
  },
  {
    name: "Oil & Gas",
    description: "Remote site power for the most extreme environments. Our BESS and hybrid systems provide steady, high-reliability power for drilling, pumping, and worker camps.",
    icon: <Droplets className="w-12 h-12" />,
    href: "/industries/oil-and-gas",
    stats: "Zero Downtime"
  },
  {
    name: "Manufacturing",
    description: "Optimize your factory energy costs with peak shaving. Our storage solutions reduce demand charges and provide critical backup for continuous production lines.",
    icon: <Factory className="w-12 h-12" />,
    href: "/industries/manufacturing",
    stats: "ROI Focus"
  },
  {
    name: "Events & Media",
    description: "Silent, clean power for world-class events. Replace noisy generators with silent BESS and hybrid systems for concerts, festivals, and major corporate gatherings.",
    icon: <Music className="w-12 h-12" />,
    href: "/industries/events",
    stats: "Silent Power"
  },
  {
    name: "Utilities & Grid",
    description: "Support the grid during peak loads or maintenance. Rapidly deploy megawatt-scale battery systems for frequency regulation and voltage support.",
    icon: <ZapOff className="w-12 h-12" />,
    href: "/industries/utilities",
    stats: "Grid Strength"
  },
  {
    name: "Infrastructure",
    description: "Powering the backbone of the GCC. From rail projects to port expansions, we provide the scalable energy infrastructure needed for major state projects.",
    icon: <Building2 className="w-12 h-12" />,
    href: "/industries/infrastructure",
    stats: "Scalability"
  }
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Industries <span className="text-accent">We Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Tailored energy rental systems engineered for the specific demands of every major sector in the GCC.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div 
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 rounded-[3rem] bg-background border border-border hover:bg-white hover:border-accent hover:shadow-2xl transition-all flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl premium-gradient text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
                  {industry.stats}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  {industry.description}
                </p>
                <Link 
                  href={industry.href} 
                  className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all mt-auto"
                >
                  View Sector Insights <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries CTA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <rect x="0" y="0" width="100" height="100" fill="currentColor" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">"We provide more than power; we provide the foundation for industrial growth."</h2>
            <p className="text-xl text-white/70 mb-12">
              Our engineering team has depth of experience across the construction, energy, and utility sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/contact" 
                className="bg-accent text-primary px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-accent/20"
              >
                Start Sector Assessment
              </Link>
              <Link 
                href="/solutions" 
                className="bg-white/10 border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl"
              >
                Explore Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
