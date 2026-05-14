import {
  Camera,
  Calculator,
  Wand2,
  Printer,
  MessageCircle,
  History,
  FileX,
  Sparkles,
  Send,
  Check,
  Mail,
  ArrowRight,
  FileText,
  User,
  MapPin,
  Ruler,
  CalendarClock,
  CreditCard,
} from "lucide-react";
import logo from "@/assets/logo-growthhub.png";
import type { PropostaConfig } from "../types";

const OcrMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Pedido #1247
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 items-stretch">
      <div className="relative">
        <div className="rounded-xl bg-[#f4ecd8] text-zinc-800 p-4 shadow-lg rotate-[-2deg] font-mono text-[10px] leading-relaxed">
          <p className="font-bold text-center border-b border-zinc-400/60 pb-1 mb-2">
            Talão DECORA
          </p>
          <p>Cliente: Maria Silva</p>
          <p>Tel: (21) 9 8765-4321</p>
          <p className="mt-1">Tela mosq. janela</p>
          <p>1,20 × 0,80 · Alum.</p>
          <p className="mt-1">Entrega: Tijuca</p>
          <p className="mt-2 text-right font-bold">Total: R$ 240</p>
        </div>
        <div className="absolute -top-2 -right-2 bg-primary/90 rounded-full px-2 py-1 text-[9px] font-bold tracking-wider uppercase text-white shadow-lg">
          Foto
        </div>
      </div>

      <div className="space-y-2">
        {[
          { icon: User, label: "Cliente", value: "Maria Silva" },
          { icon: MapPin, label: "Bairro", value: "Tijuca" },
          { icon: Ruler, label: "Medidas", value: "1,20 × 0,80 m" },
          { icon: Calculator, label: "Total", value: "R$ 240,00" },
        ].map((row, i) => {
          const Icon = row.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2"
            >
              <div className="w-6 h-6 rounded-md bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[8px] uppercase tracking-wider text-muted-foreground/70">
                  {row.label}
                </p>
                <p className="text-xs font-semibold text-foreground truncate">
                  {row.value}
                </p>
              </div>
              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            </div>
          );
        })}
      </div>
    </div>

    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
      <Sparkles className="w-3 h-3" />
      <span>Estruturado em 2 segundos</span>
    </div>
  </div>
);

const SimulacaoIaMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center justify-between mb-6">
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Simulação Visual
      </p>
      <div className="flex items-center gap-1.5 bg-primary/15 border border-primary/30 rounded-full px-2.5 py-1">
        <Sparkles className="w-3 h-3 text-primary" />
        <span className="text-[9px] font-bold tracking-wider uppercase text-primary">
          Gerado por IA
        </span>
      </div>
    </div>

    <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70 text-center">
          Foto do cliente
        </p>
        <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-sky-900/40 to-zinc-800/60 border border-white/10 p-3 relative overflow-hidden">
          <div className="absolute inset-3 border-[3px] border-zinc-700 rounded-md bg-gradient-to-b from-sky-700/30 to-sky-900/40">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-700" />
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-zinc-700" />
          </div>
        </div>
      </div>

      <ArrowRight className="w-5 h-5 text-primary mt-6" />

      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-primary text-center">
          Com a tela
        </p>
        <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-sky-900/40 to-zinc-800/60 border border-primary/30 p-3 relative overflow-hidden shadow-[0_0_30px_hsl(256_63%_60%/0.25)]">
          <div className="absolute inset-3 border-[3px] border-zinc-700 rounded-md bg-gradient-to-b from-sky-700/30 to-sky-900/40 overflow-hidden">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0,0,0,0.55) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(0,0,0,0.55) 0 1px, transparent 1px 4px)",
              }}
            />
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-700" />
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-zinc-700" />
          </div>
          <div className="absolute bottom-1 right-2 text-[8px] font-bold uppercase tracking-wider text-primary/80 bg-black/40 px-1.5 py-0.5 rounded">
            Mosquiteiro
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-3 text-center">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-1">
        Fechamento no balcão
      </p>
      <p className="text-sm font-semibold text-foreground">
        Cliente vê o produto antes de comprar
      </p>
    </div>
  </div>
);

const AutomacaoMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="rounded-xl bg-primary/10 border border-primary/30 p-4 mb-5 flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
        <Check className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-primary/80 font-bold">
          Pedido #1247 · confirmado
        </p>
        <p className="text-sm font-semibold text-foreground truncate">
          Maria Silva · R$ 240,00
        </p>
      </div>
    </div>

    <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-primary" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary/80 font-bold">
            Relatório do pedido
          </p>
        </div>
        <span className="text-[9px] font-bold tracking-wider uppercase bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 rounded-full px-2 py-0.5">
          ✓ Pago
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <MapPin className="w-3 h-3 text-primary/70 mt-0.5 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
              Endereço
            </p>
            <p className="text-xs text-foreground/90 truncate">
              R. Conde de Bonfim, 412, Tijuca, RJ
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <CalendarClock className="w-3 h-3 text-primary/70 mt-0.5 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
              Previsão de entrega
            </p>
            <p className="text-xs text-foreground/90">21/05 · quinta-feira</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <CreditCard className="w-3 h-3 text-primary/70 mt-0.5 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
              Pagamento (opcional)
            </p>
            <p className="text-xs text-foreground/90">
              PIX · à vista · R$ 240,00
            </p>
          </div>
        </div>
      </div>
    </div>

    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 text-center mb-3">
      Disparo automático em 3 destinos
    </p>

    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: Printer, label: "Impressora", sub: "3 vias" },
        { icon: MessageCircle, label: "WhatsApp", sub: "Cliente" },
        { icon: Mail, label: "Email", sub: "+ PDF" },
      ].map((dest, i) => {
        const Icon = dest.icon;
        return (
          <div
            key={i}
            className="rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col items-center text-center gap-2 relative"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-foreground">
                {dest.label}
              </p>
              <p className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
                {dest.sub}
              </p>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-primary" />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

/**
 * FONTE ÚNICA DE CONTEÚDO DA PROPOSTA. CLIENTE: DECORA.
 * Loja de confecção de telas mosquiteiras (janela e porta de tela).
 *
 * Pendências conhecidas:
 *   - Substituir `logo` pela logo da Decora quando o cliente enviar
 *     (atualizar import e `hero.logoSrc`).
 *   - Confirmar número de WhatsApp final no `cta.botaoLink`.
 */
export const proposta: PropostaConfig = {
  hero: {
    badge: "PROPOSTA COMERCIAL · DECORA",
    titulo: "Toda a operação da Decora,",
    tituloDestaque: "organizada num lugar só",
    subtitulo:
      "Sistema interno web e mobile pra equipe registrar pedidos pela foto do talão, padronizar cálculos, controlar entregas, gerar relatórios e disparar comprovante pro cliente sem retrabalho.",
    logoSrc: logo,
    logoAlt: "Decora",
    ctaLabel: "Ver como funciona",
    scrollTargetId: "momento-atual",
  },

  marquee: {
    items: [
      "REGISTRO POR FOTO",
      "CÁLCULO PADRONIZADO",
      "CONTROLE DE ENTREGA",
      "RELATÓRIOS GERENCIAIS",
      "IMPRESSÃO EM 3 VIAS",
      "ENVIO AUTOMÁTICO",
      "HISTÓRICO COMPLETO",
    ],
  },

  momentoAtual: {
    eyebrow: "O CENÁRIO HOJE",
    titulo: "A gestão interna ainda depende do talão",
    subtitulo:
      "Cada pedido vive num pedaço de papel, cada cálculo é refeito no olho e cada entrega depende da memória do vendedor. Isso desorganiza a operação e abre brecha pra erro caro.",
    desafio: {
      titulo: "Como é hoje",
      icone: FileX,
      items: [
        "Talão amassa, molha e se perde no balcão.",
        "Cálculo refeito no olho vira conta errada e prejuízo silencioso.",
        "Produção depende da memória do vendedor sobre o que foi pedido.",
        "Previsão de entrega esquecida e cliente ligando pra cobrar.",
        "Sem histórico, não dá pra consultar pedido de cliente recorrente.",
        "Sem relatório consolidado, fica difícil entender vendas e produção.",
      ],
    },
    solucao: {
      titulo: "Como passa a ser",
      icone: Sparkles,
      items: [
        "Foto do talão e o sistema lê, organiza e salva tudo.",
        "Cálculo padronizado por largura, altura e tipo de tela, com edição livre quando precisar.",
        "Simulação com IA registra como a tela vai ser instalada, pra produção e cliente conferirem.",
        "Previsão de entrega cadastrada e enviada por WhatsApp e email.",
        "Histórico pesquisável por cliente, endereço, data ou status.",
        "Relatórios de vendas e produção exportados num clique.",
      ],
    },
  },

  ecossistema: {
    eyebrow: "OS 6 PILARES",
    titulo: "Tudo que a operação precisa, num lugar só",
    subtitulo:
      "Da entrada do pedido até o comprovante e o relatório gerencial. Sem planilha paralela, sem retrabalho, sem informação perdida.",
    pilares: [
      {
        icone: Camera,
        titulo: "Registro por Foto",
        descricao:
          "Tira foto do talão e o sistema estrutura todos os campos automaticamente.",
      },
      {
        icone: Calculator,
        titulo: "Cálculo Padronizado",
        descricao:
          "Largura, altura, tipo de tela e acabamento. Toda equipe usando a mesma regra, com edição livre quando precisar.",
      },
      {
        icone: Wand2,
        titulo: "Simulação com IA",
        descricao:
          "Registro visual de como a tela vai ser instalada. Alinha expectativa entre vendedor, produção e cliente.",
      },
      {
        icone: Printer,
        titulo: "Impressão em 3 Vias",
        descricao:
          "Cliente, arquivo interno e produção. Saída automática na impressora cadastrada da loja.",
      },
      {
        icone: MessageCircle,
        titulo: "Envio Automático",
        descricao:
          "Comprovante e previsão de entrega disparados por WhatsApp e email no momento que o pedido é confirmado.",
      },
      {
        icone: History,
        titulo: "Histórico e Relatórios",
        descricao:
          "Todo pedido salvo. Consulte por cliente, data ou status e exporte relatórios de vendas e produção.",
      },
    ],
  },

  featureTabs: {
    tabs: [
      {
        label: "REGISTRO DO PEDIDO",
        icone: Camera,
        titulo: "Foto do talão vira pedido digital",
        descricao:
          "Aponta a câmera, fotografa o talão e o sistema estrutura os campos. Funciona no celular do balcão e no computador da loja.",
        itens: [
          "Captura no app mobile ou upload no web",
          "Reconhece dados do produto, medidas e cliente",
          "Permite revisão antes de salvar",
          "Foto original fica anexada ao pedido pra consulta interna",
        ],
        mockup: <OcrMockup />,
      },
      {
        label: "SIMULAÇÃO COM IA",
        icone: Wand2,
        titulo: "Registro visual do que foi pedido",
        descricao:
          "Anexa a foto da janela ou porta do cliente e a IA gera a simulação do produto instalado. Fica registrada no pedido pra produção conferir e pra equipe alinhar com o cliente antes da entrega.",
        itens: [
          "IA de imagem integrada via API (créditos contratados direto pela Decora)",
          "Simulação gerada em segundos dentro do fluxo do pedido",
          "Reduz erro de produção e devolução por desalinhamento",
          "Imagem fica anexada ao pedido pra consulta interna",
        ],
        mockup: <SimulacaoIaMockup />,
      },
      {
        label: "AUTOMAÇÃO DE ENTREGA",
        icone: Send,
        titulo: "Comprovante, impressão e notificação automáticos",
        descricao:
          "Confirmou o pedido? Sistema gera o relatório com nome, endereço e previsão de entrega, imprime as 3 vias na impressora da loja e dispara WhatsApp + email pro cliente. Sem operador clicando em nada.",
        itens: [
          "Relatório com nome, endereço completo e previsão de entrega",
          "Forma de pagamento e status (pago ou a pagar) como campos opcionais",
          "Parcelamento exibido quando o cliente dividir",
          "3 vias automáticas: cliente, arquivo interno, impressora física",
          "Envio simultâneo por WhatsApp e email",
        ],
        mockup: <AutomacaoMockup />,
      },
    ],
  },

  jornada: {
    eyebrow: "IMPLEMENTAÇÃO EM 30 DIAS",
    titulo: "Da assinatura ao",
    tituloDestaque: "primeiro pedido digital",
    subtitulo:
      "Roadmap claro pra colocar o sistema rodando na Decora em 4 etapas, sem travar a operação atual.",
    etapas: [
      {
        numero: 1,
        titulo: "Setup & Identidade",
        descricao:
          "Configuração do sistema com a marca da Decora, cadastro da impressora da loja e dos modelos de tela com regras de cálculo.",
      },
      {
        numero: 2,
        titulo: "Integrações",
        descricao:
          "Conexão com WhatsApp Business, email e API da IA de imagem para a simulação visual do produto instalado.",
      },
      {
        numero: 3,
        titulo: "Validação das Funcionalidades",
        descricao:
          "Rodada de testes ponta a ponta com pedidos reais: OCR, cálculo, simulação com IA, impressão das três vias e disparo no WhatsApp e email. Tudo aprovado antes do go-live.",
      },
      {
        numero: 4,
        titulo: "Go-Live & Acompanhamento",
        descricao:
          "Sistema no ar, suporte intensivo nas 2 primeiras semanas pra ajustar o que aparecer no dia a dia.",
      },
    ],
  },

  investimento: {
    eyebrow: "O CUSTO DE NÃO TER",
    titulo: "Operação no papel sai mais caro do que parece",
    subtitulo:
      "Não é só o tempo do vendedor: é prejuízo silencioso no cálculo, retrabalho na produção e operação no escuro, sem dados pra decidir.",
    cenarioAtual: {
      titulo: "Cenário Atual",
      label: "HOJE",
      destaque: "Tempo + retrabalho",
      subtitulo: "Operação travada no papel",
      items: [
        "Pedido anotado à mão e digitado depois, gerando trabalho duplicado.",
        "Erro de cálculo vira prejuízo ou desconto forçado.",
        "Produção sem referência visual aumenta erro e devolução.",
        "Sem relatório consolidado, fica difícil entender vendas e operação.",
      ],
    },
    cenarioFuturo: {
      titulo: "Cenário Decora",
      label: "COM O SISTEMA",
      destaque: "Operação organizada",
      subtitulo: "Pedidos, produção e relatórios em um lugar",
      items: [
        "Pedido entra em segundos e segue direto pra produção.",
        "Cálculo padronizado impede prejuízo silencioso.",
        "Simulação com IA dá referência visual pra produção e cliente.",
        "Histórico e relatórios consolidados, prontos pra exportar.",
        "Comprovante padronizado em três vias, todo pedido igual.",
      ],
    },
  },

  precos: {
    eyebrow: "INVESTIMENTO",
    titulo: "Estrutura comercial",
    planos: [
      {
        eyebrow: "IMPLEMENTAÇÃO",
        nome: "Setup Completo",
        descricao:
          "Pagamento único. Sistema configurado, integrado e equipe treinada em até 30 dias.",
        valor: "R$ 3.000",
        periodo: "pagamento único",
        rotuloValor: "duas formas de pagar",
        itens: [
          "Configuração do sistema com a marca da Decora",
          "Cadastro de modelos de tela e regras de cálculo",
          "Integração WhatsApp + email + IA de imagem",
          "Cadastro da impressora da loja",
          "Treinamento presencial/remoto da equipe",
          "Suporte intensivo nas 2 primeiras semanas",
        ],
        observacao:
          "Em 3x sem juros de R$ 1.000, ou R$ 2.500 à vista (17% de desconto).",
      },
      {
        eyebrow: "RECORRÊNCIA",
        nome: "Operação Mensal",
        descricao:
          "Tudo o que mantém o sistema rodando, sem letra miúda.",
        valor: "R$ 300",
        periodo: "/mês",
        rotuloValor: "mensalidade fixa",
        destaque: true,
        itens: [
          "Sistema sempre no ar, com manutenção e monitoramento contínuos",
          "Atualizações de API e dependências sem custo extra",
          "Hospedagem na nuvem (web e mobile)",
          "Suporte 24/7 da nossa equipe",
          "Pequenas melhorias e ajustes dentro do escopo entregue",
          "Backup diário do histórico de pedidos",
        ],
        observacao:
          "*Créditos da IA de imagem são contratados direto pela Decora no provedor (custo à parte, baseado em uso).",
      },
    ],
  },

  cta: {
    eyebrow: "PRÓXIMO PASSO",
    titulo: "Bora deixar o talão de papel",
    tituloDestaque: "no passado?",
    descricao:
      "Topando, a gente fecha hoje e em 30 dias a operação da Decora está rodando inteira no sistema.",
    botaoLabel: "Falar no WhatsApp",
    botaoLink: "https://wa.me/5521991083870",
  },
};
