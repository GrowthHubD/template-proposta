import { X, Check } from "lucide-react";

const currentCosts = [
  "Disparo manual consome horas da equipe.",
  "Chips banidos por falta de aquecimento.",
  "Leads sem pré-atendimento esfriam rápido.",
  "Resultados inconsistentes e difíceis de escalar.",
];

const savingsBenefits = [
  "Disparo automatizado para até 250 leads/dia.",
  "Chips sempre saudáveis e protegidos.",
  "Pré-atendimento 24/7 sem custo extra.",
  "Escalável e consistente.",
  "Resultados mensuráveis em tempo real.",
];

export const InvestimentoSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
          ROI
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Não é Custo, é <span className="text-primary">Investimento</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Substitua processos manuais e ineficientes por automação inteligente com retorno imediato.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* Custo atual */}
        <div className="rounded-2xl border border-destructive/20 bg-gradient-card p-6 sm:p-8 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground">Processo Manual</h3>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Atual</span>
          </div>
          <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1">
            Tempo + Risco
          </div>
          <div className="text-xs text-muted-foreground mb-6">Disparo manual, chips sem proteção</div>
          <ul className="space-y-2 mb-8 flex-grow">
            {currentCosts.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Com automação */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-card p-6 sm:p-8 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="relative flex flex-col flex-grow">
            <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground mb-2">Com Automação IA</h3>
            <div className="text-4xl sm:text-5xl font-heading font-bold text-gradient-green mb-1">
              R$ 2.000/mês
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Três agentes trabalhando por você,{" "}
              <span className="text-primary font-semibold">24 horas por dia</span>.
            </p>
            <ul className="space-y-2 flex-grow">
              {savingsBenefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
