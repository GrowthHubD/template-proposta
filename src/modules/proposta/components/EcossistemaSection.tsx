import { motion } from "framer-motion";
import type { EcossistemaData } from "../types";

interface Props {
  data: EcossistemaData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const EcossistemaSection = ({ data }: Props) => {
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.pilares.map((pilar, i) => {
          const Icon = pilar.icone;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative rounded-[1.5rem] glass p-8 hover:bg-white/[0.08] transition-all duration-500 hover:shadow-premium"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-tight">
                {pilar.titulo}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light group-hover:text-foreground/80 transition-colors">
                {pilar.descricao}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
