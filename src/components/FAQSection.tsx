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
        <section id="faq" className="section-padding bg-slate-50">
            <div className="container-width">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        We know selling your house is a big decision. Here are answers to common questions we hear from homeowners.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900 pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
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
                                        <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg text-slate-700 mb-4">
                        Still have questions? We're here to help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block text-brand font-semibold hover:underline"
                    >
                        Contact us for more information →
                    </a>
                </div>
            </div>
        </section>
    );
}
