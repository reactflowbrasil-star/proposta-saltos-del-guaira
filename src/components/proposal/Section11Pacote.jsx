import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";
import CtaButton from "@/components/proposal/CtaButton";
import { projectContact } from "@/components/proposal/contact";

const checklist = [
  "Exposição de produtos no stand oficial 5m × 10m",
  "Menção da marca nas comunicações do evento",
  "Espaço destacado e privilegiado dentro do stand",
  "Sorteio de produtos no palco central",
  "Coquetel diário completo com bebidas e gastronomia",
  "Networking com autoridades, empresários e clientes",
  "Presença durante 7 dias de festa",
];

export default function Section11Pacote() {
  return (
    <section className="relative bg-coral overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-bl" className="opacity-10" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-petrol font-heading font-bold text-xs tracking-widest uppercase block mb-3">
            TUDO INCLUSO
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-white leading-tight">
            Pacote completo<br /><span className="text-petrol">de participação.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-petrol rounded-4xl p-8 lg:p-12 relative overflow-hidden"
        >
          <OrganicLines variant="corner-tr" className="opacity-10" />

          <div className="flex justify-center mb-8">
            <img
              src="https://media.base44.com/images/public/6a501cbe9ff2a3de14e7a965/38019fe6a_Logocontorno.png"
              alt="53 Anos Saltos del Guairá"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-coral flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-offwhite/80 font-body text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-10 rounded-2xl border border-coral/35 bg-coral/10 px-5 py-4 text-center">
            <p className="font-body text-sm italic leading-relaxed text-offwhite/80">
              *Toda a mídia individual para cada patrocinador será de responsabilidade do patrocinador!
            </p>
          </div>

          <div className="text-center">
            <p className="text-offwhite/50 font-body text-sm mb-2">Investimento único</p>
            <p className="text-coral font-heading font-extrabold text-5xl lg:text-7xl mb-1">
              Gs 5.000.000
            </p>
            <p className="text-offwhite/40 font-body text-sm mb-8">Cinco Milhões de Guaranis</p>
            <p className="mb-5 font-body text-sm text-offwhite/70">
              Contato: <strong className="text-offwhite">{projectContact.name}</strong> · {projectContact.phone}
            </p>
            <CtaButton text="ENTRE EM CONTATO AGORA" large />
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}
