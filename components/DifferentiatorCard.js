'use client';
import React from 'react';

const DifferentiatorCard = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
    <div className="mx-auto bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm">{children}</p>
  </div>
);

export default DifferentiatorCard;