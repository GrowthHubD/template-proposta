import {
  Bot,
  Send,
  MessageSquare,
  Target,
  Flame,
  Zap,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Send,
    title: "Agente de Disparo",
    desc: "Disparo automatizado de mensagens para listas de leads via WhatsApp. Opera com API oficial ou não oficial, conforme estratégia ideal para seu cenário.",
  },
  {
    icon: Flame,
    title: "Aquecedor de Chip",
    desc: "Mantém seus números saudáveis e ativos. Simula interações naturais para evitar banimentos e garantir alta entregabilidade das mensagens.",
  },
  {
    icon: MessageSquare,
    title: "Agente de Pré-Atendimento",
    desc: "IA que responde automaticamente aos leads que interagem com os disparos. Qualifica, tira dúvidas e encaminha para o time comercial no momento certo.",
  },
  {
    icon: Target,
    title: "Até 250 Leads/Dia",
    desc: "Capacidade de disparo de até 250 leads por dia por número, garantindo volume consistente sem comprometer a saúde do chip.",
  },
  {
    icon: Clock,
    title: "Operação 24/7",
    desc: "Seus agentes trabalham sem parar. Dispare, aqueça e pré-atenda leads a qualquer hora, inclusive fora do horário comercial.",
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    desc: "Acompanhe disparos realizados, taxas de resposta, leads qualificados e performance de cada agente em dashboards claros pelo Chatwoot.",
  },
  {
    icon: Zap,
    title: "API Oficial ou Não Oficial",
    desc: "Flexibilidade para operar com a API oficial do WhatsApp Business ou via conexão não oficial, de acordo com sua necessidade e estratégia.",
  },
  {
    icon: Shield,
    title: "Segurança & LGPD",
    desc: "Dados protegidos com criptografia. Conformidade com LGPD e boas práticas de privacidade em todas as interações.",
  },
  {
    icon: Bot,
    title: "Aprendizado Contínuo",
    desc: "Os agentes evoluem com cada interação, refinando abordagens e melhorando taxas de resposta e qualificação ao longo do tempo.",
  },
];

export const EcossistemaSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
          Soluções
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Três Agentes, Resultado Completo
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Disparo em escala, chip sempre saudável e pré-atendimento inteligente. Tudo automatizado para maximizar seus resultados.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
