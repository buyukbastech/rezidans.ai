import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-black/20" id="sss">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="heading-display text-xs text-muted-foreground tracking-[0.5em] mb-6">
            {t.faq.category}
          </p>
          <h2 className="heading-hero text-3xl md:text-4xl lg:text-5xl text-foreground">
            {t.faq.heading}
          </h2>
          <div className="copper-line max-w-24 mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.items.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-white/5 px-6"
              >
                <AccordionTrigger className="text-foreground hover:no-underline py-6 text-left font-light tracking-wide text-base sm:text-lg md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
