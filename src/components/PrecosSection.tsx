import { Check } from "lucide-react";

const fase1Items = [
  "Configuração do Agente de Disparo",
  "Configuração do Aquecedor de Chip",
  "Configuração do Agente de Pré-Atendimento",
  "Treinamento e personalização dos agentes",
  "Base de conhecimento e documentação",
];

const fase2Items = [
  "Suporte técnico dedicado",
  "Atualizações e melhorias dos agentes",
  "Monitoramento e otimização contínua",
  "Manutenção do aquecedor de chip",
  "Até 250 leads/dia por número",
];

export const PrecosSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
          Investimento
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Estrutura de Preços
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Fase 1 */}
        <div className="rounded-2xl border border-border bg-gradient-card p-6 sm:p-8 relative overflow-hidden">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Fase 1
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-1">
            Implementação
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Configuração e treinamento dos três agentes de IA para sua operação.
          </p>

          <div className="mb-6">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              R$ 5.200
            </div>
            <div className="text-xs text-muted-foreground mt-1">Investimento Único</div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Setup & Onboarding
            </div>
            <ul className="space-y-2 mb-4">
              {fase1Items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-xs text-primary bg-primary/10 rounded-lg p-3 border border-primary/20">
              + Todos os agentes prontos para uso em até 25 dias úteis.
            </div>
          </div>
        </div>

        {/* Fase 2 */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-card p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div
            className="absolute -top-16 right-0 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(256 63% 60% / 0.08) 0%, hsl(256 63% 60% / 0.04) 40%, transparent 70%)" }}
          />

          <div className="relative">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                Fase 2
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-1">
              Aceleração
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Manutenção, atualizações e suporte contínuo dos agentes de IA.
            </p>

            <div className="mb-6">
              <div className="bg-background/40 rounded-xl border border-border p-4">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                  R$ 2.000
                  <span className="text-xs sm:text-sm font-normal text-muted-foreground">/mês</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 mb-3">Mensalidade Fixa</div>
                <ul className="space-y-1.5">
                  {fase2Items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary flex-shrink-0" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* API WhatsApp - Opções Estratégicas */}
            <div className="bg-muted/30 rounded-xl border border-border p-4 mb-6">
              <div className="text-xs font-semibold text-foreground mb-3">API WhatsApp (opção estratégica):</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-background/40 rounded-lg p-3 border border-border">
                  <div className="font-semibold text-foreground mb-1">Não Oficial</div>
                  <div className="text-muted-foreground">R$ 100/mês por dispositivo</div>
                  <div className="text-xs text-muted-foreground/70 mt-1">(mais flexível, ideal para escala)</div>
                </div>
                <div className="bg-background/40 rounded-lg p-3 border border-border">
                  <div className="font-semibold text-foreground mb-1">Oficial (WABA)</div>
                  <div className="text-muted-foreground">R$ 0,04-0,30/mensagem</div>
                  <div className="text-xs text-muted-foreground/70 mt-1">(maior segurança, selo verificado)</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground/70 mt-3 italic">
                *A escolha entre API oficial ou não oficial é definida conforme o cenário e estratégia de cada cliente.
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 border border-border">
                *Todos os três agentes incluídos no mesmo investimento. Sem custos adicionais por agente.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
