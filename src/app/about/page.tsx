"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Years Experience", value: "25+" },
  { label: "Global Projects", value: "100+" },
  { label: "Expert Engineers", value: "40+" },
  { label: "MW Managed", value: "80+" },
];

const values = [
  {
    title: "Engineering Excellence",
    description: "We don't just rent; we engineer. Every solution is backed by deep technical expertise.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Safety First",
    description: "Zero-compromise approach to safety protocols and equipment reliability.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Sustainable Future",
    description: "Pioneering the transition to clean, hybrid energy systems across the GCC.",
    icon: <Globe className="w-8 h-8" />
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="relative pt-64 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bess.png" alt="About Hero" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark"></div>
        </div>
        <div className="container relative z-10 text-center">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-xs font-black uppercase tracking-widest mb-6"
           >
              Established 1998
           </motion.div>
           <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-8"
           >
              Beyond Rental. <span className="text-accent italic">Beyond Limits.</span>
           </motion.h1>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed"
           >
              Leading the GCC in premium alternative energy rental solutions with 
              an engineering-first approach to complex power challenges.
           </motion.p>
        </div>
      </section>

      {/* Core Mission/Vision */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <Image src="/hero-bess.png" alt="Mission" fill className="object-cover" />
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent rounded-[3rem] flex flex-col items-center justify-center p-8 shadow-2xl border-8 border-white hidden md:flex">
                  <Users size={48} className="text-primary mb-4" />
                  <span className="text-primary font-black text-center leading-tight uppercase tracking-tighter text-xl">Driven by Expert Engineers</span>
               </div>
            </div>

            <div className="flex flex-col">
               <h2 className="mb-12 font-black leading-tight">We are redefining the <span className="text-accent">energy landscape</span> in the GCC.</h2>
               
               <div className="flex flex-col gap-10 mb-12">
                  <div className="flex gap-6 group">
                     <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface-light text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <Target size={32} />
                     </div>
                     <div>
                        <h4 className="text-2xl font-black mb-3 italic">Our Mission</h4>
                        <p className="text-foreground-muted">To provide seamless, reliable, and sustainable energy solutions that empower industrial growth while minimizing environmental impact.</p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface-light text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <Eye size={32} />
                     </div>
                     <div>
                        <h4 className="text-2xl font-black mb-3 italic">Our Vision</h4>
                        <p className="text-foreground-muted">To be the primary GCC partner for innovative hybrid power rentals, leading the transition toward a zero-emission industrial future.</p>
                     </div>
                  </div>
               </div>

               <Link href="/contact" className="btn-primary w-fit translate-y-0">
                  Partner With Us <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Impact */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl lg:text-7xl font-black text-accent mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {s.value}
                </div>
                <div className="text-white/50 font-bold uppercase tracking-[0.2em] text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding">
         <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <div className="text-accent font-black uppercase tracking-[0.3em] text-[13px] mb-4">Our DNA</div>
               <h2 className="font-black">The values that power <br /><span className="text-accent italic underline">Every project.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {values.map((v, i) => (
                 <div key={i} className="p-10 rounded-[3rem] bg-surface-light border border-border hover:bg-white hover:shadow-premium transition-all flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-3xl bg-white text-primary flex items-center justify-center mb-8 shadow-sm group-hover:bg-accent group-hover:scale-110 transition-all">
                       {v.icon}
                    </div>
                    <h4 className="text-2xl font-black mb-6 italic">{v.title}</h4>
                    <p className="text-foreground-muted leading-relaxed">{v.description}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
