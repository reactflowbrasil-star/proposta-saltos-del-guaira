import React from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import SectionFooter from "@/components/proposal/SectionFooter";

export default function Section14Roteiro() {
  return (
    <section className="relative bg-offwhite overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Coral sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3 bg-coral rounded-4xl p-8 lg:p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Mic className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-white font-heading font-extrabold text-2xl mb-3">Roteiro de Venda</h3>
            <p className="text-white/70 font-body text-sm">
              Use este texto ao apresentar a proposta pessoalmente ou por ligação.
            </p>
          </motion.div>

          {/* Script content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <span className="text-coral font-heading font-bold text-xs tracking-widest uppercase block mb-4">
              TEXTO SUGERIDO PARA APRESENTAÇÃO ORAL
            </span>

            <div className="bg-petrol rounded-4xl p-8 lg:p-10 mb-6">
              <p className="text-offwhite font-body text-lg leading-relaxed italic">
                "Empresário, imagine sua marca exposta para 30.000 pessoas em 7 dias. Imagine fechar negócios com autoridades, empresários e clientes VIP, tudo no mesmo espaço, com cerveja, whisky e churrasco inclusos.
              </p>
              <p className="text-offwhite font-body text-lg leading-relaxed italic mt-4">
                Isso não é um gasto, é um investimento que se paga em vendas.
              </p>
              <p className="text-offwhite font-body text-lg leading-relaxed italic mt-4">
                Separado, tudo isso custaria mais de Gs 5.500.000. No nosso pacote, você paga apenas Gs 5.000.000.
              </p>
              <p className="text-coral font-heading font-bold text-xl mt-4">
                Mas corre, porque as vagas são limitadas!"
              </p>
            </div>

            <div className="bg-cream rounded-2xl px-6 py-4">
              <p className="text-petrol font-heading font-bold text-sm">
                💡 Não venda espaço. Venda oportunidade, visibilidade e retorno.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <SectionFooter light />
      </div>
    </section>
  );
}
