import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function parseStatValue(val: string) {
  const match = val.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, suffix: val, decimals: 0 };
  const target = parseFloat(match[1]);
  const suffix = match[2];
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { target, suffix, decimals };
}

const AnimatedCounter = ({
  value,
  isInView,
  delay = 0,
}: {
  value: string;
  isInView: boolean;
  delay?: number;
}) => {
  const { target, suffix, decimals } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(
    target === 0 ? "0" : `0${decimals > 0 ? ".0" : ""}${suffix}`
  );

  useEffect(() => {
    if (!isInView) return;

    if (target === 0) {
      setDisplayValue(`0${suffix}`);
      return;
    }

    const controls = animate(0, target, {
      duration: 2.4,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (decimals > 0) {
          setDisplayValue(`${latest.toFixed(decimals)}${suffix}`);
        } else {
          setDisplayValue(`${Math.floor(latest)}${suffix}`);
        }
      },
      onComplete: () => {
        setDisplayValue(value);
      },
    });

    return () => controls.stop();
  }, [isInView, target, suffix, decimals, delay, value]);

  return <span>{displayValue}</span>;
};

const Stats = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 border-t border-b border-border">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {t.stats.map((stat, i) => (
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
                <AnimatedCounter
                  value={stat.value}
                  isInView={isInView}
                  delay={i * 0.15 + 0.1}
                />
              </p>
              <p className="heading-display text-[10px] text-muted-foreground mt-3 tracking-[0.4em]">
                {stat.label.toLocaleUpperCase(language === "tr" ? "tr-TR" : "en-US")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
