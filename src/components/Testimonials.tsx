'use client';

import { Star } from 'lucide-react';

const reviews = [
    {
        name: 'Sarah Johnson',
        location: 'Dallas, TX',
        rating: 5,
        text: "I needed to sell my inherited property quickly and didn't want to deal with repairs. SwiftHomeBuyers gave me a fair cash offer and we closed in 10 days. Highly recommend!",
    },
    {
        name: 'Michael Chen',
        location: 'Houston, TX',
        rating: 5,
        text: "Professional, transparent, and fast. They did exactly what they said they would do. No hidden fees or surprises at closing.",
    },
    {
        name: 'Emily Rodriguez',
        location: 'Austin, TX',
        rating: 5,
        text: "The process was so easy. I was facing foreclosure and they helped me save my credit and walk away with cash in my pocket.",
    },
];

export default function Testimonials() {
    return (
        <section id="reviews" className="section-padding bg-white">
            <div className="container-width">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-slate-600">
                        We've helped hundreds of homeowners sell their houses fast. Here's what they have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-slate-900">{review.name}</h4>
                                <p className="text-sm text-slate-500">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
