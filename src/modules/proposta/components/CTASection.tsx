import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CTAData } from "../types";

interface Props {
  data: CTAData;
}

export const CTASection = ({ data }: Props) => {
  const handleClick = () => {
    if (data.botaoLink) {
      window.open(data.botaoLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative rounded-[3rem] glass-dark p-12 sm:p-20 border border-white/5 overflow-hidden group shadow-premium"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />

        <div className="relative z-10 flex flex-col items-center">
          {data.eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-6"
            >
              {data.eyebrow}
            </motion.p>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 tracking-tight"
          >
            {data.titulo}
            {data.tituloDestaque && (
              <>
                {" "}
                <span className="text-gradient-primary">{data.tituloDestaque}</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-12 font-light leading-relaxed"
          >
            {data.descricao}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={handleClick}
              type="button"
              className="group relative inline-flex items-center gap-4 bg-primary text-slate-900 font-bold text-base px-10 py-5 rounded-full shadow-glow transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">{data.botaoLabel}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
