'use client';
import { useCallback } from "react";

function HeroSection() {
  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <section id="home" className="hero">
        {/* Logo-inspired Search Element */}
        <div className="logo-search-container">
          <div className="logo-glow"></div>
            <div className="logo-element">

              {/* Left Chevron */}
               <svg className="chevron chevron-left" viewBox="0 0 150 200" aria-hidden="true">
                 <path d="M140 15 L10 100 L140 185" />
               </svg>       
              <div className="eye-container">
                <svg
                  className="eye-ring"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Outer white circle (thicker stroke) */}
                  <circle
                    cx="300"
                    cy="100"
                    r="10"
                    stroke="#ffffff"
                    strokeWidth="30"
                    fill="none"
                    opacity="0.9"
                  />
                </svg>
                <svg
                  className="eye-ring"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Outer white circle (thicker stroke) */}
                  <circle
                    cx="180"
                    cy="200"
                    r="10"
                    stroke="#ffffff"
                    strokeWidth="80"
                    fill="none"
                    opacity="0.9"
                  />
                </svg>
                {/* Inner red glowing eye */}
                <div className="eye"></div>
              </div>
              {/* Right Chevron */}
              <svg className="chevron chevron-right" viewBox="0 0 150 200" aria-hidden="true">
                <path d="M10 15 L140 100 L10 185" />
              </svg>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Design Qui Résonne.
              <br />
              <span className="hero-subtitle-line">Expériences Qui Marquent.</span>
            </h1>
            <p className="subtitle">
              Nous fusionnons créativité, émotion et innovation pour créer des mondes digitaux
              <br className="desktop-break" />
              avec lesquels votre audience peut se connecter.
            </p>
            <a
              href="#contact"
              className="cta-btn"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              PARLONS-EN
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          
          <div className="hero-bottom">
            <p className="hero-description">
              Que ce soit à travers des interfaces intuitives, de la 3D immersive ou un storytelling visuel audacieux, 
              <span className="highlight"> nous créons des moments que les gens ne voient pas seulement — ils les ressentent.</span>
            </p>
            <div className="hero-tags">
              <span className="tag">UI/UX</span>
              <span className="tag">DÉVELOPPEMENT</span>
              <span className="tag">BRANDING</span>
              <span className="tag">3D</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Section */
        .hero {
          min-height: 100vh;
          padding: 10rem 2rem 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Logo Search Element - Centered */
        .logo-search-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1400px;
          height: 550px;
          z-index: 0;
          pointer-events: none;
        }

        .logo-glow {
          position: absolute;
          inset: -100px;
          background: radial-gradient(
            ellipse,
            rgba(220, 38, 38, 0.2) 0%,
            rgba(220, 38, 38, 0.08) 40%,
            transparent 70%
          );
          filter: blur(80px);
          animation: pulse 5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }

        .logo-element {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: -2rem;
          animation: float 8s ease-in-out infinite;
          opacity: 0.25;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Chevrons en SVG */
        .chevron {
          width: clamp(12rem, 28vw, 36rem);
          height: auto;
          stroke: #ffffff;
          stroke-width: 20;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
          animation: chevronPulse 4s ease-in-out infinite;
          opacity: 0.8;
          flex-shrink: 0;
          z-index: 2;
        }

        .chevron-left {
          animation-delay: 0s;
        }

        .chevron-right {
          animation-delay: 0.3s;
        }

        @keyframes chevronPulse {
          0%, 100% {
            opacity: 0.8;
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 60px rgba(255, 255, 255, 0.5));
          }
        }

        .eye-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 3;
        }

        /* White outer ring */
        .eye-ring {
          position: absolute;
          top: -20px; /* moves the ring slightly above */
          left: 0;
          width: 380px;
          height: 380px;
          z-index: 4;
          pointer-events: none;
          animation: ringGlow 5s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        /* Animation for subtle glowing effect */
        @keyframes ringGlow {
          0%, 100% {
            opacity: 0.8;
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 35px rgba(255, 255, 255, 0.5));
          }
        }

        .eye {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: #dc2626;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 80px rgba(220, 38, 38, 0.6),
            0 0 160px rgba(220, 38, 38, 0.4),
            inset 0 0 50px rgba(0, 0, 0, 0.3);
          animation: eyePulse 5s ease-in-out infinite;
          overflow: hidden;
        }

        @keyframes eyePulse {
          0%, 100% {
            box-shadow: 
              0 0 80px rgba(220, 38, 38, 0.6),
              0 0 160px rgba(220, 38, 38, 0.4),
              inset 0 0 50px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 
              0 0 100px rgba(220, 38, 38, 0.8),
              0 0 200px rgba(220, 38, 38, 0.6),
              inset 0 0 50px rgba(0, 0, 0, 0.3);
          }
        }



        .hero-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          min-height: 70vh;
        }

        .hero-content {
          animation: fadeInUp 1s ease-out 0.2s both;
          margin-bottom: auto;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .hero-subtitle-line {
          display: block;
          color: #ffffff;
          font-weight: 300;
        }

        .subtitle {
          color: #d4d4d4;
          font-size: clamp(1rem, 1.3vw, 1.15rem);
          line-height: 1.65;
          margin-bottom: 2.5rem;
          font-weight: 400;
          max-width: 540px;
        }

        .desktop-break {
          display: none;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.25rem 2.75rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          background: #dc2626;
          color: #fff;
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.3);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(220, 38, 38, 0.5);
          background: #b91c1c;
        }

        .hero-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 3rem;
          animation: fadeInUp 1s ease-out 0.6s both;
          margin-top: auto;
        }

        .hero-description {
          flex: 1;
          max-width: 440px;
          color: #d4d4d4;
          font-size: clamp(0.9rem, 1.1vw, 1rem);
          line-height: 1.65;
          font-weight: 400;
        }

        .highlight {
          color: #ffffff;
          font-weight: 500;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .tag {
          padding: 0.6rem 1.4rem;
          border: 1px solid rgba(63, 63, 70, 0.9);
          border-radius: 50px;
          font-size: 0.7rem;
          color: #d4d4d4;
          background: rgba(26, 26, 26, 0.9);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .tag:hover {
          border-color: #dc2626;
          color: #ffffff;
          background: rgba(220, 38, 38, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        }

        @media (min-width: 1280px) {
          .hero {
            padding: 10rem 4rem 5rem;
          }

          .logo-search-container {
            width: 1600px;
            height: 650px;
          }

          .logo-element {
            gap: -1rem;
          }

          .eye {
            width: 800px;
            height: 400px;
          }

          .eye-ring {
            width: 440px;
            height: 440px;
            top: -20px;
          }
        }

        @media (min-width: 1024px) {
          .hero {
            padding: 8rem 3rem 4rem;
          }

          .logo-search-container {
            width: 1500px;
            height: 600px;
          }

          .logo-element {
            gap: -1.5rem;
          }

          .eye {
            width: 360px;
            height: 360px;
          }

          .eye-ring {
            width: 420px;
            height: 420px;
          }

          .desktop-break {
            display: inline;
          }
        }

        @media (max-width: 1023px) {
          .hero-container {
            min-height: 60vh;
          }

          .hero-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }

          .hero-description {
            max-width: 100%;
          }

          .logo-search-container {
            width: 1200px;
            height: 480px;
          }

          .logo-element {
            gap: -2rem;
          }

          .eye {
            width: 280px;
            height: 280px;
          }

          .eye-ring {
            width: 320px;
            height: 320px;
            top: -15px;
          }
        }

        @media (max-width: 767px) {
          .hero {
            padding: 7rem 1.5rem 4rem;
          }

          .hero-container {
            min-height: auto;
            gap: 3rem;
          }

          .hero-content {
            margin-bottom: 0;
          }

          .subtitle {
            margin-bottom: 2rem;
          }

          .hero-tags {
            width: 100%;
          }

          .logo-search-container {
            width: 100%;
            max-width: 700px;
            height: 280px;
          }

          .chevron {
            stroke-width: 12;
            width: clamp(6rem, 24vw, 12rem);
          }

          .logo-element {
            gap: 1rem;
          }

          .eye {
            width: 160px;
            height: 160px;
          }

          .eye-ring {
            width: 200px;
            height: 200px;
            top: -10px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 6rem 1.25rem 3rem;
          }

          .cta-btn {
            padding: 1rem 2rem;
            font-size: 0.75rem;
          }

          .tag {
            font-size: 0.65rem;
            padding: 0.5rem 1rem;
          }

          .logo-search-container {
            width: 100%;
            max-width: 540px;
            height: 220px;
          }

          .logo-element {
            gap: 0.5rem;
          }

          .chevron {
            display: none;
          }

          .eye {
            width: 130px;
            height: 130px;
          }

          .eye-ring {
            width: 170px;
            height: 170px;
            top: -8px;
          }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
