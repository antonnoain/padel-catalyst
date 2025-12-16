import { Search, HardHat, Cpu, Users } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Estrategia y Viabilidad",
      description: "Análisis de suelos, estudios de demanda y planes financieros sólidos.",
      details: ["Estudio de mercado", "Viabilidad económica", "Plan de negocio"],
    },
    {
      icon: HardHat,
      number: "02",
      title: "Ingeniería y Permisos",
      description: "Gestión integral de licencias, dirección de obra y construcción llave en mano.",
      details: ["Licencias y permisos", "Dirección de obra", "Construcción"],
    },
    {
      icon: Cpu,
      number: "03",
      title: "Tecnología y Operaciones",
      description: "Sistemas de reserva automatizados, control de accesos y formación de staff.",
      details: ["Software de gestión", "Automatización", "Control de accesos"],
    },
    {
      icon: Users,
      number: "04",
      title: "Academia y Comunidad",
      description: "Creación de escuelas deportivas, torneos y dinamización social del club.",
      details: ["Escuela de pádel", "Eventos y torneos", "Fidelización"],
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Nuestra Metodología
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un Modelo 360°: De la Tierra a la Pista
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Acompañamos cada proyecto desde el primer análisis hasta la operación diaria, 
            garantizando rentabilidad y excelencia deportiva.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 shadow-subtle hover:shadow-card transition-all duration-300 border border-border hover:border-accent/30"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <step.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
