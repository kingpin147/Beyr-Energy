"use client";

import { motion, Variants } from "framer-motion";
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as const,
  },
};

export default function SolutionsSection() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 overflow-hidden px-4 sm:px-0">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-green-500/30" />
            Our Core Solutions
            <span className="w-8 h-px bg-green-500/30" />
          </div>
          <h2 className="section-title max-w-2xl mx-auto">
            Complete Energy Rental <br />
            <span className="text-gradient-green uppercase">Ecosystem</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-sm md:text-base px-2 mt-4 md:mt-6">
            From BESS to solar hybrid, every solution is modular, scalable, and ready to deploy within 48 hours.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {solutions.map((sol) => (
            <motion.div key={sol.title} variants={itemVariants}>
              <Link
                href={sol.href}
                className="solution-card group cursor-pointer relative block overflow-hidden transition-all duration-300 p-6 md:p-10"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag */}
                {sol.tag && (
                  <div className="absolute top-6 right-6">
                    <span className="tag-badge text-[10px] bg-green-500/5 text-green-600/80 border-green-500/20">{sol.tag}</span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-500/5 border border-green-500/10 flex items-center justify-center mb-8 group-hover:bg-green-500/10 group-hover:scale-110 transition-all duration-300">
                  <sol.icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-600/60" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-navy-900 text-lg sm:text-xl mb-4 group-hover:text-green-600 transition-colors duration-200">
                  {sol.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-8">{sol.desc}</p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-green-600/70 text-xs sm:text-sm font-semibold mt-auto group-hover:text-green-600">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* All Solutions link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/solutions" className="btn-outline-green">
            View All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
