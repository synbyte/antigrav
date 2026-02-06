'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
    {
        name: 'Sarah Johnson',
        location: 'Dallas, TX',
        rating: 5,
        text: "I needed to sell my inherited property quickly and didn't want to deal with repairs. True Home Capital gave me a fair cash offer and we closed in 10 days. Highly recommend!",
        image: '/testimonial-sarah.png',
    },
    {
        name: 'Michael Chen',
        location: 'Houston, TX',
        rating: 5,
        text: "Professional, transparent, and fast. They did exactly what they said they would do. No hidden fees or surprises at closing.",
        initials: 'MC',
    },
    {
        name: 'Emily Rodriguez',
        location: 'Austin, TX',
        rating: 5,
        text: "The process was so easy. I was facing foreclosure and they helped me save my credit and walk away with cash in my pocket.",
        initials: 'ER',
    },
];

export default function Testimonials() {
    return (
        <section id="reviews" className="section-padding bg-gradient-to-br from-brand to-brand-dark text-white">
            <div className="container-width">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-blue-100 font-medium">
                        We've helped hundreds of homeowners sell their houses fast. Here's what they have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                {review.image ? (
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-white/20 group-hover:border-accent transition-colors">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-black text-xl mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                        {review.initials}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-extrabold text-white text-lg">{review.name}</h4>
                                    <p className="text-sm text-blue-200 font-medium">{review.location}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-accent fill-current mr-1" />
                                ))}
                            </div>
                            <p className="text-white/90 italic leading-relaxed text-lg">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
