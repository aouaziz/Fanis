
"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <Image 
            src="/logo.png" 
            alt="Fanis Network" 
            width={120} 
            height={40}
            priority
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="nav-center">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
            Accueil
          </a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>
            Services
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>
            Réalisations
          </a>
           <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
              Contact
            </a>
            <a href="/Blog" >
              Blog
            </a>
        </div>
        <div className="nav-right">
          <button 
            className={`menu-btn ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div className={`full-menu ${menuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <div className="menu-left">
            <div className="menu-tag">Transformons votre vision ensemble!</div>
            <h2 className="menu-title">
              Vous avez un projet
              <br />
              ambitieux? Parlons-en.
            </h2>
            <a
              href="#contact"
              className="menu-cta"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              RÉSERVER UNE CONSULTATION
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <div className="menu-right">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
              Accueil
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>
              Services
            </a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>
              Réalisations
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
              Contact
            </a>
            <a href="/Blog" >
              Blog
            </a>
            <button 
              className="menu-mobile-cta" 
              onClick={() => scrollToSection("contact")}
            >
              CONSULTATION GRATUITE
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="menu-footer">
          <a 
            href="https://instagram.com/fanisnetwork" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon" 
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/company/fanisnetwork" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon" 
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href="https://facebook.com/fanisnetwork" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon" 
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a 
            href="https://youtube.com/@fanisnetwork" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon" 
            aria-label="YouTube"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(26, 26, 26, 0.8);
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .logo:hover {
          opacity: 0.8;
        }

        .nav-center {
          display: none;
          gap: 2.5rem;
          flex: 1;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .nav-center a {
          color: #d4d4d4;
          font-size: 0.9rem;
          transition: color 0.3s;
        }

        .nav-center a:hover {
          color: #ffffff;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-left: auto;
        }

        .menu-mobile-cta {
          display: none;
        }

        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          width: 32px;
          height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          position: relative;
          z-index: 1001;
        }

        .menu-btn span {
          display: block;
          width: 100%;
          height: 2px;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .menu-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .menu-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .menu-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Full Screen Menu */
        .full-menu {
          position: fixed;
          inset: 0;
          background: #0a0a0a;
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 8rem 3rem 4rem;
        }

        .full-menu.active {
          opacity: 1;
          visibility: visible;
        }

        .menu-content {
          display: flex;
          gap: 6rem;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
        }

        .menu-left {
          flex: 1;
        }

        .menu-tag {
          color: #dc2626;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .menu-tag::before {
          content: "";
          width: 8px;
          height: 8px;
          background: #dc2626;
          border-radius: 50%;
        }

        .menu-title {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          margin-bottom: 2rem;
          font-weight: 400;
          color: #ffffff;
        }

        .menu-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #dc2626;
          color: #fff;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .menu-cta:hover {
          transform: translateY(-2px);
          background: #b91c1c;
        }

        .menu-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .menu-right a {
          font-size: clamp(2rem, 4vw, 3.5rem);
          color: rgba(212, 212, 212, 0.7);
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .menu-right a::before {
          content: "";
          width: 10px;
          height: 10px;
          background: #dc2626;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .menu-right a:hover {
          color: #ffffff;
        }

        .menu-right a:hover::before {
          opacity: 1;
        }

        .menu-footer {
          position: absolute;
          bottom: 4rem;
          display: flex;
          gap: 1rem;
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
        }

        .social-icon:hover {
          background: #dc2626;
          color: #fff;
          border-color: #dc2626;
        }

        @media (min-width: 1024px) {
          .nav-center {
            display: flex;
            flex: 1;
            justify-content: center;
          }

          .menu-content {
            max-width: 1400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 1023px) {
          .navbar {
            padding: 1.25rem 2rem;
          }

          .menu-content {
            flex-direction: column;
            gap: 3rem;
            padding: 0 2rem;
          }

          .menu-left {
            display: none;
          }

          .menu-right {
            align-items: center;
            gap: 2rem;
          }

          .menu-right a::before {
            display: none;
          }

          .menu-mobile-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #dc2626;
            color: #fff;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(220, 38, 38, 0.2);
            margin-top: 1rem;
          }

          .menu-mobile-cta:hover {
            background: #b91c1c;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(220, 38, 38, 0.3);
          }

          .menu-footer {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .navbar {
            padding: 1rem 1.5rem;
          }

          .menu-btn {
            width: 28px;
            height: 20px;
          }

          .full-menu {
            padding: 5rem 1.5rem 3rem;
          }

          .menu-content {
            gap: 3rem;
          }

          .menu-tag {
            font-size: 0.85rem;
            margin-bottom: 1.5rem;
            justify-content: center;
          }

          .menu-footer {
            bottom: 2.5rem;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 0.85rem 1rem;
          }

          .menu-btn {
            width: 26px;
            height: 18px;
          }

          .menu-mobile-cta {
            font-size: 0.8rem;
            padding: 0.9rem 1.75rem;
          }

          .full-menu {
            padding: 4.5rem 1rem 2.5rem;
          }

          .menu-tag::before {
            width: 6px;
            height: 6px;
          }

          .menu-footer {
            bottom: 2rem;
          }

          .social-icon {
            width: 36px;
            height: 36px;
          }

          .social-icon svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </>
  );
}
export default Navbar;
