'use client';
import React from 'react';
import ProvidedServiceCard from './ProvidedServiceCard';

const servicesData = [
  {
    title: 'Payroll Administration South Africa',
    description: 'Full-service payroll solutions ensuring accurate and timely payments for your team in South Africa.',
    imageUrl: '/images/services/payroll.webp',
    alt: 'VNR payroll specialist processing payslips in a Centurion office',
    href: '/services/payroll',
  },
  {
    title: 'Technology & Cloud Accounting Solutions',
    description: 'As Sage Platinum Partners, we implement modern cloud accounting systems like XERO and DEXT for South African businesses.',
    imageUrl: '/images/services/cloud-accounting.webp',
    alt: 'Accountant analyzing cloud-based dashboards for a South African client',
    href: '/services/cloud-accounting',
  },
  {
    title: 'Estate & Legacy Planning Services',
    description: 'Strategic advice and trust services to protect your assets and ensure seamless wealth transfer for future generations.',
    imageUrl: '/images/services/estate-legacy-planning.webp',
    alt: 'Family reviewing legacy-planning documents with a VNR financial advisor',
    href: '/services/estate-legacy-planning',
  },
  {
    title: 'CIPC Company Secretarial Services',
    description: 'From new company formations to annual returns, we manage your CIPC compliance needs in South Africa.',
    imageUrl: '/images/services/secretarial.webp',
    alt: 'Entrepreneur signing company registration papers with VNR guidance',
    href: '/services/secretarial',
  },
  {
    title: 'SARS Tax Compliance & Advisory',
    description: 'Expert assistance with SARS objections, disputes, and advisory for full tax compliance in South Africa.',
    imageUrl: '/images/services/tax-advisory.webp',
    alt: 'VNR tax advisor discussing SARS dispute documents with a client in Gauteng',
    href: '/services/tax-advisory',
  },
  {
    title: 'Business Valuations & Management Accounts',
    description: 'Accurate valuations and regular management accounts to drive strategic decisions for your South African business.',
    imageUrl: '/images/services/business-valuations.webp',
    alt: 'Business owner reviewing management accounts prepared by VNR',
    href: '/services/business-valuations',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'VNR Financial and Advisory Services',
  description: 'A comprehensive suite of expert financial services for businesses in South Africa, provided by VNR.',
  itemListElement: servicesData.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.description,
      url: `https://www.vnr.co.za${service.href}`,
      image: `https://www.vnr.co.za${service.imageUrl}`,
      serviceType: service.title.replace(/\s+/g, ''),
      provider: {
        '@type': 'Organization',
        name: 'VNR',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.vnr.co.za/images/logo.png',
        },
      },
    },
  })),
};

const ServicesWeProvideSection = () => (
  <section className="bg-white py-20" aria-labelledby="services-heading" role="region">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 id="services-heading" className="text-3xl font-bold text-gray-800">
          Expert Financial & Advisory Services in South Africa
        </h2>
        <p className="text-sm text-gray-900 uppercase tracking-widest mt-1">
          Comprehensive Solutions for Your Business Lifecycle
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
        {servicesData.map((service) => (
          <li key={service.href} className="flex">
            <ProvidedServiceCard {...service} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ServicesWeProvideSection;