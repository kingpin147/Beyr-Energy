import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Emergency Backup Power Rental | BEYR Energy Dubai',
    description: 'Rapid-response emergency backup power deployment for critical operations across UAE & GCC. BEYR Energy mobilizes within hours to keep facilities running.',
};

export default function EmergencyBackupPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="page-hero">
                <div className="absolute inset-0 bg-dark-grid opacity-50" />
                <div className="glow-dot w-96 h-96 bg-red-500 top-0 right-0 opacity-10" />
                <div className="container-wide relative z-10">
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-energy hover:text-white transition-colors text-sm font-medium mb-8">
                        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
                    </Link>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                        </div>
                        <div className="section-label !mb-0 !text-red-400">Critical Response</div>
                    </div>
                    <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-8">
                        Emergency Backup
                        <br />
                        <span className="text-gradient-green">Power Rental</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
                        Rapid-response backup power solutions for critical operations. Our emergency fleet can be mobilized within hours to keep your facilities running when it matters most.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link href="/contact" className="btn-primary py-4 px-8 shadow-green-glow">Request Emergency Quote</Link>
                        <a href="tel:+971000000000" className="btn-secondary py-4 px-8">Call Us Now</a>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-28 lg:py-40">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="font-display font-bold text-3xl text-navy-900 mb-6">The Fastest Emergency Response in the GCC</h2>
                            <p className="text-gray-500 text-lg leading-relaxed mb-6">
                                Power outages cost facilities millions in downtime, spoiled inventory, and reputational damage. BEYR Energy maintains a rapid-response fleet of containerised BESS units and hybrid generator systems across UAE & GCC, ready to deploy at a moment's notice.
                            </p>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                Whether you're facing a grid failure, equipment breakdown, or need bridge power during a facility upgrade, our engineering team will have you back online as fast as physically possible.
                            </p>

                            <h3 className="font-display font-bold text-xl text-navy-900 mb-4">Critical Applications:</h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Hospital & healthcare facility power continuity",
                                    "Data centre emergency UPS backup",
                                    "Airport & port critical system protection",
                                    "Industrial plant emergency restart power",
                                    "Telecom tower battery backup",
                                    "Cold chain & logistics facility power"
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0" />
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-red-50 rounded-3xl p-10 border border-red-100">
                                <h3 className="font-display font-bold text-xl text-navy-900 mb-6">Response Times</h3>
                                <div className="space-y-6">
                                    {[
                                        { zone: "Dubai", time: "2–4 hours", color: "text-energy" },
                                        { zone: "UAE (Other Emirates)", time: "4–8 hours", color: "text-energy" },
                                        { zone: "KSA / Qatar / Oman", time: "12–24 hours", color: "text-amber-500" },
                                    ].map(r => (
                                        <div key={r.zone} className="flex justify-between items-center py-4 border-b border-red-200 last:border-0">
                                            <span className="text-gray-700 font-medium">{r.zone}</span>
                                            <span className={`font-display font-black text-xl ${r.color}`}>{r.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-navy-900 text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-dark-grid opacity-20" />
                                <div className="relative z-10">
                                    <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
                                    <h3 className="font-display font-bold text-xl mb-3">24/7 Emergency Hotline</h3>
                                    <p className="text-gray-400 mb-6">Our operations center is manned around the clock. Call us immediately when you need emergency power.</p>
                                    <a href="tel:+971000000000" className="btn-primary w-full justify-center">Call Emergency Line</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
