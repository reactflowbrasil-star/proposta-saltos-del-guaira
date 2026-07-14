import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Building2, Crown, Maximize, Lock } from "lucide-react";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";

const reasons = [
  { icon: Users, title: "30.000+ PESSOAS", desc: "Sua marca exposta para milhares de potenciais clientes." },
  { icon: Calendar, title: "7 DIAS DE FESTA", desc: "Todos os dias uma nova oportunidade de venda e relacionamento." },
  { icon: Building2, title: "STAND OFICIAL", desc: "Presença em um espaço estratégico da Secretaria de Indústria e Comércio." },
  { icon: Crown, title: "AUTORIDADES PRESENTES", desc: "Networking de alto nível com empresários, autoridades e clientes VIP." },
  { icon: Maximize, title: "ESPAÇO PREMIUM", desc: "Stand 5m × 10m preparado para exposição e ativação comercial." },
  { icon: Lock, title: "VAGAS LIMITADAS", desc: "Uma oportunidade exclusiva para poucas empresas." },
];

export default function Section05PorQue() {
  return (
    <section className="relative bg-coral overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-tr" className="opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-white leading-tight">
            Por que sua empresa<br /><span className="text-petrol">precisa estar aqui?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                viewport={{ once: true }}
                className="bg-petrol rounded-4xl p-8 hover:bg-petrol-light transition-colors duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-coral/20 flex items-center justify-center mb-5 group-hover:bg-coral/30 transition-colors">
                  <Icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="font-heading font-bold text-offwhite text-lg mb-2">{r.title}</h3>
                <p className="text-offwhite/60 font-body text-sm leading-relaxed">{r.desc}</p>
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
