import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.methodology": "Methodology",
    "nav.contact": "Contact",
    "nav.cta": "Request Feasibility Study",

    // Hero
    "hero.headline": "Global Padel Solutions: Investment, Development & Management.",
    "hero.subheadline": "We partner with institutions, landowners, and investors to create high-performance padel assets. From feasibility to daily operations.",
    "hero.cta.primary": "Request Feasibility Study",
    "hero.cta.secondary": "Our Methodology",
    "hero.badge": "International Operational Experience",

    // Firm Section
    "firm.title": "Why Partner With Us",
    "firm.subtitle": "We integrate premium infrastructure development with strategic investment to deliver world-class padel assets.",
    "firm.pillar1.title": "Infrastructure Excellence",
    "firm.pillar1.description": "State-of-the-art facility design and rigorous construction management. We ensure superior architectural quality and durability to create premium player experiences.",
    "firm.pillar2.title": "Financial Strength",
    "firm.pillar2.description": "Solid investment backing to guarantee project viability and long-term growth. Our financial structure ensures every project reaches completion.",
    "firm.pillar3.title": "Global Operations",
    "firm.pillar3.description": "International management capability with standardized quality protocols adapted to local markets. Proven experience across Europe and Asia.",

    // Services Section
    "services.title": "Who We Help",
    "services.subtitle": "Tailored solutions for institutions, landowners, and club operators seeking to maximize their sports infrastructure potential.",
    "services.edu.title": "Educational Institutions",
    "services.edu.description": "We finance and manage sports facilities, providing schools with premium amenities at zero operational risk.",
    "services.edu.feature1": "Full investment coverage",
    "services.edu.feature2": "Free access during school hours",
    "services.edu.feature3": "Professional management",
    "services.edu.feature4": "Academy programs for students",
    "services.land.title": "Landowners & Developers",
    "services.land.description": "We transform underutilized land into high-yield sports assets through comprehensive development plans.",
    "services.land.feature1": "Feasibility analysis",
    "services.land.feature2": "Investment partnership",
    "services.land.feature3": "Turnkey construction",
    "services.land.feature4": "Long-term management",
    "services.club.title": "Club Owners",
    "services.club.description": "Optimization of existing clubs to maximize profitability through professional management and technology.",
    "services.club.feature1": "Operational audit",
    "services.club.feature2": "Technology integration",
    "services.club.feature3": "Revenue optimization",
    "services.club.feature4": "Staff training programs",

    // Methodology Section
    "methodology.title": "Methodology",
    "methodology.subtitle": "A proven four-stage approach that takes projects from concept to thriving operation.",
    "methodology.step1.title": "Strategy & Feasibility",
    "methodology.step1.description": "Market analysis, demand assessment, and comprehensive business planning to ensure project viability.",
    "methodology.step2.title": "Design & Permits",
    "methodology.step2.description": "Architecture design, licensing management, and construction oversight through to completion.",
    "methodology.step3.title": "Systems & Technology",
    "methodology.step3.description": "Implementation of booking software, access control systems, and operational automation.",
    "methodology.step4.title": "Operations & Academy",
    "methodology.step4.description": "Staff recruitment and training, sports programs development, and community building.",

    // Contact Section
    "contact.title": "Let's Discuss Your Project",
    "contact.subtitle": "Ready to elevate your institution's sports offering or develop a high-yield padel asset? Let's discuss your project's potential.",
    "contact.email.label": "Email",
    "contact.address.label": "Address",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Full name *",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email *",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.organization": "Organization",
    "contact.form.organization.placeholder": "Company or institution name",
    "contact.form.message": "Message *",
    "contact.form.message.placeholder": "Tell us about your project...",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Message sent successfully. We'll be in touch shortly.",

    // Footer
    "footer.tagline": "Turning spaces into active communities.",
    "footer.copyright": "All rights reserved.",
  },
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.methodology": "Metodología",
    "nav.contact": "Contacto",
    "nav.cta": "Solicitar Estudio de Viabilidad",

    // Hero
    "hero.headline": "Soluciones Globales de Pádel: Inversión, Desarrollo y Gestión.",
    "hero.subheadline": "Colaboramos con instituciones, propietarios e inversores para crear activos de pádel de alto rendimiento. Desde el estudio de viabilidad hasta la operación diaria.",
    "hero.cta.primary": "Solicitar Estudio de Viabilidad",
    "hero.cta.secondary": "Nuestra Metodología",
    "hero.badge": "Experiencia Operativa Internacional",

    // Firm Section
    "firm.title": "¿Por Qué Asociarse Con Nosotros?",
    "firm.subtitle": "Integramos desarrollo de infraestructuras premium con inversión estratégica para ofrecer activos de pádel de primer nivel.",
    "firm.pillar1.title": "Excelencia en Infraestructuras",
    "firm.pillar1.description": "Diseño de instalaciones de última generación y gestión rigurosa de la construcción. Garantizamos una calidad arquitectónica superior y durabilidad para crear experiencias premium.",
    "firm.pillar2.title": "Solidez Financiera",
    "firm.pillar2.description": "Respaldo inversor sólido que garantiza la viabilidad del proyecto y su crecimiento a largo plazo. Nuestra estructura financiera asegura la finalización de cada proyecto.",
    "firm.pillar3.title": "Operaciones Globales",
    "firm.pillar3.description": "Capacidad de gestión internacional con protocolos de calidad estandarizados adaptados a mercados locales. Experiencia demostrada en Europa y Asia.",

    // Services Section
    "services.title": "¿A Quién Ayudamos?",
    "services.subtitle": "Soluciones personalizadas para instituciones, propietarios y operadores de clubes que buscan maximizar el potencial de su infraestructura deportiva.",
    "services.edu.title": "Instituciones Educativas",
    "services.edu.description": "Financiamos y gestionamos instalaciones deportivas, proporcionando a los centros educativos equipamientos premium sin riesgo operativo.",
    "services.edu.feature1": "Cobertura total de inversión",
    "services.edu.feature2": "Acceso gratuito en horario escolar",
    "services.edu.feature3": "Gestión profesional",
    "services.edu.feature4": "Programas de academia para estudiantes",
    "services.land.title": "Propietarios y Promotores",
    "services.land.description": "Transformamos terrenos infrautilizados en activos deportivos de alta rentabilidad mediante planes de desarrollo integrales.",
    "services.land.feature1": "Análisis de viabilidad",
    "services.land.feature2": "Asociación inversora",
    "services.land.feature3": "Construcción llave en mano",
    "services.land.feature4": "Gestión a largo plazo",
    "services.club.title": "Propietarios de Clubes",
    "services.club.description": "Optimización de clubes existentes para maximizar la rentabilidad mediante gestión profesional y tecnología.",
    "services.club.feature1": "Auditoría operativa",
    "services.club.feature2": "Integración tecnológica",
    "services.club.feature3": "Optimización de ingresos",
    "services.club.feature4": "Programas de formación",

    // Methodology Section
    "methodology.title": "Metodología",
    "methodology.subtitle": "Un enfoque de cuatro etapas probado que lleva los proyectos desde el concepto hasta una operación próspera.",
    "methodology.step1.title": "Estrategia y Viabilidad",
    "methodology.step1.description": "Análisis de mercado, evaluación de demanda y planificación empresarial integral para asegurar la viabilidad del proyecto.",
    "methodology.step2.title": "Diseño y Licencias",
    "methodology.step2.description": "Diseño arquitectónico, gestión de licencias y supervisión de construcción hasta su finalización.",
    "methodology.step3.title": "Sistemas y Tecnología",
    "methodology.step3.description": "Implementación de software de reservas, sistemas de control de acceso y automatización operativa.",
    "methodology.step4.title": "Operaciones y Academia",
    "methodology.step4.description": "Reclutamiento y formación de personal, desarrollo de programas deportivos y construcción de comunidad.",

    // Contact Section
    "contact.title": "Hablemos de Su Proyecto",
    "contact.subtitle": "¿Listo para elevar la oferta deportiva de su institución o desarrollar un activo de alta rentabilidad? Analicemos el potencial de su proyecto.",
    "contact.email.label": "Correo electrónico",
    "contact.address.label": "Dirección",
    "contact.form.title": "Envíenos un mensaje",
    "contact.form.name": "Nombre completo *",
    "contact.form.name.placeholder": "Su nombre",
    "contact.form.email": "Correo electrónico *",
    "contact.form.email.placeholder": "su@email.com",
    "contact.form.organization": "Organización",
    "contact.form.organization.placeholder": "Nombre de empresa o institución",
    "contact.form.message": "Mensaje *",
    "contact.form.message.placeholder": "Cuéntenos sobre su proyecto...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.submitting": "Enviando...",
    "contact.form.success": "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",

    // Footer
    "footer.tagline": "Transformando espacios en comunidades activas.",
    "footer.copyright": "Todos los derechos reservados.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
