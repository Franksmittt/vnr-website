'use client';
import React from 'react';
import Link from 'next/link'; // Use Link for internal navigation

/* ───────── helper bits ───────── */
const FooterLink = ({ href, children }) => (
  <li>
    {/* Use Next.js Link for internal pages */}
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
    // ACCESSIBILITY FIX: Add aria-label for icon-only links
    aria-label={label}
    className="text-slate-300 hover:text-white transform hover:scale-110 transition-all duration-300"
  >
    {children}
  </a>
);

/* ───────── SVG sprites ───────── */
// SVG definitions (MailIcon, PhoneIcon, etc.) remain the same...
const MailIcon = ( <svg>...</svg> );
const PhoneIcon = ( <svg>...</svg> );
const LocationIcon = ( <svg>...</svg> );
const LinkedInIcon = ( <svg>...</svg> );


const Footer = () => (
  <footer className="bg-slate-800 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">VNR</h3>
          {/* CONTRAST FIX: Changed text-slate-400 to text-slate-300 */}
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
          {/* CONTRAST FIX: Changed text-slate-400 to text-slate-300 */}
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
       {/* CONTRAST FIX: Changed text-slate-500 to text-slate-400 */}
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