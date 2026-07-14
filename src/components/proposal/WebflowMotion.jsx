import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const CARD_SELECTOR = [
  "section figure",
  "section .grid > .rounded-4xl",
  "section .grid > .rounded-3xl",
  "section .space-y-3 > div",
  "section .space-y-5 > div",
  "section .space-y-6 > div",
].join(",");

export default function WebflowMotion() {
  const glowRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const root = document.getElementById("proposal-lp");
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(root.querySelectorAll("section"));
    const cards = Array.from(root.querySelectorAll(CARD_SELECTOR));

    sections.forEach((section) => section.classList.add("wf-section"));
    cards.forEach((card, index) => {
      card.classList.add("wf-card");
      card.style.setProperty("--wf-stagger", `${(index % 6) * 55}ms`);
    });

    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("wf-visible"));
      cards.forEach((card) => card.classList.add("wf-card-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("wf-visible");
        entry.target.querySelectorAll(".wf-card").forEach((card) => card.classList.add("wf-card-visible"));
        observer.unobserve(entry.target);
      }),
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    let frameId = 0;
    const moveGlow = (event) => {
      if (!glowRef.current || frameId) return;
      frameId = window.requestAnimationFrame(() => {
        glowRef.current.style.setProperty("--wf-pointer-x", `${event.clientX}px`);
        glowRef.current.style.setProperty("--wf-pointer-y", `${event.clientY}px`);
        frameId = 0;
      });
    };
    window.addEventListener("pointermove", moveGlow, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", moveGlow);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <motion.div aria-hidden="true" className="wf-scroll-progress" style={{ scaleX: progress }} />
      <div ref={glowRef} aria-hidden="true" className="wf-pointer-glow" />
    </>
  );
}
