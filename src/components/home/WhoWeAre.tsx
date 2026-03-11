"use client";

import { motion, Variants } from "framer-motion";
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

const pillarVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

export default function WhoWeAre() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden px-4 sm:px-0">
      <div className="container-wide">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left: Content */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            <div>
              <div className="section-label group">
                <span className="w-8 h-px bg-green-500/40 group-hover:w-12 transition-all duration-300" />
                Who We Are
              </div>
              <h2 className="section-title">
                The GCC's Premier <br />
                <span className="text-gradient-green uppercase">Alternative Energy</span> Rental Partner
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
                Beyond Rental of Alternative Energy Equipment LLC (BEYR Energy) is a Dubai-based company specializing in the rental of industrial-grade Battery Energy Storage Systems, solar hybrid units, and temporary power solutions.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
                We serve construction sites, oil & gas facilities, industrial plants, major events, and utilities across the UAE and wider GCC region — delivering reliable, scalable, and cost-effective energy solutions wherever and whenever you need them.
              </p>
            </div>
            <Link href="/about" className="btn-outline-green w-full sm:w-auto justify-center group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Pillars */}
          <div className="space-y-6 sm:space-y-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={pillarVariants}
                className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-green-500/20 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,200,81,0.08)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/5 border border-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 transition-colors">
                  <p.icon className="w-6 h-6 text-green-600/70" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 text-base mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
