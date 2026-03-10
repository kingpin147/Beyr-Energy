"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Layers, BarChart3, Headphones, DollarSign, CheckCircle2 } from "lucide-react";

const usps = [
  {
    icon: Clock,
    title: "Fast 48h Deployment",
    desc: "From inquiry to on-site operation in as little as 48 hours — minimizing downtime for your project.",
    stat: "48h",
    statLabel: "Avg. Deployment",
  },
  {
    icon: Layers,
    title: "Modular Systems",
    desc: "Every solution is containerised and modular — scale up or down instantly without infrastructure changes.",
    stat: "100%",
    statLabel: "Modular Design",
  },
  {
    icon: BarChart3,
    title: "Scalable Capacity",
    desc: "From 50 kWh to multi-MW scale — our rental fleet grows with your energy demands.",
    stat: "Multi-MW",
    statLabel: "Max Capacity",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    desc: "Round-the-clock monitoring, troubleshooting, and on-site technical support across the GCC.",
    stat: "24/7",
    statLabel: "Live Monitoring",
  },
  {
    icon: DollarSign,
    title: "Cost Optimised",
    desc: "Avoid heavy capex. Rental models give you full flexibility with predictable operational costs.",
    stat: "0",
    statLabel: "Capital Expenditure",
  },
  {
    icon: CheckCircle2,
    title: "Certified & Compliant",
    desc: "All equipment meets IEC, CE, and UAE DEWA-compliant standards. Full insurance provided.",
    stat: "IEC",
    statLabel: "Certified Equipment",
  },
];

export default function WhyBeyond() {
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
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-hero-gradient relative overflow-hidden px-4 sm:px-0">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-grid" />
      <div className="glow-dot w-[500px] h-[500px] bg-energy top-[-100px] right-[-150px] opacity-10" />
      <div className="glow-dot w-[300px] h-[300px] bg-blue-500 bottom-0 left-0 opacity-10" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-energy" />
            Why Beyond Rental
            <span className="w-8 h-px bg-energy" />
          </div>
          <h2 className="section-title-white max-w-2xl mx-auto mb-4">
            Built for{" "}
            <span className="text-gradient-green">Industrial Reliability</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            When energy reliability is mission-critical, clients across the GCC choose BEYR Energy. Here's why.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className={`glass-card group relative transition-all duration-700 p-6 sm:p-8 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              {/* Icon + Stat */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-energy/10 border border-energy/20 flex items-center justify-center group-hover:bg-energy/25 transition-colors duration-300">
                  <usp.icon className="w-6 h-6 text-energy" />
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-display font-black text-energy">{usp.stat}</div>
                  <div className="text-gray-500 text-[10px] sm:text-xs font-medium">{usp.statLabel}</div>
                </div>
              </div>

              <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2 group-hover:text-energy transition-colors duration-200">
                {usp.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
