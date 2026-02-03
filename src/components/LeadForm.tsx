'use client';

import { useState } from 'react';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LeadForm() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('seller_leads')
                .insert([
                    {
                        name: formData.name,
                        address: formData.address,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                    },
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({
                name: '',
                address: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-6">
                    We have received your information and will be in touch shortly with your cash offer.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-brand font-semibold hover:text-brand-dark underline"
                >
                    Submit another property
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-2 border-brand relative group overflow-hidden">
            {/* Colorful Header */}
            <div className="bg-gradient-to-r from-brand to-brand-dark px-8 py-6 text-white relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <div className="relative z-10">
                    <div className="inline-block bg-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 shadow-lg">
                        Fast & Free
                    </div>
                    <h3 className="text-2xl font-extrabold mb-1">
                        Get Your Cash Offer!
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                        No fees. No repairs. No obligation.
                    </p>
                </div>
                {/* Decorative Dip */}
                <div
                    className="absolute bottom-[-1px] left-[-1px] right-[-1px] h-5 bg-white"
                    style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0.5px, 50% 100%, 0 0.5px)' }}
                ></div>
            </div>

            <div className="p-8 pt-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-4">
                        <div className="relative">
                            <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="address" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">
                                Property Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400"
                                placeholder="123 Main St, City, State"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400"
                                    placeholder="you@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400"
                                    placeholder="(555) 123-4567"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">
                                Message (Optional)
                            </label>
                            <textarea
                                id="message"
                                rows={2}
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 resize-none"
                                placeholder="Any details..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                    </div>

                    {status === 'error' && (
                        <div className="text-red-500 text-sm font-bold text-center bg-red-50 p-3 rounded-xl border-2 border-red-100">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-accent text-white py-5 rounded-2xl font-black text-xl hover:bg-accent-dark transition-all shadow-[0_10px_20px_rgba(212,176,89,0.3)] hover:shadow-[0_15px_30px_rgba(212,176,89,0.4)] transform hover:-translate-y-1 active:translate-y-0.5 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                Get My Cash Offer
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </>
                        )}
                    </button>

                    <div className="flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest mt-6">
                        <Lock className="w-4 h-4 mr-2 text-green-500" />
                        <span>100% Private & Secure</span>
                    </div>
                </form>
            </div>

            {/* Glowing Accent Border (subtle) */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/10 rounded-2xl pointer-events-none transition-colors duration-500"></div>
        </div>
    );
}
