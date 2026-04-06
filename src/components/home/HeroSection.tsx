"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, ChevronDown, Battery, Zap, Sun } from "lucide-react";

const stats = [
  { value: "500+", label: "MW Deployed" },
  { value: "15+", label: "GCC Countries" },
  { value: "24/7", label: "Technical Support" },
  { value: "48h", label: "Avg. Deployment" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-hero-gradient mb-12 md:mb-16 lg:mb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-30" />

      {/* Ambient Glows - Toned down */}
      <div className="glow-dot w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-green-500/10 top-[-100px] left-[-150px]" />
      <div className="glow-dot w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-green-500/5 bottom-[-50px] right-[-50px]" />
      <div className="glow-dot w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[150px] bg-blue-500/5 top-[40%] right-[20%]" />

      {/* Animated energy lines - Subtler */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "100%" }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent"
            style={{ top: `${15 + i * 14}%` }}
          />
        ))}
      </div>

      {/* Floating Icons - Subtle interaction */}
      <div className="absolute top-1/4 right-4 sm:right-8 md:right-12 lg:right-24 hidden sm:flex flex-col gap-4 sm:gap-6">
        {[Battery, Sun, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400/60" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container-wide relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl sm:max-w-4xl px-4 sm:px-6 lg:px-0">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:gap-2.5 sm:px-4 sm:py-2 rounded-full bg-green-500/5 border border-green-500/20 mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-500/80 text-[9px] xs:text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
              Dubai's Leading Energy Rental Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] xs:leading-[1.15] sm:leading-[1.02] mb-8 sm:mb-10"
          >
            Reliable Energy.
            <br />
            <span className="text-gradient-green">When You Need It.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl sm:max-w-2xl mb-10 sm:mb-12"
          >
            Beyond Rental delivers industrial-grade <strong className="text-white">BESS, Solar Hybrid, Temporary Power</strong> & alternative energy solutions across the UAE & GCC — deployed in 48 hours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-24 sm:mb-32"
          >
            <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:+971559514603"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="relative px-2 sm:px-0">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
                {i % 2 === 0 && (
                  <div className="block md:hidden absolute right-0 top-1/2 -translate-y-1/2 h-6 sm:h-8 w-px bg-white/10" />
                )}
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 sm:h-10 w-px bg-white/10" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-gray-500"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" />
      </motion.div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)" }} />
    </section>
  );
}