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
                            <li><Link href="#" className="hover:text-brand-light transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Service Areas</h4>
                        <ul className="space-y-3">
                            <li>Dallas, TX</li>
                            <li>Fort Worth, TX</li>
                            <li>Houston, TX</li>
                            <li>Austin, TX</li>
                            <li>San Antonio, TX</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-brand-light flex-shrink-0" />
                                <span>123 Real Estate Blvd, Suite 100<br />Dallas, TX 75201</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-brand-light flex-shrink-0" />
                                <a href="tel:+15551234567" className="hover:text-brand-light transition-colors">(555) 123-4567</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-brand-light flex-shrink-0" />
                                <a href="mailto:info@truehomecapital.com" className="hover:text-brand-light transition-colors">info@truehomecapital.com</a>
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
