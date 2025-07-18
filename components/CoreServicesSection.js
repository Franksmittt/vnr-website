'use client';
import React from 'react';
import ServiceCard from './ServiceCard';

const CoreServicesSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Facilitating <span className="text-blue-600">Sustainable Wealth</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          Our mission is to be your strategic partner. We leverage relevant knowledge and cutting-edge technology to help you grow your business, increase profit, improve cash flow, minimise tax, protect your assets, and leave a lasting legacy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          imageUrl="/images/services/tax-compliance.jpg"
          alt="Tax compliance services illustration"
          title="TAX COMPLIANCE"
          href="/services/tax-advisory"
        >
          Navigate the complexities of tax with confidence, ensuring full compliance while optimising your tax position.
        </ServiceCard>
        <ServiceCard
          imageUrl="/images/services/financial-reporting.jpg"
          alt="Financial reporting services illustration"
          title="FINANCIAL REPORTING"
          href="/services/financial-reporting"
        >
          Gain a clear view of your financial health with accurate, insightful statements that serve as your blueprint for growth.
        </ServiceCard>
        <ServiceCard
          imageUrl="/images/services/business-valuations.jpg"
          alt="Business valuation services illustration"
          title="BUSINESS VALUATIONS"
          href="/services/business-valuations"
        >
          Understand the true value of your enterprise with our expert valuation services, critical for strategic planning and transactions.
        </ServiceCard>
        <ServiceCard
          imageUrl="/images/services/secretarial.jpg"
          alt="Company secretarial services illustration"
          title="COMPANY SECRETARIAL"
          href="/services/secretarial"
        >
          Ensure your business meets all its statutory and regulatory obligations with our comprehensive secretarial services.
        </ServiceCard>
      </div>
    </div>
  </section>
);

export default CoreServicesSection;