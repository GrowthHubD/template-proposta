import {
  HeroSection,
  MarqueeTicker,
  MomentoAtualSection,
  EcossistemaSection,
  FeatureTabsSection,
  JornadaSection,
  InvestimentoSection,
  PrecosSection,
  CTASection,
} from "@/modules/proposta";
import { proposta } from "@/modules/proposta/data/proposta.config";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection data={proposta.hero} />

      {proposta.momentoAtual && <MomentoAtualSection data={proposta.momentoAtual} />}

      <MarqueeTicker data={proposta.marquee} />

      <EcossistemaSection data={proposta.ecossistema} />

      <FeatureTabsSection data={proposta.featureTabs} />

      <JornadaSection data={proposta.jornada} />

      <MarqueeTicker data={proposta.marquee} reverse />

      {proposta.investimento && <InvestimentoSection data={proposta.investimento} />}

      <PrecosSection data={proposta.precos} />

      <CTASection data={proposta.cta} />
    </main>
  );
};

export default Index;
