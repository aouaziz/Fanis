'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Layers3, Gem, Mail, Rss, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enhanced body scroll prevention with cleanup
  useEffect(() => {
    if (isMenuOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Return cleanup function
      return () => {
        document.body.style.overflow = originalOverflow || 'auto';
      };
    }
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen]);

  const navItems = [
    { href: "#services", label: "Services", icon: <Layers3 size={16} /> },
    { href: "#realisations", label: "Réalisations", icon: <Gem size={16} /> },
    { href: "#blog", label: "Blog", icon: <Rss size={16} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section if it's an anchor link
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300">
        {/* Background with glassmorphism effect */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md border-b border-gray-800/50"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="group flex items-center gap-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white relative"
                >
                  <span className="transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="relative">
                    {item.label}
                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-1">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="group p-2 text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-6 w-6 transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex flex-1 justify-center md:flex-initial">
              <a 
                href="#" 
                aria-label="Home"
                className="group transition-transform hover:scale-105 duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Image 
                  src="/white02.png" 
                  alt="Fanis Network Logo" 
                  width={90} 
                  height={40} 
                  priority 
                  className="transition-opacity group-hover:opacity-80"
                />
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex-1 flex justify-end">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="group hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/30 hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>Get in Touch</span>
                <ArrowUpRight 
                  size={16} 
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform transition-all duration-500 ease-out md:hidden ${
          isMenuOpen 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-lg"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
        
        {/* Menu Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
              <a 
                href="#" 
                aria-label="Home" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#');
                }}
                className="transition-transform hover:scale-105 duration-300"
              >
                <Image 
                  src="/white02.png" 
                  alt="Fanis Network Logo" 
                  width={90} 
                  height={40} 
                />
              </a>
            </div>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="group p-2 text-gray-400 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="group flex items-center gap-3 text-2xl font-medium text-gray-200 transition-all duration-300 hover:text-white hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'slideInFromTop 0.6s ease-out forwards' : 'none'
                }}
              >
                <span className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all duration-300">
                  {React.cloneElement(item.icon, { size: 24 })}
                </span>
                <span className="relative">
                  {item.label}
                  {/* Mobile underline effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <a 
              href="#contact" 
              className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/30 hover:from-red-500 hover:to-red-600"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              style={{
                animationDelay: '500ms',
                animation: isMenuOpen ? 'slideInFromTop 0.6s ease-out forwards' : 'none'
              }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight 
                size={20} 
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
            </a>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;