"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const companies = [
  { name: "APPA", logo: "/companies/APPA.png" },
  { name: "Bourse de Casablanca", logo: "/companies/BourseDeCasablanca.png" },
  { name: "Electroplanet", logo: "/companies/Electroplanet.png" },
  { name: "English SoftSkills", logo: "/companies/EnglishSoftSkills.png" },
  { name: "INAMS", logo: "/companies/INAMS.png" },
  { name: "LinkedIn", logo: "/companies/LinkedIn.png" },
  { name: "Myconos", logo: "/companies/MYCONOS.png" },
  { name: "Marjane", logo: "/companies/Marjane-logo.png" },
  { name: "Shell", logo: "/companies/Shell.png" },
  { name: "TotalEnergies", logo: "/companies/TotalEnergies.png" },
  { name: "ODEC", logo: "/companies/ODEC.png" },
];

export default function CompaniesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const marqueeCompanies = [...companies, ...companies];

  useEffect(() => {
    if (!sliderRef.current) return;

    const createAnimation = () => {
      if (!sliderRef.current) return;
      animationRef.current?.kill();
      const totalWidth = sliderRef.current.scrollWidth / 2;
      animationRef.current = gsap.fromTo(
        sliderRef.current,
        { x: 0 },
        { x: -totalWidth, duration: 30, ease: "none", repeat: -1 }
      );
    };

    createAnimation();
    const resizeObserver = new ResizeObserver(() => createAnimation());
    resizeObserver.observe(sliderRef.current);

    return () => {
      animationRef.current?.kill();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#0a0a0a] px-5 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#dc2626]">
            <span className="h-2 w-2 rounded-full bg-[#dc2626]" />
            Nos Partenaires
          </span>
          <h2 className="text-3xl font-light text-white sm:text-4xl">Ils nous font confiance</h2>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-32" />

          <div
            ref={sliderRef}
            aria-live="off"
            aria-label="Liste des partenaires"
            className="flex w-max flex-nowrap items-center gap-8 will-change-transform"
          >
            {marqueeCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                aria-hidden={index >= companies.length}
                className="flex h-[80px] w-[160px] items-center justify-center rounded-xl border border-[#3f3f46] bg-[rgba(26,26,26,0.85)] p-5 transition hover:-translate-y-0.5 hover:border-[#dc2626] hover:bg-[rgba(220,38,38,0.05)] sm:h-[90px] sm:w-[180px]"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full object-contain opacity-70 transition hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
