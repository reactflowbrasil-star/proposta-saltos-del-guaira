import React from "react";
import { motion } from "framer-motion";
import OrganicLines from "@/components/proposal/OrganicLines";
import FloatingBadge from "@/components/proposal/FloatingBadge";
import SectionFooter from "@/components/proposal/SectionFooter";
import { eventMedia } from "@/components/proposal/eventMedia";

const IMG_NETWORKING = eventMedia.networking;
const IMG_STAND = eventMedia.stand;
const IMG_CROWD = eventMedia.crowd;

export default function Section02Apresentacao() {
  return (
    <section className="relative bg-petrol overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-tr" className="opacity-10" />

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-7 lg:px-12">
        <div className="flex min-w-0 flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full min-w-0 lg:w-1/2"
          >
            <span className="text-coral font-heading font-bold text-xs tracking-widest uppercase mb-4 block">
              APRESENTAÇÃO
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-offwhite leading-tight mb-6">
              Estamos dedicados a <span className="text-coral">conectar sua marca</span> ao público ideal.
            </h2>
            <p className="text-offwhite/70 font-body text-base sm:text-lg leading-relaxed mb-8">
              Durante 7 dias, Saltos del Guairá estará em festa. Milhares de pessoas circularão pelo evento, autoridades estarão presentes e empresários estarão conectando oportunidades.
            </p>
            <p className="text-offwhite/70 font-body text-base sm:text-lg leading-relaxed mb-10">
              Sua empresa pode ocupar um espaço estratégico dentro do Stand Oficial da Secretaria de Indústria e Comércio e transformar visibilidade em relacionamento, vendas e novos negócios.
            </p>

            <div className="grid w-full min-w-0 grid-cols-3 gap-2 sm:gap-4">
              {[
                { num: "30.000+", label: "pessoas" },
                { num: "7", label: "dias de exposição" },
                { num: "5×10m", label: "stand oficial" },
              ].map((s) => (
                <div key={s.label} className="flex min-w-0 flex-col items-center justify-center bg-petrol-light/30 rounded-2xl sm:rounded-3xl px-2 sm:px-4 py-4 text-center">
                  <p className="text-coral font-heading font-extrabold text-[clamp(1.15rem,6vw,1.5rem)] lg:text-3xl">{s.num}</p>
                  <p className="text-offwhite/60 text-[10px] sm:text-xs font-body mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full min-w-0 lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src={IMG_NETWORKING} alt="Networking" className="rounded-4xl object-cover h-64 w-full col-span-1" />
              <img src={IMG_STAND} alt="Stand premium" className="rounded-4xl object-cover h-64 w-full col-span-1" />
              <img src={IMG_CROWD} alt="Público do evento" className="rounded-4xl object-cover h-48 w-full col-span-2" />
            </div>
            <FloatingBadge text="PACOTE PREMIUM" size="sm" className="absolute -bottom-8 -left-8 z-20 hidden sm:block" />
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}
