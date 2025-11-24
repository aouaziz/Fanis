"use client";

import { useEffect, useRef } from "react";
import { Palette, Code, TrendingUp, Video, Users, Building2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Département Commercial",
    description:
      "Externalisation complète de la force de vente : prospection, suivi des leads, gestion des appels et accompagnement commercial personnalisé.",
  },
  {
    icon: Palette,
    title: "Identité de Marque",
    description:
      "Création d'identités visuelles fortes : logo, charte graphique, supports professionnels et univers de marque sur mesure.",
  },
  {
    icon: TrendingUp,
    title: "Publicité de Performance",
    description:
      "Campagnes publicitaires multicanales optimisées pour maximiser le retour sur investissement et générer des résultats mesurables.",
  },
  {
    icon: Video,
    title: "Production Audiovisuelle",
    description:
      "Création de vidéos publicitaires, institutionnelles et sociales à fort impact visuel, alignées sur votre stratégie.",
  },
  {
    icon: Users,
    title: "Gestion des Réseaux Sociaux",
    description:
      "Stratégie de contenu, animation de communauté et marketing d'influence pour renforcer votre présence en ligne.",
  },
  {
    icon: Code,
    title: "Sites Web",
    description:
      "Conception et développement de sites web performants, modernes et adaptés à vos objectifs marketing.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          Array.from(cards),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    };

    loadGSAP();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 px-4 md:px-8 lg:px-12 relative bg-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={titleRef} className="mb-20">
          <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-normal leading-[1.1] mb-6 tracking-tight">
            Ce Que Nous Faisons.
            <br />
            <span className="text-[#71717a]">Comment Nous Le Faisons.</span>
          </h2>
          <p className="text-[1.1rem] md:text-[1.25rem] text-[#a1a1aa] max-w-[700px] leading-[1.7]">
            Des solutions digitales complètes pour propulser votre entreprise vers de nouveaux sommets.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-[#27272a] bg-[#1a1a1a] hover:border-[#dc2626] transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon className="text-[#dc2626]" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-[1.5rem] font-medium mb-4 text-[#ffffff] leading-tight">
                {service.title}
              </h3>
              <p className="text-[#a1a1aa] leading-[1.7] text-[0.95rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
