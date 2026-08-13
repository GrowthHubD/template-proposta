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

## Metodologia de precificação: qual usar

Antes de preencher `precos`, escolha uma das duas metodologias abaixo. Pergunte ao usuário
se ele não indicar, não assuma.

### A. Padrão (preço único ou plano único/mensalidade)

É o modelo default dos itens 1 a 5 acima: um valor por plano, com `valor` + `periodo`
(`"/mês"` ou `"à vista"`) e `rotuloValor` livre (ex: `"duas formas de pagar"`). Use quando
não há gatilho de urgência de decisão, ou quando o cliente já está decidido e só falta
formalizar. É a opção mais neutra e deve ser o default sempre que o usuário não pedir
explicitamente escassez/urgência.

### B. Escassez por tempo de decisão (Oportunidade / Protagonista)

Dois planos lado a lado no mesmo `precos.planos`, mesmo escopo e mesmos `itens`, preço
diferente pela janela de decisão. Usa os campos opcionais `parcelamento` e
`parcelamentoNota` de `PrecoPlano` (renderizados acima do valor à vista, com um divisor
"OU" entre parcelado e à vista).

- **Plano "Oportunidade"** (`destaque: true`): preço padrão, para quem decide durante a
  própria apresentação/call da proposta. `eyebrow` no estilo `"OPORTUNIDADE · DECISÃO
  NESTA CALL"`.
- **Plano "Protagonista"** (`destaque: false`): mesmo escopo, para quem decide depois.
  Valor à vista = **valor à vista da Oportunidade × 1,3** (30% acima). `eyebrow` no
  estilo `"PROTAGONISTA · DECISÃO FORA DA CALL"`.
- **Parcelamento em 12x, nos dois planos**: `parcela = valor à vista ÷ 10`. Isso embute
  automaticamente o equivalente a duas parcelas extras no total parcelado (12 × parcela =
  valor à vista + 2 × parcela), sem precisar calcular isso à parte.

Exemplo (valor à vista Oportunidade = R$ 5.997,00):
- Oportunidade: `parcelamento: "12x de R$ 599,70"`, `valor: "R$ 5.997,00"`.
- Protagonista: valor à vista = 5.997 × 1,3 = R$ 7.796,10 → `parcelamento: "12x de
  R$ 779,61"`, `valor: "R$ 7.796,10"`.

Use este modelo quando a proposta é apresentada ao vivo (call, reunião) e faz sentido
reforçar a decisão no momento. Não usar em propostas enviadas por link sem apresentação
ao vivo, o gatilho perde o sentido.

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
