'use client';
import React from 'react';
import Image from 'next/image';

const SmallNewsItem = ({ imageUrl, title, date }) => (
  <div className="flex items-center space-x-4 group">
    {/* FIX: Replaced <img> with <Image />, using width and height props */}
    <Image
      src={imageUrl}
      alt={title}
      width={80} // w-20 = 5rem = 80px
      height={80} // h-20 = 5rem = 80px
      className="object-cover rounded-md flex-shrink-0"
    />
    <div>
      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{date}</p>
    </div>
  </div>
);

export default SmallNewsItem;