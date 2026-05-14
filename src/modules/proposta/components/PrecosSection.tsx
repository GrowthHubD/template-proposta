import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { PrecosData, PrecoPlano } from "../types";

interface Props {
  data: PrecosData;
}

interface CardProps {
  plano: PrecoPlano;
  delay?: number;
}

const PlanoCard = ({ plano, delay = 0 }: CardProps) => {
  const isDestaque = !!plano.destaque;
  return (
    <motion.div
      initial={{ opacity: 0, x: isDestaque ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={
        isDestaque
          ? "glass p-8 sm:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden group shadow-premium"
          : "glass-dark p-8 sm:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
      }
    >
      {isDestaque && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
      )}
      <div className="relative">
        <div
          className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-8 ${
            isDestaque ? "text-primary" : "text-primary/60"
          }`}
        >
          {plano.eyebrow}
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground mb-4 tracking-tight">
          {plano.nome}
        </h3>
        <p className="text-base text-muted-foreground mb-10 font-light leading-relaxed">
          {plano.descricao}
        </p>

        <div className="mb-10">
          <div className="text-5xl font-heading font-bold text-foreground tracking-tighter">
            {plano.valor}
            {plano.periodo && (
              <span className="text-lg font-normal text-muted-foreground ml-1">
                {plano.periodo}
              </span>
            )}
          </div>
          <div
            className={`text-[10px] font-bold tracking-widest uppercase mt-2 ${
              isDestaque ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {plano.rotuloValor}
          </div>
        </div>

        <div className="space-y-8">
          <div className={`h-px w-full ${isDestaque ? "bg-primary/10" : "bg-white/10"}`} />
          <ul className="space-y-4">
            {plano.itens.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-sm text-foreground/70 font-light hover:text-foreground transition-colors duration-300"
              >
                <div
                  className={`w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 ${
                    isDestaque ? "bg-primary/10" : "group-hover:bg-primary/20 transition-all duration-300"
                  }`}
                >
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          {plano.observacao && (
            <div
              className={
                isDestaque
                  ? "text-[10px] text-muted-foreground/60 p-4 border border-white/5 rounded-2xl italic leading-relaxed"
                  : "text-[11px] text-primary/80 bg-primary/5 rounded-2xl p-4 border border-primary/10 font-medium"
              }
            >
              {plano.observacao}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const PrecosSection = ({ data }: Props) => {
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
      </motion.div>

      <div
        className={`grid gap-8 lg:gap-12 ${
          data.planos.length === 1 ? "md:grid-cols-1 max-w-2xl mx-auto" : "md:grid-cols-2"
        }`}
      >
        {data.planos.map((plano, i) => (
          <PlanoCard key={i} plano={plano} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
};
