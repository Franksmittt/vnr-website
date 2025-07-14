'use client';
import React from 'react';
import Image from 'next/image';

// 1. Add 'href' to the list of props the component accepts
const ProvidedServiceCard = ({ imageUrl, alt, title, description, href }) => (
  <div className="bg-white rounded-lg overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col">
    <div className="overflow-hidden h-48 relative">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      {/* 2. Use the 'href' prop here instead of "#" */}
      <a href={href} className="text-blue-600 font-semibold text-sm hover:underline self-start mt-auto">
        Explore Service &rarr;
      </a>
    </div>
  </div>
);

export default ProvidedServiceCard;