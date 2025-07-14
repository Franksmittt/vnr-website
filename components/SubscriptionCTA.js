'use client';
import React from 'react';

const SubscriptionCTA = () => (
  <div className="bg-slate-50">
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-blue-800 to-teal-700 rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-extrabold text-white">Get Expert Insights Delivered to Your Inbox</h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">Subscribe to our newsletter for the latest articles, regulatory updates, and strategic advice directly from our experts.</p>
        <form className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input type="email" placeholder="Enter your email address" required className="flex-grow w-full px-5 py-3 rounded-md border-0 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-inset focus:ring-white" />
          <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-bold text-blue-800 bg-white hover:bg-blue-100 transition-colors">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
);

export default SubscriptionCTA;