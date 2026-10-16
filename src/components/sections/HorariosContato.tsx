import { horarios, site, whatsappLink } from "@/content/site";
import { Arrow, Chat, Instagram, Pin } from "../Icons";
import { Mark } from "../Mark";

export function HorariosContato() {
  return (
    <section className="relative isolate overflow-hidden border-t border-line bg-ink-2 py-20 lg:py-28">
      <Mark className="float pointer-events-none absolute -left-20 top-1/3 -z-10 h-[420px] w-[420px] opacity-[0.06] lg:opacity-[0.12]" />
      <div className="container-x grid gap-14 lg:grid-cols-2">
        <div id="horarios" className="reveal">
          <p className="eyebrow text-brand">Horários</p>
          <h2 className="mt-3">
            <span className="display block text-4xl">Sempre aberta</span>
            <span className="display-accent block text-5xl">Pra você</span>
          </h2>
          <dl className="glass mt-8 divide-y divide-white/10 rounded-xl px-6">
            {horarios.map((h) => (
              <div key={h.dia} className="flex items-center justify-between py-4">
                <dt className="text-sm font-semibold uppercase tracking-wide">{h.dia}</dt>
                <dd className="text-sm font-bold text-brand">{h.hora}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="contato" className="reveal" style={{ "--i": 2 } as React.CSSProperties}>
          <p className="eyebrow text-brand">Contato</p>
          <h2 className="mt-3">
            <span className="display block text-4xl">Vem treinar</span>
            <span className="display-accent block text-5xl">Com a gente</span>
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex items-start gap-3 hover:text-brand">
                <Pin className="h-6 w-6 shrink-0 text-brand" />
                <span className="text-sm leading-relaxed">{site.address}</span>
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-brand">
                <Chat className="h-6 w-6 text-brand" />
                <span className="text-sm">WhatsApp {site.phone}</span>
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-brand">
                <Instagram className="h-6 w-6 text-brand" />
                <span className="text-sm">{site.instagramHandle}</span>
              </a>
            </li>
          </ul>
          <a href={whatsappLink("Olá! Quero agendar uma aula experimental.")} target="_blank" rel="noopener" className="btn btn-primary mt-9">
            Agendar aula experimental <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
