import React from "react";

export default function SectionFooter({ light = false }) {
  return (
    <div className={`relative w-full min-h-16 px-20 py-4 text-center text-xs tracking-widest font-body ${light ? "text-petrol/50" : "text-offwhite/40"}`}>
      SECRETARIA DE INDÚSTRIA E COMÉRCIO — SALTOS DEL GUAIRÁ
      <img
        src="/assets/logo secretaria.png"
        alt="Secretaria de Indústria e Comércio"
        className="absolute bottom-2 right-4 h-10 w-auto object-contain sm:right-6 sm:h-12"
      />
    </div>
  );
}
