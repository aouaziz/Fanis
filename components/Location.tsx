"use client";

import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import gsap from "gsap";

export default function Location() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !mapRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(mapRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            APPA À CASABLANCA
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Notre Campus
          </h2>
          <p className="text-xl text-white/80">
            75 Bd Moulay Youssef, Etage 5, App N°22, Casablanca 20250
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-300 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <iframe
            ref={mapRef}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4055240460816!2d-7.63259962333938!3d33.5947811417455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3d96e641b87%3A0x563d3f44802bf7c8!2sFanis%20Network!5e0!3m2!1sen!2sma!4v1761139421052!5m2!1sen!2sma"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
