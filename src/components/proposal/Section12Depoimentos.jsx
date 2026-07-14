import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";
import { eventMedia } from "@/components/proposal/eventMedia";

const IMG_HANDSHAKE = eventMedia.partnership;

const testimonials = [
  {
    text: "Estar presente no maior evento da cidade é uma forma direta de fortalecer a marca e se aproximar de quem realmente compra.",
    author: "Empresário local",
  },
  {
    text: "Durante a festa, empresários, autoridades e clientes circulam no mesmo ambiente. É o cenário ideal para gerar conexões.",
    author: "Parceiro comercial",
  },
];

export default function Section12Depoimentos() {
  return (
    <section className="relative bg-coral overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="wave" className="top-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <img src={IMG_HANDSHAKE} alt="Parceria empresarial" className="rounded-4xl w-full h-72 lg:h-96 object-cover" />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white leading-tight mb-8">
              Uma oportunidade criada para empresas que querem <span className="text-petrol">crescer.</span>
            </h2>

            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-petrol rounded-3xl p-6 lg:p-8 relative">
                  <Quote className="w-8 h-8 text-coral/40 absolute top-4 right-4" />
                  <p className="text-offwhite/80 font-body text-lg leading-relaxed italic mb-4">
                    "{t.text}"
                  </p>
                  <p className="text-coral font-heading font-bold text-sm">— {t.author}</p>
                </div>
              ))}
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
