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
            : isScrolled 
              ? "opacity-50 hover:opacity-80" 
              : "opacity-60 hover:opacity-90"
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
            : isScrolled 
              ? "opacity-50 hover:opacity-80" 
              : "opacity-60 hover:opacity-90"
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
