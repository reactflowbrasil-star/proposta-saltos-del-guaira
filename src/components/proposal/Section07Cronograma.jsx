import React from "react";
import { motion } from "framer-motion";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";

const days = [
  { date: "24/07", title: "Abertura Oficial", desc: "Autoridades + imprensa = máxima visibilidade" },
  { date: "25/07", title: "Show e DJ", desc: "Público jovem e consumidor ativo" },
  { date: "26/07", title: "Noite das Cidades", desc: "Líderes regionais e oportunidades de parceria" },
  { date: "27/07", title: "Noite das Escolas", desc: "Famílias inteiras presentes" },
  { date: "28/07", title: "Noite Universitária", desc: "Jovens conectados e consumidores" },
  { date: "29/07", title: "Show de Serenatas", desc: "Público fiel e tradicional" },
  { date: "30/07", title: "Desfile Cívico + Festa", desc: "O dia mais cheio do ano" },
];

export default function Section07Cronograma() {
  return (
    <section className="relative bg-petrol overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="wave" className="bottom-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-coral font-heading font-bold text-xs tracking-widest uppercase block mb-3">
            PROGRAMAÇÃO
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-offwhite leading-tight mb-4">
            7 dias de publicidade<br /><span className="text-coral">que não tem preço.</span>
          </h2>
          <p className="text-offwhite/60 font-body text-lg max-w-2xl mx-auto">
            Cada noite é uma oportunidade diferente de vender, conectar e fortalecer sua marca.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 hidden lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {days.map((day, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center lg:mb-6 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}>
                    <div className="bg-offwhite rounded-3xl p-6 inline-block text-left hover:shadow-lg hover:shadow-coral/10 transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-10 h-10 rounded-full bg-coral text-white font-heading font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {day.date.split("/")[0]}
                        </span>
                        <h3 className="font-heading font-bold text-petrol text-lg">{day.title}</h3>
                      </div>
                      <p className="text-petrol/60 font-body text-sm">{day.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-16 justify-center">
                    <div className="w-4 h-4 rounded-full bg-coral border-4 border-petrol" />
                  </div>

                  <div className="lg:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}