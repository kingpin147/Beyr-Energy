"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, ChevronDown, Battery, Zap, Sun } from "lucide-react";

const stats = [
  { value: "500+", label: "MW Deployed" },
  { value: "15+", label: "GCC Countries" },
  { value: "24/7", label: "Technical Support" },
  { value: "48h", label: "Avg. Deployment" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-100" />

      {/* Ambient Glows */}
      <div className="glow-dot w-[600px] h-[600px] bg-energy top-[-150px] left-[-200px]" />
      <div className="glow-dot w-[400px] h-[400px] bg-energy bottom-[-100px] right-[-100px] opacity-10" />
      <div className="glow-dot w-[300px] h-[300px] bg-blue-500 top-[40%] right-[20%] opacity-10" />

      {/* Animated energy lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-energy/30 to-transparent"
            style={{
              top: `${15 + i * 14}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.5}s`,
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.5s ease ${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 right-8 lg:right-24 hidden md:flex flex-col gap-6">
        {[Battery, Sun, Zap].map((Icon, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center"
            style={{
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <Icon className="w-6 h-6 text-energy" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-energy/10 border border-energy/30 mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-energy animate-pulse" />
            <span className="text-energy text-xs font-semibold uppercase tracking-[0.2em]">
              Dubai's Leading Energy Rental Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.02] mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Reliable Energy.
            <br />
            <span className="text-gradient-green">When You Need It.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Beyond Rental delivers industrial-grade <strong className="text-white">BESS, Solar Hybrid, Temporary Power</strong> & alternative energy solutions across the UAE & GCC — deployed in 48 hours.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/contact" className="btn-primary text-sm py-4 px-8 shadow-green-glow">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+971000000000"
              className="btn-secondary text-sm py-4 px-8 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Stats Row */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, i) => (
              <div key={i} className="relative">
                <div className="text-3xl lg:text-4xl font-display font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} />
    </section>
  );
}
