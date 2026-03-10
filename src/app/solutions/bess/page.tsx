import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Battery Energy Storage System (BESS) Rental | BEYR Energy Dubai',
  description: 'Industrial-grade containerised BESS units for peak shaving, backup power, and grid stabilisation across UAE construction and industrial sites.',
};

export default function BessPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-dark-grid opacity-50" />
        <div className="glow-dot w-96 h-96 bg-energy top-0 right-0 opacity-10" />
        <div className="container-wide relative z-10">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-energy hover:text-white transition-colors text-sm font-medium mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-energy/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-energy" />
            </div>
            <div className="section-label !mb-0">Most Popular</div>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-8">
            Battery Energy
            <br />
            <span className="text-gradient-green">Storage Systems (BESS)</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
            Modular, high-capacity lithium-ion storage units built for the harshest GCC environments. Deployable within 48 hours for immediate power stability and fuel reduction.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary py-4 px-8 shadow-green-glow">Request Quote</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 lg:py-40">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">The Future of Temporary Power</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Our containerised Battery Energy Storage Systems (BESS) are transforming how the GCC powers temporary and remote sites. By replacing or supplementing traditional diesel generators with BESS technology, we help clients drastically cut fuel consumption, reduce noise to zero, and eliminate local emissions.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Available in configurations from 50 kWh up to multi-megawatt utility scale, our rental fleet is fully modular. Scale your capacity instantly without costly infrastructure changes.
              </p>

              <h3 className="font-display font-bold text-xl text-navy-900 mb-4">Core Applications:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Silent, emission-free power for urban construction",
                  "Diesel hybridisation (generator + battery) for 60%+ fuel savings",
                  "Grid buffering for heavy motor starts (cranes, pumps)",
                  "UPS-grade seamless backup for critical facilities",
                  "Peak shaving to avoid high utility demand charges"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0" />
                    <span className="text-gray-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-xl text-navy-900 mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Capacity Options</span>
                    <span className="font-bold text-navy-900">50 kWh – 2.5 MWh per unit</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Scalability</span>
                    <span className="font-bold text-navy-900">Unlimited (Parallel connection)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Chemistry</span>
                    <span className="font-bold text-navy-900">LFP (Lithium Iron Phosphate)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Cooling</span>
                    <span className="font-bold text-navy-900">Advanced liquid cooling</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Enclosure rating</span>
                    <span className="font-bold text-navy-900">IP54 / Desert-spec HVAC</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500 font-medium">Certifications</span>
                    <span className="font-bold text-navy-900">IEC, CE, UN38.3</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-dark-grid opacity-20" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-xl mb-3">Ready to deploy BESS?</h3>
                  <p className="text-gray-400 mb-6">Speak with an engineer today to size the perfect system for your energy requirements.</p>
                  <Link href="/contact" className="btn-primary w-full justify-center">Contact Engineering Team</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
