import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { InvestimentoData } from "../types";

interface Props {
  data: InvestimentoData;
}

export const InvestimentoSection = ({ data }: Props) => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-24"
      >
        {data.eyebrow && (
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-70">
            {data.eyebrow}
          </p>
        )}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          {data.titulo}
        </h2>
        {data.subtitulo && (
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitulo}
          </p>
        )}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-dark p-10 rounded-[2.5rem] border border-white/5 flex flex-col group"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-heading font-bold text-foreground/60 tracking-tight">
              {data.cenarioAtual.titulo}
            </h3>
            <span className="text-[9px] font-bold tracking-widest text-muted-foreground border border-white/10 px-3 py-1 rounded-full uppercase">
              {data.cenarioAtual.label}
            </span>
          </div>

          <div className="text-4xl font-heading font-bold text-foreground/40 mb-2 tracking-tighter">
            {data.cenarioAtual.destaque}
          </div>
          {data.cenarioAtual.subtitulo && (
            <div className="text-xs text-muted-foreground/50 mb-10 uppercase tracking-widest font-bold">
              {data.cenarioAtual.subtitulo}
            </div>
          )}

          <ul className="space-y-4 flex-grow">
            {data.cenarioAtual.items.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-sm text-muted-foreground/60 font-light">
                <X className="w-4 h-4 text-destructive/40 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-10 rounded-[2.5rem] border border-primary/20 relative overflow-hidden flex flex-col group shadow-premium"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />

          <div className="relative flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-heading font-bold text-foreground tracking-tight">
                {data.cenarioFuturo.titulo}
              </h3>
              <span className="text-[9px] font-bold tracking-widest text-primary border border-primary/20 px-3 py-1 rounded-full uppercase">
                {data.cenarioFuturo.label}
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-heading font-bold text-gradient-primary mb-2 tracking-tighter">
              {data.cenarioFuturo.destaque}
            </div>
            {data.cenarioFuturo.subtitulo && (
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-10">
                {data.cenarioFuturo.subtitulo}
              </p>
            )}

            <ul className="space-y-4 flex-grow">
              {data.cenarioFuturo.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-sm text-foreground/80 font-light group-hover:text-foreground transition-colors duration-300"
                >
                  <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
