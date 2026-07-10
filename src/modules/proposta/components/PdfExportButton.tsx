import { useState } from "react";
import { FilePdf } from "@phosphor-icons/react";
import { motion } from "framer-motion";

/**
 * Botão flutuante "Exportar PDF".
 *
 * Usa o print-to-PDF nativo do navegador ("Salvar como PDF"): zero dependências
 * novas, renderiza o design escuro/gradiente com fidelidade e funciona offline.
 * Antes de imprimir, rola a página inteira para disparar as animações de entrada
 * (whileInView, once: true) e garantir que nenhuma seção saia em branco no PDF.
 */
export const PdfExportButton = () => {
  const [gerando, setGerando] = useState(false);

  const exportar = async () => {
    if (gerando) return;
    setGerando(true);
    try {
      const passo = Math.max(300, Math.floor(window.innerHeight * 0.8));
      const total = document.body.scrollHeight;
      for (let y = 0; y <= total; y += passo) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
      window.print();
    } finally {
      setGerando(false);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={exportar}
      disabled={gerando}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="no-print fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-slate-900 font-bold text-sm px-5 py-3 shadow-glow transition-transform hover:scale-105 active:scale-95 disabled:opacity-70"
      aria-label="Exportar proposta para PDF"
    >
      <FilePdf className="w-5 h-5" weight="bold" />
      <span>{gerando ? "Preparando..." : "Exportar PDF"}</span>
    </motion.button>
  );
};
