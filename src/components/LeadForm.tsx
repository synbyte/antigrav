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
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Get Your Cash Offer!
                </h3>
                <p className="text-slate-600">
                    No fees. No repairs. No obligation.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
                        Property Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                        placeholder="123 Main St, City, State"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message (Optional)
                    </label>
                    <textarea
                        id="message"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none"
                        placeholder="Any details about the property..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    className="w-full bg-brand text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            Get My Fair Cash Offer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center text-slate-500 text-sm mt-4">
                    <Lock className="w-4 h-4 mr-1.5" />
                    <span>Your information is 100% secure</span>
                </div>
            </form>
        </div>
    );
}
