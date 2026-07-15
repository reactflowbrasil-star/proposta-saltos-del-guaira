import React from "react";
import { motion } from "framer-motion";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";

const items = [
  { benefit: "Stand 5m × 10m por 7 dias" },
  { benefit: "Divulgação em redes sociais + rádio" },
  { benefit: "Sorteio no palco central" },
  { benefit: "Coquetel 7 dias com bebidas + comida" },
];

export default function Section10Comparativo() {
  return (
    <section className="relative bg-petrol overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-tr" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-coral font-heading font-bold text-xs tracking-widest uppercase block mb-3">
            COMPARATIVO DE VALOR
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-offwhite leading-tight">
            O que você recebe<br /><span className="text-coral">vs. o que você paga.</span>
          </h2>
        </motion.div>

        {/* Value items */}
        <div className="space-y-3 mb-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.06 * i }}
              viewport={{ once: true }}
              className="bg-offwhite/10 rounded-2xl px-6 py-4"
            >
              <span className="text-offwhite font-body font-medium text-sm lg:text-base">{item.benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* Totals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-offwhite rounded-3xl p-5 sm:p-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
            <span className="text-petrol font-heading font-bold text-lg">Valor estimado separado</span>
            <span className="text-petrol/50 font-heading font-extrabold text-xl sm:text-2xl line-through">Gs 10.500,00</span>
          </div>

          <div className="bg-coral rounded-3xl p-5 sm:rounded-4xl sm:p-8 lg:p-10 text-center relative overflow-hidden">
            <OrganicLines variant="corner-tr" className="opacity-20" />
            <p className="text-white/80 font-heading font-bold text-sm tracking-widest uppercase mb-2">SEU INVESTIMENTO NO PACOTE</p>
            <p className="text-white font-heading font-extrabold text-[clamp(2rem,10vw,3rem)] lg:text-7xl mb-2">Gs 5.000.000</p>
            <p className="mx-auto max-w-xl font-body text-base font-semibold text-white sm:text-lg">
              com direito a 10 pulseiras diárias para seus convidados!
            </p>
            <div className="inline-block max-w-full bg-petrol rounded-2xl sm:rounded-full px-4 sm:px-6 py-2 mt-4">
              <span className="text-coral font-heading font-bold text-sm">ECONOMIA DE Gs 500.000+</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-coral font-heading font-extrabold text-2xl mb-3">
              INVESTIMENTO QUE SE PAGA EM VENDAS
            </h3>
            <p className="text-offwhite/60 font-body text-sm max-w-xl mx-auto leading-relaxed">
              Você não está comprando apenas um espaço. Está garantindo visibilidade, relacionamento, divulgação, experiência VIP e presença estratégica no evento mais esperado do ano.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}
