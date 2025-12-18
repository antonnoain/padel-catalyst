import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", labelKey: "nav.services" },
    { href: "#methodology", labelKey: "nav.methodology" },
    { href: "#contact", labelKey: "nav.contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-subtle py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center relative h-24">
          <img
            src={logoLight}
            alt="Padel Catalyst"
            className={`h-24 w-auto absolute transition-opacity duration-300 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={logoDark}
            alt="Padel Catalyst"
            className={`h-24 w-auto transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              {t(link.labelKey)}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("nav.cta")}
          </Button>
          <LanguageSwitcher isScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.labelKey)}
              </a>
            ))}
            <div className="py-2">
              <LanguageSwitcher isScrolled={true} />
            </div>
            <Button 
              variant="default" 
              size="sm" 
              className="w-full mt-4"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
