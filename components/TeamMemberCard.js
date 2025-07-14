'use client';
import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const TeamMemberCard = ({ member }) => (
  <div className="bg-white rounded-lg shadow-lg text-center overflow-hidden group">
    <div className="relative h-80">
      <Image src={member.imageUrl} alt={member.name} fill sizes="33vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
      <p className="text-teal-600 font-semibold mt-1">{member.title}</p>
      <p className="text-sm text-slate-500 mt-4 h-24">{member.bio}</p>
      <a href={member.profileUrl} className="mt-6 inline-flex items-center px-5 py-2 border border-slate-300 text-sm font-medium rounded-full text-slate-700 bg-white hover:bg-slate-100">
        View Full Profile
      </a>
    </div>
  </div>
);

export default TeamMemberCard;