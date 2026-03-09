import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Beyond Rental — BEYR Energy Dubai",
  description:
    "Learn about Beyond Rental of Alternative Energy Equipment LLC (BEYR Energy) — Dubai's leading industrial-grade BESS, solar hybrid, and temporary power rental company serving the UAE & GCC.",
};

const values = [
  { icon: Target, title: "Reliability First", desc: "We guarantee uptime with certified, maintained equipment and 24/7 support teams on standby." },
  { icon: Award, title: "Industrial Grade Only", desc: "We never compromise. Every unit in our fleet meets international IEC and CE standards." },
  { icon: Users, title: "Client-Centric", desc: "Flexible rental terms, dedicated account managers, and custom solutions for every client." },
  { icon: Eye, title: "Sustainability Driven", desc: "Helping GCC industries transition to cleaner, more efficient energy systems through rentals." },
];

const milestones = [
  { year: "2022", event: "BEYR Energy founded in Dubai, UAE" },
  { year: "2023", event: "First BESS fleet deployed across UAE construction sector" },
  { year: "2024", event: "Expanded to KSA, Qatar & Oman — GCC regional coverage" },
  { year: "2025", event: "500+ MW deployed. Solar hybrid fleet launch" },
  { year: "2026", event: "Multi-MW peak shaving & smart grid portfolio launched" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-dark-grid" />
        <div className="glow-dot w-96 h-96 bg-energy top-0 right-0 opacity-10" />
        <div className="container-wide relative z-10">
          <div className="section-label">
            <span className="w-8 h-px bg-energy" />
            About BEYR Energy
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            The GCC's Trusted{" "}
            <span className="text-gradient-green">Energy Rental Partner</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Beyond Rental of Alternative Energy Equipment LLC — where industrial reliability meets sustainable energy innovation.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">
                <span className="w-8 h-px bg-energy" />
                Our Story
              </div>
              <h2 className="section-title mb-6">
                Powering the GCC,{" "}
                <span className="text-gradient-green">One Project at a Time</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Beyond Rental (BEYR Energy) was founded with a single mission: to make premium alternative energy equipment accessible to every industrial project across the UAE and GCC — without the burden of capital expenditure.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Based in Dubai, we operate a growing fleet of containerised BESS units, solar-diesel hybrid systems, and temporary power solutions — all available for short and long-term rental with full technical support.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our clients include leading construction firms, oil & gas operators, industrial manufacturers, event organizers, and utility companies. Every deployment is backed by our 24/7 monitoring center and experienced field engineers.
              </p>
            </div>
            {/* Stats panel */}
            <div className="bg-hero-gradient rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-dark-grid" />
              <div className="relative z-10 grid grid-cols-2 gap-8">
                {[
                  { v: "500+", l: "MW Deployed" },
                  { v: "100+", l: "Projects Completed" },
                  { v: "6+", l: "GCC Countries Served" },
                  { v: "24/7", l: "Technical Support" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-4xl font-display font-black text-energy mb-1">{s.v}</div>
                    <div className="text-gray-400 text-sm font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-energy font-bold italic text-sm">"Reliable Energy. When You Need It."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-energy" />
              Our Values
              <span className="w-8 h-px bg-energy" />
            </div>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="solution-card text-center group">
                <div className="w-14 h-14 rounded-2xl bg-energy/10 border border-energy/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-energy/20 transition-colors">
                  <v.icon className="w-7 h-7 text-energy" />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-energy" />
              Our Journey
              <span className="w-8 h-px bg-energy" />
            </div>
            <h2 className="section-title">From Launch to GCC Leader</h2>
          </div>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-energy via-energy/50 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-6">
                  <div className="w-16 text-right flex-shrink-0">
                    <span className="text-energy font-display font-black text-sm">{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-energy shadow-green-glow border-2 border-navy-900" />
                  </div>
                  <div className="pb-4">
                    <p className="text-navy-900 font-medium text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="absolute inset-0 bg-dark-grid opacity-50" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6">
            Ready to Partner with BEYR Energy?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
