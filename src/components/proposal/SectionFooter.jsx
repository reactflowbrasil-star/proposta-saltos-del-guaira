import React from "react";

export default function SectionFooter({ light = false }) {
  return (
    <div className={`relative w-full min-h-24 px-5 pb-16 pt-4 text-center text-[10px] tracking-wider font-body sm:min-h-16 sm:px-20 sm:py-4 sm:text-xs sm:tracking-widest ${light ? "text-petrol/50" : "text-offwhite/40"}`}>
      SECRETARIA DE INDÚSTRIA E COMÉRCIO — SALTOS DEL GUAIRÁ
      <img
        src="/assets/logo secretaria.png"
        alt="Secretaria de Indústria e Comércio"
        className="absolute bottom-2 left-1/2 h-10 w-auto -translate-x-1/2 object-contain sm:left-auto sm:right-6 sm:h-12 sm:translate-x-0"
      />
    </div>
  );
}
