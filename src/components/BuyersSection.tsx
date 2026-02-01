'use client';

import { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function BuyersSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        criteria: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('cash_buyers')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        criteria: formData.criteria,
                    },
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                criteria: '',
            });
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section id="buyers" className="section-padding bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-brand opacity-10 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-accent opacity-10 blur-[120px]"></div>
            <div className="container-width relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand/20 border border-brand/30 text-brand-light font-medium text-sm mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-brand-light mr-2"></span>
                            For Real Estate Investors
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Looking for Off-Market Deals?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Join our exclusive VIP Buyers List to get access to deeply discounted properties before they hit the market. We find the deals, you make the profit.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Deeply discounted off-market properties',
                                'Direct-to-seller deals (no agent competition)',
                                'Properties in all conditions (Fix & Flip, Rental)',
                                'First look at new inventory'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-brand-light mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Welcome Aboard!</h3>
                                <p className="text-slate-600 mb-6">
                                    You've been added to our VIP Buyers List. Keep an eye on your inbox for our next deal.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-brand font-semibold hover:text-brand-dark underline"
                                >
                                    Register another buyer
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-center">Join Our Buyers List</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="buyer-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="buyer-name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="buyer-email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="buyer-email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                                            placeholder="investor@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="buyer-phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="buyer-phone"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                                            placeholder="(555) 123-4567"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="criteria" className="block text-sm font-medium text-slate-700 mb-1">Buying Criteria</label>
                                        <textarea
                                            id="criteria"
                                            rows={2}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none"
                                            placeholder="Areas, price range, property types..."
                                            value={formData.criteria}
                                            onChange={(e) => setFormData({ ...formData, criteria: e.target.value })}
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-100">
                                            {errorMessage}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Joining...
                                            </>
                                        ) : (
                                            <>
                                                Join VIP List
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
