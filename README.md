# Template de Proposta Comercial

Template em React + Vite + Tailwind para gerar **propostas comerciais** com identidade premium (dark, glassmorphism, animações sutis). Pensado para ser usado **em conjunto com o Claude Code**: você passa o escopo do cliente, a IA preenche o template inteiro seguindo padrão de copy e UI/UX consolidado.

Resultado em produção: o template renderiza uma single-page com 9 seções (hero, marquee, momento atual, ecossistema, feature tabs, jornada, investimento, preços, CTA), cada uma alimentada por dados tipados em um único arquivo de configuração.

---

## Como usar (fluxo recomendado)

### 1. Clone o repo
```bash
git clone https://github.com/GrowthHubD/template-proposta.git proposta-<nome-do-cliente>
cd proposta-<nome-do-cliente>
npm install
```

### 2. Abra no Claude Code
Na pasta do projeto:
```bash
claude
```

### 3. Cole o escopo no chat
Cole o escopo do cliente como mensagem livre. Exemplo:
> "Cliente é a Padaria do João. Loja física com 4 funcionários. Quer um sistema interno pra organizar pedidos, controlar estoque e gerar relatórios diários. Web + mobile. R$ 4.000 setup + R$ 350/mês. Prazo 45 dias. WhatsApp: 11 99999-9999."

A IA vai:
- Pedir o que faltar (segmento, dor central, funcionalidades, angle de venda vs gestão).
- Preencher `src/modules/proposta/data/proposta.config.tsx` inteiro.
- Criar mockups visuais customizados pras feature tabs.
- Atualizar `index.html` (title da aba) e o link do CTA.
- Validar com `npm run build` antes de entregar.

### 4. Revise localmente
```bash
npm run dev
```
Abre em `http://localhost:8080`. Confira em **375px**, **768px** e **1440px**.

### 5. Deploy (opcional)
Ver seção [Deploy](#deploy) abaixo.

---

## Para preencher o escopo manualmente (sem IA)

Se quiser editar à mão:
1. Edite `src/modules/proposta/data/proposta.config.tsx` substituindo todos os `[PLACEHOLDERS]`.
2. Substitua `src/assets/logo-growthhub.png` pela logo do cliente.
3. Atualize `index.html` (title + favicon).
4. Para mudar identidade visual (cor primária, glow), edite as variáveis CSS em `src/index.css`.

Detalhes em [`docs/design-system.md`](./docs/design-system.md).

---

## Stack

- **Vite** (build) + **React 18** + **TypeScript estrito**
- **Tailwind CSS** + **shadcn/ui** (primitivos em `src/components/ui/`)
- **framer-motion** (animações)
- **lucide-react** (ícones)
- **react-hook-form** + **zod** (formulários, se precisar)
- **recharts** (gráficos, se precisar)

Tudo já configurado. Nada pra instalar além do `npm install`.

---

## Estrutura do projeto

```
src/
├── modules/proposta/
│   ├── components/                # 9 seções (não edite)
│   ├── data/proposta.config.tsx   # << ÚNICO arquivo de conteúdo
│   ├── types.ts                   # tipos de cada seção
│   └── index.ts                   # exports
├── components/ui/                 # shadcn primitives (não toque)
├── pages/Index.tsx                # monta a página
├── assets/logo-growthhub.png      # placeholder, troque pela logo do cliente
└── index.css                      # variáveis CSS, classes glass, animações

.claude/
└── skills/ui-ux-pro-max/SKILL.md  # guia de UI/UX e copy pra IA

docs/
├── escopo-template.md       # template opcional pra preencher escopo
├── copy-pt-br.md            # regras de copy em português
├── checklist-qualidade.md   # checklist visual antes de entregar
├── design-system.md         # variáveis CSS, fontes
├── playbook.md              # receitas por tipo de proposta
└── roadmap.md               # evoluções planejadas

CLAUDE.md       # instruções pra IA (workflow obrigatório)
```

---

## Comandos

```bash
npm run dev      # dev server em http://localhost:8080
npm run build    # build de produção em dist/
npm run lint     # ESLint
npm run preview  # serve o dist/ localmente pra conferir o build
```

---

## Deploy

### Cloudflare Pages (recomendado)

```bash
npm run build
CLOUDFLARE_API_TOKEN="<seu-token>" npx wrangler pages deploy dist \
  --project-name=proposta-<nome-do-cliente> \
  --branch=main \
  --commit-dirty=true
```

Se o projeto não existir ainda:
```bash
CLOUDFLARE_API_TOKEN="<seu-token>" npx wrangler pages project create proposta-<nome-do-cliente> \
  --production-branch=main
```

Sai em `https://proposta-<nome-do-cliente>.pages.dev`. Pra custom domain (`propostacliente.seudominio.com.br`), anexe via dashboard da Cloudflare ou API se o domínio estiver na mesma conta.

> Token Cloudflare: configure como variável de ambiente ou no seu `~/.claude/CLAUDE.md` pessoal. **Nunca commite o token no repositório.**

---

## Filosofia

- **Conteúdo no config, lógica nos componentes.** Você nunca edita componente pra mudar texto.
- **Template é dark, premium, opinionated.** Se quer claro, é outro template.
- **Tipos estritos.** O TypeScript te avisa se você esquecer um campo.
- **Mobile primeiro, mas pensa em 1440 também.** Sempre teste os 3 breakpoints.

---

## Licença

Uso interno Growth Hub.
