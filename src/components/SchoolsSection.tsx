import { Button } from "@/components/ui/button";
import { Banknote, GraduationCap, Shield, Star } from "lucide-react";

const SchoolsSection = () => {
  const benefits = [
    {
      icon: Banknote,
      title: "Inversión Externa",
      description: "Padel Catalyst asume la inversión de la reforma o construcción de las instalaciones.",
    },
    {
      icon: GraduationCap,
      title: "Uso Lectivo Gratuito",
      description: "Instalaciones disponibles para Educación Física en horario escolar sin coste adicional.",
    },
    {
      icon: Shield,
      title: "Cero Riesgo Operativo",
      description: "Nos encargamos del mantenimiento, personal y gestión diaria. Ustedes solo disfrutan.",
    },
    {
      icon: Star,
      title: "Prestigio Institucional",
      description: "Una academia de pádel profesional como valor añadido para las familias del centro.",
    },
  ];

  return (
    <section id="colegios" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
              Para Colegios y Universidades
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              El Partner Estratégico para Centros Educativos
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Elevamos el nivel de sus instalaciones sin coste operativo ni de gestión para el centro. 
              Un modelo ganador donde la institución obtiene infraestructura de primer nivel y nosotros 
              gestionamos la actividad extraescolar.
            </p>

            <Button
              variant="hero"
              size="lg"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Información
            </Button>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-foreground/5 rounded-full px-6 py-3 border border-primary-foreground/10">
            <span className="text-primary-foreground/60 text-sm">
              ¿Tiene espacios deportivos infrautilizados?
            </span>
            <a
              href="#contacto"
              className="text-accent font-semibold text-sm hover:underline"
            >
              Analicemos su potencial →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
