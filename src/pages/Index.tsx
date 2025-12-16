import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import MethodologySection from "@/components/MethodologySection";
import SchoolsSection from "@/components/SchoolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LeadershipSection />
        <MethodologySection />
        <SchoolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
