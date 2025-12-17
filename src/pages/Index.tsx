import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FirmSection from "@/components/FirmSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FirmSection />
        <ServicesSection />
        <MethodologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;