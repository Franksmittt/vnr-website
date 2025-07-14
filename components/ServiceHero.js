'use client';
import React from 'react';
import Image from 'next/image';

const ServiceHero = ({ title, subtitle, imageUrl }) => (
  <section className="relative h-80 bg-slate-800 text-white flex items-center justify-center">
    <Image 
      src={imageUrl} 
      alt={title} 
      fill 
      priority
      className="absolute inset-0 w-full h-full object-cover opacity-20" 
    />
    <div className="relative z-10 text-center px-4">
      <span className="text-teal-400 font-semibold tracking-wider uppercase">VNR Services</span>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2">{title}</h1>
      <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

export default ServiceHero;