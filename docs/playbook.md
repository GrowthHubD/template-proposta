# Playbook — Receitas por tipo de proposta

Cada tipo de proposta tem um arranjo recomendado de seções. Use estas receitas como ponto de partida e ajuste o conteúdo.

## 1. Proposta de mensalidade recorrente (SaaS, gestão, atendimento)

**Seções ativadas**: `hero`, `momentoAtual`, `marquee`, `ecossistema`, `featureTabs`, `jornada`, `precos`, `cta`.
**Seções desativadas**: `investimento` (não há fase única destacável).

**Configuração de `precos`**:
- 1 plano apenas, sem `destaque`, com `periodo: "/mês"`.
- `eyebrow: "MENSALIDADE"`.

**Tom do `hero.titulo`**: foco em continuidade ("seu negócio sempre operando"). Evite linguagem de "projeto".

## 2. Proposta de projeto único + manutenção

**Seções ativadas**: todas (`hero`, `momentoAtual`, `marquee`, `ecossistema`, `featureTabs`, `jornada`, `investimento`, `precos`, `cta`).

**Configuração de `precos`**:
- 2 planos lado a lado.
- Plano 1: `eyebrow: "PAGAMENTO ÚNICO"`, sem `periodo`, sem `destaque`.
- Plano 2: `eyebrow: "MENSALIDADE"`, com `periodo: "/mês"`, com `destaque: true`.

**Configuração de `investimento`**: este é o tipo onde a seção brilha — compara o cenário pré e pós-implementação.

## 3. Proposta de parceria / joint-venture

**Seções ativadas**: `hero`, `momentoAtual`, `marquee`, `ecossistema`, `jornada`, `cta`.
**Seções desativadas**: `featureTabs` (geralmente parcerias não vendem features de produto), `investimento`, `precos`.

**Substituição de `precos`**: para mostrar termos da parceria, considere usar `precos` com 1 card sem valor monetário, transformando `valor` em algo como `"50/50"` e os `itens` em cláusulas da parceria.

**Tom do `hero`**: convite, não venda.

## 4. Proposta de retainer / consultoria continuada

**Seções ativadas**: `hero`, `marquee`, `ecossistema`, `featureTabs`, `jornada`, `precos`, `cta`.
**Seções desativadas**: `momentoAtual`, `investimento` (tom consultivo, não corretivo).

**`ecossistema`**: liste os 6 entregáveis principais da consultoria como pilares.
**`featureTabs`**: cada tab é uma frente de trabalho (estratégia, execução, governança).

## 5. Proposta de implementação rápida (≤ 7 dias)

**Seções ativadas**: `hero`, `marquee`, `featureTabs`, `jornada`, `precos`, `cta`.
**Seções desativadas**: `momentoAtual`, `ecossistema`, `investimento`.

**`jornada`**: 4 etapas curtas, dias em vez de semanas. Ex: D+1 onboarding, D+3 setup, D+5 treino, D+7 go-live.

---

## Como desativar uma seção opcional

No `proposta.config.tsx`, comente a chave inteira:

```tsx
export const proposta: PropostaConfig = {
  hero: { ... },
  // momentoAtual: { ... },  ← removida desta proposta
  marquee: { ... },
  ...
};
```

O `Index.tsx` já renderiza condicionalmente. Não é preciso editar o JSX.

## Como duplicar e adaptar uma seção

Para casos raros em que duas variantes da mesma seção apareçam (ex: dois marquees com palavras diferentes), o componente já aceita `data` independente por uso. No `Index.tsx`:

```tsx
<MarqueeTicker data={proposta.marqueeSuperior} />
{/* mais seções */}
<MarqueeTicker data={proposta.marqueeInferior} reverse />
```

E declare as duas chaves no config + tipo.
