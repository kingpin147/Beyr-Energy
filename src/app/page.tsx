"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Battery, 
  Sun, 
  Zap, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Play,
  Users
} from "lucide-react";

const stats = [
  { label: "Energy Experts", value: "25+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Projects Deployed", value: "500+" },
  { label: "MW Capacity", value: "50+" },
];

const solutions = [
  {
    title: "Battery Storage (BESS)",
    description: "High-capacity modular battery systems for peak shaving, grid support, and renewable integration.",
    icon: <Battery className="w-8 h-8" />,
    href: "/solutions/bess",
    tag: "Most Popular"
  },
  {
    title: "Solar Hybrid Systems",
    description: "Integrated solar + storage solutions to reduce fuel consumption and carbon footprint drastically.",
    icon: <Sun className="w-8 h-8" />,
    href: "/solutions/solar-hybrid",
    tag: "Sustainable"
  },
  {
    title: "Temporary Power",
    description: "Reliable generator rentals and distribution for construction sites and emergency needs.",
    icon: <Zap className="w-8 h-8" />,
    href: "/solutions/temporary-power",
    tag: "High Demand"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-48 lg:pt-64 overflow-hidden bg-primary-dark">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bess.png" 
            alt="Industrial Energy System" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="container relative z-10 pt-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[13px]">Beyond Rental Energy Services</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-8 leading-[1.05]"
            >
              Expert <span className="text-accent italic">Energy</span> <br />
              Services since <span className="text-white underline decoration-accent/30">1998</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
            >
              We believe in sustainable energy practices that help top-notch 
              industrial sites achieve zero-emission goals without compromising reliability.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link href="/contact" className="btn-primary group shadow-[0_20px_40px_rgba(57,255,20,0.2)]">
                Discover BEYR <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-4 text-white group">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Play size={20} fill="currentColor" />
                </div>
                <span className="font-black uppercase tracking-widest text-sm">Watch Video</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Mini-Card (Industrial Detail) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-[5%] bottom-[15%] hidden xl:block w-72 glass-dark p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-6">
            <ShieldCheck size={28} />
          </div>
          <h4 className="text-white text-xl font-black mb-3 italic">Certified Safe</h4>
          <p className="text-white/50 text-sm leading-relaxed">
            All equipment undergoes 48-hour stress testing before mobilization to site.
          </p>
        </motion.div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="relative z-20 -mt-32 mb-12">
        <div className="container">
          <div className="bg-white rounded-[2rem] lg:rounded-[4rem] p-10 lg:p-20 shadow-premium border border-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-x-0 lg:divide-x divide-border">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center px-4">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-primary font-black text-5xl lg:text-7xl mb-3 tracking-tighter"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-foreground-muted font-black text-[11px] lg:text-xs uppercase tracking-[0.2em] text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT PREVIEW (MODERN MOSAIC) --- */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Mosaic Images */}
            <div className="relative flex-1 w-full max-w-[600px] h-[500px] lg:h-[700px]">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-[65%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white"
              >
                <Image src="/hero-bess.png" alt="Industrial 1" fill className="object-cover" />
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, y: 30 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="absolute bottom-0 right-0 w-[60%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl z-0"
              >
                <Image src="/hero-bess.png" alt="Industrial 2" fill className="object-cover" />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                 <div className="w-32 h-32 lg:w-44 lg:h-44 bg-accent rounded-full flex flex-col items-center justify-center p-4 shadow-2xl border-[10px] border-white ring-1 ring-black/5">
                    <div className="text-primary text-center leading-none">
                       <div className="font-black text-3xl lg:text-5xl">25</div>
                       <div className="text-[9px] lg:text-[11px] uppercase font-black tracking-widest mt-1 lg:mt-2">Years of trust</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-accent"></div>
                <span className="text-accent text-[11px] font-black uppercase tracking-[0.3em]">Corporate Profile</span>
              </div>
              <h2 className="mb-8 font-black leading-tight max-w-xl">
                BEYR Energy believes in <span className="text-accent italic underline decoration-accent/30 underline-offset-8">sustainable</span> energy practices
              </h2>
              <p className="text-lg mb-10 text-foreground-muted leading-relaxed max-w-2xl">
                We're finding ways to bring energy to more people in more ways every day, 
                so that all of us can be part of the changing energy system. Because 
                Powering Progress means providing more & cleaner energy across the GCC.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {[
                  "Lower Energy Costs",
                  "Environmentally Friendly",
                  "Increase Site Value",
                  "Energy Independence"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                      <CheckCircle2 size={16} strokeWidth={3} />
                    </div>
                    <span className="font-black text-primary text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary group">
                Full Company Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="section-padding bg-surface-light relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[1px] bg-accent"></div>
                <span className="text-accent font-black uppercase tracking-[0.3em] text-[11px]">Core Solutions</span>
              </div>
              <h2 className="font-black">Complete energy solution with <br/><span className="text-accent italic">premium</span> support</h2>
            </div>
            <Link href="/solutions" className="group flex items-center gap-4 text-primary font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-accent/20 pb-2 hover:border-accent transition-all">
               View All Tech <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid-responsive">
            {solutions.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-10 rounded-[3rem] border border-border hover:shadow-premium transition-all relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-8 right-8 text-[10px] font-black uppercase tracking-widest text-accent-muted bg-accent-soft px-3 py-1 rounded-full">
                   {s.tag}
                </div>
                <div className="w-20 h-20 rounded-3xl bg-surface-light text-primary flex items-center justify-center mb-10 group-hover:bg-accent transition-colors shadow-sm">
                   {s.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 italic leading-tight group-hover:text-accent-muted transition-colors">{s.title}</h3>
                <p className="text-foreground-muted mb-10 flex-grow leading-relaxed">{s.description}</p>
                <Link href={s.href} className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                   <ArrowUpRight size={24} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SECTION --- */}
      <section className="section-padding overflow-hidden bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-accent font-black uppercase tracking-[0.3em] text-[11px] mb-4">Sectors We Serve</div>
            <h2 className="font-black">Powering the GCC's <br/><span className="text-accent italic underline decoration-accent/30 underline-offset-8">Critical Infrastructure</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { label: "Oil & Gas", icon: <Zap /> },
              { label: "Construction", icon: <TrendingUp /> },
              { label: "Events", icon: <Users /> },
              { label: "Mining", icon: <Zap /> },
              { label: "Logistics", icon: <Zap /> },
              { label: "Healthcare", icon: <ShieldCheck /> }
            ].map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-[2.5rem] bg-surface-light border border-border flex flex-col items-center text-center hover:bg-primary hover:border-primary transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent transition-colors">
                  {industry.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors">
                  {industry.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="section-padding">
        <div className="container">
          <div className="relative rounded-[4rem] premium-gradient p-12 lg:p-24 overflow-hidden shadow-2xl">
            {/* Background SVG Decoration */}
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
              <h2 className="text-white mb-10 font-black">
                Powering <span className="text-accent">Progress</span> Through Precision Engineering
              </h2>
              <p className="text-white/60 text-xl mb-14 leading-relaxed italic">
                "We don't just rent equipment; we partner with you to solve complex power challenges 
                with precision and premium industrial grade technology."
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <Link href="/contact" className="btn-primary">
                    Get Started Now
                 </Link>
                 <a href="tel:+971500000000" className="btn-secondary">
                    Consult an Engineer
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
