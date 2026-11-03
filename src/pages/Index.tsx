import {
  HeroSection,
  MarqueeTicker,
  MomentoAtualSection,
  EcossistemaSection,
  TechProviderSection,
  FeatureTabsSection,
  JornadaSection,
  ExtrasSection,
  InvestimentoSection,
  PrecosSection,
  CTASection,
  Footer,
} from "@/modules/proposta";
import { proposta } from "@/modules/proposta/data/proposta.config";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection data={proposta.hero} />

      {proposta.momentoAtual && <MomentoAtualSection data={proposta.momentoAtual} />}

      <MarqueeTicker data={proposta.marquee} />

      <EcossistemaSection data={proposta.ecossistema} />

      {proposta.techProvider && <TechProviderSection data={proposta.techProvider} />}

      <FeatureTabsSection data={proposta.featureTabs} />

      <JornadaSection data={proposta.jornada} />

      {proposta.extras && <ExtrasSection data={proposta.extras} />}

      <MarqueeTicker data={proposta.marquee} reverse />

      {proposta.investimento && <InvestimentoSection data={proposta.investimento} />}

      <PrecosSection data={proposta.precos} />

      <CTASection data={proposta.cta} />

      {proposta.footer && <Footer data={proposta.footer} />}
    </main>
  );
};

export default Index;
