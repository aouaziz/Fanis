"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "6+", label: "Années d'Expérience" },
  { value: "46+", label: "Projets Réalisés" },
  { value: "40+", label: "Clients Satisfaits" },
  { value: "95%", label: "Taux de Fidélisation" },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      const statCards = statsRef.current?.querySelectorAll(".stat-card");
      if (statCards && statCards.length > 0) {
        gsap.fromTo(
          Array.from(statCards),
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          }
        );
      }

      const statElements = statsRef.current?.querySelectorAll(".stat-value");
      statElements?.forEach((el) => {
        const target = el.textContent || "0";
        const isPercentage = target.includes("%");
        const numericValue = parseInt(target.replace(/\D/g, ""));

        let start = { val: 0 };
        gsap.to(start, {
          val: numericValue,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            const current = Math.floor(start.val);
            el.textContent = isPercentage ? `${current}%` : `${current}+`;
          },
        });
      });
    };

    loadGSAP();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-4 md:px-8 lg:px-12 relative bg-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={titleRef} className="mb-20">
          <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-normal leading-[1.1] mb-6 tracking-tight">
            Des Résultats Qui Parlent
            <br />
            <span className="text-[#71717a]">D'Eux-Mêmes.</span>
          </h2>
          <p className="text-[1.1rem] md:text-[1.25rem] text-[#a1a1aa] max-w-[700px] leading-[1.7]">
            Plus qu'une agence, un partenaire dans votre succès digital.
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group p-8 border border-[#27272a] bg-[#1a1a1a] hover:border-[#dc2626] transition-all duration-300"
            >
              <div className="stat-value text-[3rem] md:text-[4rem] font-light text-[#ffffff] mb-2">
                {stat.value}
              </div>
              <div className="text-[0.9rem] text-[#a1a1aa] font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
