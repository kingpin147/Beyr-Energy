"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const solutions = [
  { name: "Battery Energy Storage (BESS)", href: "/solutions/bess" },
  { name: "Solar Hybrid Rental", href: "/solutions/solar-hybrid" },
  { name: "Temporary Power Solutions", href: "/solutions/temporary-power" },
  { name: "Peak Shaving Systems", href: "/solutions/peak-shaving" },
  { name: "Emergency Backup Power", href: "/solutions/emergency-backup" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions", children: solutions },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-navy-950/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/5"
        : "bg-transparent"
        }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-auto flex items-center">
              <img
                src="/BEYR Energy Logo.png"
                alt="BEYR Energy Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative group">
                  <button
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-energy transition-colors duration-200"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Dropdown */}
                  <div
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-navy-900/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-200 ${solutionsOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    <div className="p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-energy hover:bg-white/5 transition-all duration-150"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-energy/50 flex-shrink-0" />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "text-energy" : ""}`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971559514603"
              className="text-sm font-medium text-gray-300 hover:text-energy transition-colors duration-200"
            >
              +971 55 951 4603
            </a>
            <Link href="/contact" className="btn-primary">
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-energy transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-navy-900 border-l border-white/10 p-8 shadow-2xl transition-transform duration-300 transform ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <span className="font-display font-black text-white text-xl">MENU</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-400 hover:text-energy">
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-200 border-b border-white/5"
                    >
                      {link.name}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSolutionsOpen && (
                      <div className="flex flex-col pl-4 py-2 gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="py-3 text-sm text-gray-400 hover:text-energy transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-4 text-lg font-medium border-b border-white/5 transition-colors ${pathname === link.href ? "text-energy" : "text-gray-200 hover:text-energy"
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-auto pt-10 flex flex-col gap-4">
              <a href="tel:+971559514603" className="btn-secondary w-full justify-center py-4">
                Call Now
              </a>
              <Link href="/contact" className="btn-primary w-full justify-center py-4" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
