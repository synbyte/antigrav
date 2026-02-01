'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'Is selling a home for cash a good idea?',
        answer: 'Selling for cash is ideal if you value speed and convenience. If your house needs repairs, you\'re facing foreclosure, or you need to sell quickly, a cash sale eliminates the stress of traditional listings. You avoid repairs, showings, and waiting for buyer financing. We provide a fair offer and can close on your timeline.',
    },
    {
        question: 'Are companies that buy houses for cash legitimate?',
        answer: 'Yes, most are legitimate, but it\'s important to do your research. Look for companies with a proven track record, positive reviews, transparent processes, and local presence. We\'re a family-owned business with years of experience helping homeowners in your area. We provide clear contracts, fair offers, and close through reputable title companies.',
    },
    {
        question: 'How quickly can you close?',
        answer: 'We can close as quickly as 7 days or as long as 6 months - whatever works best for you. Since we buy with cash, there\'s no waiting for bank approvals or financing. Once you accept our offer, you choose the closing date that fits your schedule.',
    },
    {
        question: 'Do I need to make repairs before selling?',
        answer: 'Absolutely not! We buy houses in any condition - "as-is" really means as-is. Whether your house needs minor updates or major repairs, we\'ll make you a fair offer. You don\'t need to fix anything, clean anything, or even remove your belongings if you don\'t want to.',
    },
    {
        question: 'Will you really buy my house as-is?',
        answer: 'Yes! We mean it when we say "any condition." We\'ve purchased homes with foundation issues, roof damage, fire damage, hoarding situations, and everything in between. Whatever condition your house is in, we\'re interested in making you a fair cash offer.',
    },
    {
        question: 'How do you determine your offer price?',
        answer: 'We consider the location, condition, size, and current market conditions. Our goal is to make you a fair offer that works for both of us. We\'re transparent about how we arrive at our number and happy to explain our reasoning. If you have another offer, let us know - we\'ll do our best to beat it.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-slate-50/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-20"></div>
            <div className="container-width relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-brand font-bold text-sm mb-6">
                        Got Questions?
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Frequently Asked <span className="text-brand">Questions</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Everything you need to know about selling your house for cash. Transparent answers, no industry jargon.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`bg-white rounded-2xl border-2 transition-all duration-300 ${openIndex === index
                                    ? 'border-brand shadow-[0_10px_30px_rgba(30,58,138,0.1)] ring-4 ring-brand/5'
                                    : 'border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md'
                                } overflow-hidden`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors ${openIndex === index ? 'bg-brand/[0.02]' : 'hover:bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-colors ${openIndex === index ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'
                                        }`}>
                                        Q
                                    </div>
                                    <span className={`text-xl font-bold pr-4 transition-colors ${openIndex === index ? 'text-brand' : 'text-slate-800'
                                        }`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand text-white rotate-180' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 pt-2 pl-20 text-slate-600 leading-relaxed text-lg font-medium border-l-4 border-brand mx-6 mb-6 bg-slate-50/50 rounded-r-xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-white inline-block p-8 rounded-3xl shadow-xl border border-slate-100">
                        <p className="text-xl text-slate-900 font-bold mb-6">
                            Still have more questions?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Contact Us Now
                            <ChevronDown className="ml-2 w-5 h-5 -rotate-90" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
