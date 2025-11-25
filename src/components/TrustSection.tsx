'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustSection() {
    return (
        <section className="section-padding bg-gradient-to-br from-brand to-brand-dark text-white">
            <div className="container-width">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        A Company You Can Trust
                    </h2>
                    <p className="text-xl text-blue-100">
                        We're not just another "we buy houses" company. We're your neighbors, and we're here to help.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/trust-handshake.png"
                            alt="Handshake representing trust and partnership"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold mb-4">Our Promise to You</h3>
                            <p className="text-lg text-blue-100 leading-relaxed mb-6">
                                We believe in treating people with respect and honesty. That means fair offers, transparent processes, and no pressure.
                            </p>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                We're here to help you solve a problem, not create new ones. If selling to us isn't the right fit, we'll tell you and help you explore other options.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
