'use client';
import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const KeyTakeaways = ({ takeaways }) => (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
      <CheckCircle className="w-6 h-6 mr-3 text-blue-500" />
      Key Takeaways
    </h3>
    <ul className="space-y-2 text-slate-700">
      {takeaways.map((item, index) => (
        <li key={index} className="flex items-start">
          <ChevronRight className="w-5 h-5 mr-2 text-teal-500 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default KeyTakeaways;