# CLAUDE.md — Interfit Academia (site)

Site institucional da Interfit Academia. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4. Deploy na Vercel a cada push na `main`.

## Comandos
- `npm run dev` — servidor local (http://localhost:3000)
- `npm run build` — build de produção; rode antes de qualquer commit
- Node 20+

## Onde mexer
- **Conteúdo** (textos, planos, horários, contatos, WhatsApp): `src/content/site.ts`. Não escreva texto fixo dentro dos componentes; adicione o dado aqui e importe.
- **Seções da home**: `src/components/sections/*.tsx`, montadas em `src/app/page.tsx`.
- **Tokens de marca**: bloco `@theme` em `src/app/globals.css`.
- **Imagens**: `public/img/` (sempre via `next/image`).

## Identidade visual (não fugir disso)
- Fundo escuro: `bg-ink` (#05090C), `bg-ink-2` (#0A0F14), cards `bg-ink-3` (#121820), bordas `border-line`.
- Cor de destaque única: amarelo `text-brand` / `bg-brand` (#FFD21F). Nada de outras cores de acento.
- Fonte: Montserrat. Títulos usam o par:
  - `.display` — caixa alta pesada, branca ("TREINE DO SEU")
  - `.display-accent` — itálico 900 amarelo ("JEITO")
- Rótulo acima do título: `.eyebrow text-brand`.
- Botões: `.btn .btn-primary` (amarelo) ou `.btn .btn-outline` (contorno amarelo), sempre com o ícone `<Arrow />`.
- Ícones de traço em `src/components/Icons.tsx` (stroke 1.8, `currentColor`).
- Layout centralizado com `.container-x`. Mobile-first; testar em 390px.

## Convenções
- Textos em português (pt-BR).
- Componentes de servidor por padrão; `"use client"` só quando houver estado (ex.: `Header.tsx`).
- Links de WhatsApp sempre via `whatsappLink(mensagem)` de `site.ts`.

## Pendências (dados provisórios marcados com TODO em `site.ts`)
- WhatsApp, telefone, e-mail e endereço reais
- Valores e benefícios dos planos
- Horários de funcionamento
- Logo oficial em SVG (substituir `Logo.tsx` e `src/app/icon.svg`)
- Fotos reais em alta resolução (as atuais foram recortadas do mockup)
