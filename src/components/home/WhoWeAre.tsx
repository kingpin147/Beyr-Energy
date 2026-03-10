"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Globe, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Industrial Grade",
    desc: "Only premium, certified equipment from globally trusted manufacturers.",
  },
  {
    icon: Globe,
    title: "GCC Coverage",
    desc: "UAE, Saudi Arabia, Qatar, Kuwait, Oman & Bahrain — all covered.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    desc: "Reduce emissions with our clean energy storage and hybrid solutions.",
  },
];

export default function WhoWeAre() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden px-4 sm:px-0">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="section-label">
              <span className="w-8 h-px bg-energy" />
              Who We Are
            </div>
            <h2 className="section-title mb-8">
              The GCC's Premier{" "}
              <span className="text-gradient-green">Alternative Energy</span>{" "}
              Rental Partner
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Beyond Rental of Alternative Energy Equipment LLC (BEYR Energy) is a Dubai-based company specializing in the rental of industrial-grade Battery Energy Storage Systems, solar hybrid units, and temporary power solutions.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-12 max-w-2xl">
              We serve construction sites, oil & gas facilities, industrial plants, major events, and utilities across the UAE and wider GCC region — delivering reliable, scalable, and cost-effective energy solutions wherever and whenever you need them.
            </p>
            <Link href="/about" className="btn-outline-green w-full sm:w-auto justify-center">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-4 sm:space-y-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-green-500/20 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,200,81,0.08)] transition-all duration-300 group ${visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
                  }`}
                style={{ transitionDelay: `${150 + i * 100}ms`, transitionDuration: "600ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-energy/10 border border-energy/20 flex items-center justify-center flex-shrink-0 group-hover:bg-energy/20 transition-colors">
                  <p.icon className="w-6 h-6 text-energy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 text-base mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
