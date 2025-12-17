import { GraduationCap, Building, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: GraduationCap,
      titleKey: "services.edu.title",
      descriptionKey: "services.edu.description",
      featureKeys: [
        "services.edu.feature1",
        "services.edu.feature2",
        "services.edu.feature3",
        "services.edu.feature4",
      ],
    },
    {
      icon: Building,
      titleKey: "services.land.title",
      descriptionKey: "services.land.description",
      featureKeys: [
        "services.land.feature1",
        "services.land.feature2",
        "services.land.feature3",
        "services.land.feature4",
      ],
    },
    {
      icon: Users,
      titleKey: "services.club.title",
      descriptionKey: "services.club.description",
      featureKeys: [
        "services.club.feature1",
        "services.club.feature2",
        "services.club.feature3",
        "services.club.feature4",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("services.subtitle")}
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
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(service.descriptionKey)}
              </p>
              
              <ul className="space-y-3">
                {service.featureKeys.map((featureKey, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {t(featureKey)}
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
