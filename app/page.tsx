
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import Location from "@/components/Location";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import CompaniesSlider from "@/components/companies-slider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative z-10">
      
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <CompaniesSlider />
      {/* <PortfolioSection /> */}
      <div className="relative">
      <Location />
      <div className="relative z-10 -mt-60">
      <ContactSection />
      </div>
      </div>
      <Footer />
    </main>
  );
}
