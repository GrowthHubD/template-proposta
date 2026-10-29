import type { DocumentoData } from "../../types";

/**
 * Documento escrito (A4, fundo claro) com o escopo de cada plano. Lê o bloco
 * `documento` do `proposta.config`. Renderizado na rota `/documento` e
 * impresso pelo `scripts/gerar-pdf.mjs`. Texto corrido, sem apelo comercial.
 */

interface Props {
  data: DocumentoData;
  logoSrc?: string;
}

const ACCENT = "text-[hsl(256_55%_42%)]";

export const DocumentoPdf = ({ data, logoSrc }: Props) => (
  <div className="bg-white text-slate-800 font-sans text-[11px] leading-relaxed">
    <style>{`
      @page { size: A4; }
      html, body { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .keep { break-inside: avoid; page-break-inside: avoid; }
    `}</style>

    <header className="flex items-center justify-between rounded-2xl bg-neutral-900 px-6 py-5 mb-7">
      <div>
        <p className="text-[8.5px] font-bold tracking-[0.35em] uppercase text-[hsl(256_63%_76%)] mb-1.5">
          {data.eyebrow}
        </p>
        <h1 className="font-heading text-[24px] leading-tight font-bold text-white">{data.titulo}</h1>
        <p className="text-[11px] text-neutral-300 mt-1">{data.subtitulo}</p>
      </div>
      {logoSrc && <img src={logoSrc} alt="Growth Hub" className="h-7 w-auto" />}
    </header>

    <p className="text-[11.5px] text-slate-600 mb-7 max-w-[150mm]">{data.intro}</p>

    <div className="space-y-6">
      {data.planos.map((plano) => (
        <section key={plano.nome} className="keep">
          <div className="flex items-baseline justify-between border-b-2 border-neutral-900 pb-1.5 mb-1.5">
            <h2 className="font-heading text-[16px] font-bold text-neutral-900">{plano.nome}</h2>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${ACCENT}`}>{plano.prazo}</span>
          </div>
          <p className="text-[10.5px] italic text-slate-500 mb-3">{plano.resumo}</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
            {plano.grupos.map((g) => (
              <div key={g.titulo} className="keep">
                <h3 className={`text-[9.5px] font-bold uppercase tracking-[0.18em] mb-1 ${ACCENT}`}>{g.titulo}</h3>
                <ul className="space-y-0.5">
                  {g.itens.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-neutral-900 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-5 mt-8 pt-5 border-t border-slate-200 keep">
      {data.blocos.map((b) => (
        <div key={b.titulo}>
          <h3 className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-neutral-900 mb-1.5">{b.titulo}</h3>
          <ul className="space-y-1 text-[10px] text-slate-600">
            {b.itens.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[5px] w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <p className="mt-8 text-[9px] text-slate-400">{data.rodape}</p>
  </div>
);
