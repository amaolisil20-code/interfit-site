import { planos, site, whatsappLink } from "@/content/site";
import { Arrow, Check } from "../Icons";
import { Mark } from "../Mark";

export function Planos() {
  return (
    <section id="planos" className="relative isolate overflow-hidden py-20 lg:py-28">
      <Mark className="float pointer-events-none absolute -left-24 top-24 -z-10 h-[420px] w-[420px] opacity-[0.06] lg:opacity-[0.12]" />
      <Mark className="float pointer-events-none absolute -right-28 bottom-0 -z-10 h-[360px] w-[360px] opacity-[0.05] lg:opacity-[0.1] [animation-delay:-5s]" />
      <div className="container-x">
        <div className="reveal mb-12 max-w-xl">
          <p className="eyebrow text-brand">Planos</p>
          <h2 className="mt-3">
            <span className="display block text-4xl">Escolha o seu</span>
            <span className="display-accent block text-5xl">Ritmo</span>
          </h2>
          <p className="glass mt-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rotate-45 bg-brand" aria-hidden="true" />
            Aceitamos {site.convenios.join(" e ")}
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {planos.map((p, i) => (
            <li
              key={p.name}
              style={{ "--i": i * 2 } as React.CSSProperties}
              className={`reveal glass lift relative flex flex-col rounded-xl p-7 ${
                p.highlight ? "glass-brand" : ""
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-bold uppercase text-ink">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/80">{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-mute">R$</span>
                <span className="text-5xl font-black italic">{p.price}</span>
                <span className="text-sm text-mute">{p.period}</span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Olá! Tenho interesse no plano ${p.name}.`)}
                target="_blank"
                rel="noopener"
                className={`btn mt-8 justify-center ${p.highlight ? "btn-primary" : "btn-outline"}`}
              >
                Quero este plano <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
