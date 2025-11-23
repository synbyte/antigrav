'use client';

import { ClipboardList, BadgeDollarSign, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: ClipboardList,
        title: '1. Submit Your Info',
        description: 'Fill out the short form with your property address and contact details. It takes less than 2 minutes.',
    },
    {
        icon: BadgeDollarSign,
        title: '2. Get a Cash Offer',
        description: 'We will review your property and present you with a fair, no-obligation all-cash offer within 24 hours.',
    },
    {
        icon: CalendarCheck,
        title: '3. Choose Your Date',
        description: 'If you accept, you pick the closing date. We can close in as little as 7 days or on your timeline.',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section-padding bg-white">
            <div className="container-width">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-600">
                        Selling your house doesn't have to be complicated. We've simplified the process into 3 easy steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 bg-white rounded-full border-4 border-brand/10 flex items-center justify-center mb-6 shadow-sm group-hover:border-brand/20 group-hover:shadow-md transition-all duration-300">
                                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
