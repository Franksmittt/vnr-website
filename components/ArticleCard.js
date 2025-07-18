'use client';
import React from 'react';
import Image from 'next/image';

const ArticleCard = ({ article }) => (
  <a href={article.url} className="block group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <div className="relative h-48">
      <Image src={article.imageUrl} alt={article.title} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
    </div>
    <div className="p-6">
      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">{article.category}</span>
      <h3 className="mt-2 text-lg font-bold text-slate-800 group-hover:text-blue-800 transition-colors duration-300">{article.title}</h3>
      <div className="mt-4 flex items-center text-xs">
        <div className="relative w-8 h-8 rounded-full mr-2">
          <Image
            src={article.author.imageUrl}
            alt={`Profile picture of ${article.author.name}`}
            fill
            sizes="32px"
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold text-slate-700">{article.author.name}</p>
          <p className="text-slate-500">{article.date}</p>
        </div>
      </div>
    </div>
  </a>
);

export default ArticleCard;