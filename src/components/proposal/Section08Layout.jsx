import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, MapPin, Sparkles, X } from "lucide-react";
import SectionFooter from "@/components/proposal/SectionFooter";
import { eventMedia } from "@/components/proposal/eventMedia";

const maquetes = [
  {
    src: eventMedia.layoutFront,
    title: "Vista frontal do stand",
    eyebrow: "Entrada frontal",
    description: "Perspectiva frontal com portal de acesso, areas de exposicao, circulacao central, lounges e comunicacao visual para patrocinadores.",
    className: "lg:col-span-2",
    imageClass: "w-full h-auto",
  },
  {
    src: eventMedia.layoutPanoramic,
    title: "Planta baixa do evento",
    eyebrow: "Distribuicao tecnica",
    description: "Layout panoramico com medidas gerais, entrada frontal, stands de exposicao, area livre de circulacao, mesas de convivencia e paisagismo.",
    className: "",
    imageClass: "w-full h-auto",
  },
  {
    src: eventMedia.layoutPerspective,
    title: "Perspectiva noturna",
    eyebrow: "Experiencia do publico",
    description: "Renderizacao do evento em funcionamento, com iluminacao, grande fluxo de visitantes, convivencia, networking e ativacoes comerciais.",
    className: "",
    imageClass: "w-full h-auto",
  },
];

const highlights = [
  { icon: MapPin, label: "Entrada frontal", text: "acesso direto ao stand" },
  { icon: LayoutGrid, label: "Area de exposicao", text: "presenca de marca em destaque" },
  { icon: Sparkles, label: "Coquetel VIP", text: "relacionamento qualificado" },
];

export default function Section08Layout() {
  const [selectedMaquete, setSelectedMaquete] = useState(null);

  useEffect(() => {
    if (!selectedMaquete) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedMaquete(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMaquete]);

  return (
    <section className="relative bg-offwhite overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cream to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-end mb-12"
        >
          <div>
            <span className="text-coral font-heading font-bold text-xs tracking-widest uppercase block mb-3">
              MAQUETE DO PROJETO
            </span>
            <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-petrol leading-tight">
              Um stand desenhado para<br /><span className="text-coral">gerar presenca e negocio.</span>
            </h2>
          </div>
          <p className="text-petrol/70 font-body text-base lg:text-lg leading-relaxed max-w-2xl">
            As vistas 3D deixam claro onde a marca aparece e como o visitante circula: recepcao, exposicao, lounge VIP e pontos de ativacao integrados em um ambiente premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {maquetes.map((maquete, index) => (
            <motion.figure
              key={maquete.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group relative bg-petrol rounded-4xl overflow-hidden shadow-2xl shadow-petrol/15 border border-petrol/10 ${maquete.className}`}
            >
              <button
                type="button"
                onClick={() => setSelectedMaquete(maquete)}
                className="relative bg-[#050505] overflow-hidden w-full text-left cursor-zoom-in"
                aria-label={`Abrir ${maquete.title} em tela cheia`}
              >
                <img
                  src={maquete.src}
                  alt={maquete.title}
                  className={`${maquete.imageClass} w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]`}
                />
              </button>

              <figcaption className="p-6 lg:p-7 bg-petrol">
                <div className="flex items-start gap-4 mb-4">
                  <span className="shrink-0 bg-coral text-white font-heading font-extrabold text-sm rounded-2xl px-4 py-2 shadow-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="inline-flex bg-offwhite/90 text-petrol font-heading font-bold text-[11px] tracking-widest uppercase rounded-full px-3 py-1 mb-3">
                      {maquete.eyebrow}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl lg:text-3xl text-offwhite leading-tight">
                      {maquete.title}
                    </h3>
                  </div>
                </div>
                <p className="font-body text-[15px] lg:text-lg font-medium text-white leading-7 lg:leading-8 tracking-[0.01em]">
                  {maquete.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {highlights.map(({ icon: Icon, label, text }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="bg-white/80 border border-petrol/10 rounded-3xl px-5 py-5 shadow-lg shadow-petrol/5"
            >
              <span className="w-11 h-11 rounded-2xl bg-coral text-white flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </span>
              <p className="font-heading font-extrabold text-petrol leading-tight">{label}</p>
              <p className="font-body text-sm text-petrol/60 mt-1">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedMaquete && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedMaquete.title}
          onClick={() => setSelectedMaquete(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedMaquete(null)}
            className="absolute right-4 top-4 lg:right-8 lg:top-8 w-12 h-12 rounded-full bg-white/12 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fechar imagem em tela cheia"
          >
            <X className="w-6 h-6" />
          </button>

          <figure
            className="w-full h-full flex flex-col items-center justify-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedMaquete.src}
              alt={selectedMaquete.title}
              className="max-w-full max-h-[86vh] object-contain rounded-2xl shadow-2xl"
            />
            <figcaption className="text-center max-w-3xl">
              <p className="font-heading font-extrabold text-white text-xl lg:text-3xl">
                {selectedMaquete.title}
              </p>
              <p className="font-body text-white/70 text-sm lg:text-base mt-2">
                {selectedMaquete.description}
              </p>
            </figcaption>
          </figure>
        </div>
      )}

      <div className="mt-16">
        <SectionFooter light />
      </div>
    </section>
  );
}
