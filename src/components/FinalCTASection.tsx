'use client';

import LeadForm from './LeadForm';
import { motion } from 'framer-motion';
import { Shield, Clock, BadgeCheck } from 'lucide-react';

export default function FinalCTASection() {
    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-slate-50">
            {/* Subtle background patterns */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container-width relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left space-y-6 lg:space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-brand font-bold text-sm mb-2">
                                Take the First Step
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                Are You Ready To <span className="text-brand">Sell Your House?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Don't let another day of stress go by. Fill out the form to get your fair, no-obligation cash offer in as little as 24 hours.
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                {/* Decorative element behind form */}
                                <div className="absolute -inset-4 bg-brand/5 rounded-3xl blur-2xl -z-10" />
                                <LeadForm />
                            </motion.div>

                            <div className="pt-8 border-t border-slate-200 text-center lg:text-left">
                                <p className="text-slate-500 font-medium">
                                    Prefer to talk? Call us at <a href="tel:+15551234567" className="text-brand font-bold hover:underline">(555) 123-4567</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
