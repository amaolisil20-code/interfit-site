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

## Regras do sistema visual (valem para toda seção nova)
- **Títulos**: sempre o par `.display` (branco) + `.display-accent` (amarelo, no máx. 1 palavra por título). Tamanho com `clamp()`; hero é o único com palavra-destaque acima de 7rem, seções usam `text-4xl`–`text-6xl`. Nunca mais de 2 níveis de tamanho de título na mesma tela.
- **Texto corrido**: branco a 80–85% (`text-white/80`), `text-base`, largura máx. ~480px; texto auxiliar em `text-mute`, `text-xs`/`text-sm`.
- **Botões**: 1 primário (`.btn-primary`) por tela/bloco; o secundário é `.btn-outline`. Tamanho grande (`.btn-lg`) só no hero e na faixa de CTA. CTA principal do site = aula experimental via WhatsApp.
- **Fundos**: alternar `bg-ink` → `bg-ink-2` entre seções; cards `bg-ink-3` com `border-line`. Sem gradiente decorativo (só o escurecimento sobre foto, quando houver) e sem brilho/neon.
- **Símbolo**: usar `<Mark />` (traço, `text-brand`, opacidade ≤ 15%) como textura grande e cortada na borda; no máx. 1 por seção.
- **Ícones**: só os de `Icons.tsx` (traço 1.8), `text-brand`, 36px nos blocos de destaque, 20px em linha.
- **Espaçamento**: seções com `py-20 lg:py-28`; entre eyebrow → título `mt-6`, título → texto `mt-8`, texto → botões `mt-10`. Margem lateral só via `.container-x`.
- **Imagens**: preferir fotos reais da academia; evitar banco de imagem/IA genérica. O hero é tipográfico de propósito.

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
