'use client';

import LeadForm from './LeadForm';
import { CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Image with Brand Blue Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-brand">
                <div
                    className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/developers-that-buy-your-home-ohio.webp)' }}
                ></div>
                {/* Solid Brand Blue Filter */}
                <div className="absolute inset-0 bg-brand/60 mix-blend-multiply"></div>
            </div>

            <div className="container-width relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center shadow-lg px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-sm">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            We are currently buying in your area
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                            Sell Your House <br />
                            <span className="text-accent">
                                Without the Stress
                            </span>
                        </h1>

                        <p className="text-xl text-slate-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            No repairs, no fees, no waiting. Get your <span className="text-accent font-bold underline decoration-accent/40">fair cash offer</span> today and close on your timeline.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-white font-medium">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-sm"
                            >
                                <CheckCircle2 className="w-5 h-5 text-accent-light mr-2" />
                                <span>No Repairs Needed</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-sm"
                            >
                                <CheckCircle2 className="w-5 h-5 text-accent-light mr-2" />
                                <span>No Agent Fees</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-sm"
                            >
                                <CheckCircle2 className="w-5 h-5 text-accent-light mr-2" />
                                <span>Close within 14 Days</span>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="pt-4"
                        >
                            <a
                                href="tel:+15551234567"
                                className="inline-flex items-center justify-center bg-accent text-white px-8 py-5 rounded-full font-extrabold text-xl hover:bg-accent-dark transition-all shadow-[0_0_30px_rgba(212,176,89,0.3)] hover:shadow-[0_0_40px_rgba(212,176,89,0.5)] transform hover:-translate-y-1 w-full sm:w-auto group"
                            >
                                <div className="bg-white/20 p-2 rounded-full mr-3 group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 fill-current" />
                                </div>
                                Call Now: (555) 123-4567
                            </a>
                            <p className="text-white/60 text-sm mt-3 font-medium">
                                Speak directly with a buyer today. No obligation.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:pl-10"
                    >
                        <LeadForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
