import { Search, Ruler, Cpu, Users } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Strategy & Feasibility",
      description: "Market analysis, demand assessment, and comprehensive business planning to ensure project viability.",
    },
    {
      icon: Ruler,
      number: "02",
      title: "Design & Permits",
      description: "Architecture design, licensing management, and construction oversight through to completion.",
    },
    {
      icon: Cpu,
      number: "03",
      title: "Systems & Technology",
      description: "Implementation of booking software, access control systems, and operational automation.",
    },
    {
      icon: Users,
      number: "04",
      title: "Operations & Academy",
      description: "Staff recruitment and training, sports programs development, and community building.",
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
            Methodology
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A proven four-stage approach that takes projects from concept to thriving operation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Number Circle */}
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6 relative z-10">
                  <span className="text-sm font-semibold text-primary-foreground">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;