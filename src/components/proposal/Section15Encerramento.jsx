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
        <div className="mt-16 pt-8 pb-10 border-t border-offwhite/10 flex flex-col items-center gap-4">
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
          <div className="mt-3 flex flex-col items-center gap-2 border-t border-offwhite/10 pt-5 text-center font-body text-xs text-offwhite/50 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3">
            <span>© 2026 — Todos os direitos reservados.</span>
            <span className="hidden text-offwhite/20 sm:inline" aria-hidden="true">•</span>
            <span>Site By: Alexandre Lima</span>
            <a
              href="https://wa.me/5562981321845"
              target="_blank"
              rel="noreferrer"
              aria-label="Falar com Alexandre Lima pelo WhatsApp"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 font-semibold text-[#72e6a0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:bg-[#25D366]/20 hover:text-white"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M16.02 3.2A12.7 12.7 0 0 0 5.28 22.7L3.6 28.8l6.25-1.64A12.78 12.78 0 1 0 16.02 3.2Zm0 2.15a10.61 10.61 0 1 1-5.41 19.74l-.39-.23-3.71.97.99-3.61-.25-.4a10.55 10.55 0 0 1 8.77-16.47Zm-4.78 4.7c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.69 5.86 5.18 2.9 1.26 3.49 1.01 4.12.95.63-.06 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.08-.14-.31-.23-.66-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.45-.54-2.76-1.7a10.36 10.36 0 0 1-1.91-2.38c-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.65Z" />
              </svg>
              <span>+55 62 98132-1845</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
