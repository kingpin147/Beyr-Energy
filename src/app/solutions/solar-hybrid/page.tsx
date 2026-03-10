import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Hybrid Rental Systems | BEYR Energy Dubai',
  description: 'Integrated diesel-solar-battery hybrid systems that dramatically reduce fuel consumption and emissions for remote project sites across the GCC.',
};

export default function SolarHybridPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-dark-grid opacity-50" />
        <div className="glow-dot w-96 h-96 bg-energy top-0 right-0 opacity-10" />
        <div className="container-wide relative z-10">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-energy hover:text-white transition-colors text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-energy/20 flex items-center justify-center">
              <Sun className="w-5 h-5 text-energy" />
            </div>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            Solar Hybrid
            <br />
            <span className="text-gradient-green">Rental Systems</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Harness the GCC sun to slash diesel costs. Our rapidly deployable solar-battery-diesel microgrids provide ultra-reliable off-grid power while reducing fuel consumption by up to 80%.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary py-3 px-6 shadow-green-glow text-sm">Request Quote</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">Redefining Remote Power</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                For remote construction camps, mining operations, and oil exploration sites, diesel logistics represent a massive operational expense and supply chain risk.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                BEYR Energy's Solar Hybrid solutions integrate pre-wired, modular solar PV arrays with high-density BESS and a backup diesel generator, all managed by an intelligent microgrid controller. The system maximizes solar yield during the day, charges the batteries, and only runs the generator when absolutely necessary.
              </p>

              <h3 className="font-display font-bold text-xl text-navy-900 mb-4">Core Applications:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Remote worker accommodation camps",
                  "Off-grid drilling and exploration sites",
                  "Telecommunications towers",
                  "Island developments and eco-resorts",
                  "Agricultural and desalination projects"
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
                    <span className="text-gray-500 font-medium">Solar Array</span>
                    <span className="font-bold text-navy-900">100kWp – 2MW+ (Folding/Modular)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">BESS Integration</span>
                    <span className="font-bold text-navy-900">Matched to night-load</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Generator Sync</span>
                    <span className="font-bold text-navy-900">Fully Automated</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-500 font-medium">Average Fuel Savings</span>
                    <span className="font-bold text-navy-900">60% – 85%</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500 font-medium">Monitoring</span>
                    <span className="font-bold text-navy-900">Satellite/4G SCADA portal</span>
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
