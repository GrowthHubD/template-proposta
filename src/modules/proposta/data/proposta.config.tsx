import {
  Target,
  Lightbulb,
  Clock,
  CalendarCheck,
  RotateCcw,
  BellRing,
  PieChart,
  Activity,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/logo-growthhub.png";
import type { PropostaConfig } from "../types";

/**
 * FONTE ÚNICA DE CONTEÚDO DA PROPOSTA.
 *
 * Este é o template. Substitua TODOS os placeholders [XYZ] pelo
 * conteúdo real do cliente antes de entregar.
 *
 * Regras:
 *   1. Não passe strings hard-coded para os componentes — tudo aqui.
 *   2. Os tipos em ../types.ts são a fonte de verdade. Não invente campos.
 *   3. Para mockups customizados em featureTabs, defina componentes locais
 *      neste arquivo (é .tsx, suporta JSX) e passe via `mockup: <Seu />`.
 *      Veja .claude/skills/ui-ux-pro-max/SKILL.md para o padrão visual.
 *   4. Antes de entregar: rode `npm run lint && npm run build` e percorra
 *      a página em 375 / 768 / 1440px.
 *
 * Veja docs/escopo-template.md para o formato esperado de escopo do cliente.
 */
export const proposta: PropostaConfig = {
  hero: {
    badge: "PROPOSTA COMERCIAL · [NOME DO CLIENTE]",
    titulo: "[FRASE DE ABERTURA — primeira parte]",
    tituloDestaque: "[FRASE DE ABERTURA — parte com destaque]",
    subtitulo:
      "[Subtítulo de 1 a 2 linhas que explica o produto/serviço e o ganho principal pro cliente. Voz ativa, frase curta.]",
    logoSrc: logo,
    logoAlt: "[Nome do cliente]",
    ctaLabel: "Ver como funciona",
    scrollTargetId: "momento-atual",
  },

  marquee: {
    items: [
      "[KEYWORD 1]",
      "[KEYWORD 2]",
      "[KEYWORD 3]",
      "[KEYWORD 4]",
      "[KEYWORD 5]",
      "[KEYWORD 6]",
      "[KEYWORD 7]",
    ],
  },

  momentoAtual: {
    eyebrow: "O CENÁRIO HOJE",
    titulo: "[Título da dor — uma frase direta sobre o problema atual]",
    subtitulo:
      "[Subtítulo que aprofunda a dor em 1 a 2 linhas. Conecta o problema atual ao impacto financeiro/operacional pro cliente.]",
    desafio: {
      titulo: "Como é hoje",
      icone: Target,
      items: [
        "[Dor 1 — concreta, observável]",
        "[Dor 2 — impacto direto]",
        "[Dor 3 — consequência operacional]",
        "[Dor 4 — consequência financeira ou de imagem]",
      ],
    },
    solucao: {
      titulo: "Como passa a ser",
      icone: Lightbulb,
      items: [
        "[Solução 1 — em paralelo à dor 1]",
        "[Solução 2 — em paralelo à dor 2]",
        "[Solução 3 — em paralelo à dor 3]",
        "[Solução 4 — em paralelo à dor 4]",
      ],
    },
  },

  ecossistema: {
    eyebrow: "OS PILARES",
    titulo: "[Título que sintetiza o sistema/serviço inteiro]",
    subtitulo:
      "[Subtítulo conectando os 6 pilares numa promessa única.]",
    pilares: [
      {
        icone: Clock,
        titulo: "[Pilar 1]",
        descricao: "[Descrição em 1 frase do que o pilar entrega.]",
      },
      {
        icone: CalendarCheck,
        titulo: "[Pilar 2]",
        descricao: "[Descrição em 1 frase do que o pilar entrega.]",
      },
      {
        icone: RotateCcw,
        titulo: "[Pilar 3]",
        descricao: "[Descrição em 1 frase do que o pilar entrega.]",
      },
      {
        icone: BellRing,
        titulo: "[Pilar 4]",
        descricao: "[Descrição em 1 frase do que o pilar entrega.]",
      },
      {
        icone: PieChart,
        titulo: "[Pilar 5]",
        descricao: "[Descrição em 1 frase do que o pilar entrega.]",
      },
      {
        icone: Activity,
        titulo: "[Pilar 6]",
        descricao: "[Descrição em 1 frase do que o pilar entrega.]",
      },
    ],
  },

  featureTabs: {
    tabs: [
      {
        label: "[ABA 1 — label curto, caps]",
        icone: Sparkles,
        titulo: "[Título da aba 1]",
        descricao:
          "[Parágrafo explicando o que essa funcionalidade faz e por que importa pro cliente.]",
        itens: [
          "[Item 1]",
          "[Item 2]",
          "[Item 3]",
          "[Item 4]",
        ],
        // mockup: <Mockup1 />, // opcional — ver SKILL.md ui-ux-pro-max
      },
      {
        label: "[ABA 2 — label curto, caps]",
        icone: RotateCcw,
        titulo: "[Título da aba 2]",
        descricao:
          "[Parágrafo explicando a funcionalidade.]",
        itens: [
          "[Item 1]",
          "[Item 2]",
          "[Item 3]",
          "[Item 4]",
        ],
      },
      {
        label: "[ABA 3 — label curto, caps]",
        icone: PieChart,
        titulo: "[Título da aba 3]",
        descricao:
          "[Parágrafo explicando a funcionalidade.]",
        itens: [
          "[Item 1]",
          "[Item 2]",
          "[Item 3]",
          "[Item 4]",
        ],
      },
    ],
  },

  jornada: {
    eyebrow: "IMPLEMENTAÇÃO EM [N] DIAS",
    titulo: "[Título da jornada — primeira parte]",
    tituloDestaque: "[parte com destaque]",
    subtitulo:
      "[Subtítulo descrevendo o processo de entrega em alto nível.]",
    etapas: [
      {
        numero: 1,
        titulo: "[Etapa 1]",
        descricao: "[O que acontece nessa etapa, em 1 a 2 frases.]",
      },
      {
        numero: 2,
        titulo: "[Etapa 2]",
        descricao: "[O que acontece nessa etapa.]",
      },
      {
        numero: 3,
        titulo: "[Etapa 3]",
        descricao: "[O que acontece nessa etapa.]",
      },
      {
        numero: 4,
        titulo: "[Etapa 4]",
        descricao: "[O que acontece nessa etapa.]",
      },
    ],
  },

  investimento: {
    eyebrow: "O CUSTO DE NÃO TER",
    titulo: "[Título do comparativo entre cenários]",
    subtitulo:
      "[Subtítulo que reforça o custo de continuar como está.]",
    cenarioAtual: {
      titulo: "Cenário Atual",
      label: "HOJE",
      destaque: "[Síntese do problema, ex: 'Tempo + retrabalho']",
      subtitulo: "[Subtítulo curto do cenário atual]",
      items: [
        "[Problema operacional 1]",
        "[Problema operacional 2]",
        "[Problema operacional 3]",
        "[Problema operacional 4]",
      ],
    },
    cenarioFuturo: {
      titulo: "Cenário [NOME DO CLIENTE]",
      label: "COM O SISTEMA",
      destaque: "[Síntese do ganho, ex: 'Operação organizada']",
      subtitulo: "[Subtítulo curto do cenário futuro]",
      items: [
        "[Ganho 1 — em paralelo ao problema 1]",
        "[Ganho 2]",
        "[Ganho 3]",
        "[Ganho 4]",
        "[Ganho 5 — extra, opcional]",
      ],
    },
  },

  precos: {
    eyebrow: "INVESTIMENTO",
    titulo: "Estrutura comercial",
    planos: [
      {
        eyebrow: "IMPLEMENTAÇÃO",
        nome: "[Nome do plano de setup, ex: 'Setup Completo']",
        descricao:
          "[Frase explicando o que é o setup e o prazo.]",
        valor: "R$ [valor]",
        periodo: "pagamento único",
        rotuloValor: "[rótulo curto, ex: 'duas formas de pagar']",
        itens: [
          "[Entrega 1 do setup]",
          "[Entrega 2]",
          "[Entrega 3]",
          "[Entrega 4]",
          "[Entrega 5]",
          "[Entrega 6]",
        ],
        observacao:
          "[Detalhe sobre formas de pagamento ou desconto à vista, opcional.]",
      },
      {
        eyebrow: "RECORRÊNCIA",
        nome: "[Nome do plano mensal, ex: 'Operação Mensal']",
        descricao:
          "[Frase explicando o que a mensalidade cobre.]",
        valor: "R$ [valor]",
        periodo: "/mês",
        rotuloValor: "mensalidade fixa",
        destaque: true,
        itens: [
          "[Item recorrente 1]",
          "[Item recorrente 2]",
          "[Item recorrente 3]",
          "[Item recorrente 4]",
          "[Item recorrente 5]",
          "[Item recorrente 6]",
        ],
        observacao:
          "[Asterisco com qualquer ressalva importante, ex: custos cobrados à parte.]",
      },
    ],
  },

  cta: {
    eyebrow: "PRÓXIMO PASSO",
    titulo: "[CTA — primeira parte]",
    tituloDestaque: "[CTA — parte com destaque]",
    descricao:
      "[Frase de fechamento que reforça o ganho e convida à ação.]",
    botaoLabel: "Falar no WhatsApp",
    botaoLink: "https://wa.me/55[DDD][NÚMERO]",
  },
};
