import Link from "next/link";
import { Zap, MapPin, Mail, Phone, ChevronRight, Linkedin, Twitter, Instagram } from "lucide-react";

const solutions = [
  { name: "BESS Rental", href: "/solutions/bess" },
  { name: "Solar Hybrid Rental", href: "/solutions/solar-hybrid" },
  { name: "Temporary Power Solutions", href: "/solutions/temporary-power" },
  { name: "Peak Shaving Systems", href: "/solutions/peak-shaving" },
  { name: "Emergency Backup Power", href: "/solutions/emergency-backup" },
];

const industries = [
  { name: "Construction", href: "/industries#construction" },
  { name: "Oil & Gas", href: "/industries#oil-gas" },
  { name: "Manufacturing", href: "/industries#manufacturing" },
  { name: "Events", href: "/industries#events" },
  { name: "Utilities", href: "/industries#utilities" },
  { name: "Infrastructure", href: "/industries#infrastructure" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-energy to-transparent opacity-40" />

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-energy flex items-center justify-center shadow-green-glow">
                <Zap className="w-6 h-6 text-navy-950 fill-navy-950" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-white text-lg">BEYR</span>
                <span className="font-display font-black text-energy text-lg leading-none">ENERGY</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Beyond Rental of Alternative Energy Equipment LLC — Dubai's premier provider of industrial-grade BESS, solar hybrid & energy rental solutions across the GCC.
            </p>
            <p className="text-energy font-semibold text-sm italic mb-6">
              "Reliable Energy. When You Need It."
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-energy hover:border-energy/50 hover:bg-energy/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-energy transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-energy/50 group-hover:text-energy transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6">
              Industries
            </h4>
            <ul className="space-y-3">
              {[...industries, ...quickLinks].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-energy transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-energy/50 group-hover:text-energy transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-energy/10 border border-energy/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-energy" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Head Office</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-0.5">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-energy/10 border border-energy/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-energy" />
                </div>
                <div>
                  <a href="tel:+971000000000" className="text-sm text-gray-400 hover:text-energy transition-colors">
                    +971 00 000 0000
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-energy/10 border border-energy/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-energy" />
                </div>
                <div>
                  <a href="mailto:info@beyrenergy.com" className="text-sm text-gray-400 hover:text-energy transition-colors break-all">
                    info@beyrenergy.com
                  </a>
                </div>
              </div>
            </div>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971000000000?text=Hi%2C%20I%27m%20interested%20in%20your%20energy%20rental%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Beyond Rental of Alternative Energy Equipment LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-500 text-xs hover:text-energy transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-xs hover:text-energy transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-energy animate-pulse" />
              <span className="text-gray-500 text-xs">Dubai, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
