import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "@/assets/hero-building.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Statement = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-32 lg:py-48 px-4 md:px-6 overflow-hidden border-t border-b border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.7 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="copper-line max-w-24 mx-auto mb-16" />
          <h2 className="heading-hero text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            {t.statement.line1}
            <br />
            <span className="copper-text">{t.statement.line2}</span>
          </h2>
          <div className="copper-line max-w-24 mx-auto mt-16" />
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;
