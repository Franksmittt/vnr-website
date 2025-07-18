'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    bgImage: '/images/slider/legacy.webp',
    alt: 'Confident entrepreneur in a modern office with the Centurion skyline in the background',
    headline: 'Your Strategic Wealth Partner Since 2008',
    subheadline: 'Led by industry pioneers Jannie Venter and Charlie Naudé, we empower South Africa’s top entrepreneurs with unparalleled expertise.',
    cta: 'Meet Our Leadership',
    ctaHref: '/team',
  },
  {
    bgImage: '/images/slider/tax.webp',
    alt: 'A diverse team collaborating around a digital dashboard',
    headline: 'Building Sustainable Wealth Together',
    subheadline: 'With innovative solutions and a commitment to your growth, we guide your business to new heights.',
    cta: 'Explore Our Services',
    ctaHref: '/services',
  },
  {
    bgImage: '/images/slider/cloud.webp',
    alt: 'An entrepreneur celebrating a milestone achievement at golden hour',
    headline: 'Unleash Your Business Potential',
    subheadline: 'Join a community of South Africa’s fastest-growing companies, driven by our expertise and shared values.',
    cta: 'Request a Consultation',
    ctaHref: '/contact',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-slate-900" role="region" aria-label="Hero slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
          }`}
          // This hides the inactive slides from screen readers
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={slide.bgImage}
            alt={slide.alt}
            fill
            // This tells the browser how large the image will be, which helps it load faster.
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
            // This is the most critical LCP fix: load the first image immediately.
            priority={index === 0}
            // All other images will be lazy-loaded.
            loading={index === 0 ? 'eager' : 'lazy'}
            quality={75}
          />
          {/* A slightly darker overlay for better text contrast, fixing another accessibility issue. */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <div
              className={`max-w-4xl transition-all duration-700 ease-out ${
                index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-3xl md:text-6xl font-black uppercase tracking-wider leading-tight drop-shadow-lg">
                {slide.headline}
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                {slide.subheadline}
              </p>
              <a
                href={slide.ctaHref}
                className="mt-8 inline-block px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-md transition-transform hover:scale-105"
                // ACCESSIBILITY FIX: This removes the link from the tab order when the slide is not active.
                tabIndex={index === currentSlide ? 0 : -1}
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;