import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Onboarding & Análise",
    description: "Mapeamento de processos, definição de listas de leads e personalização dos agentes.",
  },
  {
    step: 2,
    title: "Configuração dos Agentes",
    description: "Setup do disparo, aquecedor de chip e pré-atendimento. Integração com WhatsApp.",
  },
  {
    step: 3,
    title: "Testes & Validação",
    description: "Testes com disparos reais, validação do aquecimento e ajustes no pré-atendimento.",
  },
  {
    step: 4,
    title: "Go Live & Monitoramento",
    description: "Ativação dos três agentes e acompanhamento contínuo de performance.",
  },
];

export const JornadaSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
          Processo
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Jornada de <span className="text-primary">Implementação</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Um caminho claro e validado — tudo pronto em até 25 dias úteis.
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-0">
          {steps.map(({ step, title, description }, index) => (
            <div
              key={step}
              className={`
                relative flex-1 flex flex-col items-center text-center p-4 sm:p-6 md:p-8
                bg-gradient-card border border-border
                ${index === 0 ? 'rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none' : ''}
                ${index === steps.length - 1 ? 'rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none' : ''}
                ${index > 0 && index < steps.length - 1 ? 'rounded-none' : ''}
                ${index > 0 ? 'md:border-l-0 border-t md:border-t-0' : ''}
                ${index < steps.length - 1 ? 'md:border-r-primary/30' : ''}
                hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all
                group
              `}
            >
              <Stepper defaultValue={0} orientation="horizontal" className="w-full">
                <StepperItem step={step} className="flex-col items-center text-center w-full">
                  <StepperTrigger className="flex-col items-center text-center w-full cursor-default">
                    <StepperIndicator className="size-12 sm:size-16 md:size-20 text-lg sm:text-xl md:text-2xl font-heading font-bold border-2 border-primary/40 bg-primary/10 data-[state=active]:border-primary/60 data-[state=active]:bg-primary/20 data-[state=completed]:border-primary data-[state=completed]:bg-primary/20 data-[state=active]:animate-pulse-glow mb-3 sm:mb-4" />
                    <div className="text-center">
                      <StepperTitle className="text-sm sm:text-base md:text-lg font-heading font-semibold text-foreground mb-2">
                        {title}
                      </StepperTitle>
                      <StepperDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                </StepperItem>
              </Stepper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
