"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Lancement Koona Matelas",
    industry: "E-commerce/Articles de Maison",
    image: "/modern-mattress-ecommerce-website.jpg",
  },
  {
    title: "Relance École Al Hanane",
    industry: "Éducation/Institutionnel",
    image: "/modern-school-education-website.jpg",
  },
  {
    title: "Branding Laza Pressing",
    industry: "Service Local/Écologie",
    image: "/eco-friendly-laundry-service-branding.jpg",
  },
  {
    title: "Campagne Marketing Digital",
    industry: "Startup SaaS B2B",
    image: "/saas-startup-marketing-dashboard.jpg",
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (titleRef.current) {
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
      }

      if (gridRef.current?.children) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { y: 80, opacity: 0, rotateX: 20, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="projects"
      ref={sectionRef}
      className="py-32 px-4 md:px-8 lg:px-12 relative bg-[#060606] overflow-hidden"
    >
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.05}
        duration={1.5}
        repeatDelay={0.3}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "absolute inset-0 w-full h-full",
          "rotate-12 scale-150",
          "text-white/5"
        )}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{ opacity: 1 }}
        >
          <p className="text-sm font-semibold text-[#dc2626] mb-3 tracking-[0.3em] uppercase">
            Nos Preuves
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-balance text-white">
            Réalisations & Portfolio
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Découvrez nos transformations digitales réussies
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ opacity: 1 }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-[#27272a] bg-[#111111] hover:border-[#dc2626]/60 transition-all duration-500 cursor-pointer hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <ExternalLink className="text-white" size={24} aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#dc2626] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400">{project.industry}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
