'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">
                            Swift<span className="text-brand">Home</span>Buyers
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#how-it-works" className="text-slate-600 hover:text-brand font-medium transition-colors">
                            How it Works
                        </Link>
                        <Link href="#about" className="text-slate-600 hover:text-brand font-medium transition-colors">
                            About Us
                        </Link>
                        <Link href="#reviews" className="text-slate-600 hover:text-brand font-medium transition-colors">
                            Reviews
                        </Link>
                        <Link href="#faq" className="text-slate-600 hover:text-brand font-medium transition-colors">
                            FAQ
                        </Link>
                        <Link href="#buyers" className="text-slate-600 hover:text-brand font-medium transition-colors">
                            For Investors
                        </Link>
                        <a href="tel:+15551234567" className="flex items-center text-slate-900 font-semibold hover:text-brand transition-colors">
                            <Phone className="w-4 h-4 mr-2" />
                            (555) 123-4567
                        </a>
                        <Link href="#contact" className="bg-brand text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Get Cash Offer
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link
                                href="#how-it-works"
                                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                How it Works
                            </Link>
                            <Link
                                href="#about"
                                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="#reviews"
                                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Reviews
                            </Link>
                            <Link
                                href="#faq"
                                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                FAQ
                            </Link>
                            <Link
                                href="#buyers"
                                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                For Investors
                            </Link>
                            <a
                                href="tel:+15551234567"
                                className="block px-3 py-3 text-base font-medium text-slate-900 hover:text-brand hover:bg-slate-50 rounded-md"
                            >
                                Call (555) 123-4567
                            </a>
                            <div className="pt-4">
                                <Link
                                    href="#contact"
                                    className="block w-full text-center bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get My Cash Offer
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
