'use client';

import React from 'react';
import Image from 'next/image'; // IMPORT: Next.js component for optimized images
import Link from 'next/link';   // IMPORT: Next.js component for optimized navigation

// SEO & PERFORMANCE: Using local, optimized images and adding profileUrl for internal linking.
const leadershipData = [
  {
    id: 'jv',
    name: 'Jannie Venter',
    title: 'Co-Founder & Director',
    creds: 'Professional Accountant (SA), Tax Specialist',
    narrative: 'Jannie’s distinguished taxation mastery fuels strategies that elevate your financial precision.',
    photo: '/images/team/jannie-venter.webp', // Assumes local image exists
    profileUrl: '/team/jannie-venter',
  },
  {
    id: 'cn',
    name: 'Charlie Naudé',
    title: 'Co-Founder & Director',
    creds: 'Past SAIPA Vice-Chairman',
    narrative: 'Charlie’s national leadership and SAIPA experience ignite a path to sustainable growth for your business.',
    photo: '/images/team/charlie-naude.webp', // Assumes local image exists
    profileUrl: '/team/charlie-naude',
  },
  {
    id: 'hl',
    name: 'Henry Landsberg',
    title: 'Accounting & Tax Manager',
    creds: 'Honours in Taxation, Tax Practitioner',
    narrative: 'Henry’s award-winning expertise in accounting and tax crafts solutions to unlock your business potential.',
    photo: '/images/team/henry-landsberg.webp', // Assumes local image exists
    profileUrl: '/team/henry-landsberg',
  },
];

const LeadershipSection = () => {
  // SEO: This JSON-LD schema explicitly defines the leadership team for search engines,
  // helping to establish expertise and authority, which can lead to rich results.
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "VNR Leadership Team",
    "description": "The expert leadership team at VNR, featuring co-founders and managers with extensive experience in South African tax and accounting.",
    "itemListElement": leadershipData.map((leader, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Person",
        "name": leader.name,
        "jobTitle": leader.title,
        "description": leader.narrative,
        "image": `https://www.vnr.co.za${leader.photo}`,
        "url": `https://www.vnr.co.za${leader.profileUrl}`,
        "worksFor": {
          "@type": "Organization",
          "name": "VNR"
        }
      }
    }))
  };

  return (
    // ACCESSIBILITY & SEO: Using semantic <section> with aria-labelledby for context.
    <section className="bg-white py-24" aria-labelledby="leadership-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* SEO: Using a specific ID for the heading allows aria-labelledby to reference it. */}
          <h2 id="leadership-heading" className="text-blue-800 font-bold text-3xl uppercase tracking-wider">
            Unparalleled Expertise Guiding Your Success
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Our leaders, with decades of industry-shaping experience at SAIPA, deliver insights that transform your
            entrepreneurial journey.
          </p>
        </div>

        {/* SEO: Using a <ul> for a list of people is more semantically correct than a <div>. */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leadershipData.map((l) => (
            // ACCESSIBILITY: Each person is a list item.
            <li key={l.id}>
              {/* SEO: The entire card is a link, creating a strong internal link to the profile page. */}
              <Link href={l.profileUrl} className="group relative block rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {/* PERFORMANCE: Replaced <img> with optimized <Image> component. */}
                  <Image
                    src={l.photo}
                    alt={`Professional profile of ${l.name}, ${l.title} at VNR.`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-bold text-2xl">{l.name}</h3>
                  <p className="text-blue-200">{l.title}</p>
                </div>

                <div className="absolute inset-0 bg-white/95 p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center text-center">
                  <h3 className="font-bold text-2xl text-blue-800">{l.name}</h3>
                  <p className="text-blue-600 font-semibold my-2">{l.creds}</p>
                  <p className="text-gray-600 text-sm">{l.narrative}</p>
                  <span className="mt-4 text-sm font-bold text-blue-700 underline">View Full Profile</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LeadershipSection;
