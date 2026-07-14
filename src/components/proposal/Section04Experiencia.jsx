import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";

const checks = [
  "Visibilidade para milhares de pessoas",
  "Presença no stand oficial",
  "Contato com autoridades e empresários",
  "Divulgação em canais estratégicos",
  "Experiência VIP para clientes convidados",
];

export default function Section04Experiencia() {
  return (
    <section className="relative bg-petrol overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-bl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left — Big Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-5/12 text-center lg:text-left"
          >
            <span className="text-coral font-heading font-bold text-xs tracking-widest uppercase block mb-4">
              OPORTUNIDADE REAL
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-offwhite leading-tight mb-6">
              Transformando presença em <span className="text-coral">oportunidades reais.</span>
            </h2>
            <p className="text-coral font-heading font-extrabold text-9xl lg:text-[10rem] leading-none">
              7
            </p>
            <p className="text-offwhite/60 font-heading font-bold text-2xl -mt-2">dias</p>
            <p className="text-offwhite/70 font-body text-lg mt-6 leading-relaxed">
              Cada noite da programação representa uma oportunidade diferente de exposição, relacionamento e venda.
            </p>
          </motion.div>

          {/* Right — Checklist Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="bg-offwhite rounded-4xl p-8 lg:p-12">
              <h3 className="font-heading font-bold text-petrol text-xl mb-8">
                O que cada dia de festa traz para sua empresa:
              </h3>
              <div className="space-y-5">
                {checks.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-coral flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-petrol font-body font-medium text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}