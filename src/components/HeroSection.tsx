import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import heroPadel from "@/assets/hero-padel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPadel})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
            Global Padel Solutions: Investment, Development & Management.
          </h1>
          
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl animate-fade-in-delay-1 leading-relaxed">
            We partner with institutions, landowners, and investors to create high-performance padel assets. From feasibility to daily operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Feasibility Study
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-white"
              onClick={() => document.getElementById("methodology")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Methodology
            </Button>
          </div>

          {/* Trust Badge - Simplified */}
          <div className="mt-16 animate-fade-in-delay-3">
            <div className="inline-flex items-center gap-3 text-white/60 border border-white/20 rounded-full px-5 py-2.5 bg-white/5 backdrop-blur-sm">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">International Operational Experience · 12+ Clubs Managed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-5 h-9 border border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;