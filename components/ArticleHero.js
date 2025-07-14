'use client';
import React from 'react';
import { Clock, UserCircle } from 'lucide-react';
import Image from 'next/image';

const ArticleHero = ({ article }) => (
  <div className="relative bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="absolute inset-0">
      <Image 
        src={article.imageUrl} 
        alt={article.title} 
        fill
        priority
        className="w-full h-full object-cover opacity-20" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800 mix-blend-multiply"></div>
    </div>
    <div className="relative max-w-lg mx-auto lg:max-w-4xl">
      <div className="text-center">
        <a href="#" className="text-sm font-semibold text-teal-400 uppercase tracking-wider">{article.category}</a>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{article.title}</h1>
        <div className="mt-6 flex justify-center items-center text-sm text-slate-300">
          <div className="flex items-center">
            <UserCircle className="w-5 h-5 mr-2" />
            <span>By {article.author.name}</span>
          </div>
          <span className="mx-3">&middot;</span>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleHero;