"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe, ArrowUpRight, Facebook, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] w-full">
        {/* Top Bar - Hidden on Mobile */}
        <div className={`hidden lg:block transition-all duration-300 bg-primary border-b border-white/10 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-12 opacity-100"}`}>
          <div className="container h-full flex items-center justify-between text-[13px] text-white/70 font-medium">
            <div className="flex items-center gap-6">
              <a href="mailto:info@beyrenergy.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={14} className="text-accent" /> info@beyrenergy.com
              </a>
              <span className="flex items-center gap-2">
                <Globe size={14} className="text-accent" /> Dubai, UAE
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                <a href="#" className="hover:text-accent transition-colors"><Linkedin size={14} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Facebook size={14} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Instagram size={14} /></a>
              </div>
              <a href="tel:+971500000000" className="flex items-center gap-2 text-white hover:text-accent transition-colors">
                <Phone size={14} className="text-accent" /> +971 50 000 0000
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav 
          className={`transition-all duration-500 flex items-center ${
            scrolled 
              ? "glass-dark border-b border-white/5 py-2 lg:py-3 shadow-2xl" 
              : "bg-transparent py-6 lg:py-10"
          }`}
        >
          <div className="container flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <div className="absolute inset-0 bg-accent rounded-xl transform rotate-6 scale-90 opacity-20 group-hover:rotate-12 transition-transform"></div>
                <div className="relative w-full h-full bg-accent text-primary rounded-xl flex items-center justify-center font-black text-xl lg:text-2xl shadow-lg border border-white/10">
                  B
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl lg:text-2xl tracking-tighter leading-none text-white">
                  BEYR<span className="text-accent">ENERGY</span>
                </span>
                <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">Beyond Rental</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="px-5 py-2 text-[15px] font-bold text-white hover:text-accent transition-all relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-500"></span>
                </Link>
              ))}
              
              <Link 
                href="/contact" 
                className="ml-6 flex items-center gap-3 bg-accent text-primary px-7 py-3 rounded-full font-black text-[13px] uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all active:scale-95 group"
              >
                Get Quote <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white active:scale-90 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-0.5 bg-white transition-all ${isOpen ? "top-2 rotate-45" : "top-0"}`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white top-2 transition-all ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white transition-all ${isOpen ? "top-2 -rotate-45" : "top-4"}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[110] bg-primary/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[120] w-[85%] max-w-sm bg-primary border-l border-white/10 lg:hidden flex flex-col pt-32 pb-10 px-8"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-3xl font-black text-white hover:text-accent transition-colors block border-b border-white/5 pb-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-auto pt-10 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest">Connect With Us</span>
                  <a href="tel:+971500000000" className="text-xl font-bold text-white">+971 50 000 0000</a>
                </div>
                <Link 
                  href="/contact" 
                  className="bg-accent text-primary py-5 rounded-2xl font-black text-center text-lg uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
