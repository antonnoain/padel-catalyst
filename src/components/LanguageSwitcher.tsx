import { useLanguage } from "@/context/LanguageContext";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`text-sm font-medium transition-all duration-300 ${
          language === "en" 
            ? "opacity-100" 
            : "opacity-50 hover:opacity-80"
        } ${
          isScrolled 
            ? "text-muted-foreground hover:text-accent" 
            : "text-white/80 hover:text-white"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        GB
      </button>
      <span className={`text-sm transition-colors duration-300 ${isScrolled ? "text-muted-foreground" : "text-white/40"}`}>|</span>
      <button
        onClick={() => setLanguage("es")}
        className={`text-sm font-medium transition-all duration-300 ${
          language === "en" 
            ? "opacity-50 hover:opacity-80" 
            : "opacity-100"
        } ${
          isScrolled 
            ? "text-muted-foreground hover:text-accent" 
            : "text-white/80 hover:text-white"
        }`}
        aria-label="Cambiar a Español"
        title="Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
