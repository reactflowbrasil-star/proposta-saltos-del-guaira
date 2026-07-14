import React from "react";
import { motion } from "framer-motion";

const options = [
  { code: "pt", flag: "🇧🇷", label: "Português", description: "Ver proposta em português brasileiro" },
  { code: "es", flag: "🇵🇾", label: "Español", description: "Ver propuesta en español" },
];

export default function LanguageGate({ onSelect }) {
  return (
    <main className="fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto bg-petrol px-4 py-5 sm:items-center sm:px-6 sm:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(244,124,85,0.2),transparent_38%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative my-auto min-w-0 w-full max-w-[calc(100vw-2rem)] sm:max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 text-center shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-12"
      >
        <img src="/assets/logo secretaria.png" alt="Secretaria de Indústria e Comércio" className="mx-auto mb-4 h-16 w-auto sm:mb-6 sm:h-20" />
        <p className="mb-2 font-heading text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-coral sm:text-xs sm:tracking-[0.25em]">Selecione o idioma · Seleccione el idioma</p>
        <h1 className="mb-5 font-heading text-2xl font-extrabold leading-tight text-offwhite sm:mb-8 sm:text-4xl">Como deseja visualizar a proposta?</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => onSelect(option.code)}
              className="group min-w-0 min-h-24 rounded-2xl border border-white/10 bg-offwhite p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-coral hover:shadow-xl sm:rounded-3xl sm:p-6"
            >
              <span className="mb-2 block text-4xl sm:mb-4 sm:text-5xl" aria-hidden="true">{option.flag}</span>
              <span className="block font-heading text-xl font-extrabold text-petrol group-hover:text-coral sm:text-2xl">{option.label}</span>
              <span className="mt-2 block font-body text-sm text-petrol/60">{option.description}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
