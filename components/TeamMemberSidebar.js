'use client';
import React from 'react';
import { Star } from 'lucide-react';

const TeamMemberSidebar = ({ member }) => (
  <aside className="sticky top-28 space-y-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Key Credentials</h3>
      <ul className="space-y-3 text-sm">
        {member.credentials.map((cred, index) => (
          <li key={index} className="flex items-start">
            <Star className="w-4 h-4 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-600">{cred}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Authored Insights</h3>
      <ul className="space-y-4">
        {member.articles.map(post => (
          <li key={post.title}>
            <a href={post.url} className="group">
              <p className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">{post.title}</p>
              <p className="text-xs text-slate-500 mt-1">{post.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default TeamMemberSidebar;