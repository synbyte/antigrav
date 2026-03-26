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
        agreeTerms: false,
        agreeCommunications: false,
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

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
                        agreeTerms: formData.agreeTerms,
                        agreeCommunications: formData.agreeCommunications,
                    },
                ]);

            if (error) throw error;

            // Forward the lead data to Resimpli after a successful database save
            try {
                await fetch('/api/resimpli', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            } catch (resimpliError) {
                console.warn('Could not forward to Resimpli API route:', resimpliError);
                // Continue execution to show success state, as the local database save worked
            }

            setStatus('success');
            setFormData({
                name: '',
                address: '',
                email: '',
                phone: '',
                message: '',
                agreeTerms: false,
                agreeCommunications: false,
            });
        } catch (error: any) {
            console.error('Error submitting form:', JSON.stringify(error, null, 2));
            setStatus('error');
            setErrorMessage(error?.message || error?.details || 'Something went wrong. Please try again. Please view the console for more details.');
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
            <div className="bg-gradient-to-r from-brand to-brand-dark px-5 py-5 lg:px-8 lg:py-6 text-white relative">
                <div className="relative z-10">
                    <div className="inline-block bg-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1 lg:mb-2 shadow-lg">
                        Fast & Free
                    </div>
                    <h3 className="text-lg lg:text-2xl font-extrabold mb-0.5 lg:mb-1">
                        Get Your Cash Offer!
                    </h3>
                    <p className="hidden lg:block text-white/80 text-sm font-medium">
                        No fees. No repairs. No obligation.
                    </p>
                </div>
                {/* Decorative Dip */}
                <div
                    className="absolute bottom-[-1px] left-[-1px] right-[-1px] h-5 bg-white"
                    style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0.5px, 50% 100%, 0 0.5px)' }}
                ></div>
            </div>

            <div className="p-4 pt-6 lg:p-8 lg:pt-10">
                <form onSubmit={handleSubmit} className="space-y-2.5 lg:space-y-5">
                    <div className="space-y-2.5 lg:space-y-5">
                        <div className="relative">
                            <label htmlFor="name" className="rounded-b-lg absolute top-0 -translate-y-1/2 left-3 bg-white px-1 text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider z-10">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-3 py-2.5 lg:px-4 lg:py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 text-sm lg:text-base"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="address" className="rounded-b-lg absolute top-0 -translate-y-1/2 left-3 bg-white px-1 text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider z-10">
                                Property Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                required
                                className="w-full px-3 py-2.5 lg:px-4 lg:py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 text-sm lg:text-base"
                                placeholder="123 Main St, City, State"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <label htmlFor="email" className="rounded-b-lg absolute top-0 -translate-y-1/2 left-3 bg-white px-1 text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider z-10">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-3 py-2.5 lg:px-4 lg:py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 text-sm lg:text-base"
                                    placeholder="you@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="phone" className="rounded-b-lg absolute top-0 -translate-y-1/2 left-3 bg-white px-1 text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider z-10">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="w-full px-3 py-2.5 lg:px-4 lg:py-3.5 rounded-xl border-2 border-slate-100 focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 text-sm lg:text-base"
                                    placeholder="(623) 281-3654"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="hidden lg:block relative mt-2 md:mt-0">
                            <label htmlFor="message" className="rounded-b-lg absolute top-0 -translate-y-1/2 left-3 bg-white px-1 text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider z-10">
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

                    <div className="space-y-4">
                        <div className="flex items-start relative z-20">
                            <input
                                id="agreeTerms"
                                name="agreeTerms"
                                type="checkbox"
                                checked={formData.agreeTerms}
                                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                                className="mt-0.5 w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-brand-light cursor-pointer shrink-0"
                            />
                            <div className="ml-3 text-sm flex-1">
                                <label htmlFor="agreeTerms" className="font-medium text-xs lg:text-sm text-slate-500 block leading-relaxed cursor-pointer">
                                    I agree to the <a href="/terms-and-conditions" onClick={(e) => e.stopPropagation()} className="text-brand hover:underline font-bold">Terms & Conditions</a> and <a href="/privacy-policy" onClick={(e) => e.stopPropagation()} className="text-brand hover:underline font-bold">Privacy Policy</a>.
                                </label>
                            </div>
                        </div>

                        <div className="flex items-start relative z-20">
                            <input
                                id="agreeCommunications"
                                name="agreeCommunications"
                                type="checkbox"
                                checked={formData.agreeCommunications}
                                onChange={(e) => setFormData({ ...formData, agreeCommunications: e.target.checked })}
                                className="mt-0.5 w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-brand-light cursor-pointer shrink-0"
                            />
                            <div className="ml-3 text-sm flex-1">
                                <label htmlFor="agreeCommunications" className="font-medium text-xs lg:text-sm text-slate-500 block leading-relaxed cursor-pointer">
                                    I agree to receive transactional or conversational communications from True Home Capital
                                    {!isExpanded ? (
                                        <>... <button type="button" onClick={(e) => { e.preventDefault(); setIsExpanded(true); }} className="text-brand hover:underline font-bold ml-1">Read more</button></>
                                    ) : (
                                        <span> via text messages, phone calls, and emails related to my real estate inquiry, such as property details, responses, and appointment confirmations. Message frequency varies. Reply STOP to opt out. Reply HELP for help. Msg &amp; data rates may apply. Your information is secure and will not be sold or shared with third parties or affiliates for promotional purposes. <button type="button" onClick={(e) => { e.preventDefault(); setIsExpanded(false); }} className="text-brand hover:underline font-bold ml-1">Show less</button></span>
                                    )}
                                </label>
                            </div>
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
                        className="w-full bg-accent text-white py-3 lg:py-5 rounded-2xl font-black text-base lg:text-xl hover:bg-accent-dark transition-all shadow-[0_10px_20px_rgba(212,176,89,0.3)] hover:shadow-[0_15px_30px_rgba(212,176,89,0.4)] transform hover:-translate-y-1 active:translate-y-0.5 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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
