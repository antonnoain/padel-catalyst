import { Search, Ruler, Cpu, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MethodologySection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      number: "01",
      titleKey: "methodology.step1.title",
      descriptionKey: "methodology.step1.description",
    },
    {
      icon: Ruler,
      number: "02",
      titleKey: "methodology.step2.title",
      descriptionKey: "methodology.step2.description",
    },
    {
      icon: Cpu,
      number: "03",
      titleKey: "methodology.step3.title",
      descriptionKey: "methodology.step3.description",
    },
    {
      icon: Users,
      number: "04",
      titleKey: "methodology.step4.title",
      descriptionKey: "methodology.step4.description",
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
            {t("methodology.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("methodology.subtitle")}
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
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(step.descriptionKey)}
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
