import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <span className="text-lg font-semibold text-primary-foreground tracking-tight">
              PADEL CATALYST
            </span>
            <p className="text-primary-foreground/60 mt-3 max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex flex-wrap gap-8 text-sm">
              <a href="#services" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("nav.services")}
              </a>
              <a href="#methodology" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("nav.methodology")}
              </a>
              <a href="#contact" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("nav.contact")}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Padel Catalyst. {t("footer.copyright")}
          </p>
          <div className="text-primary-foreground/40 text-sm">
            <span>info@padelcatalyst.com</span>
            <span className="mx-3">·</span>
            <span>Plaza Marqués de Salamanca 9, 28006 Madrid</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
