'use client';
import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

const ArticleSidebar = ({ author, relatedPosts }) => (
  <aside className="sticky top-28 space-y-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-slate-800 mb-4">About the Author</h3>
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src={author.imageUrl} alt={author.name} fill sizes="64px" className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-slate-900">{author.name}</p>
          <p className="text-sm text-teal-600 font-semibold">{author.title}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{author.bio}</p>
      <div className="mt-4 flex space-x-3">
        <a href="#" className="text-slate-400 hover:text-blue-700"><Linkedin size={20} /></a>
        <a href="#" className="text-slate-400 hover:text-blue-500"><Twitter size={20} /></a>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Related Insights</h3>
      <ul className="space-y-4">
        {relatedPosts.map(post => (
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

export default ArticleSidebar;