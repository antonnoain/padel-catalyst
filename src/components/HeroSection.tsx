import { Button } from "@/components/ui/button";
import { Globe, Building2 } from "lucide-react";
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
      <div className="relative z-10 container mx-auto px-6">
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Feasibility Study
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => document.getElementById("methodology")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Methodology
            </Button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-20 animate-fade-in-delay-3">
          <p className="text-white/50 text-xs mb-5 uppercase tracking-[0.2em] font-medium">
            International Operational Experience
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2.5 text-white/40">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Europe</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2.5 text-white/40">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Asia</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2.5 text-white/40">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">12+ Clubs Managed</span>
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