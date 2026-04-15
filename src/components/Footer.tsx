'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
            <div className="container-width">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-6 block">
                            True Home <span className="text-brand-light">Capital</span>
                        </Link>
                        <p className="text-slate-400 mb-6">
                            We provide win-win solutions to help homeowners get out of their sticky situations… like Foreclosure, owning a burdensome property, probate, or anything else.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#how-it-works" className="hover:text-brand-light transition-colors">How It Works</Link></li>
                            <li><Link href="#about" className="hover:text-brand-light transition-colors">About Us</Link></li>
                            <li><Link href="#reviews" className="hover:text-brand-light transition-colors">Reviews</Link></li>
                            <li><Link href="#contact" className="hover:text-brand-light transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-brand-light transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className="hover:text-brand-light transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Service Areas</h4>
                        <ul className="space-y-3">
                            <li>Arizona</li>
                            <li>Texas</li>
                            <li>New Mexico</li>
                            <li>North Carolina</li>
                            <li>Georgia</li>
                            <li>Indiana</li>
                            <li>Nevada</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-brand-light flex-shrink-0" />
                                <a href="tel:+16232813654" className="hover:text-brand-light transition-colors">(623) 281-3654</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-brand-light flex-shrink-0" />
                                <a href="mailto:admin@truehomecapital.com" className="hover:text-brand-light transition-colors">admin@truehomecapital.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} True Home Capital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
