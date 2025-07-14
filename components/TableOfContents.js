'use client';
import React from 'react';

const TableOfContents = ({ sections }) => (
  <div className="bg-slate-100 p-6 rounded-lg my-8">
    <h3 className="text-lg font-bold text-slate-800 mb-3">In This Article</h3>
    <ul className="space-y-2">
      {sections.map(section => (
        <li key={section.id}>
          <a href={`#${section.id}`} className="text-teal-600 hover:text-teal-700 hover:underline flex items-center text-sm">
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default TableOfContents;