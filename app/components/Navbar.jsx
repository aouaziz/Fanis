'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Layers3, Gem, Mail, Rss, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This is the key fix: Prevent body scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const navItems = [
    { href: "#", label: "Services", icon: <Layers3 size={16} /> },
    { href: "#", label: "Réalisations", icon: <Gem size={16} /> },
    { href: "#blog", label: "Blog", icon: <Rss size={16} /> },
    { href: "#", label: "Contact", icon: <Mail size={16} /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white">
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="md:hidden flex-1">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-gray-300 transition-colors hover:text-white"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-1 justify-center md:flex-initial">
            <a href="#" aria-label="Home">
              <Image src="/white02.png" alt="Fanis Network Logo" width={90} height={40} priority />
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex flex-col">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
               <a href="#" aria-label="Home" onClick={() => setIsMenuOpen(false)}>
                <Image src="/white02.png" alt="Fanis Network Logo" width={90} height={40} />
              </a>
            </div>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-400 transition-colors hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Centered navigation with improved spacing */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
               <a key={item.label} href={item.href} className="flex items-center gap-3 text-2xl font-medium text-gray-200 transition-colors hover:text-white" onClick={() => setIsMenuOpen(false)}>
                {React.cloneElement(item.icon, { size: 24 })}
                <span>{item.label}</span>
              </a>
            ))}
            <a href="#" className="mt-6 inline-flex items-center gap-3 rounded-md bg-red-700 px-6 py-3 text-lg font-medium text-white shadow-sm transition-colors hover:bg-red-600" onClick={() => setIsMenuOpen(false)}>
              <span>Get in Touch</span>
              <ArrowUpRight size={20} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;