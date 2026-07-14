import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Top nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-petrol/90 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/6a501cbe9ff2a3de14e7a965/38019fe6a_Logocontorno.png"
              alt="53 Anos Saltos del Guairá"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex items-center gap-1">
            <span className="text-coral font-heading font-bold text-xs">Gs 5.000.000</span>
            <span className="text-offwhite/40 mx-2">|</span>
            <span className="text-offwhite/60 font-body text-xs">24-30 Julho</span>
          </div>
        </div>
      </nav>

      {/* Back to top */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-coral hover:bg-coral-light text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
