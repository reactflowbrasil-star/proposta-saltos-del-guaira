import React from "react";
import { motion } from "framer-motion";
import OrganicLines from "@/components/proposal/OrganicLines";
import CtaButton from "@/components/proposal/CtaButton";
import { eventPhotos, eventVideos } from "@/components/proposal/eventMedia";

export default function Section15Encerramento() {
  return (
    <section className="relative bg-petrol overflow-hidden py-16 lg:py-32">
      <OrganicLines variant="corner-tr" />
      <OrganicLines variant="corner-bl" />

      <img
        src="/assets/logo secretaria.png"
        alt="Secretaria de Indústria e Comércio"
        className="absolute bottom-4 right-4 z-10 h-10 w-auto object-contain sm:right-6 sm:h-12"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-extrabold text-5xl lg:text-8xl text-offwhite leading-none mb-4">
            Obrigado<span className="text-coral">.</span>
          </h2>
          <p className="text-offwhite/60 font-heading font-bold text-xl lg:text-2xl mb-10">
            Sua empresa na festa mais esperada do ano.
          </p>

          <CtaButton text="GARANTA SUA PARTICIPAÇÃO AGORA" large />
        </motion.div>

        {/* Galeria completa do evento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-offwhite font-heading font-extrabold text-2xl lg:text-3xl mb-7">
            Registros reais do evento
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {eventPhotos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Registro do evento ${i + 1}`}
                loading="lazy"
                className={`w-full object-cover rounded-2xl border border-offwhite/10 ${
                  i % 7 === 0 ? "col-span-2 h-64 lg:h-80" : "h-44 lg:h-56"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {eventVideos.map((src, i) => (
              <video
                key={src}
                src={src}
                controls
                preload="metadata"
                playsInline
                aria-label={`Video do evento ${i + 1}`}
                className="w-full aspect-video object-cover rounded-3xl border border-offwhite/10 bg-black"
              />
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-offwhite/10 flex flex-col items-center gap-4">
          <img
            src="https://media.base44.com/images/public/6a501cbe9ff2a3de14e7a965/38019fe6a_Logocontorno.png"
            alt="53 Anos Saltos del Guairá"
            className="h-20 w-auto object-contain"
          />
          <p className="text-offwhite/40 font-body text-sm tracking-widest">
            SECRETARIA DE INDÚSTRIA E COMÉRCIO
          </p>
          <p className="text-offwhite/30 font-body text-xs tracking-wider">
            SALTOS DEL GUAIRÁ — 24 A 30 DE JULHO
          </p>
        </div>
      </div>
    </section>
  );
}
