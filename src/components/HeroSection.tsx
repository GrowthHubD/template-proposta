import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo-growthhub.png";

export const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("momento-atual")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(256 63% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(256 63% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 text-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 animate-fade-in-up">
          <img 
            src={logo} 
            alt="Growth Hub Logo" 
            className="h-10 sm:h-12 md:h-16 w-auto"
          />
        </div>

        {/* Badge */}
        <div
          className="animate-fade-in-up animate-pulse-glow w-full max-w-md"
          style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border border-primary/40 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary/10">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary">
              PROPOSTA COMERCIAL
            </span>
            <span className="hidden sm:block w-px h-4 bg-primary/40" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Agentes de IA para Vendas
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer animate-bounce-down"
        onClick={scrollToContent}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};
