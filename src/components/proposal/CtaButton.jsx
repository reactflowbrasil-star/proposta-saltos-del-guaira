import React from "react";
import { ArrowRight } from "lucide-react";
import { projectContactUrl } from "@/components/proposal/contact";

export default function CtaButton({ text, large = false, className = "" }) {
  return (
    <a
      href={projectContactUrl}
      target="_blank"
      rel="noreferrer"
      className={`group max-w-full justify-center bg-coral hover:bg-coral-light text-center text-white font-heading font-bold rounded-3xl inline-flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] ${large ? "w-full px-5 py-4 text-sm sm:w-auto sm:px-10 sm:py-5 sm:text-lg" : "px-6 py-4 text-sm sm:px-8"} ${className}`}
    >
      {text}
      <span className="w-8 h-8 shrink-0 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
        <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
}
