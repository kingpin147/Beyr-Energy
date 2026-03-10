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
    <section ref={ref} className="py-16 md:py-20 bg-gray-50 relative overflow-hidden px-4 sm:px-0">
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

          <div className="relative z-10 px-10 py-24 sm:px-24 sm:py-32 md:px-32 text-center">
            <div className="section-label justify-center mb-6">
              <span className="w-8 h-px bg-energy" />
              Ready to Power Your Project?
              <span className="w-8 h-px bg-energy" />
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Request Your{" "}
              <span className="text-gradient-green">Free Energy Consultation</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed px-4">
              Tell us your energy requirements and we'll design a custom rental solution with deployment in as little as 48 hours.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-primary text-sm py-3.5 px-8 shadow-green-glow w-full sm:w-auto justify-center"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+971000000000"
                className="btn-secondary text-sm py-3.5 px-8 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
              <a
                href="https://wa.me/971000000000?text=Hi%2C%20I%27m%20interested%20in%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-[#25D366] text-[#25D366] font-bold text-sm uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Trust note */}
            <div className="flex justify-center">
              <p className="text-gray-500 max-w-sm leading-relaxed text-xs sm:text-base opacity-80">
                Our energy rental solutions are trusted across 6 major industries throughout the UAE & GCC region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
