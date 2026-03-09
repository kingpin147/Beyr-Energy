"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Battery, Sun, Zap, TrendingDown, AlertTriangle, Wifi, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Battery,
    title: "Battery Energy Storage (BESS)",
    desc: "Industrial-scale containerised BESS units for peak shaving, backup power, and grid stabilisation.",
    href: "/solutions/bess",
    tag: "Most Popular",
  },
  {
    icon: Sun,
    title: "Solar Hybrid Rental",
    desc: "Integrated diesel-solar-battery hybrid systems for off-grid and remote site applications.",
    href: "/solutions/solar-hybrid",
    tag: null,
  },
  {
    icon: Zap,
    title: "Temporary Power Solutions",
    desc: "Fast-deploy temporary power infrastructure for construction, events, and industrial projects.",
    href: "/solutions/temporary-power",
    tag: null,
  },
  {
    icon: TrendingDown,
    title: "Peak Shaving Systems",
    desc: "Intelligent BESS-driven peak demand management to reduce energy bills and utility charges.",
    href: "/solutions/peak-shaving",
    tag: null,
  },
  {
    icon: AlertTriangle,
    title: "Emergency Backup Power",
    desc: "Rapid-response backup power deployment for critical operations with 24/7 monitoring.",
    href: "/solutions/emergency-backup",
    tag: "Critical",
  },
  {
    icon: Wifi,
    title: "Off-Grid & Remote Sites",
    desc: "Fully autonomous microgrid solutions for remote locations with zero grid access.",
    href: "/solutions",
    tag: null,
  },
];

export default function SolutionsSection() {
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
    <section ref={ref} className="py-24 lg:py-32 bg-gray-50">
      <div className="container-wide">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-energy" />
            Our Core Solutions
            <span className="w-8 h-px bg-energy" />
          </div>
          <h2 className="section-title max-w-2xl mx-auto mb-4">
            Complete Energy Rental{" "}
            <span className="text-gradient-green">Ecosystem</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From BESS to solar hybrid, every solution is modular, scalable, and ready to deploy within 48 hours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <Link
              key={sol.title}
              href={sol.href}
              className={`solution-card group cursor-pointer relative overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-energy to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag */}
              {sol.tag && (
                <div className="absolute top-5 right-5">
                  <span className="tag-badge">{sol.tag}</span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-energy/10 border border-energy/20 flex items-center justify-center mb-6 group-hover:bg-energy/20 group-hover:scale-110 transition-all duration-300">
                <sol.icon className="w-7 h-7 text-energy" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-navy-900 text-lg mb-3 group-hover:text-energy transition-colors duration-200">
                {sol.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{sol.desc}</p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-energy text-sm font-semibold">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>

        {/* All Solutions link */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="/solutions" className="btn-outline-green">
            View All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
