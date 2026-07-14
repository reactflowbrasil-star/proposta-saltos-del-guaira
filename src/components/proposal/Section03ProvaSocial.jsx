import React from "react";
import { motion } from "framer-motion";
import OrganicLines from "@/components/proposal/OrganicLines";
import FloatingBadge from "@/components/proposal/FloatingBadge";
import SectionFooter from "@/components/proposal/SectionFooter";
import { eventMedia } from "@/components/proposal/eventMedia";

const IMG_LEADER = eventMedia.leader;

export default function Section03ProvaSocial() {
  return (
    <section className="relative bg-coral overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="wave" className="top-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-5/12 relative"
          >
            <img
              src={IMG_LEADER}
              alt="Líder empresarial"
              className="rounded-4xl object-cover h-[500px] w-full"
            />
            <FloatingBadge text="30.000+ PESSOAS" size="md" className="absolute -bottom-6 -right-6 z-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="bg-petrol rounded-4xl p-10 lg:p-14 relative overflow-hidden">
              <OrganicLines variant="corner-tr" className="opacity-20" />

              <img
                src="https://media.base44.com/images/public/6a501cbe9ff2a3de14e7a965/38019fe6a_Logocontorno.png"
                alt="53 Anos Saltos del Guairá"
                className="h-20 w-auto object-contain mb-4"
              />
              <p className="text-coral font-heading font-extrabold text-7xl lg:text-8xl mb-4">
                +30K
              </p>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-offwhite leading-tight mb-6">
                pessoas podem ver <span className="text-coral">sua marca.</span>
              </h2>
              <p className="text-offwhite/70 font-body text-lg leading-relaxed mb-8">
                A festa reúne moradores, visitantes, autoridades, empresários e potenciais clientes em um dos momentos de maior circulação da cidade.
              </p>
              <div className="bg-coral/20 rounded-2xl px-6 py-4">
                <p className="text-offwhite font-heading font-bold text-lg">
                  Sua marca presente no lugar certo, na hora certa. →
                </p>
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
