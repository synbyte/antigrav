'use client';

import LeadForm from './LeadForm';
import { CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
                <div
                    className="absolute inset-0 opacity-45 bg-cover bg-center bg-no-repeat grayscale-[20%]"
                    style={{ backgroundImage: 'url(/hero1.jpg)' }}
                ></div>
                {/* Gradient Overlays for Depth and Readability */}
                <div className="absolute inset-0 bg-linear-to-r from-brand-dark/55 via-brand-dark/25 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent"></div>
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
                        <div className="inline-flex items-center shadow-xl px-4 py-2 rounded-full bg-black/40 border border-white/30 text-white font-bold text-sm backdrop-blur-md">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            We are currently buying in your area
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_40%),_0_1px_2px_rgb(0_0_0_/_60%)]">
                            Sell Your House <br />
                            <span className="text-accent [text-shadow:_0_2px_10px_rgb(0_0_0_/_40%),_0_1px_2px_rgb(0_0_0_/_60%)]">
                                Without the Stress
                            </span>
                        </h1>

                        <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0 font-semibold [text-shadow:_0_1px_4px_rgb(0_0_0_/_60%)]">
                            No repairs, no fees, no waiting. Get your <span className="relative inline-block text-accent font-bold">
                                fair cash offer
                                <span className="absolute -bottom-1 -left-1 w-[105%] h-2 bg-accent/65 -rotate-1 skew-x-[15deg] rounded-[100%_2px_100%_2px] pointer-events-none"></span>
                            </span> today and close on your timeline.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-white font-semibold">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-md"
                            >
                                <CheckCircle2 className="w-5 h-5 text-accent-light mr-2" />
                                <span className="[text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">No Repairs Needed</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-md"
                            >
                                <CheckCircle2 className="w-5 h-5 text-accent-light mr-2" />
                                <span className="[text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">No Agent Fees</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-md"
                            >
                                <CheckCircle2 className="w-5 h-5 text-accent-light mr-2" />
                                <span className="[text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">Close within 14 Days</span>
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
                            <p className="text-white text-sm mt-3 font-semibold [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
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
