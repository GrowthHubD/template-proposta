---
name: ui-ux-pro-max
description: Padrões de UI/UX e copy comercial em PT-BR para o template de proposta. Use SEMPRE ao escrever copy de seções, montar mockups customizados nas FeatureTabs ou ajustar visual de qualquer parte do `src/modules/proposta/`.
---

# UI/UX Pro Max — Template de Proposta

Aplique este guia ao gerar conteúdo para `src/modules/proposta/data/proposta.config.tsx`. Ele é o que separa uma proposta amadora de uma proposta que fecha.

---

## 1. Princípios visuais (já implementados — não recrie, use)

### Hierarquia de cada seção
1. **Eyebrow** — `text-[10px] tracking-[0.4em] uppercase text-primary/70`. Use pra rotular categoria.
2. **Título** — `text-4xl sm:text-6xl font-heading`. Frase de impacto.
3. **Subtítulo** — `text-lg text-muted-foreground font-light`. Explica o título.
4. **Corpo** — listas, cards, mockups.

Os componentes em `src/modules/proposta/components/*` já aplicam essa hierarquia. Você só passa o conteúdo via `proposta.config.tsx`. **Nunca edite componentes pra ajustar visual.**

### Classes utilitárias do design system (em `src/index.css`)
- `.glass` — fundo branco translúcido + blur. Use em cards de destaque.
- `.glass-dark` — fundo escuro translúcido + blur. Use em cards padrão.
- `.text-gradient-primary` — texto com gradiente primary. Use em palavras-chave.
- `.glow-primary` / `--gradient-glow` — halo primary atrás de elementos.
- `.shadow-premium` — sombra elevada.

### Cores
Tudo via variáveis CSS em `:root`. Pra mudar identidade do cliente, edite **apenas** `--primary` e `--primary-glow` em `src/index.css`. Formato HSL **sem `#`**:
```css
--primary: 256 63% 60%;
--primary-glow: 256 63% 70%;
```

### Ícones
`lucide-react` apenas. Importe nominalmente no topo do `proposta.config.tsx`. Lista útil: `Sparkles`, `Camera`, `Calculator`, `Wand2`, `Printer`, `MessageCircle`, `Mail`, `History`, `FileText`, `Send`, `Check`, `ArrowRight`, `MapPin`, `User`, `Clock`, `CalendarCheck`, `BellRing`, `PieChart`, `Activity`, `Target`, `Lightbulb`, `RotateCcw`, `FileX`, `Ruler`, `CreditCard`, `CalendarClock`.

### Breakpoints obrigatórios
Toda mudança visual passa por: **375px** (mobile), **768px** (tablet), **1440px** (desktop). Se quebrar em qualquer um, conserte antes de entregar.

---

## 2. Mockups customizados (FeatureTabs)

Cada `featureTabs.tabs[i]` aceita `mockup: ReactNode`. Sem mockup, vira fallback genérico. **Crie mockup quando a aba aprofunda um fluxo concreto** (input → output, antes/depois, dashboard real, etc). Não crie pra "preencher".

### Padrão de implementação

Defina o componente **dentro do próprio `proposta.config.tsx`** (é `.tsx`, suporta JSX) ANTES do `export const proposta`. Importe os ícones extra que precisar de `lucide-react`. Use as classes do design system.

### Snippet de referência

```tsx
import { Camera, Check, ArrowRight, Sparkles } from "lucide-react";

const ExemploMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    {/* header */}
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Título do mockup
      </p>
    </div>

    {/* corpo: input → output, ou cards verticais, ou grid de destinos */}
    <div className="grid grid-cols-2 gap-4 items-stretch">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <p className="text-xs text-foreground/80">Lado A</p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-4">
        <p className="text-xs text-foreground">Lado B (resultado)</p>
      </div>
    </div>

    {/* rodapé com chamada de atenção */}
    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
      <Sparkles className="w-3 h-3" />
      <span>Tagline do que aconteceu</span>
    </div>
  </div>
);
```

Depois, na tab:
```tsx
{
  label: "OCR",
  icone: Camera,
  titulo: "...",
  descricao: "...",
  itens: ["..."],
  mockup: <ExemploMockup />,
},
```

### Padrões visuais que funcionam
- **Antes/depois com seta**: 2 colunas + `ArrowRight` no meio. Bom pra OCR, transformação de dado, simulação visual.
- **Card de status no topo + destinos embaixo**: bom pra automação multi-canal (impressora, WhatsApp, email).
- **Mini-relatório**: cabeçalho com ícone, linhas com label/valor, badge de status (✓ Pago em verde, ⏳ Pendente em amarelo).
- **Janela com 3 dots**: simula app/desktop. Use pra mockups que parecem interface de software.

### Cuidados
- Mockup ocupa metade da tela em desktop, full em mobile. Conteúdo precisa caber sem scroll interno.
- Texto dentro do mockup: tamanhos pequenos (`text-[9px]` a `text-xs`), nunca grande.
- Use cores do design system (`text-primary`, `bg-primary/10`, `border-primary/30`). Não invente paleta.

---

## 3. Copy PT-BR comercial

