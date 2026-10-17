import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="heading-hero text-2xl">
            <span className="copper-text">{t.footer.brandFirst}</span>
            <span className="text-foreground">{t.footer.brandSecond}</span>
          </p>
        </div>
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
