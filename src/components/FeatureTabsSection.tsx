import { Check, Zap, Target, Headphones, MessageSquare, Bot, User } from "lucide-react";

const tabs = [
  {
    label: "Agente de Captação",
    title: "Prospecção Inteligente 24/7",
    desc: "IA especializada em identificar oportunidades, qualificar leads e agendar reuniões. Trabalha continuamente para aumentar seu pipeline de vendas sem custos adicionais de equipe.",
    items: [
      "Qualificação automática de leads",
      "Início de conversas proativas",
      "Agendamento inteligente de reuniões",
      "Integração com CRM e ferramentas de vendas",
    ],
    mockup: (
      <div className="bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#161616] rounded-2xl border border-primary/30 shadow-2xl overflow-hidden relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-primary/20 bg-[#1f1f1f]/80 backdrop-blur-sm relative z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] sm:text-xs text-[#F4F4F4] font-mono font-semibold">agente_captacao</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-primary/20 rounded">
            <Target className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-[#161616] to-[#141414] relative z-10">
          {/* Conversation Mockup - WhatsApp Style */}
          <div className="space-y-2">
            {/* Typing indicator before first message */}
            <div className="flex items-start gap-2 animate-typing-indicator" style={{ animationDelay: '0s' }}>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-center gap-1 bg-[#2a2a2a] rounded-full px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-typing-dot" style={{ animationDelay: '0s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-typing-dot" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-typing-dot" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            {/* First message - AI */}
            <div className="flex items-start gap-2 animate-message" style={{ animationDelay: '1.2s' }}>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="max-w-[75%]">
                <div className="bg-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-[#F4F4F4] leading-relaxed">Olá! Vi que você demonstrou interesse em nossa solução. Posso ajudar com algumas informações?</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block ml-2">10:23</span>
              </div>
            </div>
            
            {/* Typing indicator before second message */}
            <div className="flex items-start gap-2 justify-end animate-typing-indicator" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-1 bg-[#2a2a2a] rounded-full px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4F4F4]/60 animate-typing-dot" style={{ animationDelay: '0s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4F4F4]/60 animate-typing-dot" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4F4F4]/60 animate-typing-dot" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7758DB]/30 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-[#7758DB]" />
              </div>
            </div>
            
            {/* Second message - User */}
            <div className="flex items-start gap-2 justify-end animate-message" style={{ animationDelay: '4.2s' }}>
              <div className="max-w-[75%]">
                <div className="bg-[#7758DB] rounded-2xl rounded-br-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-white">Sim, gostaria de saber mais sobre preços</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block text-right mr-2">10:24</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7758DB]/30 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-[#7758DB]" />
              </div>
            </div>
            
            {/* Typing indicator before third message */}
            <div className="flex items-start gap-2 animate-typing-indicator" style={{ animationDelay: '6s' }}>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-center gap-1 bg-[#2a2a2a] rounded-full px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-typing-dot" style={{ animationDelay: '0s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-typing-dot" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-typing-dot" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            {/* Third message - AI */}
            <div className="flex items-start gap-2 animate-message" style={{ animationDelay: '7.2s' }}>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="max-w-[75%]">
                <div className="bg-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-[#F4F4F4] leading-relaxed">Perfeito! Vou agendar uma reunião com nosso time. Qual horário funciona melhor?</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block ml-2">10:25</span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-primary/20">
            <div className="text-center bg-primary/10 rounded-lg p-2 sm:p-3 border border-primary/20">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">24</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Leads hoje</div>
            </div>
            <div className="text-center bg-primary/10 rounded-lg p-2 sm:p-3 border border-primary/20">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">8</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Reuniões</div>
            </div>
            <div className="text-center bg-primary/10 rounded-lg p-2 sm:p-3 border border-primary/20">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">33%</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Taxa conversão</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Agente de Atendimento",
    title: "Atendimento Inteligente 24/7",
    desc: "IA que resolve dúvidas, fornece informações e oferece suporte contínuo. Atende múltiplos clientes simultaneamente mantendo qualidade e agilidade em cada interação.",
    items: [
      "Respostas instantâneas a qualquer hora",
      "Atendimento simultâneo a múltiplos clientes",
      "Integração com base de conhecimento",
      "Escalação inteligente quando necessário",
    ],
    mockup: (
      <div className="bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#161616] rounded-2xl border border-primary/30 shadow-2xl overflow-hidden relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-primary/20 bg-[#1f1f1f]/80 backdrop-blur-sm relative z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] sm:text-xs text-[#F4F4F4] font-mono font-semibold">agente_atendimento</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-primary/20 rounded">
            <Headphones className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-[#161616] to-[#141414] relative z-10">
          {/* WhatsApp Style Chat Preview */}
          <div className="space-y-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs text-[#F4F4F4]/70 font-semibold uppercase tracking-wide">Conversas ativas</span>
              <div className="flex items-center gap-1.5 bg-primary/20 px-2.5 py-1 rounded-full border border-primary/30">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs text-primary font-bold">12</span>
              </div>
            </div>

            {/* Sample conversation */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Headphones className="w-4 h-4 text-primary" />
              </div>
              <div className="max-w-[75%]">
                <div className="bg-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-[#F4F4F4]">Olá! Como posso ajudar você hoje?</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block ml-2">09:15</span>
              </div>
            </div>

            <div className="flex items-start gap-2 justify-end">
              <div className="max-w-[75%]">
                <div className="bg-[#7758DB] rounded-2xl rounded-br-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-white">Preciso de ajuda com meu pedido</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block text-right mr-2">09:16</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7758DB]/30 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-[#7758DB]" />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Headphones className="w-4 h-4 text-primary" />
              </div>
              <div className="max-w-[75%]">
                <div className="bg-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-[#F4F4F4]">Claro! Vou verificar isso para você agora.</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block ml-2">09:16</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-primary/20">
            <div className="bg-primary/15 rounded-xl p-3 sm:p-4 border border-primary/30 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Satisfação</div>
            </div>
            <div className="bg-primary/15 rounded-xl p-3 sm:p-4 border border-primary/30 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">1.2s</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Tempo médio</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const FeatureTabsSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-12 sm:space-y-16">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className={i % 2 === 1 ? "md:order-2" : ""}>
            <div className="flex items-center gap-2 mb-3">
              {i === 0 && (
                <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
                  <Target className="w-2.5 h-2.5 text-white" />
                </div>
              )}
              {i === 1 && (
                <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
                  <Headphones className="w-2.5 h-2.5 text-white" />
                </div>
              )}
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
                {tab.label}
              </p>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {tab.title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              {tab.desc}
            </p>
            <ul className="space-y-2">
              {tab.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={i % 2 === 1 ? "md:order-1" : ""}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-60"
                style={{ background: "var(--gradient-glow)", filter: "blur(50px)" }}
              />
              <div className="relative rounded-2xl overflow-hidden">
                {tab.mockup}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
