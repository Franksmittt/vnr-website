'use client';
import React from 'react';
import Link from 'next/link';

/* ───────── helper bits ───────── */
const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-slate-300 hover:text-teal-400 transition-colors duration-300 ease-in-out flex items-center text-sm group"
    >
      <span className="w-2 h-2 mr-3 border-t-2 border-r-2 border-teal-500 rotate-45 transition-all duration-300 group-hover:border-white" />
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-slate-300 hover:text-white transform hover:scale-110 transition-all duration-300"
  >
    {children}
  </a>
);

/* ───────── SVG sprites ───────── */
const MailIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const PhoneIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
const LocationIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const LinkedInIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zm-1.5-12.3C5.5 6.7 4.7 5.9 4.7 5S5.5 3.3 6.5 3.3 8.3 4.1 8.3 5 7.5 6.7 6.5 6.7zM21 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.4V19z" />
  </svg>
);


const Footer = () => (
  <footer className="bg-slate-800 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">VNR</h3>
          {/* CONTRAST FIX: Changed text color */}
          <p className="text-slate-300 text-sm italic">
            “Facilitating sustainable wealth through relevant knowledge and
            cutting-edge technology.”
          </p>
          <div className="flex space-x-4 pt-2">
            <SocialIcon href="https://www.linkedin.com/company/vnr/" label="Visit VNR on LinkedIn">
              {LinkedInIcon}
            </SocialIcon>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-semibold mb-4 tracking-wider uppercase">Navigate</h4>
          <ul className="space-y-3">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/team">Our Leadership</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/insights">Insights</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </ul>
        </div>

        {/* Key services */}
        <div>
          <h4 className="font-semibold mb-4 tracking-wider uppercase">
            Key&nbsp;Services
          </h4>
          <ul className="space-y-3">
            <FooterLink href="/services/tax-advisory">Tax Compliance</FooterLink>
            <FooterLink href="/services/financial-reporting">Financial Reporting</FooterLink>
            <FooterLink href="/services/payroll">Payroll</FooterLink>
            <FooterLink href="/services/secretarial">Secretarial</FooterLink>
            <FooterLink href="/services/business-valuations">Business Valuations</FooterLink>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-sm">
          <h4 className="font-semibold mb-4 tracking-wider uppercase">
            Get&nbsp;in&nbsp;Touch
          </h4>
           {/* CONTRAST FIX: Changed text color */}
          <div className="flex items-start text-slate-300">
            <span className="text-teal-400 mt-1 mr-3">{MailIcon}</span>
            info@vnr.co.za
          </div>
          <div className="flex items-start text-slate-300">
            <span className="text-teal-400 mt-1 mr-3">{PhoneIcon}</span>
            +27&nbsp;12&nbsp;653&nbsp;1633
          </div>
          <div className="flex items-start text-slate-300">
            <span className="text-teal-400 mt-1 mr-3">{LocationIcon}</span>
            1022 Saxby Ave, Eldoraigne, Centurion 0157
          </div>
        </div>
      </div>
    </div>

    {/* Sub-footer */}
    <div className="bg-slate-900 py-4">
      {/* CONTRAST FIX: Changed text color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} VNR (Pty) Ltd. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="/paia" className="hover:text-teal-400">PAIA Manual</Link>
          <Link href="/privacy" className="hover:text-teal-400">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;