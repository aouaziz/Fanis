"use client";

import { useEffect, useRef, useCallback } from "react";
import { MailOpen, PhoneCall, MapPinned, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!footerRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        footerRef.current.querySelectorAll(".footer-col"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] px-6 py-16 text-center text-zinc-300 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="footer-col flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <h3 className="text-xl font-semibold tracking-[0.2em] text-[#dc2626]">FANIS NETWORK</h3>
            <p className="max-w-sm text-sm text-zinc-400">
              Votre partenaire digital pour transformer vos idées en succès.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href={
                    [
                      "https://instagram.com/fanisnetwork",
                      "https://linkedin.com/company/fanisnetwork",
                      "https://facebook.com/fanisnetwork",
                      "https://youtube.com/@fanisnetwork",
                    ][index]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:-translate-y-0.5 hover:border-[#dc2626] hover:bg-[#dc2626] hover:text-white"
                  aria-label={["Instagram", "LinkedIn", "Facebook", "YouTube"][index]}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
            <h4 className="text-lg font-semibold text-white">Liens Rapides</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              {[
                { label: "Services", id: "services" },
                { label: "À propos", id: "about" },
                { label: "Réalisations", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li className="flex flex-col items-center gap-2 lg:items-start">
                <span className="flex items-center gap-2 text-white">
                  <MailOpen size={18} />
                  Email
                </span>
                <a href="mailto:fanisnetwork@gmail.com" className="transition hover:text-white">
                  fanisnetwork@gmail.com
                </a>
              </li>
              <li className="flex flex-col items-center gap-2 lg:items-start">
                <span className="flex items-center gap-2 text-white">
                  <PhoneCall size={18} />
                  Téléphone
                </span>
                <a href="tel:+212666148606" className="transition hover:text-white">
                  +212 666 148 606
                </a>
              </li>
              <li className="flex flex-col items-center gap-2 text-white lg:items-start">
                <span className="flex items-center gap-2">
                  <MapPinned size={18} />
                  Adresse
                </span>
                <p className="text-sm text-zinc-400">
                  75 Bd Moulay Youssef, Etage 5, App N°22, Casablanca 20250
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a]/80 pt-6 text-sm text-zinc-500">
          &copy; 2025 FANIS NETWORK. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
