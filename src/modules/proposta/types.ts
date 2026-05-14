import type { ComponentType, ReactNode } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export interface HeroData {
  badge?: string;
  titulo: string;
  tituloDestaque?: string;
  subtitulo: string;
  logoSrc?: string;
  logoAlt?: string;
  ctaLabel?: string;
  scrollTargetId?: string;
}

export interface MarqueeData {
  items: string[];
}

export interface MomentoAtualBloco {
  titulo: string;
  icone: IconComponent;
  items: string[];
}

export interface MomentoAtualData {
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  desafio: MomentoAtualBloco;
  solucao: MomentoAtualBloco;
}

export interface EcossistemaPilar {
  icone: IconComponent;
  titulo: string;
  descricao: string;
}

export interface EcossistemaData {
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  pilares: EcossistemaPilar[];
}

export interface FeatureTab {
  label: string;
  icone: IconComponent;
  titulo: string;
  descricao: string;
  itens: string[];
  mockup?: ReactNode;
}

export interface FeatureTabsData {
  tabs: FeatureTab[];
}

export interface JornadaEtapa {
  numero: number;
  titulo: string;
  descricao: string;
}

export interface JornadaData {
  eyebrow?: string;
  titulo: string;
  tituloDestaque?: string;
  subtitulo?: string;
  etapas: JornadaEtapa[];
}

export interface InvestimentoBloco {
  titulo: string;
  label: string;
  destaque: string;
  subtitulo?: string;
  items: string[];
}

export interface InvestimentoData {
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  cenarioAtual: InvestimentoBloco;
  cenarioFuturo: InvestimentoBloco;
}

export interface PrecoPlano {
  eyebrow: string;
  nome: string;
  descricao: string;
  valor: string;
  periodo?: string;
  rotuloValor: string;
  itens: string[];
  observacao?: string;
  destaque?: boolean;
}

export interface PrecosData {
  eyebrow?: string;
  titulo: string;
  planos: PrecoPlano[];
}

export interface CTAData {
  eyebrow?: string;
  titulo: string;
  tituloDestaque?: string;
  descricao: string;
  botaoLabel: string;
  botaoLink?: string;
}

export interface PropostaConfig {
  hero: HeroData;
  marquee: MarqueeData;
  momentoAtual?: MomentoAtualData;
  ecossistema: EcossistemaData;
  featureTabs: FeatureTabsData;
  jornada: JornadaData;
  investimento?: InvestimentoData;
  precos: PrecosData;
  cta: CTAData;
}
