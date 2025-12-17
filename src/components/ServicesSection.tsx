import { GraduationCap, Building, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "We finance and manage sports facilities, providing schools with premium amenities at zero operational risk.",
      features: [
        "Full investment coverage",
        "Free access during school hours",
        "Professional management",
        "Academy programs for students",
      ],
    },
    {
      icon: Building,
      title: "Landowners & Developers",
      description: "We transform underutilized land into high-yield sports assets through comprehensive development plans.",
      features: [
        "Feasibility analysis",
        "Investment partnership",
        "Turnkey construction",
        "Long-term management",
      ],
    },
    {
      icon: Users,
      title: "Club Owners",
      description: "Optimization of existing clubs to maximize profitability through professional management and technology.",
      features: [
        "Operational audit",
        "Technology integration",
        "Revenue optimization",
        "Staff training programs",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.15em] mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
            Who We Help
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tailored solutions for institutions, landowners, and club operators seeking to maximize their sports infrastructure potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border border-border p-8 hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;