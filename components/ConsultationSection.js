'use client';
import React from 'react';

const ConsultationSection = () => (
  <section className="bg-gradient-to-r from-blue-800 to-teal-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">REQUEST A CONSULTATION</h2>
        <p className="text-blue-200">
          If you would like to speak to one of our strategic advisors about how we can help your business achieve its potential, please fill in the form and we will contact you.
        </p>
      </div>
      <form className="grid grid-cols-1 gap-4 bg-white/10 p-8 rounded-lg">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="consultation-topic" className="sr-only">I would like to discuss:</label>
            <select
              id="consultation-topic"
              name="consultation-topic"
              className="w-full p-3 bg-white/90 text-gray-700 rounded-md focus:ring-2 focus:ring-teal-400"
            >
              <option>I would like to discuss…</option>
              <option>Tax & Compliance</option>
              <option>Wealth & Estate Planning</option>
              <option>Business Valuations</option>
              <option>Other Advisory Services</option>
            </select>
          </div>
          <input
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="w-full p-3 bg-white/90 text-gray-700 rounded-md focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <input
          type="tel"
          placeholder="Your Phone Number"
          aria-label="Your Phone Number"
          className="w-full p-3 bg-white/90 text-gray-700 rounded-md focus:ring-2 focus:ring-teal-400"
        />
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-md transition-transform hover:scale-105"
        >
          Request Consultation
        </button>
      </form>
    </div>
  </section>
);

export default ConsultationSection;