# Roadmap

Evoluções planejadas para o template. Itens aqui **não** estão no escopo atual. Levantar issue antes de implementar.

## Curto prazo

- [ ] Componente `<NavLink />` ativado: navegação âncora flutuante no topo da página.
- [ ] Variante de Hero com vídeo de fundo (loop silencioso).
- [ ] Captura de e-mail no CTA (integração com webhook simples).
- [ ] Variante de `FeatureTabs` em layout horizontal (tabs reais, não scroll vertical).

## Médio prazo

- [ ] Roteamento dinâmico `/proposta/[cliente]` com config server-side por slug.
- [ ] Geração automática de OG image via Vercel OG ou Cloudflare Image Resizing.
- [ ] Botão "Baixar PDF" — exportar via @react-pdf/renderer ou print stylesheet otimizado.
- [ ] Analytics de scroll-depth e tempo em cada seção (PostHog/Plausible).

## Longo prazo

- [ ] Backend de envio + tracking de assinatura digital (DocuSign / Clicksign).
- [ ] CMS leve para o time comercial editar conteúdo sem mexer no código.
- [ ] Internacionalização (i18n) para propostas em EN/ES.

## Explicitamente fora do escopo

- ❌ Tema claro / dark mode toggle — decisão de design: dark-only.
- ❌ Migração para Next.js — Vite é a escolha consciente (menor overhead, melhor DX local).
- ❌ Sistema de templates múltiplos no mesmo repo — cada cliente é uma branch.
- ❌ Editor visual (drag-and-drop) — fora do propósito do template.
