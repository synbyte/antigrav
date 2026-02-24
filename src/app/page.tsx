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
import { CopilotPopup } from "@copilotkit/react-ui";
import { CopilotKitCSSProperties } from '@copilotkit/react-ui';
import { useCopilotReadable } from '@copilotkit/react-core';

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
  const instructions = "You are a helpful assistant for True Home Capital based in Dallas, TX. Your goal is to help users sell their house to us for cash. Be friendly, professional, and concise. Do NOT make suggestions, if person asks if they can sell their house, tell them to submit contact form.";

  const websiteContext = `
About True Home Capital: 
We are a family-owned local real estate solutions company based in Dallas, TX. We buy houses for cash in any condition. Our goal is to provide a fair cash offer so homeowners can move on without the hassle of listing on the market.

How It Works:
1. Submit Your Info: Fill out the short form with your property address and contact details. Takes < 2 mins.
2. Get a Cash Offer: We review your property and present a fair, no-obligation all-cash offer within 24 hours.
3. Choose Your Date: You pick the closing date. Close in as little as 7-14 days or up to 6 months.

Why Sell To Us vs Traditional Agent:
- Commissions & Fees: None (Save 6%) vs 6% on average
- Closing Costs: We Pay All Costs vs 2% on average
- Inspection/Appraisal: None (Cash Offer) vs Yes, sale often at risk
- Days Until Sold: 7-14 Days vs 90+ Days
- Showings: 1 (Just Us) vs Multiple Open Houses
- Repairs/Cleaning Needed: None (We Buy As-Is) vs Yes, deep cleaning required
- Competitive Offers: We'll Beat Other Offers

Situations We Buy In:
Foreclosure, Expensive Repairs, Downsizing, Bankruptcy, Inherited Home (probate), Job Loss, Fire/Flood Damage, Divorce, Bad Tenants, Relocating, Retirement, Health Issues. Every Situation Welcome.

Frequently Asked Questions:
- Is selling for cash a good idea? Ideal if you value speed and convenience. Avoid repairs, showings, financing wait.
- Legitimate? Yes, we are family-owned, transparent process, use reputable title companies. Clear contracts.
- Close quickly? As quickly as 7 days or up to 6 months.
- Make repairs/clean? Absolutely not. Buy "as-is" even with foundation issues, fire damage, hoarding. Don't even need to remove belongings.
- How is offer determined? Consider location, condition, size, market conditions. Will try to beat other offers.
  `;

  useCopilotReadable({
    description: "System instructions and role",
    value: instructions,
  });

  useCopilotReadable({
    description: "True Home Capital website context, process, policies, FAQ, and comparison",
    value: websiteContext,
  });

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
      <div style={{ "--copilot-kit-primary-color": "#4a6fa5" } as CopilotKitCSSProperties} >
        <CopilotPopup
          instructions={instructions}
          labels={{
            title: "True Home Capital",
            initial: "Can I help you sell your house?",
          }}
        /></div>
    </main>
  );
}
