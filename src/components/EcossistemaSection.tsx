import {
  Bot,
  Users,
  MessageSquare,
  Target,
  Headphones,
  Zap,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Agente de Captação",
    desc: "IA especializada em prospecção e qualificação de leads. Identifica oportunidades, inicia conversas e agenda reuniões automaticamente.",
  },
  {
    icon: Headphones,
    title: "Agente de Atendimento",
    desc: "IA que resolve dúvidas, fornece informações e oferece suporte 24/7. Atende múltiplos clientes simultaneamente com qualidade consistente.",
  },
  {
    icon: Users,
    title: "Qualificação Inteligente",
    desc: "Análise automática de perfil do cliente, identificação de necessidades e encaminhamento para o time certo no momento ideal.",
  },
  {
    icon: MessageSquare,
    title: "Conversas Naturais",
    desc: "Interações humanizadas via WhatsApp, chat ou telefone. Os agentes entendem contexto e mantêm conversas fluidas e profissionais.",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    desc: "Seus agentes trabalham sem parar. Capte leads e atenda clientes a qualquer hora, sem custos de horas extras ou folgas.",
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    desc: "Dashboards com performance de cada agente: leads captados, conversões, tempo de resposta e satisfação do cliente.",
  },
  {
    icon: Zap,
    title: "Integração Completa",
    desc: "Conecta com seu CRM, WhatsApp Business, sistema de vendas e outras ferramentas. Tudo sincronizado automaticamente.",
  },
  {
    icon: Shield,
    title: "Segurança & Privacidade",
    desc: "Dados protegidos com criptografia. Conformidade com LGPD e protocolos de segurança para garantir a integridade das informações.",
  },
  {
    icon: Bot,
    title: "Aprendizado Contínuo",
    desc: "Os agentes melhoram com o tempo. Aprendem com cada interação para oferecer respostas cada vez mais precisas e eficientes.",
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
          Dois Agentes, Resultados Infinitos
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Solução completa de IA para captar clientes e atender com excelência. Automatize vendas e suporte simultaneamente.
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
