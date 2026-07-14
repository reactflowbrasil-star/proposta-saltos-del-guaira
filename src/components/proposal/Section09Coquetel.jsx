import React from "react";
import { motion } from "framer-motion";
import { Beer, Wine, GlassWater, Flame, Utensils } from "lucide-react";
import OrganicLines from "@/components/proposal/OrganicLines";
import SectionFooter from "@/components/proposal/SectionFooter";
import { eventMedia } from "@/components/proposal/eventMedia";

const IMG_COCKTAIL = eventMedia.cocktail;

const drinks = [
  { icon: Beer, name: "Cerveja" },
  { icon: Wine, name: "Whisky" },
  { icon: GlassWater, name: "Refrigerante & Água" },
];

const food = [
  { icon: Flame, name: "Churrasco" },
  { icon: Utensils, name: "Feijoada especial — dia 30/07" },
];

export default function Section09Coquetel() {
  return (
    <section className="relative bg-coral overflow-hidden py-16 lg:py-24">
      <OrganicLines variant="corner-bl" className="opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-petrol font-heading font-bold text-xs tracking-widest uppercase block mb-3">
              EXPERIÊNCIA VIP
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-white leading-tight mb-4">
              Coquetel premium <span className="text-petrol">incluso.</span>
            </h2>
            <p className="text-white/80 font-body text-lg mb-8">
              Impressione seus clientes com uma experiência completa todos os dias do evento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-petrol rounded-3xl p-6">
                <h4 className="text-coral font-heading font-bold text-sm mb-4">BEBIDAS</h4>
                {drinks.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                      <Icon className="w-5 h-5 text-coral" />
                      <span className="text-offwhite font-body text-sm">{d.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="bg-petrol rounded-3xl p-6">
                <h4 className="text-coral font-heading font-bold text-sm mb-4">GASTRONOMIA</h4>
                {food.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                      <Icon className="w-5 h-5 text-coral" />
                      <span className="text-offwhite font-body text-sm">{f.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-white/70 font-body text-sm leading-relaxed">
              Mais do que expor sua marca, você terá um ambiente ideal para receber clientes, conversar com parceiros e gerar negócios com conforto e exclusividade.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img src={IMG_COCKTAIL} alt="Coquetel premium" className="rounded-4xl w-full h-80 lg:h-[450px] object-cover" />
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <SectionFooter />
      </div>
    </section>
  );
}
