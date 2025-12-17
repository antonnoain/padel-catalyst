import { Cpu, ChartPie, Globe } from "lucide-react";

const FirmSection = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Infrastructure Excellence",
      description: "State-of-the-art facility design and rigorous construction management. We ensure superior architectural quality and durability to create premium player experiences.",
    },
    {
      icon: ChartPie,
      title: "Financial Strength",
      description: "Solid investment backing to guarantee project viability and long-term growth. Our financial structure ensures every project reaches completion.",
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "International management capability with standardized quality protocols adapted to local markets. Proven experience across Europe and Asia.",
    },
  ];

  return (
    <section id="firm" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
            Why Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We integrate premium infrastructure development with strategic investment to deliver world-class padel assets.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-8 bg-secondary/50 rounded-lg border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirmSection;