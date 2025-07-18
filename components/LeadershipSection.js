'use client';
import React from 'react';
import Image from 'next/image'; // Import the Image component

const leadershipData = [
  {
    id: 'jv',
    name: 'Jannie Venter',
    title: 'Co-Founder',
    creds: 'Professional Accountant (SA), Tax Specialist',
    narrative: 'Jannie’s distinguished taxation mastery fuels strategies that elevate your financial precision.',
    photo: 'https://placehold.co/400x400/ffffff/1E40AF?text=JV',
  },
  {
    id: 'cn',
    name: 'Charlie Naudé',
    title: 'Co-Founder & Director',
    creds: 'Past SAIPA Vice-Chairman',
    narrative: 'Charlie’s national leadership ignites a path to sustainable growth for your business.',
    photo: 'https://placehold.co/400x400/ffffff/1E40AF?text=CN',
  },
  {
    id: 'hl',
    name: 'Henry Landsberg',
    title: 'Accounting & Tax Manager',
    creds: 'Honours in Taxation, Tax Practitioner',
    narrative: 'Henry’s award-winning expertise crafts solutions to unlock your business potential.',
    photo: 'https://placehold.co/400x400/ffffff/1E40AF?text=HL',
  },
];

const LeadershipSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-blue-800 font-bold text-3xl uppercase tracking-wider">
          Unparalleled Expertise Guiding Your Success
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          Our leaders, with decades of industry-shaping experience at SAIPA, deliver insights that transform your
           entrepreneurial journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {leadershipData.map((l) => (
          <div key={l.id} className="group relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              {/* FIX: Replaced <img> with <Image /> */}
              <Image src={l.photo} alt={`${l.name} profile`} fill sizes="33vw" className="w-full h-full object-cover" />
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
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;