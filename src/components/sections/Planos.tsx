import { planos, whatsappLink } from "@/content/site";
import { Arrow, Check } from "../Icons";

export function Planos() {
  return (
    <section id="planos" className="py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-12 max-w-xl">
          <p className="eyebrow text-brand">Planos</p>
          <h2 className="mt-3">
            <span className="display block text-4xl">Escolha o seu</span>
            <span className="display-accent block text-5xl">Ritmo</span>
          </h2>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {planos.map((p, i) => (
            <li
              key={p.name}
              style={{ "--i": i * 2 } as React.CSSProperties}
              className={`reveal relative flex flex-col rounded-lg border p-7 ${
                p.highlight ? "border-brand bg-ink-3" : "border-line bg-ink-2"
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
