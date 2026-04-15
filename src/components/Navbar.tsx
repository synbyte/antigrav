'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50">
            {/* Thin accent bar at the very top */}
            <div className="h-0.5 w-full bg-linear-to-r from-brand via-accent to-brand-dark" />
            <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center mr-8">
                            <Link href="/" className="flex items-center gap-2.5 group">
                                <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src="/logo_nobg.png"
                                        alt="True Home Capital Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col -space-y-1.5 md:-space-y-2.0 justify-center">
                                    <span className="text-xl md:text-2xl font-bold text-brand-dark tracking-tight uppercase leading-tight whitespace-nowrap">
                                        TrueHome
                                    </span>
                                    <span className="text-xs md:text-lg font-bold text-accent uppercase tracking-widest leading-none whitespace-nowrap">
                                        Capital
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {[
                                { href: '/#how-it-works', label: 'How it Works' },
                                { href: '/#about', label: 'About Us' },
                                { href: '/#reviews', label: 'Reviews' },
                                { href: '/#faq', label: 'FAQ' },
                                { href: '/#buyers', label: 'For Investors' },
                            ].map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="relative px-3 py-2 text-slate-600 hover:text-brand font-medium text-sm transition-colors duration-200 group"
                                >
                                    {label}
                                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                </Link>
                            ))}
                            <a
                                href="tel:+16232813654"
                                className="flex items-center gap-2 ml-2 px-4 py-2 rounded-full text-brand-dark font-semibold text-sm border border-brand/20 hover:border-brand/50 hover:bg-brand/5 transition-all duration-200"
                            >
                                <Phone className="w-3.5 h-3.5" />
                                (623) 281-3654
                            </a>
                            <Link
                                href="/#contact"
                                className="ml-2 bg-accent text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-dark transition-all duration-200 shadow-[0_4px_14px_rgba(212,176,89,0.4)] hover:shadow-[0_6px_20px_rgba(212,176,89,0.5)] hover:-translate-y-0.5 transform"
                            >
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
                            className="md:hidden bg-slate-50 border-b border-brand/10 overflow-hidden shadow-inner"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                <Link
                                    href="/#how-it-works"
                                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    How it Works
                                </Link>
                                <Link
                                    href="/#about"
                                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/#reviews"
                                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Reviews
                                </Link>
                                <Link
                                    href="/#faq"
                                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href="/#buyers"
                                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    For Investors
                                </Link>
                                <a
                                    href="tel:+16232813654"
                                    className="block px-3 py-3 text-base font-medium text-slate-900 hover:text-brand hover:bg-slate-50 rounded-md"
                                >
                                    Call (623) 281-3654
                                </a>
                                <div className="pt-4">
                                    <Link
                                        href="/#contact"
                                        className="block w-full text-center bg-accent text-white px-6 py-4 rounded-lg font-bold hover:bg-accent-dark transition-colors shadow-lg"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Get My Cash Offer
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
