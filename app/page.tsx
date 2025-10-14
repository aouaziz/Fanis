"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  // Load GSAP once
  useEffect(() => {
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: "none", duration: 0.4 });
    })();
  }, []);

  // Simpler loading completion handler
  useEffect(() => {
    if (isLoading || !mainRef.current) return;

    import("gsap").then(({ gsap }) => {
      gsap.set(mainRef.current, { opacity: 1, clearProps: "all" });
    });
  }, [isLoading]);

  // Show loading screen until loading finishes
  if (isLoading)
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;

  return (
    <main ref={mainRef} className="min-h-screen bg-background relative z-10">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
