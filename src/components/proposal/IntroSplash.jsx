import { useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroSplash({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2800);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[20000] flex items-center justify-center overflow-hidden bg-[#031f1b] px-5"
      role="status"
      aria-label="Carregando proposta do aniversário de Saltos del Guairá"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.45 }}
        animate={{ opacity: [0, 0.8, 0.5], scale: [0.45, 1, 1.18] }}
        transition={{ duration: 2.4, times: [0, 0.45, 1], ease: "easeOut" }}
        className="absolute h-[min(90vw,720px)] w-[min(90vw,720px)] rounded-full bg-[radial-gradient(circle,rgba(244,124,85,0.28),rgba(7,63,54,0.12)_48%,transparent_70%)] blur-2xl"
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1, 0.72], opacity: [0, 0.55, 0.2] }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-coral to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.68, y: 48, rotate: -2, filter: "blur(18px)" }}
        animate={{ opacity: 1, scale: [0.68, 1.04, 1], y: 0, rotate: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.25, times: [0, 0.78, 1], ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex w-full max-w-5xl items-center justify-center"
      >
        <motion.img
          src="/assets/hero-saltos-53.png"
          alt="53 anos de Saltos del Guairá"
          fetchPriority="high"
          animate={{ y: [0, -7, 0], filter: ["drop-shadow(0 18px 45px rgba(0,0,0,.35))", "drop-shadow(0 28px 65px rgba(244,124,85,.22))", "drop-shadow(0 18px 45px rgba(0,0,0,.35))"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-auto w-[min(92vw,920px)] object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: [0, 1, 1], y: [14, 0, 0] }}
        transition={{ duration: 1.5, delay: 0.65 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-10"
        aria-hidden="true"
      >
        {[0, 1, 2].map((item) => (
          <motion.span
            key={item}
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: item * 0.18 }}
            className="h-1.5 w-1.5 rounded-full bg-coral"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
