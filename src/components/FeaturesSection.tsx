'use client';

import { X, Check } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10"></div>
            <div className="container-width relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Why Sell To Us?
                    </h2>
                    <p className="text-lg text-slate-600">
                        See how selling to True Home Capital compares to listing with a traditional real estate agent.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid grid-cols-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-6 text-sm md:text-lg font-bold">
                        <div className="col-span-1">Feature</div>
                        <div className="col-span-1 text-center text-accent">True Home Capital</div>
                        <div className="col-span-1 text-center text-slate-400 font-medium">Traditional Agent</div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {[
                            { feature: 'Commissions & Fees', us: 'None (Save 6%)', agent: '6% on average' },
                            { feature: 'Closing Costs', us: 'We Pay All Costs', agent: '2% on average' },
                            { feature: 'Inspection & Financing Contingency', us: 'None', agent: 'Yes, up to 15% fall through' },
                            { feature: 'Appraisal Needed', us: 'None (Cash Offer)', agent: 'Yes, sale is often at risk' },
                            { feature: 'Average Days Until Sold', us: '7-14 Days', agent: '90+ Days' },
                            { feature: 'Number of Showings', us: '1 (Just Us)', agent: 'Multiple Open Houses' },
                            { feature: 'Closing Date', us: 'You Choose', agent: '30-60 days after offer' },
                            { feature: 'Repairs Needed', us: 'None (We Buy As-Is)', agent: 'Yes, usually required' },
                            { feature: 'Cleaning Required', us: 'None', agent: 'Yes, deep cleaning' },
                            { feature: 'Competitive Offers', us: 'We\'ll Beat Other Offers', agent: 'Depends on market' },
                        ].map((row, index) => (
                            <div key={index} className="grid grid-cols-3 p-4 md:p-6 hover:bg-slate-50 transition-colors">
                                <div className="col-span-1 font-medium text-slate-900 flex items-center">
                                    {row.feature}
                                </div>
                                <div className="col-span-1 flex justify-center items-center text-center font-semibold text-green-600 bg-green-50/50 rounded-lg mx-2">
                                    {row.us.includes('None') || row.us.includes('We Pay') || row.us.includes('7-14') || row.us.includes('1') || row.us.includes('You Choose') ? (
                                        <span className="flex items-center"><Check className="w-4 h-4 mr-1.5" /> {row.us}</span>
                                    ) : (
                                        row.us
                                    )}
                                </div>
                                <div className="col-span-1 flex justify-center items-center text-center text-red-500">
                                    {row.agent.includes('None') ? (
                                        <span className="flex items-center"><Check className="w-4 h-4 mr-1.5" /> {row.agent}</span>
                                    ) : (
                                        <span className="flex items-center"><X className="w-4 h-4 mr-1.5" /> {row.agent}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
