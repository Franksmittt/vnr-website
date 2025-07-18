'use client';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    bgImage: 'https://placehold.co/1920x1080/003366/FFFFFF?text=Legacy',
    alt: 'Confident entrepreneur in a modern office with the Centurion skyline in the background',
    headline: 'Your Strategic Wealth Partner Since 2008',
    subheadline: 'Led by industry pioneers Jannie Venter and Charlie Naudé, we empower South Africa’s top entrepreneurs with unparalleled expertise.',
    cta: 'Meet Our Leadership',
    ctaHref: '/team', // Corrected from /leadership
  },
  {
    bgImage: 'https://placehold.co/1920x1080/164e63/FFFFFF?text=Vision',
    alt: 'A diverse team collaborating around a digital dashboard',
    headline: 'Building Sustainable Wealth Together',
    subheadline: 'With innovative solutions and a commitment to your growth, we guide your business to new heights.',
    cta: 'Explore Our Services',
    ctaHref: '/services',
  },
  {
    bgImage: 'https://placehold.co/1920x1080/b45309/FFFFFF?text=Empower',
    alt: 'An entrepreneur celebrating a milestone achievement at golden hour',
    headline: 'Unleash Your Business Potential',
    subheadline: 'Join a community of South Africa’s fastest-growing companies, driven by our expertise and shared values.',
    cta: 'Request a Consultation',
    ctaHref: '/contact',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${s.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={i !== current}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
            {i === current && (
              <div className="max-w-4xl animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider">
                  {s.headline}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                  {s.subheadline}
                </p>
                <a
                  href={s.ctaHref}
                  className="mt-8 inline-block px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-md transition-transform hover:scale-105"
                >
                  {s.cta}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-all ${
              current === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;