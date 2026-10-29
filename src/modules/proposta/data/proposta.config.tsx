import {
  Target,
  Lightbulb,
  LayoutGrid,
  ScrollText,
  Clapperboard,
  Instagram,
  ClipboardCheck,
  Anchor,
  CalendarDays,
  Scissors,
  GraduationCap,
  MessageCircle,
  TrendingUp,
  Trophy,
  AlertTriangle,
  Check,
} from "lucide-react";
import logo from "@/assets/logo-growthhub.png";
import type { PropostaConfig } from "../types";

/**
 * FONTE ÚNICA DE CONTEÚDO DA PROPOSTA.
 *
 * Proposta comercial: Vanusa, estúdio de criação de conteúdo com IA
 * (carrosséis, roteiros, edição de vídeo, Falow integrado e agente avaliador).
 */

const MockupHeader = ({ titulo }: { titulo: string }) => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-2 h-2 rounded-full bg-red-500/80" />
    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
    <div className="w-2 h-2 rounded-full bg-green-500/80" />
    <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
      {titulo}
    </p>
  </div>
);

const shell =
  "glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8";

const CarrosselMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Gerador de carrossel" />
    <div className="grid grid-cols-3 gap-3">
      {[
        { n: "01", t: "Gancho", d: "O erro que trava seu alcance" },
        { n: "02", t: "Dor", d: "Por que ninguém salva seus posts" },
        { n: "03", t: "Virada", d: "A estrutura que prende até o fim" },
      ].map((s, i) => (
        <div
          key={s.n}
          className={`rounded-xl border p-3 aspect-[4/5] flex flex-col justify-between ${
            i === 0 ? "bg-primary/10 border-primary/30" : "bg-white/5 border-white/10"
          }`}
        >
          <span className="text-[9px] font-bold tracking-widest text-primary/80">{s.n}</span>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">{s.t}</p>
            <p className="text-[11px] leading-snug text-foreground/90">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
    <p className="mt-4 text-center text-[10px] uppercase tracking-[0.3em] text-primary/70">
      7 slides · pronto pra editar e postar
    </p>
  </div>
);

const RoteiroMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Roteiro de vídeo" />
    <div className="space-y-3">
      {[
        { t: "0 a 3s", l: "Gancho", d: "Pare de gravar vídeo assim se quer crescer.", hi: true },
        { t: "3 a 15s", l: "Desenvolvimento", d: "O motivo real do seu vídeo não ser entregue.", hi: false },
        { t: "15 a 25s", l: "Prova", d: "Exemplo prático em tela.", hi: false },
        { t: "25 a 30s", l: "CTA", d: "Comenta QUERO e eu te mando o passo a passo.", hi: false },
      ].map((b) => (
        <div
          key={b.l}
          className={`rounded-xl border px-4 py-3 ${
            b.hi ? "bg-primary/10 border-primary/30" : "bg-white/5 border-white/10"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-[9px] font-bold uppercase tracking-widest text-primary/80">{b.l}</p>
            <p className="text-[9px] text-muted-foreground">{b.t}</p>
          </div>
          <p className="text-[11px] text-foreground/85 leading-relaxed">{b.d}</p>
        </div>
      ))}
    </div>
  </div>
);

const EdicaoMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Edição assistida por IA" />
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-4">
      <div className="flex items-center gap-1 h-10">
        {[30, 55, 40, 80, 60, 90, 45, 70, 35, 65, 50, 85, 40, 60].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-primary/50" style={{ height: `${h}%` }} />
        ))}
      </div>
      <p className="mt-3 text-[10px] text-muted-foreground">Vídeo bruto · 4min 12s</p>
    </div>
    <div className="grid grid-cols-3 gap-3 text-center">
      {[
        { n: "12", l: "Pausas cortadas" },
        { n: "100%", l: "Legendado" },
        { n: "3", l: "Cortes prontos" },
      ].map((x) => (
        <div key={x.l} className="rounded-xl bg-primary/10 border border-primary/30 p-3">
          <p className="text-lg font-bold text-foreground">{x.n}</p>
          <p className="text-[8px] uppercase tracking-widest text-primary/80 mt-1">{x.l}</p>
        </div>
      ))}
    </div>
  </div>
);

const FalowMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Falow · Automação de comentários" />
    <div className="space-y-3 mb-4">
      <div className="rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 p-3 max-w-[85%]">
        <p className="text-xs text-foreground/75">Comentário no Reel: QUERO</p>
      </div>
      <div className="rounded-2xl rounded-tr-sm bg-primary/10 border border-primary/30 p-3 max-w-[90%] ml-auto">
        <p className="text-xs text-foreground/90 leading-relaxed">
          Oi! Te mandei o material no direct. Qualquer dúvida é só responder aqui.
        </p>
      </div>
    </div>
    <div className="space-y-2">
      {[
        { v: "Reel · Erros de gancho", n: "412 leads", Icon: Trophy, c: "text-primary" },
        { v: "Reel · Bastidores", n: "37 leads", Icon: AlertTriangle, c: "text-destructive/80" },
      ].map((r) => (
        <div
          key={r.v}
          className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-2.5"
        >
          <span className="text-xs text-foreground/80">{r.v}</span>
          <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${r.c}`}>
            <r.Icon className="w-3 h-3" />
            {r.n}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const AvaliadorMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Agente avaliador" />
    <div className="flex items-center justify-between mb-4">
      <p className="text-xs text-foreground/80">Carrossel · 7 slides</p>
      <p className="text-2xl font-bold text-primary">78</p>
    </div>
    <div className="space-y-2">
      {[
        { ok: true, t: "Gancho forte no primeiro slide" },
        { ok: false, t: "Slide 4 com texto longo demais" },
        { ok: false, t: "CTA final sem ação clara" },
      ].map((f) => (
        <div
          key={f.t}
          className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5"
        >
          {f.ok ? (
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-destructive/80 mt-0.5 shrink-0" />
          )}
          <span className="text-[11px] text-foreground/80 leading-relaxed">{f.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const GanchosMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Banco de ganchos" />
    <div className="space-y-3">
      {[
        { c: "Erro comum", g: "Você está errando isso em todo vídeo" },
        { c: "Segredo", g: "Ninguém te conta isso sobre alcance" },
        { c: "Resultado", g: "Como passei de 2 mil a 40 mil em 60 dias" },
      ].map((x, i) => (
        <div
          key={x.g}
          className={`rounded-xl border p-3 ${
            i === 0 ? "bg-primary/10 border-primary/30" : "bg-white/5 border-white/10"
          }`}
        >
          <p className="text-[9px] font-bold uppercase tracking-widest text-primary/80 mb-1">{x.c}</p>
          <p className="text-[11px] text-foreground/85">{x.g}</p>
        </div>
      ))}
    </div>
  </div>
);

const CalendarioMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Calendário editorial" />
    <div className="grid grid-cols-7 gap-2 text-center mb-4">
      {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
        <p key={i} className="text-[9px] text-muted-foreground">
          {d}
        </p>
      ))}
      {["Reel", "Carrossel", "Story", "Reel", "Carrossel", "", "Reel"].map((t, i) => (
        <div
          key={i}
          className={`rounded-lg border py-3 text-[8px] uppercase tracking-wide ${
            t ? "bg-primary/10 border-primary/30 text-primary" : "bg-white/5 border-white/10 text-transparent"
          }`}
        >
          {t || "."}
        </div>
      ))}
    </div>
    <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
      <TrendingUp className="w-3 h-3" />
      <span>Pauta baseada no que performou no Falow</span>
    </div>
  </div>
);

const CortesMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Cortes e legendas" />
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-4">
      <p className="text-[10px] text-muted-foreground mb-2">Vídeo longo · 18min</p>
      <div className="h-2 rounded-full bg-white/10 relative overflow-hidden">
        <div className="absolute left-[8%] w-[10%] h-full bg-primary/70" />
        <div className="absolute left-[35%] w-[8%] h-full bg-primary/70" />
        <div className="absolute left-[70%] w-[12%] h-full bg-primary/70" />
      </div>
    </div>
    <div className="space-y-2">
      {["Corte 1 · Gancho forte", "Corte 2 · Melhor trecho", "Corte 3 · Fechamento"].map((c) => (
        <div
          key={c}
          className="flex items-center justify-between rounded-xl bg-primary/10 border border-primary/30 px-4 py-2.5"
        >
          <span className="text-[11px] text-foreground/85">{c}</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Legendado</span>
        </div>
      ))}
    </div>
  </div>
);

const TreinamentoMockup = () => (
  <div className={shell}>
    <MockupHeader titulo="Onboarding" />
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/85">Aula 01 · Estúdio de conteúdo</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Gravada</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Carrosséis, roteiros e edição do zero ao post
        </p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/90">Aula 02 · Falow e avaliador</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Gravada</span>
        </div>
        <p className="text-[11px] text-foreground/80 leading-relaxed">
          Automações de comentário e como ler as métricas
        </p>
      </div>
    </div>
  </div>
);

export const proposta: PropostaConfig = {
  hero: {
    badge: "PROPOSTA COMERCIAL · VANUSA",
    titulo: "Seu estúdio de conteúdo",
    tituloDestaque: "com IA, do roteiro ao lead",
    subtitulo:
      "Carrosséis, roteiros, edição de vídeo, automação no Instagram e um agente que corrige o que você errou. Tudo num só lugar.",
    logoSrc: logo,
    logoAlt: "GrowthHub",
    ctaLabel: "Ver como funciona",
    scrollTargetId: "momento-atual",
  },

  marquee: {
    items: [
      "CARROSSÉIS COM IA",
      "ROTEIROS DE VÍDEO",
      "EDIÇÃO ASSISTIDA",
      "FALOW INTEGRADO",
      "AGENTE AVALIADOR",
      "BANCO DE GANCHOS",
      "CALENDÁRIO EDITORIAL",
      "CORTES E LEGENDAS",
    ],
  },

  momentoAtual: {
    eyebrow: "O CENÁRIO HOJE",
    titulo: "Muito esforço pra produzir, pouca clareza do que funciona",
    subtitulo:
      "Criar conteúdo toma horas em ferramentas soltas, e ninguém diz com clareza o que melhorar no próximo post.",
    desafio: {
      titulo: "Como é hoje",
      icone: Target,
      items: [
        "Cada carrossel e cada roteiro nasce do zero, em várias ferramentas diferentes.",
        "A edição do vídeo consome horas que poderiam virar mais conteúdo publicado.",
        "Falta um olhar de fora: o que errou na copy, na edição e na estrutura passa sem ser percebido.",
        "Vídeo vai bem ou mal e ninguém sabe por quê, nem o que virou lead de verdade.",
      ],
    },
    solucao: {
      titulo: "Como passa a ser",
      icone: Lightbulb,
      items: [
        "Um estúdio único gera carrossel, roteiro e apoia a edição no seu estilo.",
        "O agente avaliador aponta o que corrigir antes de você postar.",
        "O Falow automatiza os comentários e mostra o melhor e o pior vídeo.",
        "O calendário usa esses dados pra decidir o que gravar na semana seguinte.",
      ],
    },
  },

  ecossistema: {
    eyebrow: "O QUE ESTÁ INCLUSO",
    titulo: "Seis peças trabalhando juntas",
    subtitulo:
      "Tudo dentro do mesmo sistema, com login único. O Falow já vem integrado, sem custo à parte.",
    pilares: [
      {
        icone: LayoutGrid,
        titulo: "Produção de carrosséis",
        descricao: "Estruturas de 7 slides prontas, com gancho, desenvolvimento e CTA.",
      },
      {
        icone: ScrollText,
        titulo: "Roteiros de vídeo",
        descricao: "Roteiro por blocos de tempo, com gancho, prova e chamada pra ação.",
      },
      {
        icone: Clapperboard,
        titulo: "Edição de vídeo com IA",
        descricao: "Cortes de pausa, legendas e cortes de vídeo longo usando Claude e outras IAs.",
      },
      {
        icone: Instagram,
        titulo: "Falow integrado",
        descricao: "CRM de Instagram, automação de comentários e métricas por vídeo.",
      },
      {
        icone: ClipboardCheck,
        titulo: "Agente avaliador",
        descricao: "Revisa copy, edição e estrutura e diz o que melhorar.",
      },
      {
        icone: Anchor,
        titulo: "Banco de ganchos",
        descricao: "Biblioteca de ganchos virais consultada na hora de criar.",
      },
    ],
  },

  featureTabs: {
    tabs: [
      {
        label: "CARROSSÉIS",
        icone: LayoutGrid,
        titulo: "Carrossel pronto em minutos",
        descricao:
          "Você dá o tema, o sistema entrega a estrutura completa de 7 slides no seu tom, pronta pra ajustar e postar.",
        itens: [
          "Estrutura de 7 slides com gancho, dor, virada e CTA",
          "Texto enxuto, pensado pra reter e gerar salvamento",
          "Variações do mesmo tema pra testar abordagens",
          "Legenda do post gerada junto",
        ],
        mockup: <CarrosselMockup />,
      },
      {
        label: "ROTEIROS",
        icone: ScrollText,
        titulo: "Roteiro de vídeo sem página em branco",
        descricao:
          "Roteiros organizados por tempo, com gancho nos primeiros segundos e fechamento que chama pra ação.",
        itens: [
          "Gancho, desenvolvimento, prova e CTA em blocos de tempo",
          "Formatos curtos (Reels) e longos (YouTube)",
          "Texto falado, natural, fácil de gravar",
          "Ajustes por voz de marca, no seu jeito de falar",
        ],
        mockup: <RoteiroMockup />,
      },
      {
        label: "EDIÇÃO",
        icone: Clapperboard,
        titulo: "Edição assistida por IA",
        descricao:
          "Usamos Claude e outras IAs que você pode explorar para tirar o trabalho pesado da edição.",
        itens: [
          "Corte automático de pausas e vícios de fala",
          "Legendas geradas e estilizadas",
          "Sugestão de cortes e ritmo",
          "Fluxo de edição documentado pra você repetir",
        ],
        mockup: <EdicaoMockup />,
      },
      {
        label: "CORTES",
        icone: Scissors,
        titulo: "Um vídeo longo vira vários posts",
        descricao:
          "Grave uma vez e publique várias. O sistema localiza os melhores trechos e entrega os cortes legendados.",
        itens: [
          "Identificação dos trechos com mais potencial",
          "Cortes verticais prontos pra Reels e Shorts",
          "Legenda automática em cada corte",
          "Mais conteúdo sem gravar mais",
        ],
        mockup: <CortesMockup />,
      },
      {
        label: "FALOW",
        icone: MessageCircle,
        titulo: "Falow integrado ao seu sistema",
        descricao:
          "O CRM de Instagram do Falow vem dentro do mesmo login. Automatize comentários de forma mais simples que um ManyChat.",
        itens: [
          "Automação de comentário que responde e manda direct sozinha",
          "CRM de Instagram com os leads organizados",
          "Métricas de crescimento por automação",
          "Ranking dos melhores e piores vídeos",
        ],
        mockup: <FalowMockup />,
      },
      {
        label: "AVALIADOR",
        icone: ClipboardCheck,
        titulo: "Um agente que diz o que você errou",
        descricao:
          "Antes de postar, o agente revisa seu conteúdo e aponta com clareza o que melhorar.",
        itens: [
          "Avaliação da copy, do gancho e do CTA",
          "Análise da edição e do ritmo do vídeo",
          "Revisão da estrutura dos carrosséis de 7 slides",
          "Nota e lista de melhorias acionáveis",
        ],
        mockup: <AvaliadorMockup />,
      },
      {
        label: "GANCHOS",
        icone: Anchor,
        titulo: "Banco de ganchos virais",
        descricao:
          "Uma biblioteca de ganchos por categoria que os roteiros e carrosséis consultam sozinhos.",
        itens: [
          "Ganchos organizados por tipo e objetivo",
          "Consulta automática ao gerar roteiros",
          "Você salva os que funcionam pra reutilizar",
        ],
        mockup: <GanchosMockup />,
      },
      {
        label: "CALENDÁRIO",
        icone: CalendarDays,
        titulo: "Calendário editorial com IA",
        descricao:
          "O planejamento da semana nasce dos dados do Falow: o que performou vira pauta, o que não performou sai.",
        itens: [
          "Pauta semanal e mensal sugerida",
          "Mix de formatos entre Reels, carrosséis e stories",
          "Ciclo fechado: métricas alimentam o próximo conteúdo",
        ],
        mockup: <CalendarioMockup />,
      },
      {
        label: "ONBOARDING",
        icone: GraduationCap,
        titulo: "Você começa a usar sem travar",
        descricao:
          "Aulas gravadas e acompanhamento no começo para o sistema entrar na sua rotina.",
        itens: [
          "Aulas gravadas pra rever quando quiser",
          "Configuração inicial com o seu estilo",
          "Suporte nos primeiros 30 dias",
        ],
        mockup: <TreinamentoMockup />,
      },
    ],
  },

  jornada: {
    eyebrow: "IMPLEMENTAÇÃO EM 1 MÊS",
    titulo: "Do alinhamento ao primeiro conteúdo",
    tituloDestaque: "rodando no sistema",
    subtitulo: "Em 1 mês o estúdio está no ar, com entrega por etapas validadas por você.",
    etapas: [
      {
        numero: 1,
        titulo: "Imersão",
        descricao:
          "Alinhamos seu nicho, sua voz de marca, seus formatos e o que você quer atingir.",
      },
      {
        numero: 2,
        titulo: "Estúdio",
        descricao:
          "Configuração de carrosséis, roteiros, banco de ganchos e fluxo de edição no seu estilo.",
      },
      {
        numero: 3,
        titulo: "Falow e avaliador",
        descricao:
          "Integração do Falow, automações de comentário e ativação do agente avaliador.",
      },
      {
        numero: 4,
        titulo: "Ativação",
        descricao:
          "Aulas gravadas, calendário editorial no ar e acompanhamento nos primeiros 30 dias.",
      },
    ],
  },

  investimento: {
    eyebrow: "ANTES E DEPOIS",
    titulo: "Sua rotina de conteúdo, com e sem o estúdio",
    subtitulo: "O que muda quando criação, edição, automação e avaliação ficam no mesmo lugar.",
    cenarioAtual: {
      titulo: "Cenário atual",
      label: "HOJE",
      destaque: "Ferramentas soltas e achismo",
      subtitulo: "Muito trabalho manual, pouco retorno claro",
      items: [
        "Carrossel e roteiro feitos do zero toda vez",
        "Horas gastas em edição de vídeo",
        "Sem avaliação do que errou na copy e na estrutura",
        "Sem dado do que gera lead de verdade",
      ],
    },
    cenarioFuturo: {
      titulo: "Cenário com o estúdio",
      label: "COM O SISTEMA",
      destaque: "Conteúdo guiado por dados",
      subtitulo: "Criar, editar, automatizar e melhorar no mesmo lugar",
      items: [
        "Carrosséis e roteiros prontos no seu tom",
        "Edição e cortes assistidos por IA",
        "Agente avaliador revisando antes de postar",
        "Falow mostrando o melhor e o pior vídeo",
        "Calendário que se ajusta ao que performa",
      ],
    },
  },

  precos: {
    eyebrow: "INVESTIMENTO",
    titulo: "Estrutura comercial",
    planos: [
      {
        eyebrow: "ESTÚDIO COMPLETO",
        nome: "Estúdio de Conteúdo com IA",
        descricao:
          "Sistema completo de criação, edição, automação e avaliação de conteúdo, com Falow incluso.",
        valor: "R$ 3.790",
        periodo: "à vista",
        rotuloValor: "pagamento único, sem mensalidade",
        destaque: true,
        parcelamento: "12x de R$ 379,00",
        itens: [
          "Produção de carrosséis de 7 slides com IA",
          "Produção de roteiros de vídeo",
          "Edição de vídeo assistida por IA, com cortes e legendas",
          "Falow integrado: CRM de Instagram, automação de comentários e métricas",
          "Agente avaliador de copy, edição e estrutura",
          "Banco de ganchos virais",
          "Calendário editorial com IA",
          "Aulas gravadas e suporte nos primeiros 30 dias",
        ],
        observacao: "Prazo de entrega: 1 mês. Acesso ao Falow incluso no sistema, sem cobrança à parte.",
      },
    ],
  },

  cta: {
    eyebrow: "PRÓXIMO PASSO",
    titulo: "Bora criar conteúdo",
    tituloDestaque: "com mais clareza e menos esforço?",
    descricao:
      "Proposta com validade de 15 dias. Qualquer ponto do escopo pode ser ajustado antes de fechar, é só chamar que a gente alinha.",
    botaoLabel: "Falar no WhatsApp",
    pdfLabel: "Baixar o escopo em PDF",
    pdfLink: "/pdfs/escopo-estudio-vanusa.pdf",
    botaoLink:
      "https://wa.me/5521991083870?text=Ol%C3%A1!%20Quero%20falar%20sobre%20a%20proposta%20do%20Est%C3%BAdio%20de%20Conte%C3%BAdo.",
  },

  footer: {
    logoSrc: logo,
    siteUrl: "https://methodgrowthhub.com.br",
    siteLabel: "Desenvolvida pela Growth Hub",
    nota: "Tecnologia e automação sob medida.",
  },

  documento: {
    eyebrow: "ESCOPO E ENTREGÁVEIS",
    titulo: "Estúdio de Conteúdo com IA",
    subtitulo: "Vanusa · o que a proposta entrega",
    intro:
      "Este documento lista, de forma direta, o que está incluso no Estúdio de Conteúdo com IA. Valores e condições de pagamento estão na proposta.",
    planos: [
      {
        nome: "Estúdio de Conteúdo com IA",
        prazo: "Entrega em 1 mês",
        resumo: "Criação, edição, automação e avaliação de conteúdo no mesmo sistema.",
        grupos: [
          {
            titulo: "Carrosséis e roteiros",
            itens: [
              "Produção de carrosséis de 7 slides com gancho, dor, virada e CTA",
              "Variações do mesmo tema e legenda do post gerada junto",
              "Roteiros de vídeo por blocos de tempo, no seu jeito de falar",
              "Formatos curtos (Reels) e longos (YouTube)",
            ],
          },
          {
            titulo: "Edição de vídeo com IA",
            itens: [
              "Edição assistida com Claude e outras IAs",
              "Corte automático de pausas e vícios de fala",
              "Legendas geradas e estilizadas",
              "Cortes de vídeo longo em vários posts legendados",
            ],
          },
          {
            titulo: "Falow integrado",
            itens: [
              "Acesso ao Falow dentro do mesmo sistema, com login único",
              "Automação de comentários que responde e envia direct",
              "CRM de Instagram com os leads organizados",
              "Métricas de crescimento e ranking dos melhores e piores vídeos",
            ],
          },
          {
            titulo: "Agente avaliador",
            itens: [
              "Avaliação da copy, do gancho e do CTA",
              "Análise da edição e do ritmo do vídeo",
              "Revisão da estrutura dos carrosséis de 7 slides",
              "Nota e lista de melhorias acionáveis",
            ],
          },
          {
            titulo: "Banco de ganchos virais",
            itens: [
              "Biblioteca de ganchos organizada por tipo e objetivo",
              "Consulta automática ao gerar roteiros e carrosséis",
            ],
          },
          {
            titulo: "Calendário editorial com IA",
            itens: [
              "Pauta semanal e mensal sugerida",
              "Planejamento baseado no desempenho medido no Falow",
            ],
          },
        ],
      },
    ],
    blocos: [
      {
        titulo: "Entrega",
        itens: [
          "Implementação em 1 mês, por etapas",
          "Aulas gravadas de onboarding",
          "Suporte nos primeiros 30 dias",
        ],
      },
      {
        titulo: "Acesso",
        itens: [
          "Login único para o estúdio e o Falow",
          "Falow incluso, sem cobrança à parte",
        ],
      },
      {
        titulo: "Investimento",
        itens: ["R$ 3.790 à vista ou 12x de R$ 379,00", "Pagamento único, sem mensalidade"],
      },
    ],
    rodape: "Desenvolvida pela Growth Hub · methodgrowthhub.com.br",
    arquivo: "escopo-estudio-vanusa",
  },
};
