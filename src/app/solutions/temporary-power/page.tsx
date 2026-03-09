import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Temporary Power Solutions Rental | BEYR Energy Dubai',
  description: 'Fast-deploy temporary power infrastructure for construction, industrial projects, and events. Generator + BESS hybrid configurations available.',
};

export default function TempPowerPage() {
  return (
    <div className="bg-white">
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-50" />
        <div className="glow-dot w-96 h-96 bg-energy top-0 right-0 opacity-10" />
        <div className="container-wide relative z-10">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-energy hover:text-white transition-colors text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-energy/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-energy" />
            </div>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            Temporary Power
            <br />
            <span className="text-gradient-green">Solutions</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Complete temporary power infrastructure. From high-efficiency generators to hybrid BESS units, transformers, and distribution panels — deployed rapidly across the UAE.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary py-3 px-6 shadow-green-glow text-sm">Request Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">Reliable Power, Instantly</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Whether you need to power a tower crane on a new construction site, run a massive outdoor event, or maintain factory operations during a planned grid outage, BEYR Energy delivers the muscle.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We go beyond just renting generators. We design the entire temporary power architecture. Our latest deployments utilize "Hybrid Power" — pairing modern diesel generators with BESS units to ensure the generator only runs at peak efficiency. This reduces fuel burn by 30-50%, eliminates light-load engine glazing, and provides completely silent power overnight.
              </p>
              
              <h3 className="font-display font-bold text-xl text-navy-900 mb-4">Core Applications:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Early-works construction site power",
                  "Tower crane peak load management",
                  "Major events, concerts, and festivals",
                  "Planned utility outage bridging",
                  "Industrial facility expansion projects"
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
                <h3 className="font-display font-bold text-xl text-navy-900 mb-6">Equipment Offering</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Diesel Generators</span>
                    <span className="font-bold text-navy-900">50kVA – 1250kVA+ (Sync ready)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Hybrid Skids (BESS)</span>
                    <span className="font-bold text-navy-900">For load leveling & silent nights</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Transformers</span>
                    <span className="font-bold text-navy-900">Step-up / Step-down</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Distribution</span>
                    <span className="font-bold text-navy-900">MDBs, SMDBs, Cables, Automatic Transfer Switches (ATS)</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500 font-medium">Fuel Storage</span>
                    <span className="font-bold text-navy-900">Double-walled bulk tanks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
