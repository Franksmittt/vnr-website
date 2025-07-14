'use client';
import React from 'react';
import Image from 'next/image';
import { UserCheck } from 'lucide-react';

const LeadExpertCard = ({ name, title, imageUrl, children }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
    <h3 className="text-lg font-bold text-slate-800 mb-4 tracking-wide">Lead Expert</h3>
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        <Image src={imageUrl} alt={name} fill sizes="64px" className="object-cover" />
      </div>
      <div className="font-bold text-slate-900">
        {name}
        <p className="text-sm text-teal-600 font-semibold">{title}</p>
      </div>
    </div>
    <p className="text-sm text-slate-500 mb-6">{children}</p>
    <a href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800">
      <UserCheck className="w-5 h-5 mr-2" /> Consult with {name.split(' ')[0]}
    </a>
  </div>
);

export default LeadExpertCard;