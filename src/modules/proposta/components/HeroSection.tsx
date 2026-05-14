import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { HeroData } from "../types";

interface Props {
  data: HeroData;
}

export const HeroSection = ({ data }: Props) => {
  const targetId = data.scrollTargetId ?? "momento-atual";
  const scrollToContent = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 text-center px-4 max-w-5xl">
        {data.logoSrc && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <img src={data.logoSrc} alt={data.logoAlt ?? "Logo"} className="h-10 md:h-14 w-auto" />
          </motion.div>
        )}

        {data.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="glass px-6 py-2 rounded-full"
          >
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-primary/80">
              {data.badge}
            </span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {data.titulo}
            {data.tituloDestaque && (
              <>
                {" "}
                <br />
                <span className="text-gradient-primary">{data.tituloDestaque}</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitulo}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={scrollToContent}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium group-hover:text-primary transition-colors">
          {data.ctaLabel ?? "Explore"}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};
