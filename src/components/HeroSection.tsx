import { Button } from "@/components/ui/button";
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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Soluciones Integrales de Pádel para Instituciones y Centros Educativos
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto animate-fade-in-delay-1 font-body leading-relaxed">
            Transformamos espacios infrautilizados en activos deportivos de alto rendimiento. 
            Diseño, Inversión y Gestión Operativa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hablar con un Consultor
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => document.getElementById("metodologia")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Metodología
            </Button>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-20 animate-fade-in-delay-3">
          <p className="text-primary-foreground/60 text-sm mb-6 uppercase tracking-widest font-body">
            Experiencia acumulada en proyectos internacionales
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-primary-foreground/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-sm font-medium">ICAI</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/50">
              <span className="text-lg">🇪🇸</span>
              <span className="text-sm font-medium">España</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/50">
              <span className="text-lg">🇯🇵</span>
              <span className="text-sm font-medium">Japón</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/50">
              <span className="text-lg">🇮🇳</span>
              <span className="text-sm font-medium">India</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2v20M2 12h20"/>
              </svg>
              <span className="text-sm font-medium">12+ Clubes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
