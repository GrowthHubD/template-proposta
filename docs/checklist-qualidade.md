# Checklist de qualidade — antes de enviar uma proposta

Use isto **toda vez** que for entregar uma proposta para cliente. Não pule itens — eles existem porque já foram pegos em erros passados.

## Conteúdo

- [ ] Nome do cliente correto em **todos** os lugares (Hero, CTA, OG tags em `index.html`).
- [ ] Sem palavras `lorem`, `placeholder`, `exemplo`, `cliente exemplo` em nenhum lugar.
- [ ] Valores em `precos.planos[].valor` conferidos com a planilha comercial — **e formatados em pt-BR** (`R$ 1.500` não `R$1500`).
- [ ] `precos.planos[].periodo` está correto (`/mês`, `/ano`, ou omitido para pagamento único).
- [ ] Lista de `itens` em cada plano enxuta (4–6 itens). Mais que isso polui.
- [ ] `cta.botaoLink` aponta para o destino certo (WhatsApp, calendly, formulário). Teste o link.
- [ ] Tom de voz consistente: ou tudo formal ("o senhor") ou tudo casual ("você"). Não misture.
- [ ] Sem erros de português. Passe um corretor.

## Visual

- [ ] Logo do cliente trocado em `src/assets/` (não use o placeholder em produção).
- [ ] `hero.logoSrc` aponta para o asset novo.
- [ ] Logo carrega em alta DPI (SVG preferível; PNG mínimo 2x).
- [ ] Cores ajustadas em `src/index.css` se o cliente tem identidade própria — ou mantido roxo padrão se for proposta da GrowthHub.
- [ ] Mockups de `featureTabs` fazem sentido para o setor do cliente (não deixe mockups de "clínica" para um cliente de e-commerce).

## Responsividade

- [ ] **Mobile 375px** — abra DevTools, simule iPhone SE. Verifique:
  - [ ] Hero não corta texto.
  - [ ] Marquee não estoura horizontal.
  - [ ] Cards de ecossistema empilham bem.
  - [ ] FeatureTabs: texto e mockup não se sobrepõem.
  - [ ] Preços: cards empilhados, legíveis.
- [ ] **Tablet 768px** — meio-termo, geralmente o mais frágil. Verifique grid 2 colunas.
- [ ] **Desktop 1440px** — versão "oficial". Tudo no eixo, sem rolagem horizontal.

## Performance

- [ ] `npm run build` completa sem erros nem warnings novos.
- [ ] `npm run preview` carrega em < 2s na primeira visita (rede 3G simulada).
- [ ] Lighthouse:
  - [ ] Performance ≥ 85
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices ≥ 90
  - [ ] SEO ≥ 90

## Acessibilidade

- [ ] Todos os `<img>` têm `alt` significativo (não apenas "logo" — "Logo Cliente X").
- [ ] Contraste de texto ≥ 4.5:1 (Lighthouse pega).
- [ ] Foco visível ao tabular (botão CTA, links).
- [ ] Animações respeitam `prefers-reduced-motion` (verificar manualmente — se necessário, envolver `framer-motion` com checagem).

## Metadados / OG

- [ ] `<title>` em `index.html` atualizado para o cliente.
- [ ] `<meta name="description">` reescrito.
- [ ] `og:title`, `og:description`, `twitter:title`, `twitter:description` atualizados.
- [ ] `og:image` configurado (screenshot da proposta, idealmente 1200x630).

## Antes do envio

- [ ] Build pinada em um deploy estável (Vercel/Netlify/Cloudflare Pages).
- [ ] URL final compartilhada testada em aba anônima — sem cache, sem login.
- [ ] WhatsApp/email com a URL formatado bonito (preview do OG aparece).
- [ ] Backup do PDF (se aplicável) gerado e arquivado.

## Pós-envio

- [ ] Branch da proposta protegida — não sobrescreva sem nova versão.
- [ ] Link de analytics (Plausible/PostHog/etc.) ativado para medir visualização.
- [ ] Cliente avisado pelo canal certo (não pelo email do template).
