import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "Rezidans AI sistemi nasıl çalışır?",
    answer: "Rezidans AI, ilan süreçlerinizden gelen tüm veri akışını (mesajlar, aramalar, piyasa verileri) anlık olarak işler. Yapay zeka algoritmalarımız, bu verileri analiz ederek potansiyel müşterilere otomatik yanıtlar verir, portföy takibini yapar ve size en doğru satış stratejisini sunar.",
  },
  {
    question: "Veri güvenliği nasıl sağlanıyor?",
    answer: "Tüm verileriniz endüstri standardı şifreleme yöntemleriyle korunmaktadır. Veri Kaybı (0) politikamız gereği, sistem yedeklemeleri anlık olarak yapılmakta ve tüm bilgileriniz sadece sizin erişiminize açık güvenli sunucularda saklanmaktadır.",
  },
  {
    question: "Mevcut CRM sistemlerimle entegre olabilir mi?",
    answer: "Evet, Rezidans AI açık API mimarisi sayesinde çoğu modern gayrimenkul CRM ve ilan platformuyla sorunsuz bir şekilde entegre olabilir. 'Aktif Entegrasyon' özelliğimizle mevcut iş akışınızı bozmadan sistemimizi kullanmaya başlayabilirsiniz.",
  },
  {
    question: "Sistem 7/24 aktif mi çalışıyor?",
    answer: "Kesinlikle. 'Yanıt Hızı' yüksek asistan çözümlerimiz sayesinde, müşterilerinizden gelen talepler gece veya hafta sonu fark etmeksizin anında yanıtlanır. Bu da müşteri memnuniyetini ve dönüşüm oranlarını maksimize eder.",
  },
];

const FAQ = () => {
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
            S.S.S.
          </p>
          <h2 className="heading-hero text-3xl md:text-4xl lg:text-5xl text-foreground">
            Sıkça Sorulan Sorular
          </h2>
          <div className="copper-line max-w-24 mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
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
