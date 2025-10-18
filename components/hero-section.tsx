"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with device pixel ratio
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create particles
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      originalX: number;
      originalY: number;
      angle: number;
      speed: number;
      noiseOffset: number;
    }> = [];

    const colors = ["#007BFF", "#0056b3", "#B31818", "#333333"];
    const particleCount = 50;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.1;
      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        angle,
        speed,
        noiseOffset: Math.random() * 1000, // Random starting point for noise
      });
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    canvas.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    });

    canvas.addEventListener("mouseleave", () => {
      isHovering = false;
    });

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (isHovering) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const force = (100 - distance) / 100;
            particle.vx -= (dx / distance) * force * 0.2;
            particle.vy -= (dy / distance) * force * 0.2;
          }
        }

        // Add random movement when not hovering
        if (!isHovering) {
          // Update noise offset for organic movement
          particle.noiseOffset += 0.005;

          // Create organic movement using sine and cosine
          const noiseX = Math.sin(particle.noiseOffset) * 0.5;
          const noiseY = Math.cos(particle.noiseOffset * 1.5) * 0.5;

          // Update angle with some randomness
          particle.angle += (Math.random() - 0.5) * 0.1;

          // Calculate new velocities
          particle.vx = Math.cos(particle.angle) * particle.speed + noiseX;
          particle.vy = Math.sin(particle.angle) * particle.speed + noiseY;

          // Add slight attraction to original position
          const dx = particle.originalX - particle.x;
          const dy = particle.originalY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 100) {
            particle.vx += dx * 0.0001;
            particle.vy += dy * 0.0001;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Keep particles within bounds with wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Apply soft damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(51, 51, 51, ${(100 - distance) / 500})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
{/* Content */}
      <div
        className="container mx-auto max-w-6xl text-center relative z-10"
      >
        <div className="space-y-6">
          
          {/* New Optimized Title */}
          <h1 
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#333] tracking-tight leading-tight"
          >
            Propulsez Votre Entreprise avec
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#B31818]">
              L'Excellence Digitale
            </span>
          </h1>

          {/* New Optimized Description with Keywords */}
          <p className="text-lg sm:text-xl text-[#333]/80 max-w-4xl mx-auto leading-relaxed">
            Fanis Network, l'agence digitale de référence à Casablanca, offre des résultats 
            mesurables grâce à une stratégie de marque innovante, un développement web de pointe et des 
            campagnes marketing digital performantes au Maroc. Transformez votre présence 
            en ligne avec des solutions sur mesure.
          </p>

          {/* Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            
            {/* Primary Button */}
            <Button
              size="lg"
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group transform hover:scale-105 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
              aria-label="Réserver une consultation gratuite avec Fanis Network"
            >
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                Réserver Une Consultation Gratuite
                <ArrowRight className="ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF] to-[#0056b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {/* Secondary Button */}
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 rounded-full border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition-all duration-300 bg-white/90 backdrop-blur-sm transform hover:scale-105 w-full sm:w-auto"
              onClick={() => scrollToSection("portfolio")}
              aria-label="Voir nos réalisations et études de cas"
            >
              <span className="flex items-center justify-center sm:justify-start">
                Voir Nos Réalisations
              </span>
            </Button>
          </div>
        </div>
      
      </div>
    </section>
  );
}
