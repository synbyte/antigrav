'use client';

import { Home, Heart, Users, Wrench, MapPin, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const situations = [
    {
        icon: Home,
        title: 'Avoiding Foreclosure',
        description: 'Behind on mortgage payments? We can help you avoid foreclosure and move forward with a fresh start.',
    },
    {
        icon: Heart,
        title: 'Going Through Divorce',
        description: 'Divorce is difficult enough. Let us handle the house sale quickly so you can focus on what matters.',
    },
    {
        icon: Users,
        title: 'Inherited Property',
        description: 'Inherited a house you don\'t want or can\'t maintain? We buy inherited properties in any condition.',
    },
    {
        icon: Wrench,
        title: 'Too Many Repairs',
        description: 'Overwhelmed by repair costs? We buy houses as-is, no matter how much work they need.',
    },
    {
        icon: MapPin,
        title: 'Relocating',
        description: 'Moving for work or family? We can close on your timeline, whether it\'s 7 days or 6 months.',
    },
    {
        icon: Scale,
        title: 'Tired Landlord',
        description: 'Done dealing with problem tenants and property management? Sell your rental property hassle-free.',
    },
];

export default function SituationsSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-width">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        We Buy Houses in All Situations
                    </h2>
                    <p className="text-lg text-slate-600">
                        Life happens, and sometimes you need to sell your house quickly. Whatever your situation, we're here to help with a fair cash offer and a stress-free process.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {situations.map((situation, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:from-accent group-hover:to-accent-dark transition-all duration-300">
                                    <situation.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {situation.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {situation.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg text-slate-700 mb-6">
                        No matter your situation, we're here to provide a solution that works for you.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-accent text-white px-10 py-4 rounded-full font-extrabold text-lg hover:bg-accent-dark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Get Your Cash Offer Now
                    </a>
                </div>
            </div>
        </section>
    );
}
