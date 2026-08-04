import {
  Target,
  Lightbulb,
  FileText,
  HelpCircle,
  TrendingUp,
  BarChart3,
  Link2,
  ArrowRight,
  Clock,
  GraduationCap,
  Video,
  Wrench,
} from "lucide-react";
import logo from "@/assets/logo-growthhub.png";
import type { PropostaConfig } from "../types";

/**
 * FONTE ÚNICA DE CONTEÚDO DA PROPOSTA.
 *
 * Proposta comercial: Rainoah (contato Julio), 4 agentes de IA para o comercial.
 * Conteúdo migrado de uma proposta de referência já existente, mantendo os
 * entregáveis e adaptando à identidade visual padrão do template (Method GrowthHub).
 */

const DocMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Registro automático
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 items-stretch">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-center">
        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 mb-2">Call recebida</p>
        <p className="text-xs text-foreground/70 leading-relaxed">
          &quot;Distribuidora Sul pediu desconto pra pedido grande da linha Reflex, falou que fecha até sexta&quot;
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ArrowRight className="w-5 h-5 text-primary/60" />
      </div>
    </div>
    <div className="mt-4 rounded-xl bg-primary/10 border border-primary/30 p-4">
      <p className="text-[9px] uppercase tracking-widest text-primary mb-2">Registro estruturado</p>
      <div className="space-y-1.5 text-[11px] text-foreground/85">
        <p><span className="text-muted-foreground">Conta:</span> Distribuidora Sul</p>
        <p><span className="text-muted-foreground">Interesse:</span> Linha Reflex, pedido grande</p>
        <p><span className="text-muted-foreground">Próximo passo:</span> Enviar tabela de desconto até 6ª</p>
      </div>
    </div>
  </div>
);

const AuxilioMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Copiloto Rainoah
      </p>
    </div>
    <div className="space-y-3">
      <div className="rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 p-3 max-w-[85%]">
        <p className="text-xs text-foreground/75">Qual a diferença entre a Reflex e a Bota Trekking pro lojista?</p>
      </div>
      <div className="rounded-2xl rounded-tr-sm bg-primary/10 border border-primary/30 p-3 max-w-[90%] ml-auto">
        <p className="text-xs text-foreground/90 leading-relaxed">
          Reflex é eletroestimulador, indicado pra dor localizada. Bota Trekking é compressão pra pernas cansadas.
          Faixa de desconto pra lojista: até 12% em pedido fechado.
        </p>
      </div>
    </div>
  </div>
);

const ScoreMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <TrendingUp className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Score de negociação
      </p>
    </div>
    <div className="space-y-3">
      {[
        { conta: "Distribuidora Sul", nota: "92", status: "Quente", cor: "text-primary" },
        { conta: "Ortopedia Center", nota: "68", status: "Andamento", cor: "text-foreground/70" },
        { conta: "Loja Vitta", nota: "24", status: "Risco", cor: "text-destructive/80" },
      ].map((linha) => (
        <div key={linha.conta} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-2.5">
          <span className="text-xs text-foreground/80">{linha.conta}</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-foreground">{linha.nota}</span>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${linha.cor}`}>{linha.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RelatorioMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <BarChart3 className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Resumo de hoje
      </p>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
        <p className="text-lg font-bold text-foreground">14</p>
        <p className="text-[8px] uppercase tracking-widest text-muted-foreground mt-1">Avançaram</p>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
        <p className="text-lg font-bold text-foreground">5</p>
        <p className="text-[8px] uppercase tracking-widest text-muted-foreground mt-1">Travaram</p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-3 text-center">
        <p className="text-lg font-bold text-primary">3</p>
        <p className="text-[8px] uppercase tracking-widest text-primary/80 mt-1">Críticas</p>
      </div>
    </div>
    <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
      <Clock className="w-3 h-3" />
      <span>Enviado às 8h todo dia</span>
    </div>
  </div>
);

const TreinamentoMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <GraduationCap className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Agenda de treinamento
      </p>
    </div>
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/85">Treinamento 01 · Sistema</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Semana 5</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Painel de gestão, score de negociação e relatório gerencial
        </p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/90">Treinamento 02 · Agentes de IA</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Pós entrega</span>
        </div>
        <p className="text-[11px] text-foreground/80 leading-relaxed">
          Como usar o copiloto comercial e o painel de gestão no dia a dia
        </p>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
      <Video className="w-3 h-3" />
      <span>Sessões gravadas pro time rever</span>
    </div>
  </div>
);

const ManutencaoMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <Wrench className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Changelog do mês
      </p>
    </div>
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/85">Feedback do vendedor</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Aplicado</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Ajuste no argumento de desconto pra linha Reflex
        </p>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/85">Performance do banco de dados</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Otimizado</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Consulta de histórico mais rápida pro copiloto responder na hora
        </p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/90">Integração CRM</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Atualizada</span>
        </div>
        <p className="text-[11px] text-foreground/80 leading-relaxed">
          API sincronizada com a versão mais recente, sem parar o sistema
        </p>
      </div>
    </div>
  </div>
);

