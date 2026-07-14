import React from "react";
import { ArrowRight } from "lucide-react";
import { projectContactUrl } from "@/components/proposal/contact";

export default function CtaButton({ text, large = false, className = "" }) {
  return (
    <a
      href={projectContactUrl}
      target="_blank"
      rel="noreferrer"
      className={`group bg-coral hover:bg-coral-light text-white font-heading font-bold rounded-4xl inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 ${large ? "px-10 py-5 text-lg" : "px-8 py-4 text-sm"} ${className}`}
    >
      {text}
      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
        <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
}
