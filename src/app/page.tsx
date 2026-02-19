'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturesSection from '@/components/FeaturesSection';
import Testimonials from '@/components/Testimonials';
import BuyersSection from '@/components/BuyersSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SituationsSection from '@/components/SituationsSection';
import TrustSection from '@/components/TrustSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

const SectionWrapper = ({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    id={id}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SectionWrapper>
        <HowItWorks />
      </SectionWrapper>
      <SectionWrapper>
        <SituationsSection />
      </SectionWrapper>
      <SectionWrapper>
        <FeaturesSection />
      </SectionWrapper>
      <SectionWrapper>
        <TrustSection />
      </SectionWrapper>
      <SectionWrapper id="about" className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                About True Home Capital
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are a local real estate solutions company based in Dallas, TX. We're a family-owned business and focus on helping homeowners like you find solutions for your problem whether you're going through a foreclosure, can't sell your property, or just need to sell their house for all kinds of reasons.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our goal is to provide you with a fair cash offer for your home, so you can move on with your life without the stress and hassle of listing it on the market.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/couple-50-60.png"
                alt="Happy older couple standing in front of their home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper>
        <FAQSection />
      </SectionWrapper>
      <SectionWrapper>
        <FinalCTASection />
      </SectionWrapper>
      <SectionWrapper>
        <BuyersSection />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