### Voz e tom
- **Voz ativa, frases curtas.** "O sistema lê o talão" > "O talão é lido pelo sistema".
- **Concreto > abstrato.** "Pedido entra em segundos" > "Otimização de processos".
- **Foco no benefício pro cliente, não na feature.** "Comprovante chega no WhatsApp" > "Integração com WhatsApp Business API".
- **Sem jargão corporativo.** Evite "sinergia", "engajamento", "robusto", "escalável" gratuito.

### Regras de pontuação
- **PROIBIDO travessão `—`** em qualquer texto da proposta. Use:
  - **vírgula** quando aposto/explicação
  - **dois pontos** quando enumeração ou explicação
  - **ponto** quando duas ideias separadas
  - **parênteses** quando informação acessória
- Se for separador visual em mockup (não copy), `·` (middle dot) é aceitável.

### Kerning e leitura
Evite combinações de palavras onde letras grudam visualmente em fontes condensadas. Sintomas comuns:
- "investimento único" → letras `o ú` muito próximas. Use **"pagamento único"**.
- "única" depois de palavra terminando em vogal aberta. Reescreva.
Sempre dê uma "lida desfocada" mental: se o olho confunde, troque.

### Honestidade
- Nunca prometa o que não tem. Se créditos de IA são contratados pelo cliente, NÃO escreva "incluso na mensalidade".
- Se prazo é estimativa, seja claro ("em até 30 dias", não "em 30 dias").
- Cards de preço não podem ter contradição entre `valor`/`periodo`/`observacao`. Lê tudo junto antes de finalizar.

### Angle: venda externa vs gestão interna
Antes de escrever o `momentoAtual`, `featureTabs` e `investimento`, **PERGUNTE ao usuário**:
- "O sistema é pra **vender mais** (foco em conversão, balcão, fechamento) ou pra **organizar internamente** (foco em produção, fluxo, relatórios)?"

Os argumentos mudam totalmente. Não assuma.

### Frases comerciais que funcionam (exemplos de tom, adapte)
- "[Algo] está custando vendas." (dor)
- "[Tarefa manual] vira [resultado automático]." (transformação)
- "Tudo o que mantém o sistema rodando, sem letra miúda." (mensalidade)
- "Bora deixar o [estado atual] no passado?" (CTA)

---

## 4. Armadilhas comuns

### Cards de preço
- Card "Setup" não pode dizer "pagamento único" no `periodo` E "à vista por R$ X" na `observacao` ao mesmo tempo sem deixar claro que são duas opções diferentes do MESMO setup. Use `rotuloValor: "duas formas de pagar"` e detalhe ambas na `observacao`.
- Se houver desconto à vista, mostre o **percentual** (`17% de desconto`), não só o valor.
- `destaque: true` num plano puxa o olhar. Use no que você quer que o cliente foque (geralmente recorrência/mensalidade).

### Listas de itens
- Promessas vagas ("Suporte completo", "Atualizações contínuas") não vendem. Especifique: "Suporte 24/7 da nossa equipe", "Atualizações de API e dependências sem custo extra".
- Se uma melhoria é **dentro de escopo definido**, deixe explícito ("Pequenas melhorias e ajustes dentro do escopo entregue") pra evitar expectativa de dev ilimitado.

### Mockups
- Mockup sem dado realista vira "lorem ipsum visual". Use nomes/valores plausíveis pro segmento (ex: padaria → "Pão Francês 50un", clínica → "Consulta Cardio · 14h30").
- Texto de mockup não pode ser placeholder `[XYZ]` na entrega final.

### Ícones
- Não use o mesmo ícone duas vezes na mesma seção. Ex: `Sparkles` no Hero **e** no momentoAtual.solucao.icone. Diversifique.
- Ícone tem que casar semanticamente. Cálculo → `Calculator`. WhatsApp → `MessageCircle`. Não force.

### Mobile
- Frase do título do Hero não pode ter mais que ~6 palavras antes de quebrar pro destaque. Acima disso vira parede de texto em 375px.
- Marquee items com mais de ~25 caracteres saem do quadro em telas estreitas.

---

## 5. Checklist antes de entregar

Rode na ordem:

1. **`npm run lint`** — não pode introduzir erros novos no código que VOCÊ escreveu (warnings pré-existentes em `src/components/ui/` e `tailwind.config.ts` são aceitos).
2. **`npm run build`** — deve ficar verde.
3. **`npm run dev`** — abrir o localhost (porta 8080) e percorrer:
   - Em **375px**: nada quebra, nada vaza, marquee roda bem.
   - Em **768px**: grid de pilares está 3×2, jornada está 2×2, preços lado a lado.
   - Em **1440px**: feature tabs alternam direita/esquerda, mockups com glow visível.
4. **Grep final**: rode `grep -r "\[" src/modules/proposta/data/` — não pode sobrar `[NOME DO CLIENTE]`, `[KEYWORD]`, etc. Se sobrar, é porque você esqueceu de preencher.
5. **Travessões**: rode `grep "—" src/modules/proposta/data/proposta.config.tsx` — deve ser **zero**.
6. **CTA**: clique no botão final, confirma que o WhatsApp abre com o número certo.
7. **Title da aba do navegador**: confere se não está "Proposta Comercial" genérico (deve ser `Proposta [Nome do Cliente]`).
8. **Logo**: confere se a logo no Hero é a do cliente, não a placeholder do template.

Só dê a tarefa por concluída quando os 8 itens passarem.
