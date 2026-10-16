import Image from "next/image";
import { hero, whatsappLink } from "@/content/site";
import { Arrow } from "../Icons";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-[72px]">
      {/* Foto à direita; no mobile vira fundo escurecido. Desloca devagar com o scroll. */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[64%]">
        <div className="drift absolute inset-0 origin-top">
          <Image
            src="/img/hero.jpg"
            alt="Aluna treinando na Interfit"
            fill
            priority
            sizes="(min-width:1024px) 64vw, 100vw"
            className="object-cover object-[35%_center] brightness-[0.97] contrast-[1.08] saturate-[0.9]"
          />
        </div>
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15 lg:via-ink/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-x flex flex-1 items-center py-14 lg:py-20">
        <div className="max-w-[760px]">
          <p className="eyebrow enter flex items-center gap-3 text-brand" style={{ "--d": "0.1s" } as React.CSSProperties}>
            <span className="h-0.5 w-10 bg-brand" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6">
            <span className="display enter block text-[clamp(2.2rem,6vw,4.5rem)]" style={{ "--d": "0.2s" } as React.CSSProperties}>
              {hero.title[0]}
            </span>
            <span className="display-accent enter block py-1 text-[clamp(4rem,13vw,9.5rem)]" style={{ "--d": "0.35s" } as React.CSSProperties}>
              {hero.title[1]}
            </span>
            <span className="display enter block text-[clamp(2.2rem,6vw,4.5rem)]" style={{ "--d": "0.5s" } as React.CSSProperties}>
              {hero.title[2]}
            </span>
          </h1>

          <p className="enter mt-8 max-w-[480px] text-base leading-relaxed text-white/85 lg:text-[1.05rem]" style={{ "--d": "0.65s" } as React.CSSProperties}>
            {hero.text}
          </p>

          <div className="enter mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center" style={{ "--d": "0.8s" } as React.CSSProperties}>
            <a href={whatsappLink(hero.cta.message)} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
              {hero.cta.label} <Arrow />
            </a>
            <a href="#planos" className="btn btn-outline btn-lg">
              {hero.secondary} <Arrow />
            </a>
          </div>
          <p className="enter mt-4 text-xs text-mute" style={{ "--d": "0.95s" } as React.CSSProperties}>
            {hero.note}
          </p>
        </div>
      </div>

      {/* Lema em loop contínuo; pausa no hover */}
      <div className="marquee-wrap overflow-hidden border-t border-line bg-ink/80">
        <div className="marquee py-4" aria-label={hero.motto.join(", ")}>
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {Array.from({ length: 4 }).flatMap(() => hero.motto).map((word, i) => (
                <li key={i} className="flex items-center text-sm font-bold uppercase tracking-[0.3em]">
                  <span className="px-8">{word}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-brand" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
