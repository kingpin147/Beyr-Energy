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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-energy flex items-center justify-center shadow-green-glow group-hover:shadow-green-glow-lg transition-all duration-300">
              <Zap className="w-6 h-6 text-navy-950 fill-navy-950" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-white text-lg tracking-tight">BEYR</span>
              <span className="font-display font-black text-energy text-lg tracking-tight leading-none">ENERGY</span>
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
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-navy-900/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-200 ${
                      solutionsOpen
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
              href="tel:+971000000000"
              className="text-sm font-medium text-gray-300 hover:text-energy transition-colors duration-200"
            >
              +971 00 000 0000
            </a>
            <Link href="/contact" className="btn-primary text-xs py-3 px-6">
              Get a Quote
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-950/98 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-300 hover:text-energy hover:bg-white/5 transition-all"
                >
                  <span className="font-medium">{link.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-400 hover:text-energy hover:bg-white/5 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-energy/50" />
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
                className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
                  pathname === link.href
                    ? "text-energy bg-energy/10"
                    : "text-gray-300 hover:text-energy hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a href="tel:+971000000000" className="btn-secondary text-center text-xs py-3">
              Call Now
            </a>
            <Link href="/contact" className="btn-primary text-center text-xs py-3">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
