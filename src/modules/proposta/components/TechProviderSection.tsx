import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import type { TechProviderData } from "../types";

interface Props {
  data: TechProviderData;
}

const GLOWS = ["tr", "bl", "tl", "br"];

export const TechProviderSection = ({ data }: Props) => (
  <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="card-glow rounded-[2rem] p-8 sm:p-12 mb-6"
      data-glow="tr"
    >
      <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
        <div className="flex justify-center">
          {data.seloSrc ? (
            <img src={data.seloSrc} alt={data.seloAlt ?? data.seloTitulo} className="h-32 sm:h-40 w-auto" />
          ) : (
            <div className="relative w-64 sm:w-72">
              <div className="absolute -inset-6 rounded-full bg-[#0082fb]/20 blur-3xl pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden p-[2px]">
                <motion.div
                  aria-hidden
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-[60%]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #0064e1, #0082fb, transparent 30%, #0082fb 55%, #0064e1, transparent 80%, #0064e1)",
                  }}
                />
                <div className="relative rounded-[calc(2rem-2px)] bg-neutral-950 px-6 py-8 text-center overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                {data.seloLogoSrc && (
                  <div className="mx-auto mb-5 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 shadow-[0_0_30px_rgba(0,130,251,0.35)]">
                    <img src={data.seloLogoSrc} alt="Meta" className="h-8 sm:h-9 w-auto" />
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 mb-1">
                  <BadgeCheck className="w-6 h-6 text-[#0082fb]" />
                  <p className="text-2xl font-heading font-bold text-white tracking-tight">{data.seloTitulo}</p>
                </div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-5">
                  {data.seloSubtitulo}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0082fb]/40 bg-[#0082fb]/10 px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0082fb] animate-pulse" />
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#6cb4ff]">
                    Parceiro verificado
                  </span>
                </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {data.eyebrow && (
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-70">
              {data.eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-5 tracking-tight">
            {data.titulo}
            {data.tituloDestaque && (
              <>
                {" "}
                <span className="text-gradient-primary">{data.tituloDestaque}</span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            {data.descricao}
          </p>
        </div>
      </div>
    </motion.div>

    <div className="grid sm:grid-cols-3 gap-6">
      {data.beneficios.map((b, i) => {
        const Icon = b.icone;
        return (
          <motion.div
            key={b.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            data-glow={GLOWS[(i + 1) % GLOWS.length]}
            className="card-glow rounded-[1.5rem] p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-tight">{b.titulo}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">{b.descricao}</p>
          </motion.div>
        );
      })}
    </div>

    {data.nota && (
      <p className="mt-8 text-center text-xs text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">{data.nota}</p>
    )}
  </section>
);
