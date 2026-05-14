# CLAUDE.md — Instruções de operação do template

Este arquivo é lido por qualquer Claude Code session que abrir este repo. Leia antes de editar.

## O que este projeto É

Um **template** de proposta comercial. Cada cliente vira uma **branch** ou **fork** deste repo. O template nunca contém conteúdo de cliente real — apenas placeholders.

## Regras invioláveis

1. **Não crie arquivos de seção em `src/components/`.** Toda seção mora em `src/modules/proposta/components/`. Os primitivos em `src/components/ui/` são shadcn — não toque.

2. **Conteúdo entra em `src/modules/proposta/data/proposta.config.tsx`. Sempre.** Não passe strings hard-coded para os componentes. Se um valor é texto, número, link ou item de lista, ele vai no config.

3. **TypeScript estrito.** Sem `any`. Toda seção recebe um `data` tipado pelas interfaces em `src/modules/proposta/types.ts`. Se precisar de um campo novo, adicione no tipo primeiro.

4. **Sem libs novas sem necessidade real.** A stack já tem: Tailwind, shadcn, framer-motion, lucide, react-hook-form, zod, recharts, date-fns. Se for adicionar algo, justifique no PR.

5. **Não rode `npm install <pacote>` para "resolver" um erro de import.** Investigue o motivo do erro antes — geralmente é caminho errado ou tipo faltando.

6. **Não delete configs de raiz** (vite, tailwind, tsconfig, eslint, postcss, components.json) sem entender o impacto.

## Fluxo de trabalho típico

### Cenário A — "Crie uma proposta para o cliente X"

1. Criar branch `cliente/<slug-do-cliente>`.
2. Editar `src/modules/proposta/data/proposta.config.tsx` com os dados do cliente.
3. Trocar logo em `src/assets/` e atualizar `hero.logoSrc`.
4. Rodar `npm run dev` e validar visualmente.
5. Passar pelo [checklist de qualidade](./docs/checklist-qualidade.md).
6. Commit + push.

### Cenário B — "Melhore o design da seção Y"

1. Edite **apenas** `src/modules/proposta/components/Y.tsx`.
2. Garanta que a mudança preserva todos os campos do tipo `YData`.
3. Se precisar de campo novo, atualize `types.ts` e `proposta.config.tsx` na mesma PR.
4. Confira que clientes existentes (outras branches) não quebram — o tipo deve ser backwards-compatible (campo novo = opcional).

### Cenário C — "Adicione uma seção nova ao template"

1. Defina o tipo em `src/modules/proposta/types.ts` (faça opcional em `PropostaConfig`).
2. Crie o componente em `src/modules/proposta/components/`.
3. Exporte no `src/modules/proposta/index.ts`.
4. Adicione no `proposta.config.tsx` (com placeholder).
5. Renderize condicionalmente em `src/pages/Index.tsx`.
6. Documente em `docs/design-system.md` (quando usar).

## Customização visual

**Não edite componentes para mudar cor/fonte.** Edite **variáveis CSS** em `src/index.css`:

```css
--primary: 256 63% 60%;        /* hue saturation lightness — sem # */
--primary-glow: 256 63% 70%;
--background: 0 0% 9%;
```

Mudar `--primary` muda toda a identidade visual. As fontes (Inter + Space Grotesk) vêm do `@import` no topo do `index.css` — para trocar, edite o `@import` e os `font-family` no mesmo arquivo (+ `tailwind.config.ts`).

Detalhes em [`docs/design-system.md`](./docs/design-system.md).

## Mockups em FeatureTabs

`featureTabs.tabs[].mockup` aceita `ReactNode`. Se omitido, um fallback simples é renderizado. Para mockups customizados:

- Mantenha o JSX dentro do `proposta.config.tsx` (é `.tsx`, suporta JSX).
- Use as utilities `.glass`, `.glass-dark` para coerência.
- Anime com `framer-motion` (já importado no config se necessário).
- Veja exemplos em https://github.com/GrowthHubD/proposta-fabio-parceria_lagos/blob/main/src/components/FeatureTabsSection.tsx

## Quando NÃO ajudar

Se o usuário pedir para:
- "Refatorar a estrutura modular" → pergunte por quê. Geralmente é desnecessário.
- "Adicionar tema claro" → fora de escopo. O template é dark-only por decisão de design.
- "Implementar backend de envio" → fora de escopo. Veja `docs/roadmap.md`.
- "Migrar para Next.js" → não. Vite é a escolha consciente.

## Verificação rápida antes de marcar tarefa como concluída

```bash
npm run lint          # zero erros novos
npm run build         # build verde
npm run dev           # abra e veja a proposta
```

Para mudanças visuais, abra em 375px, 768px e 1440px.
