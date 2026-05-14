# Template de Proposta Comercial — Guia para a IA

Este repositório é um **template**. Você (Claude Code) recebe o escopo de um cliente e gera a proposta comercial inteira editando **apenas**:

1. `src/modules/proposta/data/proposta.config.tsx` — todo o conteúdo
2. `src/assets/` — logo do cliente
3. `index.html` — `title` e favicon

Tudo o mais já está pronto: componentes, tipos, design system, animações.

---

## Workflow obrigatório (siga em ordem)

### 1. Receber/pedir o escopo
Se o usuário não veio com escopo na primeira mensagem, peça:
> "Me manda o escopo do cliente. Pode ser livre, não precisa formato — quero entender o segmento, a dor atual, as funcionalidades do sistema/serviço, prazo desejado e modelo comercial. Se preferir, tem um template em `docs/escopo-template.md` pra preencher."

### 2. Perguntar o que faltar (use `AskUserQuestion`)
Antes de escrever qualquer linha, garanta que você tem:
- **Cliente**: nome, segmento, perfil (loja física, SaaS, clínica, etc).
- **Nome do produto/sistema**: tem nome próprio? Genérico? Você sugere?
- **Plataforma**: web, mobile, desktop, web+mobile.
- **Dor central**: o que o cliente sofre HOJE que o produto resolve.
- **Funcionalidades**: lista das principais, mesmo que solta.
- **Angle**: o sistema é pra **vender mais** (foco em conversão) ou pra **organizar internamente** (foco em produção/relatórios)? **Isso muda toda a copy** — pergunte explicitamente.
- **Prazo**: 30 / 60 / 90 dias?
- **Preço**: setup + mensalidade. Tem desconto à vista? Parcelamento?
- **CTA**: número de WhatsApp, link de agendamento.

Não chute. Pergunte com `AskUserQuestion` (1 a 4 questões por vez, multipla escolha sempre que possível).

### 3. Carregue a skill `ui-ux-pro-max` ANTES de escrever copy ou mockup
Ela define o padrão visual, a regra de copy (sem travessões, voz ativa, etc) e os snippets de mockup. **Não invente padrão paralelo.**

### 4. Edite `proposta.config.tsx`
- Substitua TODOS os placeholders `[XYZ]`.
- Use ícones de `lucide-react` (lista útil na skill).
- Crie mockups customizados pras tabs do `featureTabs` que aprofundam fluxos concretos (ver snippet em `.claude/skills/ui-ux-pro-max/SKILL.md`).
- Atualize `index.html` (title da aba) e o `botaoLink` do CTA com o WhatsApp do cliente.

### 5. Valide antes de entregar
```bash
npm run lint    # zero erros novos
npm run build   # verde
npm run dev     # abrir e percorrer em 375 / 768 / 1440
```
Rode também `grep -r "\[" src/modules/proposta/data/` — não pode sobrar placeholder. E `grep "—" src/modules/proposta/data/proposta.config.tsx` — deve ser zero (proibido travessão).

### 6. Entregue
Diga ao usuário a URL local (`http://localhost:8080`) e o que mudou. Se ele pedir deploy, veja a seção "Deploy" abaixo.

---

## Regras invioláveis

1. **Não crie arquivos de seção em `src/components/`.** Toda seção mora em `src/modules/proposta/components/`. Os primitivos em `src/components/ui/` são shadcn — **não toque**.

2. **Conteúdo entra no `proposta.config.tsx`. Sempre.** Não passe strings hard-coded para os componentes.

3. **TypeScript estrito.** Sem `any`. Toda seção recebe `data` tipado. Se precisar de campo novo, atualize `src/modules/proposta/types.ts` PRIMEIRO (e mantenha backwards-compat: campo novo = opcional).

4. **Sem libs novas sem necessidade real.** A stack tem: Tailwind, shadcn, framer-motion, lucide, react-hook-form, zod, recharts, date-fns. Se for adicionar algo, justifique.

5. **Não rode `npm install <pacote>` para "resolver" um erro de import.** Investigue: geralmente é caminho errado ou tipo faltando.

6. **Não delete configs de raiz** (vite, tailwind, tsconfig, eslint, postcss, components.json) sem entender o impacto.

7. **Proibido travessão `—`** em qualquer copy da proposta. Use vírgula, dois pontos ou ponto. Justificativa e detalhe em `docs/copy-pt-br.md`.

---

## Customização visual

**Não edite componentes para mudar cor/fonte.** Edite **variáveis CSS** em `src/index.css`:

```css
--primary: 256 63% 60%;        /* HSL sem # */
--primary-glow: 256 63% 70%;
```

Mudar `--primary` muda toda a identidade visual. Fontes (Inter + Space Grotesk) vêm do `@import` no topo do `index.css`.

Detalhes em [`docs/design-system.md`](./docs/design-system.md).

---

## Fora de escopo (não tente fazer)

Se o usuário pedir, recuse com explicação:
- "Tema claro" → o template é dark-only por decisão de design.
- "Migrar para Next.js" → não. Vite é a escolha consciente.
- "Backend de envio de proposta" → fora do template; é estático/Cloudflare Pages.
- "Refatorar a estrutura modular" → pergunte por quê. Geralmente é desnecessário.

---

## Deploy

O template publica em **Cloudflare Pages**. O usuário tem o token configurado no `~/.claude/CLAUDE.md` pessoal. Se ele pedir deploy:

```bash
npm run build
CLOUDFLARE_API_TOKEN="<token-do-usuario>" npx wrangler pages deploy dist \
  --project-name=proposta<nome-do-cliente> \
  --branch=main \
  --commit-dirty=true
```

Se o projeto não existir, crie antes:
```bash
CLOUDFLARE_API_TOKEN="<token>" npx wrangler pages project create proposta<nome> \
  --production-branch=main
```

Resultado: `https://proposta<nome>.pages.dev`. Pra custom domain (ex: `propostacliente.dominio.com.br`), use a API de Pages (`POST /accounts/{id}/pages/projects/{name}/domains`) **se** o domínio estiver na mesma conta Cloudflare.

---

## Documentação complementar

- [`docs/escopo-template.md`](./docs/escopo-template.md) — modelo opcional de escopo pro usuário preencher.
- [`docs/copy-pt-br.md`](./docs/copy-pt-br.md) — referência de copy em português.
- [`docs/checklist-qualidade.md`](./docs/checklist-qualidade.md) — checklist completo antes de entregar pro cliente.
- [`docs/design-system.md`](./docs/design-system.md) — variáveis CSS, tipografia, espaçamento.
- [`docs/playbook.md`](./docs/playbook.md) — receitas para casos comuns.
- [`.claude/skills/ui-ux-pro-max/SKILL.md`](./.claude/skills/ui-ux-pro-max/SKILL.md) — guia completo de UI/UX e copy. Carregue antes de escrever.
