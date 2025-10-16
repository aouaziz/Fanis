"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function CompaniesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current || !containerRef.current) return;

    // Clone the slider content for continuous scrolling
    const content = sliderRef.current.innerHTML;
    sliderRef.current.innerHTML = content + content;

    // Calculate total width
    const slides = sliderRef.current.children;
    let totalWidth = 0;
    for (let i = 0; i < slides.length / 2; i++) {
      totalWidth += slides[i].clientWidth;
    }

    // Infinite scroll animation
    gsap.to(sliderRef.current, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    containerRef.current.addEventListener("mouseenter", () => {
      gsap.to(sliderRef.current, { timeScale: 0, duration: 0.5 });
    });

    containerRef.current.addEventListener("mouseleave", () => {
      gsap.to(sliderRef.current, { timeScale: 1, duration: 0.5 });
    });
  }, []);

  const companies = [
    {
      name: "Company 1",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.36.47 (1).jpeg",
    },
    {
      name: "Company 2",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.36.47 (2).jpeg",
    },
    {
      name: "Company 3",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.36.47.jpeg",
    },
    {
      name: "Company 4",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.37.10.jpeg",
    },
    {
      name: "Company 5",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.37.40.jpeg",
    },
    {
      name: "Company 6",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.38.53.jpeg",
    },
    {
      name: "Company 7",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.39.25.jpeg",
    },
    {
      name: "Company 8",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.40.00.jpeg",
    },
    {
      name: "Company 9",
      logo: "/companies/WhatsApp Image 2025-10-16 at 14.40.37.jpeg",
    },
    { name: "Company 10", logo: "/companies/logo_bourse-iv_6.webp" },
  ];

  return (
    <div className="bg-gray-50/50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ils nous font confiance
        </h2>

        <div
          ref={containerRef}
          className="relative w-full overflow-hidden h-32"
        >
          <div
            ref={sliderRef}
            className="flex items-center gap-16 absolute py-4"
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-24 w-48 relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"></div>
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain p-4 mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
