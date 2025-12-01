'use client';

import { useCallback } from 'react';
import HeroGraphic from './hero-graphic';

function HeroSection() {
  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-40 sm:px-6 lg:px-12"
    >
      <HeroGraphic />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-12 ">
        <div className="space-y-6">
          <h1 className="text-[3rem] font-light leading-tight text-white sm:text-[3.5rem] lg:text-[4.5rem]">
            <span className="block font-normal">Design Qui Résonne.</span>
            <span className="block">Expériences Qui Marquent.</span>
          </h1>
          <p className="max-w-[540px] text-base text-zinc-300 sm:text-lg">
            Nous fusionnons créativité, émotion et innovation pour créer des mondes digitaux{' '}
            <br className="hidden lg:inline" />
            avec lesquels votre audience peut se connecter.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#dc2626] px-10 py-4 text-[0.85rem] font-semibold tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#b91c1c] hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('contact');
            }}
          >
            PARLONS-EN
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>

        <div className="mt-auto flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[440px] text-sm text-zinc-300 sm:text-base">
            Que ce soit à travers des interfaces intuitives, de la 3D immersive ou un storytelling visuel audacieux,
            <span className="font-medium text-white">
              {' '}
              nous créons des moments que les gens ne voient pas seulement — ils les ressentent.
            </span>
          </p>
          <div className="flex flex-wrap gap-3">
            {['UI/UX', 'DÉVELOPPEMENT', 'BRANDING', '3D'].map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#3f3f46]/90 bg-[rgba(26,26,26,0.9)] px-5 py-2 text-[0.7rem] font-semibold tracking-[0.08em] text-zinc-200 transition hover:-translate-y-0.5 hover:border-[#dc2626] hover:bg-[rgba(220,38,38,0.15)]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
