import { motion } from "framer-motion";
import { useState } from "react";

import heroPoster from "@/assets/hero-building.jpg";
import QuoteDialog from "@/components/QuoteDialog";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroPoster}
          alt="Rezidans AI Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/80 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="heading-display text-xs text-white mb-8 tracking-[0.5em]">
            {t.hero.tagline}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="heading-hero text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8"
        >
          <span className="copper-text">{t.hero.brandFirst}</span>
          <span className="text-white">{t.hero.brandSecond}</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="copper-line max-w-xs mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-white text-sm md:text-base font-light tracking-[0.2em] uppercase max-w-lg mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16"
        >
          <button 
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="glass-card px-10 py-4 text-xs uppercase tracking-[0.4em] text-white hover:border-primary/50 transition-all duration-700 inline-block cursor-pointer hover:shadow-[0_0_30px_rgba(255,173,0,0.3)] active:scale-95"
            style={{ borderColor: '#ffad00' }}
          >
            {t.hero.cta}
          </button>
        </motion.div>
      </div>

      <QuoteDialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />

      {/* Bottom fade indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
