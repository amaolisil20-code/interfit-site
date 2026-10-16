import { hero, whatsappLink } from "@/content/site";
import { Arrow } from "../Icons";
import { Mark } from "../Mark";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-[72px]">
      {/* Símbolo da marca em traço, cortado na borda: textura, não decoração */}
      <Mark className="pointer-events-none absolute -right-[4%] top-1/2 -z-10 h-[105%] -translate-y-1/2 opacity-[0.07] lg:opacity-[0.13]" />

      <div className="container-x flex flex-1 items-center py-14 lg:py-20">
        <div className="max-w-[760px]">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-0.5 w-10 bg-brand" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6">
            <span className="display block text-[clamp(2.2rem,6vw,4.5rem)]">{hero.title[0]}</span>
            <span className="display-accent block py-1 text-[clamp(4rem,13vw,9.5rem)]">{hero.title[1]}</span>
            <span className="display block text-[clamp(2.2rem,6vw,4.5rem)]">{hero.title[2]}</span>
          </h1>

          <p className="mt-8 max-w-[480px] text-base leading-relaxed text-white/80 lg:text-[1.05rem]">
            {hero.text}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(hero.cta.message)}
              target="_blank"
              rel="noopener"
              className="btn btn-primary btn-lg"
            >
              {hero.cta.label} <Arrow />
            </a>
            <a href="#planos" className="btn btn-outline btn-lg">
              {hero.secondary} <Arrow />
            </a>
          </div>
          <p className="mt-4 text-xs text-mute">{hero.note}</p>
        </div>
      </div>

      {/* Lema da marca em linha, fechando a abertura */}
      <div className="border-t border-line">
        <ul className="container-x flex flex-wrap items-center gap-x-10 gap-y-2 py-5">
          {hero.motto.map((word, i) => (
            <li key={word} className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.3em]">
              {i > 0 && <span className="hidden h-1.5 w-1.5 rotate-45 bg-brand sm:block" aria-hidden="true" />}
              {word}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
