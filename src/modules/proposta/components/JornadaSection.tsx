import { motion } from "framer-motion";
import type { JornadaData } from "../types";

interface Props {
  data: JornadaData;
}

export const JornadaSection = ({ data }: Props) => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden relative">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-24 relative z-10"
      >
        {data.eyebrow && (
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-70">
            {data.eyebrow}
          </p>
        )}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          {data.titulo}
          {data.tituloDestaque && (
            <>
              {" "}
              <span className="text-primary text-glow-primary">{data.tituloDestaque}</span>
            </>
          )}
        </h2>
        {data.subtitulo && (
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitulo}
          </p>
        )}
      </motion.div>

      <div className="relative z-10">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.etapas.map((etapa, index) => (
            <motion.div
              key={etapa.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center group glass-dark p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative z-10 w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
                <span className="text-2xl font-bold text-primary group-hover:text-glow-primary">
                  {etapa.numero}
                </span>
              </div>

              <h3 className="text-lg font-heading font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300 relative z-10">
                {etapa.titulo}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed relative z-10">
                {etapa.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
