import { CheckCircle2 } from "lucide-react";

const LeadershipSection = () => {
  const highlights = [
    {
      title: "Gestión Contrastada",
      description: "Experiencia supervisando operaciones en grupos con más de 12 clubes en España.",
    },
    {
      title: "Visión Global",
      description: "Desarrollo de proyectos en Europa y Asia (Japón, India), aplicando estándares internacionales.",
    },
    {
      title: "Enfoque Técnico",
      description: "Optimización de procesos, domótica y eficiencia energética en instalaciones deportivas.",
    },
    {
      title: "Respaldo Financiero",
      description: "Contamos con una base sólida de inversión para garantizar la viabilidad de cada proyecto.",
    },
  ];

  return (
    <section id="liderazgo" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
              El Equipo
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Liderazgo con Visión de Ingeniería y Gestión
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Padel Catalyst nace de la fusión entre la ingeniería industrial y la pasión por el deporte. 
              Dirigida por <span className="text-foreground font-semibold">Antón Noain</span> (Ingeniero Industrial ICAI), 
              nuestra firma combina rigor técnico con una profunda experiencia operativa.
            </p>

            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">12+</div>
                  <div className="text-muted-foreground text-sm">Clubes Gestionados</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">3</div>
                  <div className="text-muted-foreground text-sm">Continentes</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">ICAI</div>
                  <div className="text-muted-foreground text-sm">Formación</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary">
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">360°</div>
                  <div className="text-muted-foreground text-sm">Modelo Integral</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <blockquote className="text-muted-foreground italic text-center">
                  "La ingeniería al servicio del deporte. Cada proyecto es único, 
                  pero nuestra metodología garantiza resultados."
                </blockquote>
                <p className="text-center mt-4 text-sm font-semibold text-foreground">
                  — Antón Noain, Fundador
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-accent/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
