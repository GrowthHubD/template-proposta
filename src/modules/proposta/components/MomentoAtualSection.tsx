import { motion } from "framer-motion";
import type { MomentoAtualData, MomentoAtualBloco } from "../types";

interface Props {
  data: MomentoAtualData;
}

interface BlocoProps {
  bloco: MomentoAtualBloco;
  variant: "desafio" | "solucao";
  delay?: number;
}

const Bloco = ({ bloco, variant, delay = 0 }: BlocoProps) => {
  const Icon = bloco.icone;
  const isDesafio = variant === "desafio";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#121212] border border-white/5 rounded-3xl p-8 sm:p-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border ${
            isDesafio ? "bg-[#1A1515] border-destructive/20" : "bg-[#15131A] border-primary/20"
          }`}
        >
          <Icon className={`w-5 h-5 ${isDesafio ? "text-destructive/80" : "text-primary/80"}`} />
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground tracking-tight">
          {bloco.titulo}
        </h3>
      </div>
      <ul className="space-y-6">
        {bloco.items.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <div
              className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                isDesafio ? "bg-destructive/80" : "bg-primary"
              }`}
            />
            <span className="text-sm sm:text-[15px] text-muted-foreground/90 font-light leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const MomentoAtualSection = ({ data }: Props) => {
  return (
    <section
      id="momento-atual"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        {data.eyebrow && (
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4">
            {data.eyebrow}
          </p>
        )}
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
          {data.titulo}
        </h2>
        {data.subtitulo && (
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitulo}
          </p>
        )}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <Bloco bloco={data.desafio} variant="desafio" />
        <Bloco bloco={data.solucao} variant="solucao" delay={0.2} />
      </div>
    </section>
  );
};
