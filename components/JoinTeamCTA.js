'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';

const JoinTeamCTA = () => (
  <div className="bg-slate-50">
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-blue-800 to-teal-700 rounded-2xl shadow-xl p-8 md:p-12 text-center flex flex-col md:flex-row md:text-left justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-white">Join Our Team</h2>
          <p className="mt-2 text-lg text-blue-100 max-w-2xl">
            We are always looking for talented and ambitious professionals who share our commitment to excellence.
          </p>
        </div>
        <a
          href="/careers"
          className="mt-6 md:mt-0 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-blue-800 bg-white hover:bg-blue-100 transition-colors flex-shrink-0"
        >
          View Open Positions
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  </div>
);

export default JoinTeamCTA;