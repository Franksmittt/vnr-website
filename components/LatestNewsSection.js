'use client';
import React from 'react';
import NewsPostCard from './NewsPostCard';
import SmallNewsItem from './SmallNewsItem';

const latestNewsData = [
    {
        date: '15',
        month: 'JUL',
        title: 'Navigating the Latest SARS Tax Changes',
        description: 'Understand the new tax regulations for 2025 and how they impact your business and personal wealth strategy.',
        imageUrl: 'https://placehold.co/600x400/e5e7eb/111827?text=Tax+Changes',
    },
    {
        date: '08',
        month: 'JUL',
        title: 'Building Sustainable Wealth for the Future',
        description: 'Our philosophy moves beyond short-term gains, focusing on asset protection and creating a lasting financial legacy.',
        imageUrl: 'https://placehold.co/600x400/d1d5db/374151?text=Wealth',
    },
];

const smallNewsData = [
    {
        title: 'The Importance of a Business Valuation',
        date: 'July 02, 2025',
        imageUrl: 'https://placehold.co/100x100/6b7280/ffffff?text=Valuation',
    },
    {
        title: 'CIPC Compliance: Are You Up to Date?',
        date: 'June 28, 2025',
        imageUrl: 'https://placehold.co/100x100/4b5563/ffffff?text=CIPC',
    },
    {
        title: 'Why Your Trust Structure Matters',
        date: 'June 21, 2025',
        imageUrl: 'https://placehold.co/100x100/374151/ffffff?text=Trust',
    },
    {
        title: 'Leveraging Technology for Financials',
        date: 'June 16, 2025',
        imageUrl: 'https://placehold.co/100x100/1f2937/ffffff?text=Tech',
    },
];

const LatestNewsSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Latest Insights & News</h2>
        <div className="w-20 h-1 bg-teal-500 mt-2" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {latestNewsData.map((p, i) => (
            <NewsPostCard key={i} {...p} />
          ))}
        </div>
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
          {smallNewsData.map((s, i) => (
            <SmallNewsItem key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LatestNewsSection;