'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Home,
  Briefcase,
  Users,
  Newspaper,
  Mail,
  Phone,
  Menu,
  X,
} from 'lucide-react';

const NavItem = ({ href, children, Icon }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
        ${active ? 'bg-cyan-600 text-white shadow-inner' : 'text-white/80 hover:bg-white/20 hover:text-white'}`}
    >
      <Icon className="w-5 h-5" />
      {children}
    </a>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: '/',       label: 'Home',     Icon: Home },
    { href: '/services', label: 'Services', Icon: Briefcase },
    { href: '/team',     label: 'Team',     Icon: Users },
    { href: '/insights', label: 'Insights', Icon: Newspaper },
    { href: '/contact',  label: 'Contact',  Icon: Mail },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 to-teal-700 text-white shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold tracking-wider">
          VNR
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {nav.map((item) => (
            <NavItem key={item.href} href={item.href} Icon={item.Icon}>
              {item.label}
            </NavItem>
          ))}
        </nav>

        {/* Call-us + mobile toggle */}
        <div className="flex items-center">
          <a
            href="tel:+27123456789"
            className="hidden lg:inline-flex items-center bg-white text-blue-800 px-5 py-3 rounded-full text-base font-bold transition-colors hover:bg-blue-800 hover:text-white"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-4 p-2 rounded-md hover:bg-white/20 focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-blue-800 px-2 pt-2 pb-4 space-y-1">
          {nav.map((item) => (
             <NavItem key={item.href} href={item.href} Icon={item.Icon}>
              {item.label}
            </NavItem>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="tel:+27123456789"
              className="w-full flex items-center justify-center bg-white text-blue-800 px-5 py-3 rounded-full text-base font-bold transition-colors hover:bg-blue-800 hover:text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;