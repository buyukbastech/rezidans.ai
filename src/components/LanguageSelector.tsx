import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-5 right-5 sm:top-8 sm:right-8 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="group flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-black/60 hover:bg-black/85 border border-white/10 hover:border-[#ffad00]/60 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(255,173,0,0.25)] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#ffad00]/50"
            aria-label="Dil Seçimi / Select Language"
          >
            <Globe className="w-4 h-4 text-[#ffad00] group-hover:rotate-45 transition-transform duration-500 ease-out" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-white/90 group-hover:text-white transition-colors">
              {language.toUpperCase()}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:text-[#ffad00] transition-colors duration-300" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="w-40 bg-black/95 border border-[#ffad00]/30 backdrop-blur-2xl p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(255,173,0,0.15)] rounded-sm animate-in fade-in-50 zoom-in-95 duration-200 z-50"
        >
          <DropdownMenuItem
            onClick={() => setLanguage("tr")}
            className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-xs uppercase tracking-[0.15em] cursor-pointer transition-colors duration-200 ${
              language === "tr"
                ? "bg-[#ffad00]/15 text-[#ffad00] font-medium"
                : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>TÜRKÇE</span>
            {language === "tr" && <Check className="w-3.5 h-3.5 text-[#ffad00]" />}
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setLanguage("en")}
            className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-xs uppercase tracking-[0.15em] cursor-pointer transition-colors duration-200 ${
              language === "en"
                ? "bg-[#ffad00]/15 text-[#ffad00] font-medium"
                : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>ENGLISH</span>
            {language === "en" && <Check className="w-3.5 h-3.5 text-[#ffad00]" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
