"use client";

import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

// Fixed particle positions (no SSR randomness)
const PARTICLE_POSITIONS = [
  { left: 15.2, top: 23.4 },
  { left: 78.1, top: 45.6 },
  { left: 34.5, top: 67.8 },
  { left: 89.3, top: 12.1 },
  { left: 45.7, top: 89.2 },
  { left: 23.4, top: 34.5 },
  { left: 67.8, top: 56.7 },
  { left: 12.1, top: 78.9 },
  { left: 56.7, top: 23.4 },
  { left: 90.2, top: 67.3 },
  { left: 28.5, top: 45.8 },
  { left: 73.6, top: 89.1 },
  { left: 41.2, top: 12.5 },
  { left: 85.4, top: 34.7 },
  { left: 19.8, top: 56.2 },
  { left: 64.3, top: 78.5 },
  { left: 36.9, top: 91.3 },
  { left: 81.7, top: 23.6 },
  { left: 52.4, top: 45.9 },
  { left: 8.6, top: 67.2 },
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const particlesRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (!isMounted) return;
    let ctx: any = null;

    const runAnimation = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            window.dispatchEvent(
              new CustomEvent("loading:done", { detail: 100 })
            );
            onComplete();
          },
        });

        // Simple logo fade in
        tl.to(logoRef.current, {
          opacity: 1,
          duration: 0.3,
        });

        // Counter animation (faster)
        const counter = { value: 0 };
        tl.to(
          counter,
          {
            value: 100,
            duration: 1,
            ease: "none",
            onUpdate: () => {
              const pct = Math.floor(counter.value);
              if (counterRef.current) {
                counterRef.current.textContent = pct.toString();
              }
              // emit progress for other components to listen to
              try {
                window.dispatchEvent(
                  new CustomEvent("loading:progress", { detail: pct })
                );
              } catch (e) {
                /* noop */
              }
              // emit an "almost-done" event once (useful to begin hero/nav animations)
              if (pct >= 85 && !(window as any).__loadingAlmostDispatched) {
                try {
                  window.dispatchEvent(
                    new CustomEvent("loading:almost-done", { detail: pct })
                  );
                } catch (e) {}
                (window as any).__loadingAlmostDispatched = true;
              }
            },
          },
          0.2
        );

        // Progress bar animation
        tl.to(
          progressRef.current,
          {
            width: "100%",
            duration: 2.8,
            ease: "power1.inOut",
          },
          0.2
        );

        // Particle entrance
        const particles = particlesRef.current?.children;
        if (particles) {
          tl.from(
            particles,
            {
              scale: 0,
              opacity: 0,
              y: 100,
              duration: 0.8,
              stagger: { each: 0.05, from: "random" },
              ease: "back.out(3)",
            },
            0.6
          );
        }

        // Exit animation
        tl.to(
          containerRef.current,
          {
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
            duration: 0.8,
            ease: "power2.inOut",
          },
          "+=0.3"
        );
      });
      // done dispatch moved into the timeline onComplete to avoid referencing tl outside its scope
    };

    runAnimation();
    return () => ctx?.revert?.();
  }, [isMounted, onComplete]);

  if (!isMounted) {
    return <div className="fixed inset-0 bg-black" />;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden"
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[#B31818] to-transparent opacity-20 blur-3xl rounded-full"
      />

      {/* Circle */}
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-[#B31818]/40 rounded-full backdrop-blur-sm bg-white/5"
        style={{
          boxShadow:
            "0 0 60px rgba(179, 24, 24, 0.3), inset 0 0 60px rgba(179, 24, 24, 0.1)",
        }}
      />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {PARTICLE_POSITIONS.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#B31818] to-[#007BFF] rounded-full opacity-60"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              boxShadow: "0 0 10px currentColor",
            }}
          />
        ))}
      </div>

      {/* Centered content inside the circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
        {/* Logo */}
        <div ref={logoRef} className="mb-6 relative">
          <div className="text-6xl font-bold text-white tracking-tight flex items-center justify-center">
            {"FANISNETWORK".split("").map((ch, i) => (
              <span
                key={i}
                className={`letter inline-block ${
                  i >= 5 ? "text-[#B31818]" : ""
                }`}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* Elegant Progress Line + Counter (centered) */}
        <div className="relative z-10 w-80">
          {/* Base line */}
          <div className="relative w-full h-1 bg-gradient-to-r from-transparent via-[#B31818]/20 to-transparent rounded-full overflow-hidden mb-6 backdrop-blur-sm">
            {/* Animated line */}
            <div
              ref={progressRef}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-[#B31818] to-transparent w-0 rounded-full"
              style={{
                boxShadow:
                  "0 0 20px rgba(179, 24, 24, 0.8), 0 0 40px rgba(179, 24, 24, 0.4)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer opacity-80" />
            </div>
          </div>

          {/* Counter */}
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              <span ref={counterRef}>0</span>
              <span className="text-3xl text-[#B31818]">%</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
}
