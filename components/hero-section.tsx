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

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: any[] = [];
    const colors = ["#007BFF", "#0056b3", "#B31818", "#333333"];
    const count = 50;

    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        ox: x,
        oy: y,
        r: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: 0,
        vy: 0,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.1,
        noise: Math.random() * 1000,
      });
    }

    let mouse = { x: 0, y: 0, hover: false };
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.hover = true;
    });
    canvas.addEventListener("mouseleave", () => (mouse.hover = false));

    let frame = 0;
    const animate = () => {
      if (window.innerWidth < 640) return; // stop on mobile
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        if (mouse.hover) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100) {
            const f = (100 - dist) / 100;
            p.vx -= (dx / dist) * f * 0.2;
            p.vy -= (dy / dist) * f * 0.2;
          }
        } else {
          p.noise += 0.005;
          p.angle += (Math.random() - 0.5) * 0.1;
          p.vx = Math.cos(p.angle) * p.speed + Math.sin(p.noise) * 0.5;
          p.vy = Math.sin(p.angle) * p.speed + Math.cos(p.noise * 1.5) * 0.5;

          const dx = p.ox - p.x;
          const dy = p.oy - p.y;
          if (Math.hypot(dx, dy) > 100) {
            p.vx += dx * 0.0001;
            p.vy += dy * 0.0001;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.vx *= 0.99;
        p.vy *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        particles.forEach((o) => {
          const d = Math.hypot(p.x - o.x, p.y - o.y);
          if (d < 100 && d > 0) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(51,51,51,${(100 - d) / 500})`;
            ctx.stroke();
          }
        });
      });

      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white"
    >
      <canvas
        ref={canvasRef}
        className="hidden sm:block absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#B31818] tracking-tight leading-tight">
          FANIS NETWORK
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#B31818]">
            nous créons les liens qui valorisent votre image
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-[#333]/80 max-w-4xl mx-auto leading-relaxed mt-6">
          Fanis Network, Agence de marketing et de communication créative basée à Casablanca,
          spécialisée dans la transformation digitale, le branding et la production audiovisuelle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Button
            size="lg"
            onClick={() => scrollTo("contact")}
            className="bg-[#007BFF] hover:bg-[#0057b3] text-white text-lg px-10 py-6 rounded-full shadow-lg transform hover:scale-105 transition w-full sm:w-auto flex items-center gap-2 group"
          >
            Réserver Une Consultation Gratuite
            <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("portfolio")}
            className="text-lg px-10 py-6 rounded-full border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition w-full sm:w-auto"
          >
            Voir Nos Réalisations
          </Button>
        </div>
      </div>
    </section>
  );
}