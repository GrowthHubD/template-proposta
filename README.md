# Template de Proposta Comercial — GrowthHub

Template oficial para criar páginas de proposta comercial de alto padrão. Todas as propostas começam por aqui.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (46 primitivos prontos)
- **Framer Motion** (animações)
- **Lucide Icons**

## Quick start

```bash
npm install
npm run dev
```

Abra http://localhost:8080. A proposta de exemplo aparece com placeholders.

## Como criar uma nova proposta

Você edita **apenas 1 arquivo e 1 asset**:

1. **`src/modules/proposta/data/proposta.config.tsx`** — todo o conteúdo (textos, preços, itens, links) está aqui.
2. **`src/assets/`** — troque `logo-placeholder.svg` pelo logo do cliente e atualize a referência no config.

Nada em `src/modules/proposta/components/` precisa mudar para uma proposta nova. Se você sentir vontade de tocar nesses arquivos, **pare** e leia [`CLAUDE.md`](./CLAUDE.md) primeiro — provavelmente o que você quer já existe.

## Seções disponíveis

| Seção | Obrigatória | Descrição |
|---|---|---|
| `hero` | ✅ | Capa com logo, badge, título e CTA scroll |
| `marquee` | ✅ | Faixa horizontal de palavras-chave |
| `momentoAtual` | ⚪ opcional | Diagnóstico: cenário manual vs. automatizado |
| `ecossistema` | ✅ | Grid de 6 pilares com ícone |
| `featureTabs` | ✅ | Features em layout alternado com mockup |
| `jornada` | ✅ | Roadmap de 4 etapas |
| `investimento` | ⚪ opcional | Comparativo de custo vs. retorno |
| `precos` | ✅ | Cards de planos (1 ou 2 colunas) |
| `cta` | ✅ | Chamada final com botão |

Seções opcionais somem automaticamente se você remover a chave do config.

## Documentação

- [`CLAUDE.md`](./CLAUDE.md) — regras para qualquer IA/dev mexer no template.
- [`docs/playbook.md`](./docs/playbook.md) — receitas por tipo de proposta.
- [`docs/design-system.md`](./docs/design-system.md) — paleta, tipografia, animações.
- [`docs/checklist-qualidade.md`](./docs/checklist-qualidade.md) — checklist antes de entregar.
- [`docs/roadmap.md`](./docs/roadmap.md) — evoluções planejadas.

## Scripts

```bash
npm run dev          # dev server (porta 8080)
npm run build        # build de produção
npm run preview      # serve o build local
npm run lint         # eslint
npm run test         # vitest
```
