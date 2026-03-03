import { Check, Send, Flame, MessageSquare, Bot, User } from "lucide-react";

const tabs = [
  {
    label: "Agente de Disparo",
    icon: Send,
    title: "Disparo Inteligente em Escala",
    desc: "Envio automatizado de mensagens para listas de leads via WhatsApp. Opera com API oficial ou não oficial conforme a melhor estratégia para o seu cenário. Capacidade de até 250 leads/dia por número.",
    items: [
      "Disparo para listas segmentadas de leads",
      "API oficial ou não oficial (escolha estratégica)",
      "Até 250 leads/dia por número",
      "Personalização de mensagens por segmento",
    ],
    mockup: (
      <div className="bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#161616] rounded-2xl border border-primary/30 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-primary/20 bg-[#1f1f1f]/80 backdrop-blur-sm relative z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] sm:text-xs text-[#F4F4F4] font-mono font-semibold">agente_disparo</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-primary/20 rounded">
            <Send className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
          </div>
        </div>

        <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-[#161616] to-[#141414] relative z-10">
          <div className="space-y-2">
            <div className="flex items-start gap-2 animate-message" style={{ animationDelay: '0.5s' }}>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="max-w-[75%]">
                <div className="bg-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-[#F4F4F4] leading-relaxed">Olá! Temos uma condição especial para você este mês. Posso te contar mais?</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block ml-2">10:15</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2 justify-end animate-message" style={{ animationDelay: '2s' }}>
              <div className="max-w-[75%]">
                <div className="bg-[#7758DB] rounded-2xl rounded-br-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-white">Opa, me conta!</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block text-right mr-2">10:16</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7758DB]/30 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-[#7758DB]" />
              </div>
            </div>

            <div className="flex items-start gap-2 animate-message" style={{ animationDelay: '3.5s' }}>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="max-w-[75%]">
                <div className="bg-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-[#F4F4F4] leading-relaxed">Ótimo! Vou te encaminhar para nosso especialista. Qual melhor horário?</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block ml-2">10:16</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-primary/20">
            <div className="text-center bg-primary/10 rounded-lg p-2 sm:p-3 border border-primary/20">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">250</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Leads/dia</div>
            </div>
            <div className="text-center bg-primary/10 rounded-lg p-2 sm:p-3 border border-primary/20">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">72%</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Entrega</div>
            </div>
            <div className="text-center bg-primary/10 rounded-lg p-2 sm:p-3 border border-primary/20">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">18%</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Resposta</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Aquecedor de Chip",
    icon: Flame,
    title: "Chip Sempre Saudável",
    desc: "Sistema inteligente que simula interações naturais no WhatsApp, mantendo seus números ativos e com boa reputação. Evita banimentos e garante alta entregabilidade nos disparos.",
    items: [
      "Simulação de conversas naturais",
      "Manutenção da saúde do número",
      "Prevenção contra banimentos",
      "Monitoramento contínuo de status",
    ],
    mockup: (
      <div className="bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#161616] rounded-2xl border border-primary/30 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-primary/20 bg-[#1f1f1f]/80 backdrop-blur-sm relative z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] sm:text-xs text-[#F4F4F4] font-mono font-semibold">aquecedor_chip</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-primary/20 rounded">
            <Flame className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
          </div>
        </div>

        <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-[#161616] to-[#141414] relative z-10">
          {/* Chip Status Dashboard */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs text-[#F4F4F4]/70 font-semibold uppercase tracking-wide">Status dos Chips</span>
              <div className="flex items-center gap-1.5 bg-green-500/20 px-2.5 py-1 rounded-full border border-green-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-green-400 font-bold">Saudável</span>
              </div>
            </div>

            {[
              { num: "+55 11 9****-1234", status: "Ativo", temp: "98%", color: "text-green-400" },
              { num: "+55 11 9****-5678", status: "Aquecendo", temp: "74%", color: "text-yellow-400" },
              { num: "+55 21 9****-9012", status: "Ativo", temp: "95%", color: "text-green-400" },
            ].map((chip, i) => (
              <div key={i} className="bg-[#2a2a2a]/60 rounded-xl p-3 border border-primary/10 flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#F4F4F4] font-mono">{chip.num}</div>
                  <div className={`text-xs ${chip.color} font-medium`}>{chip.status}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{chip.temp}</div>
                  <div className="text-[10px] text-[#F4F4F4]/50">Saúde</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-primary/20">
            <div className="bg-primary/15 rounded-xl p-3 sm:p-4 border border-primary/30 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">0</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Banimentos</div>
            </div>
            <div className="bg-primary/15 rounded-xl p-3 sm:p-4 border border-primary/30 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">99%</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Agente de Pré-Atendimento",
    icon: MessageSquare,
    title: "Pré-Atendimento Automatizado",
    desc: "IA que responde automaticamente aos leads que interagem com os disparos. Qualifica, tira dúvidas iniciais e encaminha os leads prontos para o time comercial no momento ideal.",
    items: [
      "Resposta automática aos leads que interagem",
      "Qualificação inteligente antes do contato humano",
      "Encaminhamento para o time comercial",
      "Disponibilidade 24/7 sem custo de equipe",
    ],
    mockup: (
      <div className="bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#161616] rounded-2xl border border-primary/30 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-primary/20 bg-[#1f1f1f]/80 backdrop-blur-sm relative z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] sm:text-xs text-[#F4F4F4] font-mono font-semibold">pre_atendimento</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-primary/20 rounded">
            <MessageSquare className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
          </div>
        </div>

        <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-[#161616] to-[#141414] relative z-10">
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs text-[#F4F4F4]/70 font-semibold uppercase tracking-wide">Pré-atendimento ativo</span>
              <div className="flex items-center gap-1.5 bg-primary/20 px-2.5 py-1 rounded-full border border-primary/30">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs text-primary font-bold">8</span>
              </div>
            </div>

            <div className="flex items-start gap-2 justify-end">
              <div className="max-w-[75%]">
                <div className="bg-[#7758DB] rounded-2xl rounded-br-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-white">Quero saber mais sobre o serviço</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block text-right mr-2">14:32</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7758DB]/30 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-[#7758DB]" />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="max-w-[75%]">
                <div className="bg-primary/20 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-[#F4F4F4]">Claro! Antes de te conectar com nosso especialista, posso te fazer algumas perguntas rápidas?</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block ml-2">14:32</span>
              </div>
            </div>

            <div className="flex items-start gap-2 justify-end">
              <div className="max-w-[75%]">
                <div className="bg-[#7758DB] rounded-2xl rounded-br-sm px-4 py-2.5 shadow-md">
                  <p className="text-sm text-white">Pode sim!</p>
                </div>
                <span className="text-xs text-[#F4F4F4]/40 mt-1 block text-right mr-2">14:33</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7758DB]/30 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-[#7758DB]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-primary/20">
            <div className="bg-primary/15 rounded-xl p-3 sm:p-4 border border-primary/30 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">94%</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Qualificados</div>
            </div>
            <div className="bg-primary/15 rounded-xl p-3 sm:p-4 border border-primary/30 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-primary mb-1">&lt;30s</div>
              <div className="text-[10px] sm:text-xs text-[#F4F4F4]/70 font-medium">Tempo resposta</div>
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
              <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
                <tab.icon className="w-2.5 h-2.5 text-white" />
              </div>
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
