"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  MailOpen,
  PhoneCall,
  MapPinned,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!footerRef.current) return;

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
    <>
      <footer ref={footerRef} className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <h3 className="brand-title">FANIS NETWORK</h3>
              <p className="brand-description">
                Votre partenaire digital pour transformer vos idées en succès.
              </p>
              <div className="social-links">
                <a
                  href="https://instagram.com/fanisnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/fanisnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://facebook.com/fanisnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://youtube.com/@fanisnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Liens Rapides</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                  >
                    Réalisations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col footer-contact">
              <h4 className="footer-heading">Contact</h4>
              <ul className="contact-info">
                <li>
                  <MailOpen size={20} className="contact-icon" />
                  <a href="mailto:fanisnetwork@gmail.com">
                    fanisnetwork@gmail.com
                  </a>
                </li>
                <li>
                  <PhoneCall size={20} className="contact-icon" />
                  <a href="tel:+212666148606">+212 666 148 606</a>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 FANIS NETWORK. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: #0a0a0a;
          padding: 5rem 2rem 3rem;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(26, 26, 26, 0.8);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
          justify-items: center;
          text-align: center;
        }

        .footer-col {
          opacity: 0;
          transform: translateY(50px);
        }

        .footer-brand {
          padding-right: 2rem;
        }

        .brand-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .brand-description {
          color: #d4d4d4;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(63, 63, 70, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4d4d4;
          transition: all 0.3s ease;
          background: rgba(26, 26, 26, 0.9);
          backdrop-filter: blur(10px);
        }

        .social-icon:hover {
          background: #dc2626;
          color: #fff;
          border-color: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        .footer-links a {
          color: #d4d4d4;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #dc2626;
          transform: translateX(4px);
        }

        .footer-contact {
          grid-column: span 1;
        }

        .contact-info {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .contact-info li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #d4d4d4;
          font-size: 0.95rem;
          line-height: 1.5;
          justify-content: center;
        }

        .contact-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
          color: #d4d4d4;
        }

        .contact-info a {
          color: #d4d4d4;
          transition: color 0.3s ease;
        }

        .contact-info a:hover {
          color: #dc2626;
        }

        .footer-bottom {
          padding-top: 2.5rem;
          border-top: 1px solid rgba(26, 26, 26, 0.8);
          text-align: center;
        }

        .footer-bottom p {
          color: #d4d4d4;
          font-size: 0.9rem;
        }

        @media (max-width: 1023px) {
          .footer {
            padding: 4rem 1.5rem 2.5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .footer-brand {
            grid-column: span 2;
            padding-right: 0;
          }

          .footer-contact {
            grid-column: span 2;
          }
        }

        @media (max-width: 767px) {
          .footer {
            padding: 3.5rem 1.25rem 2rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .footer-brand {
            grid-column: span 1;
            text-align: center;
          }

          .brand-title {
            font-size: 1.35rem;
          }

          .brand-description {
            font-size: 0.9rem;
          }

          .social-links {
            justify-content: center;
          }

          .footer-col {
            text-align: center;
          }

          .footer-contact {
            grid-column: span 1;
          }

          .contact-info li {
            font-size: 0.9rem;
          }

          .footer-bottom {
            padding-top: 2rem;
          }

          .footer-bottom p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}
