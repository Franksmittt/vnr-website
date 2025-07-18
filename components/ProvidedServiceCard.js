'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProvidedServiceCard = ({ imageUrl, alt, title, description, href }) => (
  <div
    className="bg-white rounded-lg overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col focus-within:ring-2 focus-within:ring-teal-500"
    role="article"
    aria-labelledby={`service-${href.replace(/\//g, '-')}`}
  >
    <div className="relative overflow-hidden h-48">
      <Link href={href}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          quality={80}
        />
      </Link>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 id={`service-${href.replace(/\//g, '-')}`} className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        <Link href={href} className="hover:underline focus:underline">
          {title}
        </Link>
      </h3>
      <p className="text-gray-900 text-sm mb-4 flex-grow">{description}</p>
      <Link href={href} className="text-blue-600 font-semibold text-sm hover:underline self-start mt-auto focus:underline">
        Explore Service →
      </Link>
    </div>
  </div>
);

export default ProvidedServiceCard;