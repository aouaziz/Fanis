"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (!footerRef.current) return

      gsap.fromTo(
        footerRef.current.querySelectorAll(".footer-col"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        },
      )
    }

    loadGSAP()
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#333333] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="footer-col">
            <h3 className="text-2xl font-bold text-[#B31818] mb-4">FANIS NETWORK</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Votre partenaire digital pour transformer vos idées en succès.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/fanisnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-[#B31818] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/fanisnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-[#007BFF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com/fanisnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-[#007BFF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com/@fanisnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-[#B31818] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#B31818] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-400 hover:text-[#B31818] transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#realizations" className="text-gray-400 hover:text-[#B31818] transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#B31818] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col md:col-span-2">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 hover:text-[#B31818] transition-colors">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:fanisnetwork@gmail.com">fanisnetwork@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-[#B31818] transition-colors">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+212666148606">+212 666 148 606</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Etage 5, App N°22, 75 Bd Moulay Youssef, Casablanca 20250</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FANIS NETWORK. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
