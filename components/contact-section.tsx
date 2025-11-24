"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const contactInfoRef = useRef<HTMLDivElement | null>(null);
  const formFieldsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Split title text for character animation
      const split = new SplitText(titleRef.current, { 
        type: "chars,words",
        charsClass: "char",
        wordsClass: "word"
      });

      // Animate title characters with stagger
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 120,
        rotateX: -90,
        stagger: {
          each: 0.03,
          from: "start",
        },
        duration: 1.2,
        ease: "power4.out",
      });

      // Subtitle animation with blur
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
      });

      // Form animation - container scale
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.95,
        x: -30,
        duration: 1,
        ease: "power3.out",
      });

      // Animate individual form fields with stagger
      formFieldsRef.current.forEach((field, index) => {
        if (field) {
          gsap.from(field, {
            scrollTrigger: {
              trigger: field,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.1 * index,
            ease: "power3.out",
          });
        }
      });

      // Contact info animation
      gsap.from(contactInfoRef.current, {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.95,
        x: 30,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="contact-section min-h-screen relative overflow-hidden py-32 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2 
            ref={titleRef} 
            className="text-[2.75rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.95] mb-8 md:mb-10 font-light text-white tracking-[-0.03em]"
            style={{ 
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              perspective: '1000px'
            }}
          >
            Parlons De Votre Projet.
          </h2>
          <p 
            ref={subtitleRef} 
            className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-light tracking-[-0.01em]"
          >
            Commençons par une conversation. Partagez votre vision, et nous
            créerons quelque chose d'exceptionnel ensemble.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Form */}
          <form
            ref={formRef}
            action="https://formsubmit.co/fanisnetwork@gmail.com"
            method="POST"
            className="flex flex-col gap-10"
          >
            <input type="hidden" name="_honeypot" value="true" />
            <input
              type="hidden"
              name="_subject"
              value="Nouvelle Consultation de FANIS NETWORK"
            />
            <input
              type="hidden"
              name="_next"
              value="https://fanis.ma/merci"
            />

            <div 
              ref={(el) => (formFieldsRef.current[0] = el)}
              className="flex flex-col gap-4"
            >
              <label htmlFor="name" className="text-sm font-medium text-white tracking-wide">
                Nom complet
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Votre nom"
              />
            </div>

            <div 
              ref={(el) => (formFieldsRef.current[1] = el)}
              className="flex flex-col gap-4"
            >
              <label htmlFor="phone" className="text-sm font-medium text-white tracking-wide">
                Téléphone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+212 6XX XX XX XX"
              />
            </div>

            <div 
              ref={(el) => (formFieldsRef.current[2] = el)}
              className="flex flex-col gap-4"
            >
              <label htmlFor="comment" className="text-sm font-medium text-white tracking-wide">
                Message
              </label>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Parlez-nous de votre projet..."
              />
            </div>

            <div ref={(el) => (formFieldsRef.current[3] = el)}>
              <Button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-6 px-12 rounded-full text-sm font-semibold tracking-wider transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 w-fit group"
              >
                ENVOYER LE MESSAGE
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    d="M1 15L15 1M15 1H1M15 1V15"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </div>
          </form>

          {/* Contact Info */}
        <div ref={contactInfoRef} className="flex flex-col gap-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#dc2626] mb-3">
              Fanis à Casablanca
            </p>
            <div className="map-wrapper contact-map">
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
        </div>
      </div>
    </section>
  );
}
