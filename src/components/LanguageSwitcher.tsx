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
        className={`text-xl transition-all duration-300 hover:scale-110 ${
          language === "en" 
            ? "opacity-100 scale-110" 
            : "opacity-40 hover:opacity-70"
        } ${
          isScrolled 
            ? "text-muted-foreground hover:text-accent" 
            : "text-white/80 hover:text-white"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        🇬🇧
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`text-xl transition-all duration-300 hover:scale-110 ${
          language === "es" 
            ? "opacity-100 scale-110" 
            : "opacity-40 hover:opacity-70"
        } ${
          isScrolled 
            ? "text-muted-foreground hover:text-accent" 
            : "text-white/80 hover:text-white"
        }`}
        aria-label="Cambiar a Español"
        title="Español"
      >
        🇪🇸
      </button>
    </div>
  );
};

export default LanguageSwitcher;
