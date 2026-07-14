import React from "react";

export default function FloatingBadge({ text, size = "md", className = "" }) {
  const sizes = {
    sm: "w-24 h-24 text-xs",
    md: "w-32 h-32 text-sm",
    lg: "w-40 h-40 text-base"
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizes[size]} rounded-full border-2 border-coral flex items-center justify-center relative`}>
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <path id="circlePath" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
          </defs>
          <text fill="#F47C55" fontSize="11" fontWeight="700" fontFamily="var(--font-heading)" letterSpacing="4">
            <textPath href="#circlePath">
              {`● ${text} ● ${text} `}
            </textPath>
          </text>
        </svg>
        <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center">
          <span className="text-white font-heading font-extrabold text-lg">★</span>
        </div>
      </div>
    </div>
  );
}