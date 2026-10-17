import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const FeatureCard = ({
  number,
  title,
  description,
  index,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass-card p-10 md:p-14 group hover:border-primary/30 transition-colors duration-700 flex flex-col items-center text-center"
    >
      <span className="copper-text heading-display text-xs tracking-[0.5em] text-center">
        {number}
      </span>
      <h3 className="heading-hero text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-6 mb-4 text-foreground text-center break-words hyphens-auto w-full">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm text-center mx-auto">
        {description}
      </p>
      <div className="copper-line mt-8 max-w-12 mx-auto group-hover:max-w-24 transition-all duration-700" />
    </motion.div>
  );
};

const Features = () => {
  const { t } = useLanguage();
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 lg:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <p className="heading-display text-xs text-muted-foreground tracking-[0.5em] mb-6">
            {t.features.category}
          </p>
          <h2 className="heading-hero text-3xl md:text-5xl lg:text-6xl text-foreground">
            {t.features.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => (
            <FeatureCard key={feature.number} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
