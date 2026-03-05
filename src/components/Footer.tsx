"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white overflow-hidden pt-24 pb-12 relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Company Bio */}
          <div className="lg:col-span-4 flex flex-col items-start gap-8">
            <Link href="/" className="flex flex-col items-start group">
                <span className="font-black text-3xl tracking-tighter leading-none">
                  BEYR<span className="text-accent">ENERGY</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold mt-1">Beyond Rental</span>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Premium alternative energy equipment rental partner in the GCC. 
              Engineering-led solutions for industrial power challenges.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all group">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-black mb-8 border-b border-accent/20 pb-4 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['About BEYR', 'Our Solutions', 'Industries', 'Recent Projects', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-accent font-bold flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-black mb-8 border-b border-accent/20 pb-4 inline-block">Top Solutions</h4>
            <ul className="flex flex-col gap-4">
              {['BESS Rental', 'Solar Hybrid Systems', 'Temporary Power', 'Peak Shaving', 'Emergency Backup'].map((item) => (
                <li key={item}>
                  <Link href="/solutions" className="text-white/60 hover:text-accent font-bold flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-black mb-8 border-b border-accent/20 pb-4 inline-block">Direct Contact</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-white/50 uppercase tracking-widest">Office Location</span>
                  <p className="font-bold text-white group-hover:text-accent transition-colors">Dubai Industrial City, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-white/50 uppercase tracking-widest">Call Expert</span>
                  <a href="tel:+971500000000" className="font-bold text-lg text-white group-hover:text-accent transition-colors">+971 50 000 0000</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-white/50 uppercase tracking-widest">Email Inquiry</span>
                  <a href="mailto:info@beyrenergy.com" className="font-bold text-lg text-white group-hover:text-accent transition-colors">info@beyrenergy.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] font-bold uppercase tracking-widest text-white/40">
          <p>© {currentYear} BEYR ENERGY LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Live Status
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
