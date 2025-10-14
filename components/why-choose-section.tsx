"use client";

import { useEffect, useRef } from "react";
import { Search, FileText, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Découverte",
    description:
      "Entretien initial pour comprendre le besoin réel et les objectifs",
  },
  {
    number: "02",
    icon: FileText,
    title: "Stratégie",
    description:
      "Création d'une proposition/stratégie détaillée et actionnable",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Exécution",
    description:
      "Déploiement des leviers digitaux sélectionnés (développement, campagnes, contenu)",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimisation",
    description:
      "Surveillance continue et perfectionnement pour une performance optimale",
  },
];

const stats = [
  { value: "6+", label: "Années d'Expérience Digitale" },
  { value: "46+", label: "Projets Réalisés" },
  { value: "40+", label: "Clients Satisfaits" },
  { value: "95%", label: "Taux de Fidélisation" },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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
          { y: 40, opacity: 0, scale: 0.9 },
          {
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
            },
            y: 0,
            opacity: 1,
            scale: 1,
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

      const cards = processRef.current?.querySelectorAll(".process-card");
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: -60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
            x: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
          }
        );
      });
    };

    loadGSAP();
  }, []);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#F8F8F8] via-white to-[#F8F8F8]"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#007BFF]/10 text-[#007BFF] text-sm font-bold rounded-full mb-6 tracking-wide">
            NOTRE MÉTHODOLOGIE
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#333333]">
            Simple, Direct, <span className="text-[#B31818]">Réussi</span>
          </h2>
          <p className="text-lg text-[#333333]/60 max-w-2xl mx-auto">
            Une approche structurée qui transforme vos objectifs en résultats
            concrets
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] hover:border-[#007BFF]/30"
            >
              <div className="stat-value text-5xl font-bold text-[#B31818] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#333333]/70 font-medium">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#B31818] to-[#007BFF] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#007BFF] via-[#B31818] to-[#007BFF] opacity-20" />

          <div
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <div key={index} className="process-card group relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#B31818] rounded-full mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] group-hover:border-[#007BFF]/30">
                  <div className="flex items-center justify-center w-14 h-14 bg-[#007BFF]/10 rounded-xl mb-4 group-hover:bg-[#007BFF]/20 transition-colors duration-300">
                    <step.icon
                      className="text-[#007BFF]"
                      size={28}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#B31818] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#333333]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
