'use client';
import React from 'react';
import { Linkedin, Mail as MailIcon } from 'lucide-react';

const TeamMemberHero = ({ member }) => (
  <div className="bg-slate-800">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <img src={member.imageUrl} alt={member.name} className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover mx-auto border-4 border-slate-700 shadow-2xl" />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{member.name}</h1>
          <p className="mt-2 text-xl md:text-2xl font-semibold text-teal-400">{member.title}</p>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto md:mx-0">{member.intro}</p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${member.email}`} className="text-slate-300 hover:text-white">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamMemberHero;