import { useLanguage } from "@/context/LanguageContext";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("en")}
        className={`text-lg transition-all duration-200 hover:scale-110 ${
          language === "en" 
            ? "opacity-100 scale-105" 
            : "opacity-50 hover:opacity-75"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        🇬🇧
      </button>
      <span className={`text-sm ${isScrolled ? "text-muted-foreground" : "text-white/40"}`}>/</span>
      <button
        onClick={() => setLanguage("es")}
        className={`text-lg transition-all duration-200 hover:scale-110 ${
          language === "es" 
            ? "opacity-100 scale-105" 
            : "opacity-50 hover:opacity-75"
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
