import React from "react";
import { motion } from "framer-motion";
import { Eye, Handshake, Megaphone, Star, Wine } from "lucide-react";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";

const benefits = [
  { icon: Eye, title: "VISIBILIDADE TOTAL", desc: "30.000+ pessoas vão ver sua marca durante os 7 dias de festa." },
  { icon: Handshake, title: "NETWORKING DE ALTO NÍVEL", desc: "Autoridades, empresários, parceiros e clientes VIP no mesmo espaço." },
  { icon: Megaphone, title: "MARCA EM TODOS OS CANAIS", desc: "Redes sociais, rádios, palco central e materiais do evento." },
  { icon: Star, title: "PRODUTOS NO PALCO CENTRAL", desc: "Seus produtos em destaque para milhares de pessoas." },
  { icon: Wine, title: "COQUETEL PREMIUM INCLUSO", desc: "Cerveja, whisky, refrigerante, água, churrasco e gastronomia para impressionar seus clientes." },
];

export default function Section06Beneficios() {
  return (
    <section className="relative bg-petrol overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-bl" className="opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-coral font-heading font-bold text-xs tracking-widest uppercase block mb-3">
            BENEFÍCIOS EXCLUSIVOS
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-offwhite leading-tight">
            O que sua empresa leva<br /><span className="text-coral">ao participar?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                viewport={{ once: true }}
                className="bg-offwhite rounded-4xl p-8 hover:shadow-xl hover:shadow-coral/10 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-coral group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-petrol text-lg mb-2">{b.title}</h3>
                <p className="text-petrol/60 font-body text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}
