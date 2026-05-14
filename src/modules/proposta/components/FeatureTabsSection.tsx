import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { FeatureTabsData, FeatureTab } from "../types";

interface Props {
  data: FeatureTabsData;
}

const FeatureMockupFallback = ({ tab }: { tab: FeatureTab }) => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-12 min-h-[320px] flex flex-col items-center justify-center text-center">
    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
      <tab.icone className="w-8 h-8 text-primary" />
    </div>
    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary/70 mb-3">
      Mockup
    </p>
    <p className="text-sm text-muted-foreground font-light max-w-xs">
      Adicione um mockup customizado em <code className="text-primary">data.featureTabs.tabs[].mockup</code>.
    </p>
  </div>
);

export const FeatureTabsSection = ({ data }: Props) => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto space-y-32 sm:space-y-48">
      {data.tabs.map((tab, i) => {
        const Icon = tab.icone;
        return (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 sm:gap-24 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={i % 2 === 1 ? "md:order-2" : ""}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center border border-primary/30">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary/80">
                  {tab.label}
                </p>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
                {tab.titulo}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 font-light">
                {tab.descricao}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {tab.itens.map((item, j) => (
                  <div key={j} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80 font-light group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={i % 2 === 1 ? "md:order-1" : ""}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl opacity-30"
                  style={{ background: "var(--gradient-glow)", filter: "blur(60px)" }}
                />
                <div className="relative">{tab.mockup ?? <FeatureMockupFallback tab={tab} />}</div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};
