"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CompaniesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  // Removed containerRef as it was only used for hover interaction
  // const containerRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (!sliderRef.current) return; // Removed check for containerRef

    const slider = sliderRef.current;
    // const container = containerRef.current; // Removed container variable

    // Clone content multiple times for seamless loop
    const content = slider.innerHTML;
    slider.innerHTML = content + content + content;

    // Calculate width
    const slides = slider.children;
    let totalWidth = 0;
    for (let i = 0; i < slides.length / 3; i++) {
      totalWidth += slides[i].clientWidth;
    }

    const tl = gsap.to(slider, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const companies = [
    { name: "APPA", logo: "/companies/APPA.png" },
    { name: "Bourse de Casablanca", logo: "/companies/BourseDeCasablanca.png" },
    { name: "Electroplanet", logo: "/companies/Electroplanet.png" },
    { name: "English SoftSkills", logo: "companies/EnglishSoftSkills.png" },
    { name: "INAMS", logo: "companies/INAMS.png" },
    { name: "LinkedIn", logo: "companies/LinkedIn.png" },
    { name: "Myconos", logo: "companies/MYCONOS.png" },
    { name: "Marjane", logo: "companies/Marjane-logo.png" },
    { name: "Shell", logo: "companies/Shell.png" },
    { name: "TotalEnergies", logo: "companies/TotalEnergies.png" },
    { name: "ODEC", logo: "companies/ODEC.png" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-block">
            <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1.5 rounded-full">
              Nos Partenaires
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Ils nous font confiance
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-indigo-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>

          <div
            // Removed ref={containerRef}
            className="relative overflow-hidden py-4 cursor-default" // Changed cursor to default
            style={{ height: "100px" }}
          >
            <div
              ref={sliderRef}
              className="flex items-center gap-6 absolute left-0"
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                  style={{ width: "180px", height: "80px" }}
                >
                  <div className="relative h-full w-full">
                    {/* Card Background - Simplified hover effects */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-500"></div>
                    
                    {/* Shine Effect - Removed due to non-interaction requirement */}

                    {/* Logo - Removed grayscale and hover effects */}
                    <div className="relative h-full w-full flex items-center justify-center p-4">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-w-full max-h-full object-contain opacity-70 transition-opacity duration-500" // Kept default opacity for visual effect
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}