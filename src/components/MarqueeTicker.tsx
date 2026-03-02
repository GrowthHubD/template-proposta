interface MarqueeTickerProps {
  reverse?: boolean;
}

const TICKER_TEXT = "AGENTES DE IA  •  CAPTAÇÃO  •  ATENDIMENTO  •  GROWTH HUB  •  AUTOMAÇÃO  •  INTELIGÊNCIA ARTIFICIAL  •  VENDAS  •  ";

export const MarqueeTicker = ({ reverse = false }: MarqueeTickerProps) => {
  const repeated = TICKER_TEXT.repeat(6);

  return (
    <div className="overflow-hidden py-2 sm:py-3 bg-primary">
      <div
        className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse-fast" : "animate-marquee-fast"}`}
        style={{ width: "max-content" }}
      >
        <span className="text-xs sm:text-sm font-bold tracking-[0.3em] sm:tracking-[0.5em] text-[#161616] uppercase">
          {repeated}
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-[0.3em] sm:tracking-[0.5em] text-[#161616] uppercase">
          {repeated}
        </span>
      </div>
    </div>
  );
};
