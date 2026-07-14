import React from "react";

export default function OrganicLines({ variant = "default", className = "" }) {
  if (variant === "corner-tr") {
    return (
      <svg className={`absolute top-0 right-0 w-64 h-64 opacity-20 ${className}`} viewBox="0 0 200 200" fill="none">
        <path d="M200 0C200 60 160 120 100 140C60 155 20 180 0 200" stroke="#D8C3A5" strokeWidth="1" />
        <path d="M200 30C180 70 140 110 80 130C40 145 10 170 0 190" stroke="#D8C3A5" strokeWidth="0.5" />
      </svg>
    );
  }
  if (variant === "corner-bl") {
    return (
      <svg className={`absolute bottom-0 left-0 w-64 h-64 opacity-20 ${className}`} viewBox="0 0 200 200" fill="none">
        <path d="M0 200C0 140 40 80 100 60C140 45 180 20 200 0" stroke="#D8C3A5" strokeWidth="1" />
        <path d="M0 170C20 130 60 90 120 70C160 55 190 30 200 10" stroke="#D8C3A5" strokeWidth="0.5" />
      </svg>
    );
  }
  if (variant === "wave") {
    return (
      <svg className={`absolute w-full opacity-10 ${className}`} viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
        <path d="M0 50C200 20 400 80 600 50C800 20 1000 80 1200 50" stroke="#D8C3A5" strokeWidth="1.5" />
        <path d="M0 70C200 40 400 100 600 70C800 40 1000 100 1200 70" stroke="#F47C55" strokeWidth="0.5" />
      </svg>
    );
  }
  return (
    <svg className={`absolute opacity-15 animate-pulse-glow ${className}`} viewBox="0 0 300 300" fill="none">
      <path d="M50 250C80 180 120 140 180 120C220 105 260 70 280 20" stroke="#D8C3A5" strokeWidth="1" />
      <circle cx="180" cy="120" r="3" fill="#D8C3A5" />
    </svg>
  );
}