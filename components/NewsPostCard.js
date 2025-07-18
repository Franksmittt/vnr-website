'use client';
import React from 'react';
import Image from 'next/image'; // Import the Image component

const NewsPostCard = ({ imageUrl, date, month, title, description }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group">
    <div className="relative overflow-hidden h-56"> {/* Added h-56 for a fixed height container */}
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-4 left-4 bg-blue-800 bg-opacity-80 text-white text-center rounded-md px-3 py-2">
        <span className="block text-2xl font-bold">{date}</span>
        <span className="block text-xs uppercase">{month}</span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-teal-600 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  </div>
);

export default NewsPostCard;