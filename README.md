# Interfit Academia — Site

Base do site institucional da [Interfit Academia](https://www.instagram.com/interfitacademia/), construída em **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**.

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

Node 20+.

## Estrutura

```
src/
  app/
    layout.tsx         # metadados, fonte, idioma
    page.tsx           # monta a home com as seções
    globals.css        # tokens da identidade (cores, fonte) e classes utilitárias
    icon.svg           # favicon
  components/
    Header.tsx         # menu fixo + menu mobile (client component)
    Footer.tsx
    Logo.tsx           # logo provisório em SVG
    Icons.tsx          # ícones de traço
    sections/          # Hero, Features, Modalidades, CtaBand, Planos, HorariosContato
  content/
    site.ts            # TODO o conteúdo editável (textos, planos, horários, contatos)
public/img/            # fotos (provisórias)
```

## Identidade visual

| Token        | Valor     | Uso                               |
|--------------|-----------|-----------------------------------|
| `brand`      | `#FFD21F` | amarelo — CTAs, destaques         |
| `ink`        | `#05090C` | fundo base                        |
| `ink-2`      | `#0A0F14` | faixas / seções alternadas        |
| `ink-3`      | `#121820` | cards                             |
| `line`       | `#1F2730` | divisórias                        |
| `mute`       | `#A7ADB4` | texto secundário                  |

Tipografia: **Montserrat** (variável, self-hosted via `@fontsource`).
- `.display` — títulos em caixa alta pesada ("A SUA MELHOR")
- `.display-accent` — destaque amarelo itálico ("VERSÃO", "JEITO")
- `.eyebrow` — rótulos pequenos espaçados
- `.btn .btn-primary` / `.btn .btn-outline` — botões pílula

## Pendências (dados provisórios)

Tudo marcado com `TODO` em `src/content/site.ts`:

- [ ] Número de WhatsApp, telefone, e-mail e endereço reais
- [ ] Valores e benefícios dos planos
- [ ] Horários de funcionamento
- [ ] Logo oficial em SVG (substituir `Logo.tsx` e `app/icon.svg`)
- [ ] Fotos reais em alta resolução em `public/img/` (as atuais foram recortadas do mockup de referência)

## Deploy

Hospedado na Vercel; cada push na `main` gera deploy de produção e cada PR gera um preview.
