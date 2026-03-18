import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import vid01 from "@/assets/01.mp4";
import vid02 from "@/assets/02.mp4";
import vid03 from "@/assets/03.mp4";
import heroPoster from "@/assets/hero-building.jpg";

const videos = [vid01, vid02, vid03];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Her video 5 saniye çalışır, sonra bir sonrakine geçer
  useEffect(() => {
    // Mevcut videoyu oynat
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => console.log("Otomatik oynatma bekliyor."));
    }

    // 5 saniye sonra bir sonrakine geç
    const switchTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => {
      clearTimeout(switchTimer);
    };
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video slideshow with overlay */}
      <div className="absolute inset-0 bg-black">
        {videos.map((vid, index) => (
          <video
            key={vid}
            ref={(el) => (videoRefs.current[index] = el)}
            src={vid}
            autoPlay={index === currentIndex}
            muted
            playsInline
            preload={index === 0 || index === 1 ? "auto" : "metadata"}
            poster={index === 0 ? heroPoster : undefined}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="heading-display text-xs text-white mb-8 tracking-[0.5em]">
            OTOMATİK PRESTİJ
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="heading-hero text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8"
        >
          <span className="copper-text">REZIDANS</span>
          <span className="text-white">AI</span>
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
          YAPAY ZEKANIN MİMARİ MÜKEMMELLİKLE BULUŞTUĞU NOKTA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16"
        >
          <button 
            className="glass-card px-10 py-4 text-xs uppercase tracking-[0.4em] text-white hover:border-primary/50 transition-colors duration-700"
            style={{ borderColor: '#ffad00' }}
          >
            GİRİŞ YAP
          </button>
        </motion.div>
      </div>

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
