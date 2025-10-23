"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CompaniesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const content = slider.innerHTML;
    slider.innerHTML = content + content + content;

    const slides = slider.children;
    let totalWidth = 0;
    for (let i = 0; i < slides.length / 3; i++) {
      totalWidth += slides[i].clientWidth;
    }

    const tl = gsap.to(slider, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const companies = [
    { name: "APPA", logo: "/companies/APPA.png" },
    { name: "Bourse de Casablanca", logo: "/companies/BourseDeCasablanca.png" },
    { name: "Electroplanet", logo: "/companies/Electroplanet.png" },
    { name: "English SoftSkills", logo: "/companies/EnglishSoftSkills.png" },
    { name: "INAMS", logo: "/companies/INAMS.png" },
    { name: "LinkedIn", logo: "/companies/LinkedIn.png" },
    { name: "Myconos", logo: "/companies/MYCONOS.png" },
    { name: "Marjane", logo: "/companies/Marjane-logo.png" },
    { name: "Shell", logo: "/companies/Shell.png" },
    { name: "TotalEnergies", logo: "/companies/TotalEnergies.png" },
    { name: "ODEC", logo: "/companies/ODEC.png" },
  ];

  return (
    <>
      <div className="companies-slider-section">
        <div className="companies-container">
          <div className="companies-header">
            <div className="companies-tag">
              <span className="tag-dot"></span>
              Nos Partenaires
            </div>
            <h2 className="companies-title">Ils nous font confiance</h2>
          </div>

          <div className="slider-wrapper">
            <div className="slider-gradient slider-gradient-left"></div>
            <div className="slider-gradient slider-gradient-right"></div>

            <div className="slider-container">
              <div ref={sliderRef} className="slider-track">
                {companies.map((company, index) => (
                  <div key={index} className="company-card">
                    <div className="card-content">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="company-logo"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .companies-slider-section {
          background: #0a0a0a;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .companies-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .companies-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .companies-tag {
          color: #dc2626;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          background: #dc2626;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        .companies-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          color: #ffffff;
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        .slider-wrapper {
          position: relative;
          margin: 0 auto;
        }

        .slider-gradient {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 10;
          pointer-events: none;
        }

        .slider-gradient-left {
          left: 0;
          background: linear-gradient(to right, #0a0a0a 0%, transparent 100%);
        }

        .slider-gradient-right {
          right: 0;
          background: linear-gradient(to left, #0a0a0a 0%, transparent 100%);
        }

        .slider-container {
          position: relative;
          overflow: hidden;
          padding: 1rem 0;
          height: 120px;
        }

        .slider-track {
          display: flex;
          align-items: center;
          gap: 2rem;
          position: absolute;
          left: 0;
        }

        .company-card {
          flex-shrink: 0;
          width: 180px;
          height: 90px;
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .card-content:hover {
          border-color: #dc2626;
          background: rgba(220, 38, 38, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.15);
        }

        .company-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(100%) brightness(1.2);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .card-content:hover .company-logo {
          filter: grayscale(0%) brightness(1);
          opacity: 1;
        }

        @media (max-width: 1023px) {
          .companies-slider-section {
            padding: 5rem 1.5rem;
          }

          .companies-header {
            margin-bottom: 3rem;
          }

          .slider-gradient {
            width: 80px;
          }

          .company-card {
            width: 160px;
            height: 80px;
          }
        }

        @media (max-width: 767px) {
          .companies-slider-section {
            padding: 4rem 1.25rem;
          }

          .companies-header {
            margin-bottom: 2.5rem;
          }

          .companies-tag {
            font-size: 0.75rem;
          }

          .slider-gradient {
            width: 60px;
          }

          .slider-container {
            height: 100px;
          }

          .slider-track {
            gap: 1.5rem;
          }

          .company-card {
            width: 140px;
            height: 70px;
          }
        }
      `}</style>
    </>
  );
}