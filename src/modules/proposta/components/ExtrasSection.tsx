import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import type { ExtrasData } from "../types";

interface Props {
  data: ExtrasData;
}

const GLOWS = ["tr", "bl", "tl"];

export const ExtrasSection = ({ data }: Props) => (
  <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 sm:mb-20"
    >
      {data.eyebrow && (
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-70">{data.eyebrow}</p>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
        {data.titulo}
        {data.tituloDestaque && (
          <>
            {" "}
            <br />
            <span className="text-gradient-primary">{data.tituloDestaque}</span>
          </>
        )}
      </h2>
      {data.subtitulo && (
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          {data.subtitulo}
        </p>
      )}
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-6">
      {data.itens.map((item, i) => (
        <motion.div
          key={item.titulo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          data-glow={GLOWS[i % GLOWS.length]}
          className="card-glow rounded-[1.5rem] p-8 flex flex-col"
        >
          <div className="flex items-center justify-between gap-3 mb-6">
            <span
              className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.25em] uppercase border ${
                item.futuro
                  ? "border-white/20 bg-white/5 text-foreground/70"
                  : "border-primary/40 bg-primary/10 text-primary"
              }`}
            >
              {item.tag}
            </span>
          </div>

          <div className="h-16 flex items-center mb-6">
            {item.logoFundoClaro ? (
              <div className="inline-flex items-center rounded-xl bg-white px-4 py-2.5">
                <img src={item.logoSrc} alt={item.logoAlt} loading="lazy" decoding="async" className="h-7 w-auto" />
              </div>
            ) : (
              <img
                src={item.logoSrc}
                alt={item.logoAlt}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto max-w-full object-contain object-left"
              />
            )}
          </div>

          <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-tight">{item.titulo}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6">{item.descricao}</p>

          <ul className="space-y-2.5 mb-6">
            {item.pontos.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm text-foreground/85 leading-snug">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {item.link && (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener"
              className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-primary hover:text-foreground transition-colors"
            >
              {item.link.label}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);
