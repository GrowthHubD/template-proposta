# Design System

Referência rápida do sistema visual. **Editar valores aqui não muda o app** — esta página descreve o que está em `src/index.css` e `tailwind.config.ts`.

## Paleta

Todas as cores são HSL **sem `hsl()`** nas variáveis (formato `H S% L%`), aplicadas via `hsl(var(--token))` em Tailwind.

| Token | Valor | Uso |
|---|---|---|
| `--background` | `0 0% 9%` | fundo da página |
| `--foreground` | `0 0% 96%` | texto principal |
| `--card` | `0 0% 11%` | cards e elevações |
| `--primary` | `256 63% 60%` | roxo principal (CTA, ícones, acentos) |
| `--primary-glow` | `256 63% 70%` | versão clara (gradientes, hover) |
| `--primary-dim` | `256 40% 40%` | versão escura (fundos suaves) |
| `--muted-foreground` | `0 0% 55%` | texto secundário |
| `--destructive` | `0 84.2% 60.2%` | erros, "cenário ruim" |
| `--border` | `0 0% 18%` | bordas padrão |

**Trocar a identidade**: mude `--primary` e `--primary-glow` em `src/index.css`. Tudo se ajusta.

## Tipografia

- **Body**: `Inter` (300, 400, 500, 600, 700, 800, 900).
- **Headings**: `Space Grotesk` (400, 500, 600, 700) — aplicado automaticamente em `h1–h6` no `src/index.css`.

Importadas de Google Fonts no topo do `index.css`.

**Escalas usadas nas seções**:
- Hero `h1`: `text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]`
- Section `h2`: `text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight`
- Card `h3`: `text-xl font-heading font-bold tracking-tight`
- Eyebrow: `text-[10px] font-bold tracking-[0.4em] uppercase text-primary`
- Body: `text-base sm:text-lg text-muted-foreground font-light leading-relaxed`

## Espaçamento

- Seção: `py-24 sm:py-32`
- Container: `max-w-6xl mx-auto px-4 sm:px-6` (padrão), `max-w-5xl` para CTA, `max-w-2xl` para textos centralizados.
- Gap entre cards: `gap-6 lg:gap-8` (ecossistema) ou `gap-8 lg:gap-12` (preços/investimento).

## Raios de borda

| Token | Valor |
|---|---|
| `--radius` | `0.75rem` (base) |
| `rounded-lg` | `var(--radius)` |
| Cards principais | `rounded-3xl` ou `rounded-[1.5rem]` |
| Glass dark hero | `rounded-[2rem]` a `rounded-[3rem]` |

## Sombras

| Classe | Quando usar |
|---|---|
| `shadow-premium` | Card em destaque, hover de elevação |
| `shadow-glow` | Botão CTA principal |
| `shadow-glass` | Cards translúcidos |

## Utilities customizadas

| Classe | Efeito |
|---|---|
| `.glass` | Fundo translúcido `bg-white/5` + blur + borda branca sutil |
| `.glass-dark` | Versão mais escura, ideal para cards de hero/CTA |
| `.text-gradient-primary` | Texto em gradiente roxo (use em palavras de destaque) |
| `.text-glow-primary` | Text-shadow roxo (use em números grandes, palavras chave) |
| `.glow-primary` | Box-shadow roxo |
| `.bg-gradient-hero` | Radial gradient escuro para fundos de hero |
| `.bg-gradient-card` | Gradient sutil para cards |
| `.scrollbar-hide` | Esconde scrollbar (overflow horizontal sem barra) |

## Animações

| Animação | Duração | Quando usar |
|---|---|---|
| `fade-in-up` | 0.8s | Entrada de bloco ao entrar no viewport |
| `marquee` / `-reverse` | 30s loop | Faixa horizontal infinita |
| `marquee-fast` | 40s loop | Versão mais rápida |
| `pulse-glow` | 2s loop | Botão CTA, status "rodando" |
| `bounce-down` | 1.5s loop | Indicador de scroll no hero |
| `float` | 6s loop | Elementos decorativos em hero |
| `message-appear` | 0.8s | Bolhas de chat em mockups |
| `typing-indicator` / `typing-dot` | 1.2s loop | Indicador de "digitando" em mockups |

**Use `framer-motion` para tudo que reage a scroll** (`whileInView`). Use CSS `@keyframes` para loops infinitos ambientais.

## Padrões visuais

### Glass-morphism vs. card sólido

- **`glass`**: para cards em cima de fundos com brilho/gradiente. Adiciona profundidade.
- **`glass-dark`**: para cards isolados, sem nada por trás. Mais legível.
- **`bg-[#121212]` ou `bg-card`**: sólido, para listas longas onde glass distrairia.

### Eyebrow

Toda seção principal tem um eyebrow no topo (texto pequeno, uppercase, primary):
```tsx
<p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-70">
  TEXTO DO EYEBROW
</p>
```

### Destaque tipográfico

Para destacar uma palavra no título, use `<span className="text-gradient-primary">palavra</span>`. Evite negrito puro — o gradiente é a assinatura visual.

### Botão CTA principal

```tsx
className="bg-primary text-slate-900 font-bold px-10 py-5 rounded-full shadow-glow"
```

Importante: **texto escuro sobre primary**, não branco. Contraste melhor.

## Responsividade

Breakpoints Tailwind padrão:
- `sm` 640px
- `md` 768px
- `lg` 1024px
- `xl` 1280px
- `2xl` 1400px (container max)

Sempre desenvolva mobile-first. Teste em 375 / 768 / 1440 antes de finalizar.
