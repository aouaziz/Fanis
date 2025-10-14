"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Smartphone,
  ShoppingBag,
  Laptop,
  Zap,
  Globe,
  Briefcase,
  Car,
  Cpu,
  Cloud,
  Package,
} from "lucide-react";

const BRANDS = [
  { name: "TechCorp", icon: Laptop },
  { name: "ShopHub", icon: ShoppingBag },
  { name: "MobileFirst", icon: Smartphone },
  { name: "FastDelivery", icon: Zap },
  { name: "GlobalNet", icon: Globe },
  { name: "BizSolutions", icon: Briefcase },
  { name: "AutoPro", icon: Car },
  { name: "DataTech", icon: Cpu },
  { name: "CloudServe", icon: Cloud },
  { name: "PackageX", icon: Package },
] as const;

export default function BrandsTicker() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const ctx = gsap.context(() => {
      // Simple infinite scroll animation
      const animation = gsap.to(".slider-content", {
        xPercent: -100,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Pause on hover
      sliderRef.current?.addEventListener("mouseenter", () =>
        animation.timeScale(0)
      );
      sliderRef.current?.addEventListener("mouseleave", () =>
        animation.timeScale(1)
      );
    }, sliderRef);

    // Store context for cleanup
    animationRef.current = ctx;

    return () => {
      ctx.revert(); // This handles all cleanup
    };
  }, []); // Empty dependency array since we don't have any changing variables

  return (
    <section className="py-20 bg-white border-y border-[#333333]/10 overflow-hidden">
      <div className="mb-12 text-center">
        <h3 className="text-sm font-bold text-[#333333]/60 uppercase tracking-widest mb-2">
          Nos Partenaires
        </h3>
        <p className="text-2xl font-bold text-[#333333]">
          Ils Nous Font Confiance
        </p>
      </div>

      <div ref={sliderRef} className="relative overflow-hidden">
        <div className="flex">
          {/* First set of items */}
          <div className="slider-content flex items-center gap-20 whitespace-nowrap">
            {BRANDS.map((brand, i) => {
              const Icon = brand.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 min-w-[220px] px-6 py-4 bg-[#EEEEEE]/50 rounded-2xl hover:bg-[#EEEEEE] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#B31818] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-[#333333] group-hover:text-[#007BFF] transition-colors duration-300">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Duplicated set for seamless loop */}
          <div className="slider-content flex items-center gap-20 whitespace-nowrap absolute left-[100%] top-0">
            {BRANDS.map((brand, i) => {
              const Icon = brand.icon;
              return (
                <div
                  key={`clone-${i}`}
                  className="flex items-center gap-4 min-w-[220px] px-6 py-4 bg-[#EEEEEE]/50 rounded-2xl hover:bg-[#EEEEEE] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#B31818] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-[#333333] group-hover:text-[#007BFF] transition-colors duration-300">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
