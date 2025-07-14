'use client';
import React from 'react';
import { Award, Zap, Cloud } from 'lucide-react';
import DifferentiatorCard from '@/components/DifferentiatorCard';

const WhyChooseVnr = () => (
  <section className="bg-white font-sans py-16 sm:py-24" aria-labelledby="why-us-heading">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-blue-700 font-semibold tracking-wider uppercase">THE VNR ADVANTAGE</span>
        <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Why Partner With Us?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <DifferentiatorCard icon={<Award size={32} />} title="Unparalleled Expertise">
          Our directors don't just follow industry standards; their leadership roles at SAIPA mean they help set them. This gives our clients unmatched insight.
        </DifferentiatorCard>
        <DifferentiatorCard icon={<Zap size={32} />} title="Certified Technology Partner">
          As Sage Platinum Partners, we are certified experts in deploying and managing the industry's leading financial software to optimize your business.
        </DifferentiatorCard>
        <DifferentiatorCard icon={<Cloud size={32} />} title="Modern Digital Workflow">
          We leverage a powerful, modern tech stack including XERO and DEXT to ensure your financial operations are efficient, streamlined, and always accessible.
        </DifferentiatorCard>
      </div>
    </div>
  </section>
);

export default WhyChooseVnr;