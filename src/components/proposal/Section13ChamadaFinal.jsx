import React from "react";
import { motion } from "framer-motion";
import FloatingBadge from "@/components/proposal/FloatingBadge";
import CtaButton from "@/components/proposal/CtaButton";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";
import { eventMedia } from "@/components/proposal/eventMedia";

const IMG_HERO = eventMedia.eventHighlight;
const IMG_CROWD = eventMedia.crowd;
const IMG_HANDSHAKE = eventMedia.partnership;

export default function Section13ChamadaFinal() {
  return (
    <section className="relative bg-petrol overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-tr" />
      <OrganicLines variant="corner-bl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative">
        <img
          src="https://media.base44.com/images/public/6a501cbe9ff2a3de14e7a965/38019fe6a_Logocontorno.png"
          alt="53 Anos Saltos del Guairá"
          className="h-20 w-auto object-contain mx-auto mb-8"
        />
        <FloatingBadge text="VAGAS LIMITADAS" size="md" className="absolute -top-4 right-0 hidden sm:block lg:right-8 z-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-extrabold text-4xl lg:text-6xl text-offwhite leading-tight mb-6">
            Sua marca merece ser vista por<br />
            <span className="text-coral">30.000+ pessoas.</span>
          </h2>
          <p className="text-offwhite/60 font-body text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Durante 7 dias, Saltos del Guairá estará em festa. Milhares de pessoas passarão pelo evento, autoridades estarão presentes, empresários estarão circulando e sua marca pode ocupar um espaço estratégico nesse cenário.
          </p>
          <p className="text-offwhite/80 font-heading font-bold text-lg mb-10">
            Não deixe sua empresa ficar de fora da maior oportunidade de visibilidade, relacionamento e negócios do ano.
          </p>

          <div className="mb-12">
            <CtaButton text="ENTRE EM CONTATO AGORA E GARANTA SUA PARTICIPAÇÃO" large />
          </div>
        </motion.div>

        {/* Image strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 overflow-hidden rounded-3xl sm:flex sm:gap-4 sm:rounded-4xl"
        >
          <img src={IMG_HERO} alt="Evento" className="col-span-2 w-full h-44 sm:col-span-1 sm:w-1/3 sm:h-40 lg:h-52 object-cover rounded-2xl sm:rounded-3xl" />
          <img src={IMG_CROWD} alt="Público" className="w-full h-36 sm:w-1/3 sm:h-40 lg:h-52 object-cover rounded-2xl sm:rounded-3xl" />
          <img src={IMG_HANDSHAKE} alt="Parceria" className="w-full h-36 sm:w-1/3 sm:h-40 lg:h-52 object-cover rounded-2xl sm:rounded-3xl" />
        </motion.div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}
