'use client';

import { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const links = [
    { label: 'Accueil', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Réalisations', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[1000] flex items-center justify-between border-b border-[#1a1a1a]/80 bg-[rgba(10,10,10,0.95)] px-5 py-5 backdrop-blur lg:px-12">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center transition hover:opacity-80"
          aria-label="Fanis Network"
        >
          <Image src="/logo.png" alt="Fanis Network" width={120} height={40} priority />
        </button>
        <div className="hidden flex-1 items-center justify-center gap-10 text-sm text-zinc-300 lg:flex">
          {links.slice(0, 3).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="transition hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-4">
          <button
            className={cn(
              'flex h-7 w-8 flex-col justify-between transition lg:h-8 lg:w-10',
              menuOpen && 'text-white'
            )}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Ouvrir le menu"
          >
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={cn(
                  'block h-[2px] w-full bg-white transition-all duration-300',
                  index === 1 && menuOpen && 'opacity-0',
                  index === 0 && menuOpen && 'translate-y-[9px] rotate-45',
                  index === 2 && menuOpen && '-translate-y-[9px] -rotate-45'
                )}
              />
            ))}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'pointer-events-none fixed inset-0 z-[999] flex h-screen w-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 py-16 opacity-0 transition-opacity duration-300 lg:px-20',
          menuOpen && 'pointer-events-auto opacity-100'
        )}
      >
        <div className="grid w-full max-w-[1100px] gap-12 lg:grid-cols-2">
          <div className="hidden flex-col gap-6 lg:flex">
            <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#dc2626]">
              <span className="h-2 w-2 rounded-full bg-[#dc2626]" />
              Transformons votre vision ensemble!
            </span>
            <h2 className="text-4xl font-light text-white">
              Vous avez un projet ambitieux?
              <br />
              Parlons-en.
            </h2>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-3 rounded-full bg-[#dc2626] px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[#b91c1c]"
            >
              RÉSERVER UNE CONSULTATION
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center gap-3 text-4xl font-light text-zinc-400 transition hover:text-white lg:text-5xl"
              >
                <span className="h-2 w-2 rounded-full bg-[#dc2626] opacity-50 transition group-hover:opacity-100" />
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#dc2626] px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[#b91c1c] lg:hidden"
            >
              CONSULTATION GRATUITE
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 flex gap-3">
          {[
            { href: 'https://instagram.com/fanisnetwork', label: 'Instagram', icon: Instagram },
            { href: 'https://linkedin.com/company/fanisnetwork', label: 'LinkedIn', icon: Linkedin },
            { href: 'https://facebook.com/fanisnetwork', label: 'Facebook', icon: Facebook },
            { href: 'https://youtube.com/@fanisnetwork', label: 'YouTube', icon: Youtube },
          ].map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:-translate-y-0.5 hover:border-[#dc2626] hover:bg-[#dc2626] hover:text-white"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