export const proposta: PropostaConfig = {
  hero: {
    badge: "PROPOSTA COMERCIAL · JULIO · RAINOAH",
    titulo: "Visibilidade, controle e recompra",
    tituloDestaque: "para o comercial da Rainoah",
    subtitulo:
      "Uma rede de distribuidores em todo o Brasil gera muita conversa e pouco registro. Quatro agentes de IA cuidam do resto.",
    logoSrc: logo,
    logoAlt: "GrowthHub",
    ctaLabel: "Ver como funciona",
    scrollTargetId: "momento-atual",
  },

  marquee: {
    items: [
      "4 AGENTES DE IA",
      "REGISTRO AUTOMÁTICO",
      "COPILOTO DE VENDAS",
      "SCORE DE NEGOCIAÇÃO",
      "RELATÓRIO DIÁRIO",
      "TUDO NO CRM ATUAL",
    ],
  },

  momentoAtual: {
    eyebrow: "O CENÁRIO HOJE",
    titulo: "Trinta anos de produto resolvido, comercial que não escala",
    subtitulo:
      "A Rainoah tem parque fabril e linha completa de massageadores. A rede de distribuidores no Brasil inteiro ainda depende de WhatsApp e memória.",
    desafio: {
      titulo: "Como é hoje",
      icone: Target,
      items: [
        "O que foi falado se perde: histórico de call e negociação vive só no WhatsApp e na cabeça do vendedor.",
        "O vendedor responde sozinho: dúvida de voltagem, modelo ou prazo vira consulta interna que trava a negociação.",
        "Ninguém sabe como está cada negócio: sem critério objetivo, negociação parada parece igual a negociação quente.",
      ],
    },
    solucao: {
      titulo: "Como passa a ser",
      icone: Lightbulb,
      items: [
        "Cada interação vira resumo automático, com dores, objeções e próximo passo já registrados.",
        "O agente de auxílio comercial responde na hora, com o argumento que já funcionou antes.",
        "Cada negociação recebe uma nota de 0 a 100. A gestão age enquanto o negócio ainda existe.",
      ],
    },
  },

  ecossistema: {
    eyebrow: "OS QUATRO AGENTES",
    titulo: "Um agente pra cada etapa do comercial",
    subtitulo:
      "Todos operam sobre o CRM que a Rainoah já usa. Nenhum sistema novo para o time aprender.",
    pilares: [
      {
        icone: FileText,
        titulo: "Documentação automática",
        descricao: "Transforma cada interação em resumo com dores, objeções e próximo passo.",
      },
      {
        icone: HelpCircle,
        titulo: "Auxílio comercial",
        descricao: "Responde dúvidas de produto e política e sugere argumento de venda na hora.",
      },
      {
        icone: TrendingUp,
        titulo: "Score de negociação",
        descricao: "Nota de 0 a 100 por negociação, considerando etapas, tempo e qualidade do registro.",
      },
      {
        icone: BarChart3,
        titulo: "Relatório gerencial",
        descricao: "Resumo diário do que avançou, travou e precisa de decisão, sem cobrar planilha de ninguém.",
      },
      {
        icone: Link2,
        titulo: "Fundação única",
        descricao: "Tudo roda integrado ao CRM que a Rainoah já usa, sem sistema novo pra aprender.",
      },
    ],
  },

  featureTabs: {
    tabs: [
      {
        label: "DOCUMENTAÇÃO",
        icone: FileText,
        titulo: "Documentação automática pra SDRs",
        descricao:
          "Cada call, cada conversa de lojista e cada negociação de marca própria vira registro, sem depender da memória do vendedor.",
        itens: [
          "Resumo objetivo com dores, objeções e próximo passo",
          "Preenche automaticamente perfil, região e interesse do lead",
          "Gera follow-up sugerido já escrito, no tom da Rainoah",
          "Mantém histórico contínuo por conta",
        ],
        mockup: <DocMockup />,
      },
      {
        label: "AUXÍLIO COMERCIAL",
        icone: HelpCircle,
        titulo: "Um copiloto pra cada vendedor",
        descricao:
          "Vendedor novo produz como vendedor antigo, em semanas e não em meses. O agente responde antes que a dúvida trave a negociação.",
        itens: [
          "Responde dúvidas de produto, voltagem, modelo e garantia",
          "Consulta a política comercial: faixas de desconto e condições",
          "Sugere argumento de quebra de objeção com base no que já funcionou",
          "Monta rascunho de proposta e mensagem",
        ],
        mockup: <AuxilioMockup />,
      },
      {
        label: "SCORE DE PROCESSO",
        icone: TrendingUp,
        titulo: "Uma nota pra cada negociação",
        descricao:
          "A gestão passa a agir sobre a negociação enquanto ela ainda existe, não depois que o cliente já sumiu.",
        itens: [
          "Nota de 0 a 100 considerando etapas, tempo de resposta e qualidade do registro",
          "Aponta etapas puladas: qualificação incompleta, proposta sem diagnóstico",
          "Sinaliza risco de perda antes do cliente sumir",
          "Painel de gestão com nota média e ranking por vendedor e região",
        ],
        mockup: <ScoreMockup />,
      },
      {
        label: "RELATÓRIO GERENCIAL",
        icone: BarChart3,
        titulo: "Gestão comercial em cinco minutos por dia",
        descricao:
          "Resumo diário do que avançou, do que travou e do que precisa de decisão hoje, sem cobrar planilha de ninguém.",
        itens: [
          "Resumo diário: o que avançou, o que travou e o que precisa de decisão",
          "Destaque das três contas mais críticas do dia",
          "Fechamento semanal com evolução de nota e desempenho",
          "Alerta imediato para contas grandes em risco",
        ],
        mockup: <RelatorioMockup />,
      },
      {
        label: "TREINAMENTO",
        icone: GraduationCap,
        titulo: "Dois treinamentos pra destravar o time",
        descricao:
          "Depois da ativação, o time comercial recebe dois treinamentos ao vivo: um pra dominar o sistema, outro pra tirar o máximo dos quatro agentes no dia a dia.",
        itens: [
          "Treinamento 1: uso do sistema e do painel de gestão",
          "Treinamento 2: como tirar o máximo de cada agente",
          "Sessões gravadas, disponíveis pro time rever quando quiser",
          "Espaço aberto pra dúvidas depois da virada de chave",
        ],
        mockup: <TreinamentoMockup />,
      },
      {
        label: "MANUTENÇÃO",
        icone: Wrench,
        titulo: "Manutenção pensada pra evoluir, não só sustentar",
        descricao:
          "Todo mês o sistema fica mais rápido e mais afiado. Melhoria entra a partir do feedback real do time comercial, não só quando algo quebra.",
        itens: [
          "Melhoria contínua com base no feedback direto dos vendedores",
          "Otimização de velocidade de resposta e do banco de dados",
          "Atualização de APIs e integrações sempre que a Rainoah mudar de ferramenta",
          "Pequenas melhorias e novas funcionalidades dentro do escopo já acordado",
        ],
        mockup: <ManutencaoMockup />,
      },
    ],
  },

  jornada: {
    eyebrow: "IMPLEMENTAÇÃO EM 5 SEMANAS",
    titulo: "Cada semana entrega algo",
    tituloDestaque: "funcionando e validado pelo time",
    subtitulo:
      "Sem grande virada de chave no fim. Só entrega validada, semana após semana.",
    etapas: [
      {
        numero: 1,
        titulo: "Imersão",
        descricao:
          "Duas sessões pra mapear o funil comercial real, levantamento técnico do CRM e canal de atendimento, e critérios da nota definidos.",
      },
      {
        numero: 2,
        titulo: "Fundação",
        descricao:
          "Base de conhecimento treinada em catálogo, política comercial e argumentos, com integração completa ao CRM que a Rainoah já usa.",
      },
      {
        numero: 3,
        titulo: "Piloto",
        descricao:
          "Documentação automática e auxílio comercial liberados pra um grupo piloto de vendedores, com ajustes a partir do uso real.",
      },
      {
        numero: 4,
        titulo: "Painel completo",
        descricao:
          "Score de negociação e relatório gerencial diário entram em operação, com painel de gestão liberado.",
      },
      {
        numero: 5,
        titulo: "Ativação",
        descricao:
          "Treinamento ao vivo com o time comercial, liberação dos quatro agentes pra operação inteira e acompanhamento diário na primeira semana.",
      },
    ],
  },

  investimento: {
    eyebrow: "O CUSTO DE NÃO TER",
    titulo: "Antes e depois dos quatro agentes",
    subtitulo:
      "O comercial da Rainoah antes de ter registro, copiloto e controle automatizados, e depois.",
    cenarioAtual: {
      titulo: "Cenário Atual",
      label: "HOJE",
      destaque: "Comercial na memória do vendedor",
      subtitulo: "Sem registro, sem critério",
      items: [
        "Histórico de negociação vive só no WhatsApp e na cabeça do vendedor",
        "Cada dúvida de produto vira consulta interna que trava a venda",
        "Negociação parada parece igual a negociação quente, sem critério objetivo",
      ],
    },
    cenarioFuturo: {
      titulo: "Cenário Rainoah",
      label: "COM OS 4 AGENTES",
      destaque: "Comercial com visibilidade total",
      subtitulo: "Registro, copiloto e controle automatizados",
      items: [
        "Cada interação registrada automaticamente, com próximo passo já definido",
        "Copiloto comercial responde dúvidas de produto e política na hora",
        "Nota de 0 a 100 por negociação, direto no painel de gestão",
        "Relatório gerencial pronto todo dia, sem cobrar planilha de ninguém",
      ],
    },
  },

  precos: {
    eyebrow: "INVESTIMENTO",
    titulo: "Estrutura comercial",
    planos: [
      {
        eyebrow: "IMPLEMENTAÇÃO",
        nome: "Setup dos Quatro Agentes",
        descricao:
          "Mapeamento do processo, construção dos quatro agentes e ativação assistida, em 5 semanas.",
        valor: "R$ 6.997",
        periodo: "pagamento único",
        rotuloValor: "implementação completa",
        itens: [
          "Mapeamento do processo comercial e construção dos quatro agentes",
          "Base de conhecimento treinada em catálogo, política e argumentos",
          "Integração completa com o CRM que a Rainoah já usa",
          "Painel de gestão com nota por negociação e ranking",
          "2 treinamentos comerciais ao vivo: uso do sistema e uso dos agentes",
          "Ativação assistida com acompanhamento diário na primeira semana",
        ],
        observacao:
          "Requer acesso ao CRM, catálogo atualizado, política comercial vigente e cerca de 2h do time comercial nas duas primeiras semanas.",
      },
      {
        eyebrow: "MANUTENÇÃO",
        nome: "Manutenção Mensal",
        descricao:
          "Tudo que mantém os quatro agentes rodando, evoluindo e sempre atualizados.",
        valor: "R$ 1.799",
        periodo: "/mês",
        rotuloValor: "mensalidade fixa",
        destaque: true,
        itens: [
          "Monitoramento e correção de falhas dos quatro agentes",
          "Atualização de APIs e integrações, incluindo CRM e canal de atendimento",
          "Melhoria contínua dos agentes com base no feedback direto dos vendedores",
          "Otimização de velocidade de resposta e do banco de dados",
          "Atualização da base com produtos, políticas e argumentos novos",
          "Pequenas melhorias e novas funcionalidades dentro do escopo já acordado",
          "Canal direto pra dúvidas e demandas, com relatório mensal de uso e desempenho",
        ],
        observacao:
          "Cobre manutenção e evolução dentro do escopo entregue. Funcionalidades fora do escopo original são orçadas à parte.",
      },
    ],
  },

  cta: {
    eyebrow: "PRÓXIMO PASSO",
    titulo: "Bora tirar o comercial",
    tituloDestaque: "da cabeça do vendedor?",
    descricao:
      "Proposta com validade de 15 dias. Qualquer ponto do escopo pode ser ajustado antes da assinatura, é só chamar que a gente alinha.",
    botaoLabel: "Falar no WhatsApp",
    botaoLink:
      "https://wa.me/554991663853?text=Ol%C3%A1!%20Quero%20falar%20sobre%20a%20proposta%20da%20Rainoah.",
  },

  footer: {
    logoSrc: logo,
    siteUrl: "https://methodgrowthhub.com.br",
    siteLabel: "methodgrowthhub.com.br",
    nota: "Desenvolvido por Method Growth Hub · Tecnologia e automação sob medida para operações comerciais.",
  },
};
