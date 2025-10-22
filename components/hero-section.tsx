'use client';

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const MIN_DESKTOP_WIDTH = 640; // Tailwind's 'sm' breakpoint
    let animationFrameId: number; // To track and cancel the animation loop

    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. STOP ANIMATION ON MOBILE FOR BATTERY SAVINGS
    // If the device is mobile on mount, skip all heavy canvas setup and animation.
    if (typeof window !== "undefined" && window.innerWidth < MIN_DESKTOP_WIDTH) {
        // The canvas is hidden via the CSS class (hidden sm:block), so we just
        // skip the expensive JS part and set up a minimal cleanup.
        return () => {
            // Cleanup function will be called on unmount
        };
    }

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
    // Only add resize listener if animation is running (i.e., not on mobile)
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

      // Double-check if screen resized to mobile orientation during runtime
      if (window.innerWidth < MIN_DESKTOP_WIDTH) {
          if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
          }
          return;
      }

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

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      // Cancel the animation loop on unmount
      if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
      }
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
      {/* 2. BACKGROUND ANIMATION HIDDEN ON MOBILE (via Tailwind's 'hidden sm:block') */}
      <canvas
        ref={canvasRef}
        // Fix: 'hidden sm:block' ensures the canvas is only visible/rendered on screens >= 640px
        className="hidden sm:block absolute inset-0 w-full h-full" 
        style={{ opacity: 0.6 }}
      />
      {/* Content */}
      <div
        className="container mx-auto max-w-6xl text-center relative z-10"
      >
        <div className="space-y-6">
          
          {/* Title - Uses mobile-first text scaling (text-4xl then sm:text-5xl lg:text-7xl) */}
          <h1 
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#B31818]  tracking-tight leading-tight"
          >
            FANIS NETWORK
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#B31818]">
               nous créons les liens  qui valorisent votre image
            </span>
          </h1>

          {/* Description - Uses mobile-first text scaling (text-lg then sm:text-xl) */}
          <p className="text-lg sm:text-xl text-[#333]/80 max-w-4xl mx-auto leading-relaxed">
            Fanis Network, Agence de marketing et de communication créative basée à Casablanca, spécialisée dans la transformation digitale, le branding et la production audiovisuelle.
          </p>

          {/* CTA Buttons - Uses flex-col (stacked) on mobile and sm:flex-row (side-by-side) on larger screens */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            
            {/* Primary Button */}
            <Button
              size="lg"
              className="bg-[#007BFF] hover:bg-[#0057b3] text-white text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group transform hover:scale-105 w-full sm:w-auto" // w-full for full-width on mobile
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
              className="text-lg px-10 py-6 rounded-full border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition-all duration-300 bg-white/90 backdrop-blur-sm transform hover:scale-105 w-full sm:w-auto" // w-full for full-width on mobile
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