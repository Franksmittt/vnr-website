'use client';
import React from 'react';
import ProvidedServiceCard from './ProvidedServiceCard';

const servicesData = [
  {
    title: 'Payroll Administration',
    description: 'Full-service payroll solutions, ensuring your team is paid accurately and on time.',
    imageUrl: '/images/services/payroll.jpg', // Using local image
    alt: 'Payroll team processing payslips in the office',
    href: '/services/payroll' // Added link
  },
  {
    title: 'Technology Advisory',
    description: 'As Sage Platinum Partners, we help you implement modern cloud accounting systems.',
    imageUrl: '/images/services/cloud-accounting.jpg', // Using local image
    alt: 'Accountant analysing cloud-based dashboards on a laptop',
    href: '/services/cloud-accounting' // Added link
  },
  {
    title: 'Estate & Legacy Planning',
    description: 'Strategic advice and services to protect your assets and ensure a seamless transfer of wealth.',
    imageUrl: '/images/services/estate-legacy-planning.jpg', // Using local image
    alt: 'Family reviewing legacy-planning documents with advisor',
    href: '/services/estate-legacy-planning' // Added link
  },
  {
    title: 'CIPC Registrations',
    description: 'From new company formations, we manage the entire lifecycle of your entity with the CIPC.',
    imageUrl: '/images/services/secretarial.jpg', // Using local image
    alt: 'Entrepreneur signing company-registration papers',
    href: '/services/secretarial' // Added link
  },
  {
    title: 'Tax Compliance & Advisory',
    description: 'Expert assistance with objections and other disputes to resolve issues with SARS.',
    imageUrl: '/images/services/tax-advisory.jpg', // Using local image
    alt: 'Advisor discussing SARS dispute documents with client',
    href: '/services/tax-advisory' // Added link
  },
  {
    title: 'Business Valuations',
    description: 'Beyond annual statements, we provide regular management accounts for your strategic decisions.',
    imageUrl: '/images/services/business-valuations.jpg', // Using local image
    alt: 'Business owner reviewing monthly management accounts',
    href: '/services/business-valuations' // Added link
  },
];

const ServicesWeProvideSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800">A Comprehensive Suite of Services</h2>
        <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
          Expertise across your entire business lifecycle
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((s, i) => (
          <ProvidedServiceCard key={i} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesWeProvideSection;