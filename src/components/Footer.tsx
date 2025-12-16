const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-xl font-bold text-primary-foreground">
              Padel Catalyst
            </span>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Soluciones integrales de pádel
            </p>
          </div>

          <div className="flex items-center gap-6 text-primary-foreground/60 text-sm">
            <a href="#liderazgo" className="hover:text-primary-foreground transition-colors">
              Liderazgo
            </a>
            <a href="#metodologia" className="hover:text-primary-foreground transition-colors">
              Metodología
            </a>
            <a href="#colegios" className="hover:text-primary-foreground transition-colors">
              Colegios
            </a>
            <a href="#contacto" className="hover:text-primary-foreground transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Padel Catalyst. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Madrid, España · anton@padelcatalyst.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
