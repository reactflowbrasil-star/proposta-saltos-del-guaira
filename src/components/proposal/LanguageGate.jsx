import React from "react";
import { motion } from "framer-motion";

const options = [
  { code: "pt", flag: "🇧🇷", label: "Português", description: "Ver proposta em português brasileiro" },
  { code: "es", flag: "🇵🇾", label: "Español", description: "Ver propuesta en español" },
];

export default function LanguageGate({ onSelect }) {
  return (
    <main className="fixed inset-0 z-[10000] flex items-center justify-center bg-petrol px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(244,124,85,0.2),transparent_38%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-2xl rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12"
      >
        <img src="/assets/logo secretaria.png" alt="Secretaria de Indústria e Comércio" className="mx-auto mb-6 h-20 w-auto" />
        <p className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.25em] text-coral">Selecione o idioma · Seleccione el idioma</p>
        <h1 className="mb-8 font-heading text-3xl font-extrabold text-offwhite sm:text-4xl">Como deseja visualizar a proposta?</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => onSelect(option.code)}
              className="group rounded-3xl border border-white/10 bg-offwhite p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-coral hover:shadow-xl"
            >
              <span className="mb-4 block text-5xl" aria-hidden="true">{option.flag}</span>
              <span className="block font-heading text-2xl font-extrabold text-petrol group-hover:text-coral">{option.label}</span>
              <span className="mt-2 block font-body text-sm text-petrol/60">{option.description}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
