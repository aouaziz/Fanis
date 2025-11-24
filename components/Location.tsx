"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Location() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const addressRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(titleRef.current, {
        type: "chars,words",
        charsClass: "char",
        wordsClass: "word",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(addressRef.current, {
        scrollTrigger: {
          trigger: addressRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        scaleX: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
      });

      gsap.from(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.8,
        rotateX: 15,
        y: 100,
        duration: 1.4,
        delay: 0.4,
        ease: "power4.out",
      });

      gsap.to(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="location-section min-h-screen flex items-center justify-center relative overflow-hidden py-32 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.95] mb-8 font-light text-white tracking-[-0.03em]"
            style={{
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              perspective: "1000px",
            }}
          >
            Fanis à Casablanca
          </h2>
          <p
            ref={addressRef}
            className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed tracking-[-0.01em]"
          >
            75 Bd Moulay Youssef, Etage 5, App N°22, Casablanca 20250
          </p>
          <div ref={lineRef} className="location-line"></div>
        </div>

        <div ref={mapRef} className="map-wrapper" style={{ transformStyle: "preserve-3d" }}>
          <div className="map-overlay"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4055240460816!2d-7.63259962333938!3d33.5947811417455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3d96e641b87%3A0x563d3f44802bf7c8!2sFanis%20Network!5e0!3m2!1sen!2sma!4v1761139421052!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="location-map"
            title="Localisation Fanis Network"
          />
        </div>
      </div>
    </section>
  );
}
