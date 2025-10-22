\"use client\";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // lock scroll when menu open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="nav">
        <div className="logo">FANIS&nbsp;NETWORK</div>

        <div className="nav-center">
          <a href="#home" className="active">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#services">Services</a>
        </div>

        <div className="nav-right">
          <a href="#contact" className="lets-talk-btn" onClick={() => setMenuOpen(false)}>
            Contact
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
          <button
            className={\"menu-toggle\" + (menuOpen ? \" active\" : \"\")}
            aria-label={menuOpen ? \"Fermer le menu\" : \"Ouvrir le menu\"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={\"full-menu\" + (menuOpen ? \" active\" : \"\")} role=\"dialog\" aria-modal=\"true\">
        <div className=\"menu-left\">
          <div className=\"menu-tag\">Discutons de votre projet</div>
          <h2 className=\"menu-title\">Un projet ambitieux ?<br/>Créons-le ensemble.</h2>
          <a href=\"#contact\" className=\"menu-cta\" onClick={() => setMenuOpen(false)}>
            NOUS CONTACTER
            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden>
              <path d=\"M1 15L15 1M15 1H1M15 1V15\" stroke=\"currentColor\" strokeWidth=\"2\"/>
            </svg>
          </a>
        </div>
        <div className=\"menu-right\" onClick={() => setMenuOpen(false)}>
          <a href=\"#home\">Accueil</a>
          <a href=\"#services\">Services</a>
          <a href=\"#projects\">Projets</a>
          <a href=\"#blog\">Blog</a>
        </div>
        <div className=\"menu-footer\">
          <a href=\"#\" className=\"social-icon\" aria-label=\"Facebook\">
            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\">
              <path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>
            </svg>
          </a>
          <a href=\"#\" className=\"social-icon\" aria-label=\"Instagram\">
            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\">
              <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect>
              <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path>
              <line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>
            </svg>
          </a>
          <a href=\"#\" className=\"social-icon\" aria-label=\"Twitter\">
            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\">
              <path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>
            </svg>
          </a>
          <a href=\"#\" className=\"social-icon\" aria-label=\"Dribbble\">
            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\">
              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>
              <path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>
            </svg>
          </a>
          <a href=\"#\" className=\"social-icon\" aria-label=\"LinkedIn\">
            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\">
              <path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path>
              <rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect>
              <circle cx=\"4\" cy=\"4\" r=\"2\"></circle>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          background: linear-gradient(135deg, #f5f0eb 0%, #e8ddd5 50%, #f5e8df 100%);
          color: #1a1a1a;
        }

        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 1.5rem 3rem;
          display: flex; justify-content: space-between; align-items: center;
          background: transparent;
        }
        .logo {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: .12em;
        }
        .nav-center { display: flex; gap: 2.5rem; }
        .nav-center a {
          text-decoration: none; color: #666; font-size: .95rem; transition: color .3s;
        }
        .nav-center a.active, .nav-center a:hover { color: #1a1a1a; }
        .nav-right { display:flex; align-items:center; gap: 2rem; }
        .lets-talk-btn {
          text-decoration:none; color:#1a1a1a; font-size:.95rem; display:flex; align-items:center; gap:.5rem; transition: opacity .3s;
        }
        .lets-talk-btn:hover { opacity:.75; }
        .menu-toggle {
          background:none; border:none; cursor:pointer; width:40px; height:30px;
          display:flex; flex-direction:column; justify-content:space-between; padding:5px 0;
        }
        .menu-toggle span { display:block; width:100%; height:2px; background:#1a1a1a; transition: all .3s; }
        .menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .menu-toggle.active span:nth-child(2) { opacity:0; }
        .menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(8px, -8px); }

        .full-menu {
          position: fixed; inset:0; background: linear-gradient(135deg, #f5f0eb 0%, #e8ddd5 50%, #f5e8df 100%);
          z-index: 999; display: none; align-items: center; justify-content: space-between;
          padding: 8rem 8rem 4rem 8rem;
        }
        .full-menu.active { display:flex; }
        .menu-left { flex: 1; }
        .menu-tag { color:#ff6b35; font-size:.9rem; margin-bottom:2rem; display:flex; align-items:center; gap:.5rem; }
        .menu-tag::before { content:\"\"; width:8px; height:8px; background:#ff6b35; border-radius:50%; }
        .menu-title { font-size: clamp(2rem, 5vw, 3.5rem); line-height:1.2; margin-bottom:2rem; font-weight:400; }
        .menu-cta {
          display:inline-flex; align-items:center; gap:.5rem; background:#1a1a1a; color:#fff;
          padding:1rem 2rem; border-radius:50px; text-decoration:none; font-size:.95rem; transition: transform .3s;
        }
        .menu-cta:hover { transform: translateY(-2px); }
        .menu-right { display:flex; flex-direction:column; gap:1.5rem; align-items:flex-end; }
        .menu-right a {
          text-decoration:none; font-size: clamp(2rem, 4vw, 4rem); color:#999; transition: color .3s; font-weight:300;
          display:flex; align-items:center; gap:1rem;
        }
        .menu-right a:first-child, .menu-right a:hover { color:#1a1a1a; }
        .menu-right a::before { content:\"\"; width:12px; height:12px; background:#ff6b35; border-radius:50%; opacity:0; transition: opacity .3s; }
        .menu-right a:first-child::before { opacity:1; }
        .menu-footer { position:absolute; bottom:4rem; left:50%; transform: translateX(-50%); display:flex; gap:1rem; }
        .social-icon { width:40px; height:40px; border:1px solid #ccc; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#666; text-decoration:none; transition: all .3s; }
        .social-icon:hover { background:#1a1a1a; color:#fff; border-color:#1a1a1a; }

        @media (max-width: 1024px) {
          .full-menu { flex-direction: column; justify-content: center; gap: 3rem; }
          .menu-right { align-items:center; }
        }
        @media (max-width: 768px) {
          .nav { padding: 1.5rem; }
          .nav-center { display: none; }
          .full-menu { padding: 6rem 2rem 3rem; }
        }
      `}</style>
    </>
  );
}
