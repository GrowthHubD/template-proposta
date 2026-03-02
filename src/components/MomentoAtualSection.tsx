import { TrendingUp, AlertTriangle } from "lucide-react";

export const MomentoAtualSection = () => {
  return (
    <section id="momento-atual" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
          Diagnóstico
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          O Momento Atual
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Transforme sua operação com inteligência artificial que trabalha 24/7.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {/* Hipercrescimento */}
        <div className="relative rounded-2xl border border-primary/20 bg-gradient-card p-8 group hover:border-primary/40 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-t-2xl" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Oportunidade
            </h3>
          </div>
          <ul className="space-y-3">
            {[
              "Demanda crescente por novos clientes e atendimento de qualidade.",
              "Necessidade de escalar vendas sem aumentar custos operacionais.",
              "Oportunidade de automatizar processos repetitivos com IA.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* O Gargalo */}
        <div className="relative rounded-2xl border border-primary/20 bg-gradient-card p-8 group hover:border-primary/40 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-t-2xl" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">
              O Desafio
            </h3>
          </div>
          <ul className="space-y-3">
            {[
              "Equipe de vendas limitada para captar novos clientes em escala.",
              "Atendimento sobrecarregado com demandas repetitivas.",
              "Dificuldade em manter qualidade e velocidade simultaneamente.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
