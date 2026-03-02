import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <div className="relative rounded-2xl sm:rounded-3xl border border-primary/30 bg-gradient-card p-8 sm:p-12 md:p-16 overflow-hidden">
        {/* Background effects */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl sm:rounded-t-3xl" />

        <div className="relative">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Próximo Passo
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Pronto para Escalar?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-8 sm:mb-10">
            Vamos juntos transformar sua operação. O próximo passo é seu.
          </p>

          <button className="group inline-flex items-center gap-2 sm:gap-3 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 glow-green hover:scale-105">
            Iniciar Projeto
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
