import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "12M+", label: "Veri Analizi" },
  { value: "99.7%", label: "Yanıt Hızı" },
  { value: "340+", label: "Aktif Entegrasyon" },
  { value: "0", label: "Veri Kaybı" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 border-t border-b border-border">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <p className="copper-text text-3xl sm:text-4xl md:text-5xl font-light font-serif">
                {stat.value}
              </p>
              <p className="heading-display text-[10px] text-muted-foreground mt-3 tracking-[0.4em]">
                {stat.label.toUpperCase().replace('i', 'İ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
