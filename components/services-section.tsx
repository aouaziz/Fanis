"use client"

import { useEffect, useRef } from "react"
import { Palette, Code, TrendingUp, Video, Users, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Palette,
    title: "Identité de Marque & Design",
    description:
      "Création d'identité axée sur les valeurs, conception de logo, guides de style et design professionnel d'actifs corporatifs.",
  },
  {
    icon: Code,
    title: "Développement Web & Applications",
    description: "Conception de sites web haute performance et développement personnalisé d'applications mobiles.",
  },
  {
    icon: TrendingUp,
    title: "Publicité de Performance",
    description: "Gestion complète de campagnes payantes avec optimisation continue du ROI.",
  },
  {
    icon: Video,
    title: "Production Vidéo Créative",
    description:
      "Vidéos marketing de haute qualité, orientées résultats pour le e-commerce et le storytelling d'entreprise.",
  },
  {
    icon: Users,
    title: "Gestion Stratégique des Réseaux Sociaux",
    description: "Community management professionnel, stratégie de contenu et supervision du marketing d'influence.",
  },
  {
    icon: Building2,
    title: "Solutions Digitales Immobilières",
    description:
      "Sites web immobiliers, visites virtuelles, marketing digital et solutions CRM pour professionnels de l'immobilier.",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

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
        },
      )

      const cards = cardsRef.current?.children
      if (cards && cards.length > 0) {
        gsap.fromTo(
          Array.from(cards),
          { y: 80, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          },
        )

        Array.from(cards).forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            })
          })
          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            })
          })
        })
      }
    }

    loadGSAP()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 px-4 relative bg-white">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-sm font-semibold text-[#007BFF] mb-2 tracking-wider uppercase">
            Nos Leviers de Croissance
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-[#333333]">
            Aperçu des Services
          </h2>
          <p className="text-lg text-[#333333]/70 max-w-2xl mx-auto">
            Solutions digitales complètes adaptées pour développer votre entreprise
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#EEEEEE] hover:border-[#007BFF]/30 bg-white cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#007BFF]/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="text-[#007BFF]" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#333333] group-hover:text-[#B31818] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#333333]/70 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
