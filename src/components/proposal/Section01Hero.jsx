import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Crown, Users } from "lucide-react";
import OrganicLines from "@/components/proposal/OrganicLines";
import FloatingBadge from "@/components/proposal/FloatingBadge";
import CtaButton from "@/components/proposal/CtaButton";
import SectionFooter from "@/components/proposal/SectionFooter";
import { eventMedia } from "@/components/proposal/eventMedia";
import TypewriterText from "@/components/proposal/TypewriterText";

const MASCOTE_IMG = eventMedia.hero;

const stats = [
  { icon: CalendarDays, label: "24 a 30 de Julho", detail: "7 dias de festa" },
  { icon: Users, label: "30.000+ visitantes", detail: "fluxo estimado" },
  { icon: Crown, label: "Stand oficial", detail: "presenca premium" },
];

export default function Section01Hero({ language = "pt" }) {
  return (
    <section className="relative min-h-screen bg-petrol overflow-hidden flex flex-col">
      <OrganicLines variant="corner-tr" />
      <OrganicLines variant="corner-bl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(244,124,85,0.22),transparent_32%),linear-gradient(135deg,rgba(7,63,54,0.96),rgba(7,63,54,0.7)_44%,rgba(30,30,30,0.48))]" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="relative grid w-full max-w-7xl grid-cols-1 lg:grid-cols-[minmax(360px,0.9fr)_minmax(0,1fr)] items-center gap-9 px-5 pt-24 pb-10 sm:px-6 md:px-10 lg:px-16 xl:px-20 lg:py-24 mx-auto">
          <FloatingBadge
            text="VAGAS LIMITADAS"
            size="lg"
            className="absolute -left-16 top-[18%] hidden lg:block z-30"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 lg:col-start-2"
          >
            <span className="inline-flex items-center gap-2 bg-offwhite/10 border border-offwhite/15 text-gold font-heading font-bold text-xs tracking-widest uppercase rounded-full px-4 py-2 mb-7">
              Cota de participacao empresarial
            </span>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight mb-6 sm:mb-7">
              <span className="text-offwhite">SUA EMPRESA</span><br />
              <span className="text-offwhite">NA FESTA MAIS</span><br />
              <TypewriterText language={language} />
            </h1>

            <p className="text-offwhite/75 font-body text-base sm:text-lg lg:text-xl leading-relaxed mb-7 max-w-xl">
              Posicione sua marca dentro do stand oficial do 53o aniversario de Saltos del Guaira, com exposicao, relacionamento e experiencia VIP durante toda a festa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {stats.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="bg-offwhite/[0.08] border border-offwhite/10 rounded-2xl p-4">
                  <Icon className="w-5 h-5 text-coral mb-3" />
                  <p className="text-offwhite font-heading font-bold text-sm leading-tight">{label}</p>
                  <p className="text-offwhite/45 font-body text-xs mt-1">{detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
              <div className="bg-petrol-light/35 border border-offwhite/10 rounded-3xl px-6 py-4">
                <span className="text-gold text-xs font-heading tracking-widest uppercase">Investimento</span>
                <p className="text-coral font-heading font-extrabold text-[clamp(1.75rem,9vw,2.25rem)] lg:text-4xl mt-1">
                  Gs 5.000.000
                </p>
              </div>
              <p className="text-offwhite/55 font-body text-sm leading-relaxed max-w-xs">
                Pacote completo com exposicao, coquetel VIP, networking e presenca durante os 7 dias.
              </p>
            </div>

            <CtaButton text="GARANTA SUA PARTICIPACAO" large />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -70, y: 28, scale: 0.84, rotate: -4, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            animate={{ y: [0, -14, 0] }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              opacity: { duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
              x: { duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
              rotate: { duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
              filter: { duration: 0.65, delay: 0.35, ease: "easeOut" },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            className="relative z-10 flex justify-center lg:absolute lg:left-[8%] xl:left-[9%] lg:top-[8%] lg:h-[78%] lg:w-[29%] lg:items-center"
          >
            <img
              src={MASCOTE_IMG}
              alt="Stand da Secretaria de Industria e Comercio"
              className="w-full max-w-[480px] aspect-[4/5] md:w-[520px] lg:w-full lg:h-full lg:aspect-auto object-cover rounded-[1.75rem] sm:rounded-[2.5rem] border border-offwhite/15 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <SectionFooter />
    </section>
  );
}
