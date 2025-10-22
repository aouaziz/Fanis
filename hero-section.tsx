\"use client\";

import React from "react";

export default function HeroSection() {
  return (
    <section className=\"hero\" id=\"home\">
      <div className=\"hero-container\">
        <div className=\"hero-top\">
          <h1>Marketing that Feels.<br/>Growth that Resonates.</h1>
          <p className=\"hero-subtitle\">
            Nous créons des expériences de marque mémorables : design, publicité
            de performance et développement web — alignés sur vos objectifs business.
          </p>
          <a href=\"#contact\" className=\"hero-btn\">
            PARLER AUJOURD’HUI
            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden>
              <path d=\"M1 15L15 1M15 1H1M15 1V15\" stroke=\"currentColor\" strokeWidth=\"2\"/>
            </svg>
          </a>
        </div>

        <div className=\"hero-center\">
          <div className=\"sphere-container\">
            <div className=\"sphere-glow\"></div>
            <div className=\"sphere\"></div>
            <div className=\"hero-info\">
              <p>
                Sites haute performance, campagnes ROIste, et storytelling visuel audacieux —
                <span> nous concevons des moments que l’on ne voit pas seulement, on les ressent.</span>
              </p>
              <div className=\"tags\">
                <span className=\"tag\">UI/UX</span>
                <span className=\"tag\">ADS & ANALYTICS</span>
                <span className=\"tag\">WEB DEV</span>
                <span className=\"tag\">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero { min-height: 100vh; padding: 8rem 3rem 4rem; display:flex; align-items:center; justify-content:center; position:relative; }
        .hero-container { max-width: 1400px; margin: 0 auto; width:100%; display:flex; flex-direction:column; align-items:center; text-align:center; gap:3rem; }
        .hero-top { max-width: 900px; }
        .hero-top h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height:1.1; margin-bottom:2rem; font-weight:400; }
        .hero-subtitle { color:#666; font-size:1.1rem; line-height:1.6; margin-bottom:2.5rem; }
        .hero-btn { display:inline-flex; align-items:center; gap:.5rem; background:#1a1a1a; color:#fff; padding:1rem 2rem; border-radius:50px; text-decoration:none; font-size:.95rem; transition: transform .3s; }
        .hero-btn:hover { transform: translateY(-2px); }

        .hero-center { position:relative; display:flex; justify-content:center; align-items:center; width:100%; }
        .sphere-container { position:relative; width: 600px; height:600px; display:flex; align-items:center; justify-content:center; }
        .sphere-glow { position:absolute; inset:-100px; background: radial-gradient(circle, rgba(255,200,150,.4) 0%, rgba(255,180,120,.2) 30%, transparent 70%); border-radius:50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{ opacity:.6; transform:scale(1);} 50%{ opacity:.9; transform:scale(1.05);} }
        .sphere {
          width:100%; height:100%; border-radius:50%;
          background: radial-gradient(circle at 35% 30%,
            rgba(255,255,255,.95) 0%,
            rgba(255,235,215,.85) 20%,
            rgba(255,210,180,.75) 40%,
            rgba(245,190,160,.85) 60%,
            rgba(235,180,150,.9) 80%,
            rgba(225,170,140,.95) 100%);
          box-shadow:
            0 30px 90px rgba(255,150,100,.4),
            0 15px 45px rgba(255,180,120,.3),
            inset 0 -30px 60px rgba(200,140,100,.3),
            inset 0 30px 60px rgba(255,255,255,.3);
          position:relative; overflow:hidden; animation: float 6s ease-in-out infinite;
        }
        @keyframes float { 0%,100%{ transform: translateY(0) rotate(0deg);} 50%{ transform: translateY(-20px) rotate(2deg);} }
        .sphere::before {
          content:\"\"; position:absolute; inset:0;
          background:
            radial-gradient(circle at 25% 25%, rgba(255,255,255,.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(200,140,100,.4) 0%, transparent 50%);
          border-radius:50%;
        }
        .sphere::after {
          content:\"\"; position:absolute; inset:0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,.8) 0%, transparent 3%),
            radial-gradient(circle at 80% 40%, rgba(255,255,255,.6) 0%, transparent 2%),
            radial-gradient(circle at 50% 60%, rgba(255,255,255,.7) 0%, transparent 2.5%),
            radial-gradient(circle at 30% 70%, rgba(255,255,255,.5) 0%, transparent 2%),
            radial-gradient(circle at 70% 20%, rgba(255,255,255,.6) 0%, transparent 2%),
            radial-gradient(circle at 40% 45%, rgba(255,255,255,.4) 0%, transparent 1.5%),
            radial-gradient(circle at 60% 75%, rgba(255,255,255,.7) 0%, transparent 2%),
            radial-gradient(circle at 15% 55%, rgba(255,255,255,.5) 0%, transparent 1.5%),
            radial-gradient(circle at 85% 65%, rgba(255,255,255,.6) 0%, transparent 2%);
          opacity:.9; animation: sparkle 4s ease-in-out infinite;
        }
        @keyframes sparkle { 0%,100%{ opacity:.7; transform:scale(1);} 50%{ opacity:1; transform:scale(1.02);} }
        .hero-info { position:absolute; right:-120px; top:50%; transform: translateY(-50%); max-width:320px; text-align:left; }
        .hero-info p { color:#666; line-height:1.6; margin-bottom:1.5rem; font-size:.95rem; }
        .hero-info p span { color:#ff6b35; }
        .tags { display:flex; flex-wrap:wrap; gap:.75rem; }
        .tag { padding:.5rem 1rem; border:1px solid #ccc; border-radius:50px; font-size:.85rem; color:#666; background: rgba(255,255,255,.5); backdrop-filter: blur(10px); }

        @media (max-width: 1200px) {
          .hero-info { position: static; transform: none; max-width: 600px; margin-top: 3rem; text-align:center; }
          .sphere-container { width: 500px; height: 500px; }
        }
        @media (max-width: 1024px) {
          .sphere-container { width: 400px; height: 400px; }
        }
        @media (max-width: 768px) {
          .hero { padding: 6rem 1.5rem 3rem; }
          .sphere-container { width: 320px; height: 320px; }
          .tags { justify-content:center; }
        }
      `}</style>
    </section>
  );
}
