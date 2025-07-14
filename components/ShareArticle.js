'use client';
import React from 'react';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const ShareArticle = ({ title, url }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="mt-12 flex items-center">
      <p className="text-sm font-semibold text-slate-700 mr-4">Share this article:</p>
      <div className="flex space-x-4">
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-transform hover:scale-110">
          <Linkedin size={22} />
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-transform hover:scale-110">
          <Twitter size={22} />
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-800 transition-transform hover:scale-110">
          <Facebook size={22} />
        </a>
        <a href={`mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`} className="text-slate-400 hover:text-slate-600 transition-transform hover:scale-110">
          <Mail size={22} />
        </a>
      </div>
    </div>
  );
};

export default ShareArticle;