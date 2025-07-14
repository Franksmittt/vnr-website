'use client';
import React from 'react';
import ProvidedServiceCard from '@/components/ProvidedServiceCard';

const ServicesOverview = () => {
  const services = [
    { title: 'Tax Compliance & Advisory', description: 'Navigate complex tax landscapes with confidence. Our expert advice ensures SARS compliance while minimising your tax burden.', imageUrl: '/images/services/tax-advisory.jpg', alt: "Accountant reviewing tax documents", href: '/services/tax-advisory' },
    { title: 'Wealth & Statutory Reporting', description: 'Gain a clear view of your financial health. We provide meticulous reporting for strategic decision-making and stakeholder confidence.', imageUrl: '/images/services/financial-reporting.jpg', alt: "Financial charts and graphs", href: '/services/financial-reporting' },
    { title: 'Business Valuations', description: 'Understand the true value of your enterprise. Our valuations provide a critical foundation for mergers, acquisitions, and strategic planning.', imageUrl: '/images/services/business-valuations.jpg', alt: 'Team of professionals in a meeting', href: '/services/business-valuations' },
    { title: 'Corporate Secretarial Services', description: 'Ensure flawless governance and CIPC compliance. We manage all registrations, amendments, and annual returns with precision.', imageUrl: '/images/services/secretarial.jpg', alt: "Official documents being signed", href: '/services/secretarial' },
    { title: 'Payroll Administration', description: 'Streamline your payroll operations. Our efficient, compliant service ensures your team is paid accurately and on time, every time.', imageUrl: '/images/services/payroll.jpg', alt: "A person calculating payroll", href: '/services/payroll' },
    { title: 'Cloud Accounting & Tech', description: 'Leverage cutting-edge technology for business efficiency. As Sage Platinum Partners, we integrate powerful solutions like XERO and DEXT.', imageUrl: '/images/services/cloud-accounting.jpg', alt: "Computer screen with code", href: '/services/cloud-accounting' },
  ];

  return (
    <section className="bg-slate-50 font-sans py-16 sm:py-24" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold tracking-wider uppercase">OUR SERVICES</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Facilitating Sustainable Wealth Through Expertise.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <ProvidedServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;