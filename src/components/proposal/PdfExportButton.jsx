import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, FileDown, Loader2 } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const waitForImages = async (root) => {
  const images = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );
};

export default function PdfExportButton() {
  const [status, setStatus] = useState("idle");

  const generatePdf = async () => {
    if (status === "generating") return;
    setStatus("generating");

    try {
      const root = document.getElementById("proposal-lp");
      if (!root) throw new Error("Proposal root not found");

      window.scrollTo(0, 0);
      document.body.classList.add("pdf-export-mode");

      if (document.fonts?.ready) await document.fonts.ready;
      await waitForImages(root);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      // Hide overlay UI (sticky nav, floating buttons) so it is not captured.
      const hidden = [];
      root
        .querySelectorAll(".fixed, nav, [aria-label^='Exportar']")
        .forEach((el) => {
          hidden.push([el, el.style.display]);
          el.style.display = "none";
        });

      const canvas = await html2canvas(root, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#073F36",
        logging: false,
        windowWidth: root.scrollWidth,
      });

      hidden.forEach(([el, display]) => {
        el.style.display = display;
      });
      document.body.classList.remove("pdf-export-mode");

      // Single continuous page: landscape width, height follows the content
      // so nothing is cut or split across pages. Zero margins.
      const pageWidth = 841.89; // A4 landscape width in pt
      const pageHeight = (canvas.height * pageWidth) / canvas.width;
      const pdf = new jsPDF({ unit: "pt", format: [pageWidth, pageHeight] });
      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
      pdf.save("proposta.pdf");

      setStatus("done");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      document.body.classList.remove("pdf-export-mode");
      setStatus("idle");
      alert("Nao foi possivel gerar o PDF. Tente novamente.");
    }
  };

  return (
    <motion.button
      onClick={generatePdf}
      disabled={status === "generating"}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: status === "generating" ? 1 : 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Exportar proposta em PDF"
    >
      {status === "idle" && (
        <span className="absolute inset-0 rounded-full bg-coral/40 animate-ping" />
      )}

      <div className="relative w-14 h-14 bg-coral rounded-full flex items-center justify-center shadow-2xl shadow-coral/30 border-2 border-white/20">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.span
              key="idle"
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FileDown className="w-6 h-6 text-white" />
            </motion.span>
          )}
          {status === "generating" && (
            <motion.span
              key="gen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-6 h-6 text-white animate-spin" />
            </motion.span>
          )}
          {status === "done" && (
            <motion.span
              key="done"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <Check className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {status === "idle" && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute left-16 top-1/2 -translate-y-1/2 bg-petrol text-offwhite text-xs font-heading font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          Baixar PDF da Proposta
        </motion.div>
      )}

      {status === "generating" && (
        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-petrol rounded-xl px-4 py-2 shadow-xl">
          <div className="w-32 h-2 bg-offwhite/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-coral rounded-full"
              animate={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-offwhite text-[10px] font-body mt-1 text-center">Preparando</p>
        </div>
      )}

      {status === "done" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-16 top-1/2 -translate-y-1/2 bg-petrol text-coral text-xs font-heading font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap"
        >
          PDF pronto
        </motion.div>
      )}
    </motion.button>
  );
}
