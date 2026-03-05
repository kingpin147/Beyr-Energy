"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Battery, Sun, Zap, TrendingUp, ShieldCheck, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    title: "Battery Energy Storage (BESS)",
    description: "Our flagship modular battery systems designed for the most demanding industrial applications in the GCC. Capable of megawatt-scale deployments with sub-second response times.",
    features: ["Peak Shaving & Load Levelling", "Frequency Regulation", "Renewable Energy Integration", "Off-grid Power Support"],
    icon: <Battery className="w-10 h-10" />,
    href: "/solutions/bess",
    image: "/hero-bess.png",
    color: "bg-blue-600"
  },
  {
    title: "Solar Hybrid Rental",
    description: "Combine traditional power generation with advanced solar PV and storage. Drastically reduce fuel consumption and CO2 emissions while maintaining 100% uptime.",
    features: ["Automatic Fuel Optimization", "Quiet Night-time Operation", "Scalable Solar Arrays", "Integrated EMS"],
    icon: <Sun className="w-10 h-10" />,
    href: "/solutions/solar-hybrid",
    image: "/hero-bess.png",
    color: "bg-orange-500"
  },
  {
    title: "Temporary Power",
    description: "Full-spectrum power distribution and generation. From small infrastructure sites to massive construction projects and remote mining operations.",
    features: ["Load Banking Services", "Step-up Transformers", "Fuel Management Systems", "Sync-to-Grid Capability"],
    icon: <Zap className="w-10 h-10" />,
    href: "/solutions/temporary-power",
    image: "/hero-bess.png",
    color: "bg-yellow-500"
  }
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="relative pt-64 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="container relative z-10 text-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest mb-6"
           >
              Engineering Excellence
           </motion.div>
           <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-8"
           >
              Energy <span className="text-accent italic">Solutions</span>
           </motion.h1>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed"
           >
              High-performance, modular energy systems designed for the extreme 
              environments of the GCC industrial sector.
           </motion.p>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col gap-32">
            {solutions.map((solution, idx) => (
              <motion.div 
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="w-20 h-20 rounded-3xl bg-surface-light text-primary flex items-center justify-center mb-8 shadow-sm group-hover:bg-accent transition-all">
                    {solution.icon}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-8 italic leading-tight">{solution.title}</h2>
                  <p className="text-lg text-foreground-muted mb-10 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                    {solution.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                        <span className="font-bold text-primary text-sm uppercase tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={solution.href} 
                    className="btn-primary bg-primary text-white group"
                  >
                    Technical Specifications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex-1 w-full relative">
                   <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
                      <Image src={solution.image} alt={solution.title} fill className="object-cover hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                   </div>
                   {/* Floating Detail */}
                   <div className="absolute -bottom-6 -right-6 lg:-right-12 glass p-6 rounded-3xl border border-white/20 shadow-xl hidden md:block max-w-[240px]">
                      <div className="flex items-center gap-4 mb-3">
                         <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-black italic">!</div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">BEYR Standards</span>
                      </div>
                      <p className="text-xs font-bold text-primary leading-relaxed italic">
                         "Every {solution.title.split(' ')[0]} unit is 24/7 remotely monitored via our GCC operations center."
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions CTA */}
      <section className="section-padding bg-surface-light">
        <div className="container">
          <div className="bg-primary-dark rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-5"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-white mb-8 font-black leading-tight">Need a custom <span className="text-accent italic">energy configuration?</span></h2>
                <p className="text-white/60 text-lg mb-12 leading-relaxed">
                   Our engineering team specializes in hybrid systems and can design a rental solution 
                   specifically for your project's unique power profile.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                   <Link href="/contact" className="btn-primary">
                      Consult an Engineer
                   </Link>
                   <Link href="/projects" className="btn-secondary">
                      View Recent Projects
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
