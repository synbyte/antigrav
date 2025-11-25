'use client';

import LeadForm from './LeadForm';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Pattern */}
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-slate-50 z-0">
                <div
                    className="absolute inset-0 opacity-70 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/developers-that-buy-your-home-ohio.webp)' }}
                ></div>
                {/* Gradient overlay to make image visible on left and fade to right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/70 to-slate-50"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand opacity-20 blur-[100px]"></div>
            </div>

            <div className="container-width relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center text-shadow-md">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center shadow-md px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-medium text-sm">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                            </span>
                            We are currently buying in your area
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                            Sell Your House <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
                                Without the Stress
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            No repairs, no fees, no waiting. Get your fair cash offer today and close on your timeline.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-slate-700 font-medium">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center"
                            >
                                <CheckCircle2 stroke='green' className="w-5 h-5 text-green-500 mr-2" />
                                <span>No Repairs Needed</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center"
                            >
                                <CheckCircle2 stroke='green' className="w-5 h-5 text-green-500 mr-2" />
                                <span>No Agent Fees</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center"
                            >
                                <CheckCircle2 stroke='green' className="w-5 h-5 text-green-500 mr-2" />
                                <span>Close within 14 Days</span>
                            </motion.div>
                        </div>
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
