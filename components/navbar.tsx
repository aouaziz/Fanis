"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const links = [
  { label: "Accueil", id: "home" },
  { label: "Services", id: "services" },
  { label: "À Propos", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const top = window.scrollY;
      if (top < 200) return setActive("home");

      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) setActive(id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (bg.current)
      gsap.to(bg.current, { opacity: scrolled ? 1 : 0, duration: 0.3 });
  }, [scrolled]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        ref={bg}
        className="absolute inset-0 bg-white/80 backdrop-blur-lg shadow-sm opacity-0"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("home")}>
            <img src="/logo.png" alt="Logo" className="h-12 hover:scale-105 transition" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-14">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative text-[15px] font-medium tracking-wide group transition ${
                  active === id ? "text-[#B31818]" : "text-gray-700 hover:text-[#B31818]"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#B31818] transition-all duration-300 ${
                    active === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:flex items-center gap-2 bg-[#B31818] text-white px-6 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(179,24,24,.3)] transition"
          >
            Consultation Gratuite <ArrowRight size={16} />
          </button>

          {/* Mobile burger */}
          <button
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          >
            <span className={`h-0.5 w-6 bg-[#B31818] transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#B31818] transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#B31818] transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-4 top-24 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {links.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => {
              scrollTo(id);
              setOpen(false);
            }}
            className={`text-lg font-medium ${active === id ? "text-[#B31818]" : "text-gray-700"}`}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => {
            scrollTo("contact");
            setOpen(false);
          }}
          className="mt-2 w-full bg-gradient-to-r from-[#B31818] to-[#8B0F0F] text-white py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
        >
R         Consultation Gratuite        </button>
      </div>
    </nav>
  );
}