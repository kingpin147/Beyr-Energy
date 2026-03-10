import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peak Shaving Battery Systems | BEYR Energy Dubai',
  description: 'Intelligent BESS-driven systems that automatically discharge during peak demand periods, reducing utility charges and protecting against demand tariffs.',
};

export default function PeakShavingPage() {
  return (
    <div className="bg-white">
      <section className="page-hero">
        <div className="absolute inset-0 bg-dark-grid opacity-50" />
        <div className="glow-dot w-96 h-96 bg-energy top-0 right-0 opacity-10" />
        <div className="container-wide relative z-10">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-energy hover:text-white transition-colors text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-energy/20 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-energy" />
            </div>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            Peak Shaving
            <br />
            <span className="text-gradient-green">Energy Systems</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Take control of your utility bills. Our rented Battery Energy Storage Systems intelligentely shave demand peaks, flattening your load profile and eliminating costly demand charges.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary py-3 px-6 shadow-green-glow text-sm">Request ROI Analysis</Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">Slash High Tariffs with Smart Storage</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                For manufacturing plants, data centres, and large commercial facilities, peak demand charges often constitute a massive portion of the monthly electricity bill. A 15-minute spike in power usage can trigger high tariff rates for the entire month.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                BEYR Energy's Peak Shaving BESS continuously monitors facility power usage. As demand spikes (e.g., when heavy machinery starts up), the BESS instantly discharges, supplying the extra power from the batteries rather than pulling from the utility grid. The grid only sees a smooth, flat load profile.
              </p>

              <h3 className="font-display font-bold text-xl text-navy-900 mb-4">Core Applications:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Heavy manufacturing facilities and steel plants",
                  "Cold storage and massive warehouse HVAC",
                  "EV charging hubs with high burst demand",
                  "Tapping utility sub-station limits",
                  "Data centres facing grid infrastructure constraints"
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
                <h3 className="font-display font-bold text-xl text-navy-900 mb-6">System Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">BMS Integration</span>
                    <span className="font-bold text-navy-900">Millisecond response grid-tie</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Software</span>
                    <span className="font-bold text-navy-900">Predictive AI demand management</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Charging Cycle</span>
                    <span className="font-bold text-navy-900">Off-peak tariff periods</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Demand Charge Cut</span>
                    <span className="font-bold text-navy-900">Typically 20% – 40%</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500 font-medium">Dual-function</span>
                    <span className="font-bold text-navy-900">BESS also acts as UPS backup</span>
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
