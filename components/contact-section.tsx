"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
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
  const contactItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animate contact items with stagger
      contactItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            delay: 0.15 * index,
            ease: "power3.out",
          });
        }
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
              value="https://fanis-network.com/merci"
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
          <div ref={contactInfoRef} className="flex flex-col gap-12">
            <h3 className="text-3xl md:text-4xl font-light text-white tracking-[-0.02em]">
              Informations de Contact
            </h3>

            <div className="flex flex-col gap-10">
              {/* Email */}
              <div 
                ref={(el) => (contactItemsRef.current[0] = el)}
                className="flex items-start gap-6 transition-all duration-500 hover:translate-x-2 contact-item group"
              >
                <div className="contact-icon">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-zinc-500 font-light tracking-wide">Email</div>
                  <a
                    href="mailto:fanisnetwork@gmail.com"
                    className="text-white text-lg hover:text-red-600 transition-colors duration-300 font-light tracking-[-0.01em]"
                  >
                    fanisnetwork@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div 
                ref={(el) => (contactItemsRef.current[1] = el)}
                className="flex items-start gap-6 transition-all duration-500 hover:translate-x-2 contact-item group"
              >
                <div className="contact-icon">
                  <Phone size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-zinc-500 font-light tracking-wide">Téléphone</div>
                  <a
                    href="tel:+212666148606"
                    className="text-white text-lg hover:text-red-600 transition-colors duration-300 font-light tracking-[-0.01em]"
                  >
                    +212 666 148 606
                  </a>
                </div>
              </div>

              {/* Address */}
              <div 
                ref={(el) => (contactItemsRef.current[2] = el)}
                className="flex items-start gap-6 transition-all duration-500 hover:translate-x-2 contact-item group"
              >
                <div className="contact-icon">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-zinc-500 font-light tracking-wide">Adresse</div>
                  <span className="text-white text-lg leading-relaxed font-light tracking-[-0.01em]">
                    75 Bd Moulay Youssef, Etage 5,
                    <br />
                    App N°22, Casablanca 20250
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Stat */}
            <div className="border-t border-zinc-800 pt-10 mt-6">
              <p className="text-zinc-400 leading-relaxed text-base font-light tracking-[-0.01em]">
                Rejoignez plus de{" "}
                <span className="text-white font-normal">40 clients satisfaits</span>{" "}
                qui ont transformé leur présence digitale avec Fanis Network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
