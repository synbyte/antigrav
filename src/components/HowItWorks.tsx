'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
    {
        image: '/step-1.png',
        title: '1. Submit Your Info',
        description: 'Fill out the short form with your property address and contact details. It takes less than 2 minutes.',
    },
    {
        image: '/step-2.png',
        title: '2. Get a Cash Offer',
        description: 'We will review your property and present you with a fair, no-obligation all-cash offer within 24 hours.',
    },
    {
        image: '/step-3.png',
        title: '3. Choose Your Date',
        description: 'If you accept, you pick the closing date. We can close in as little as 7 days or on your timeline.',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -z-10"></div>
            <div className="container-width relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Selling your house doesn't have to be complicated. We've simplified the process into 3 easy steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col h-full"
                        >
                            {/* Illustration Container - Stays White */}
                            <div className="relative h-64 bg-white flex items-center justify-center p-8">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text Content - Colored with a "Dip" (Concave Curve) */}
                            <div
                                className="p-8 pt-20 flex flex-col flex-grow text-center relative -mt-16 bg-gradient-to-t from-accent-dark to-accent border-4 rounded-b-3xl border-accent"
                                style={{
                                    clipPath: 'polygon(0% 12%, 5% 9.5%, 10% 7.5%, 15% 5.8%, 20% 4.4%, 25% 3.3%, 30% 2.4%, 35% 1.7%, 40% 1.2%, 45% 0.9%, 50% 0.8%, 55% 0.9%, 60% 1.2%, 65% 1.7%, 70% 2.4%, 75% 3.3%, 80% 4.4%, 85% 5.8%, 90% 7.5%, 95% 9.5%, 100% 12%, 100% 100%, 0% 100%)'
                                }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-white/90 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
