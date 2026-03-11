"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HardHat, Flame, Factory, Star, Plug, Building2, ArrowRight } from "lucide-react";

const industries = [
  { icon: HardHat, name: "Construction", desc: "Temporary site power, BESS backup for heavy machinery and critical systems during project phases.", bg: "from-amber-500/10 to-orange-500/10", href: "/industries#construction" },
  { icon: Flame, name: "Oil & Gas", desc: "Reliable off-grid power for remote drilling sites, pipelines, and processing facilities.", bg: "from-red-500/10 to-orange-600/10", href: "/industries#oil-gas" },
  { icon: Factory, name: "Manufacturing", desc: "Peak demand management and backup power to protect production lines and reduce energy costs.", bg: "from-blue-500/10 to-indigo-500/10", href: "/industries#manufacturing" },
  { icon: Star, name: "Events & Exhibitions", desc: "Silent, emission-free battery power for concerts, sporting events, exhibitions and outdoor festivals.", bg: "from-purple-500/10 to-pink-500/10", href: "/industries#events" },
  { icon: Plug, name: "Utilities", desc: "Grid stabilisation, peak shaving, and frequency regulation for utility-scale applications.", bg: "from-teal-500/10 to-cyan-500/10", href: "/industries#utilities" },
  { icon: Building2, name: "Infrastructure", desc: "Resilient backup power for airports, hospitals, data centres, and critical urban infrastructure.", bg: "from-green-500/10 to-emerald-500/10", href: "/industries#infrastructure" },
];

export default function IndustriesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-24 bg-white px-4 sm:px-0">
      <div className="container-wide">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-xl space-y-2 md:space-y-4">
            <div className="section-label">
              <span className="w-8 h-px bg-energy" />
              Industries We Serve
            </div>
            <h2 className="section-title">
              Powering Every <br />
              <span className="text-gradient-green uppercase">Critical Sector</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed lg:text-right text-sm md:text-base px-2">
            Our energy rental solutions are trusted across 6 major industries throughout the UAE & GCC region.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {industries.map((ind, i) => (
            <Link
              key={ind.name}
              href={ind.href}
              className={`group relative p-6 md:p-10 rounded-2xl border border-gray-100 bg-white overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${100 + i * 80}ms`, transitionDuration: "600ms" }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${ind.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:border-energy/20 group-hover:shadow-[0_4px_16px_rgba(0,200,81,0.15)] transition-all duration-300">
                <ind.icon className="w-7 h-7 text-navy-800 group-hover:text-energy transition-colors duration-200" />
              </div>

              <h3 className="relative z-10 font-display font-bold text-navy-900 text-lg sm:text-xl mb-3.5 group-hover:text-energy transition-colors duration-200">
                {ind.name}
              </h3>
              <p className="relative z-10 text-gray-500 text-xs sm:text-sm leading-relaxed mb-5">
                {ind.desc}
              </p>
              <div className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-energy opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          <Link href="/industries" className="btn-outline-green w-full sm:w-auto justify-center">
            View All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
