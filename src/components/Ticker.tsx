import { hero } from "@/content/site";

/** Faixa de lema gigante que desliza na horizontal conforme a página rola. */
export function Ticker() {
  const words = [...hero.motto, ...hero.motto, ...hero.motto];
  return (
    <div className="overflow-hidden py-10 lg:py-14" aria-hidden="true">
      <p className="scrollx flex w-max items-center gap-8 whitespace-nowrap">
        {words.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={`display text-[clamp(3rem,10vw,8rem)] ${
                i % 2 ? "text-brand" : "text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.35)]"
              }`}
            >
              {w}
            </span>
            <span className="h-3 w-3 rotate-45 bg-brand" />
          </span>
        ))}
      </p>
    </div>
  );
}
