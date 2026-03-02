import { HeroSection } from "@/components/HeroSection";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { MomentoAtualSection } from "@/components/MomentoAtualSection";
import { EcossistemaSection } from "@/components/EcossistemaSection";
import { FeatureTabsSection } from "@/components/FeatureTabsSection";
import { JornadaSection } from "@/components/JornadaSection";
import { InvestimentoSection } from "@/components/InvestimentoSection";
import { PrecosSection } from "@/components/PrecosSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <HeroSection />

      {/* Momento Atual */}
      <MomentoAtualSection />

      {/* Marquee */}
      <MarqueeTicker />

      {/* Ecossistema */}
      <EcossistemaSection />

      {/* Feature Tabs */}
      <FeatureTabsSection />

      {/* Jornada */}
      <JornadaSection />

      {/* Investimento */}
      <MarqueeTicker reverse />
      <InvestimentoSection />

      {/* Preços */}
      <PrecosSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
};

export default Index;
