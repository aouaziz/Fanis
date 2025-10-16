"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["services", "expertise", "realizations", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        opacity: isScrolled ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isScrolled]);

  useEffect(() => {
    // Mobile menu animation is handled via Tailwind classes to avoid conflicting transforms
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#expertise", label: "Expertise" },
    { href: "#realizations", label: "Réalisations" },
    { href: "#contact", label: "Contact" },
  ];

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-white/80 backdrop-blur-lg shadow-sm opacity-0 transition-all duration-300"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("top")}
            className="cursor-pointer select-none"
          >
            <img
              src="/logo.png"
              alt="Fanis Network Logo"
              className="h-12 w-auto hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.replace("#", ""));
                }}
                className={`relative text-[15px] font-medium tracking-wide transition-all duration-300 group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#B31818]"
                    : "text-gray-700 hover:text-[#B31818]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#7A0F0F]/20 via-[#B31818] to-[#7A0F0F]/20 transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden bg-[#B31818] text-white rounded-full px-8 py-5 font-medium group hover:shadow-[0_0_20px_rgba(179,24,24,0.3)] transition-all duration-500 flex items-center gap-2"
            >
              Réserver
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
          >
            <span
              className={`block w-6 h-0.5 bg-[#B31818] transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1.5"
                  : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#B31818] mt-1 transition-all duration-200 ${
                isMobileMenuOpen
                  ? "opacity-0 scale-x-0"
                  : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#B31818] mt-1 transition-transform duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1.5"
                  : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu + Backdrop */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 py-6 flex flex-col items-center gap-4 transform-gpu transition-all duration-300 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
            : "-translate-y-6 opacity-0 pointer-events-none scale-95"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              scrollToSection(link.href.replace("#", ""));
              setIsMobileMenuOpen(false);
            }}
            className={`text-lg font-medium transition-all duration-300 ${
              activeSection === link.href.replace("#", "")
                ? "text-[#B31818]"
                : "text-gray-700 hover:text-[#B31818]"
            }`}
          >
            {link.label}
          </a>
        ))}
        <Button
          onClick={() => {
            scrollToSection("contact");
            setIsMobileMenuOpen(false);
          }}
          className="w-4/5 bg-gradient-to-r from-[#B31818] to-[#8B0F0F] text-white py-5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          Réserver Une Consultation
        </Button>
      </div>
    </nav>
  );
}
