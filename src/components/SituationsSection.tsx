'use client';

import {
    Home, Scale, Wrench, TrendingDown,
    Users, Briefcase, Flame, UserX,
    MapPin, Sunset, Activity, ArrowDownToLine,
} from 'lucide-react';
import { motion } from 'framer-motion';

const situations = [
    { icon: Home, title: 'Foreclosure', tagline: "Stop foreclosure before it's too late.", color: 'bg-blue-50 text-blue-600' },
    { icon: Wrench, title: 'Expensive Repairs', tagline: 'Sell as-is — we handle everything.', color: 'bg-amber-50 text-amber-600' },
    { icon: ArrowDownToLine, title: 'Downsizing', tagline: 'Right-size your life on your own terms.', color: 'bg-sky-50 text-sky-600' },
    { icon: TrendingDown, title: 'Bankruptcy', tagline: 'Free up equity quickly and start fresh.', color: 'bg-red-50 text-red-500' },
    { icon: Users, title: 'Inherited Home', tagline: 'Sell a property you didn\'t plan for, fast.', color: 'bg-purple-50 text-purple-600' },
    { icon: Briefcase, title: 'Job Loss', tagline: 'Reduce financial pressure with a fast sale.', color: 'bg-orange-50 text-orange-500' },
    { icon: Flame, title: 'Fire / Flood Damage', tagline: 'We buy damaged homes in any condition.', color: 'bg-rose-50 text-rose-500' },
    { icon: Scale, title: 'Divorce', tagline: 'Settle the property quickly and move on.', color: 'bg-indigo-50 text-indigo-600' },
    { icon: UserX, title: 'Bad Tenants', tagline: 'Offload your rental without lifting a finger.', color: 'bg-slate-100 text-slate-600' },
    { icon: MapPin, title: 'Relocating', tagline: 'Close on your timeline — 7 days or 6 months.', color: 'bg-emerald-50 text-emerald-600' },
    { icon: Sunset, title: 'Retirement', tagline: 'Unlock equity and simplify your life.', color: 'bg-yellow-50 text-yellow-600' },
    { icon: Activity, title: 'Health Issues', tagline: 'Let us handle the sale so you can focus on you.', color: 'bg-teal-50 text-teal-600' },
];

export default function SituationsSection() {
    return (
        <section className="section-padding bg-gradient-to-br from-brand to-brand-dark">
            <div className="container-width">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block" />
                        Every Situation Welcome
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                        We Buy Houses in{' '}
                        <span className="text-accent">All Situations</span>
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                        Life happens. Whatever brought you here, we're ready to make you a fair cash offer — no pressure, no obligation.
                    </p>
                </div>

                {/* 12-card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {situations.map((situation, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            <div className="group bg-white rounded-2xl p-5 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col gap-3">
                                <div className={`w-11 h-11 rounded-xl ${situation.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                                    <situation.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug mb-1 group-hover:text-brand transition-colors duration-200">
                                        {situation.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed hidden sm:block">
                                        {situation.tagline}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/70 mb-6 text-base">
                        Don't see your situation? <span className="text-white font-semibold">We still want to hear from you.</span>
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-full font-bold text-base hover:bg-accent-dark transition-all shadow-[0_4px_20px_rgba(212,176,89,0.4)] hover:shadow-[0_6px_28px_rgba(212,176,89,0.55)] hover:-translate-y-0.5 transform"
                    >
                        Get Your Cash Offer Now
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
