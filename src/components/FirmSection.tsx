import { Cpu, ChartPie, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FirmSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Cpu,
      titleKey: "firm.pillar1.title",
      descriptionKey: "firm.pillar1.description",
    },
    {
      icon: ChartPie,
      titleKey: "firm.pillar2.title",
      descriptionKey: "firm.pillar2.description",
    },
    {
      icon: Globe,
      titleKey: "firm.pillar3.title",
      descriptionKey: "firm.pillar3.description",
    },
  ];

  return (
    <section id="firm" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
            {t("firm.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("firm.subtitle")}
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
                {t(pillar.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(pillar.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirmSection;
