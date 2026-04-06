"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTABanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-24 bg-gray-50 relative overflow-hidden px-4 sm:px-0">
      {/* Decorative */}
      <div className="absolute inset-0 bg-dark-grid opacity-30" />

      <div className="container-wide relative z-10">
        <div
          className={`relative bg-hero-gradient rounded-3xl sm:rounded-4xl overflow-hidden transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          {/* Inner glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-energy/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-dark-grid" />

          {/* Green top bar */}
          <div className="h-1 bg-gradient-to-r from-transparent via-energy to-transparent" />

          <div className="relative z-10 px-6 py-16 md:px-24 md:py-32 lg:px-40 text-center space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="section-label justify-center">
                <span className="w-8 h-px bg-energy" />
                Ready to Power Your Project?
                <span className="w-8 h-px bg-energy" />
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] uppercase tracking-tighter">
                Request Your <br />
                <span className="text-gradient-green">Free Energy Consultation</span>
              </h2>
            </div>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Tell us your energy requirements and we'll design a custom rental solution with deployment in as little as 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/contact"
                className="btn-primary group px-10 h-14 flex items-center justify-center font-black uppercase tracking-tight shadow-green-glow w-full sm:w-auto"
              >
                GET A QUOTE
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+971559514603"
                className="btn-secondary px-8 py-4 sm:py-5 text-base sm:text-lg w-full sm:w-auto justify-center group/btn"
              >
                <Phone className="w-5 h-5 mr-3 text-energy group-hover/btn:rotate-12 transition-transform" />
                +971 55 951 4603
              </a>
              <a
                href="https://wa.me/971559514603?text=Hi%2C%20I%27m%20interested%20in%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 h-14 rounded-lg border-2 border-[#25D366] text-[#25D366] font-black text-sm uppercase tracking-tight hover:bg-[#25D366] hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
