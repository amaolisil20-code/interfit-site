import { modalidades, whatsappLink } from "@/content/site";
import { Arrow } from "../Icons";
import { Mark } from "../Mark";

export function Modalidades() {
  return (
    <section id="modalidades" className="relative isolate overflow-hidden py-20 lg:py-28">
      <Mark className="float pointer-events-none absolute -right-24 top-1/2 -z-10 h-[460px] w-[460px] -translate-y-1/2 opacity-[0.07] lg:opacity-[0.14]" />
      <div className="container-x grid gap-10">
        <div className="reveal xl:flex xl:items-end xl:justify-between xl:gap-16">
          <div>
            <p className="eyebrow text-brand">Nossas modalidades</p>
            <h2 className="mt-3">
              <span className="display block text-4xl">Treine do seu</span>
              <span className="display-accent block text-5xl">Jeito</span>
            </h2>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/80 xl:mt-0 xl:max-w-[420px]">
            Aqui você encontra diversas modalidades para todos os objetivos e níveis de condicionamento.
          </p>
        </div>

        {/* Uma linha só: carrossel até 1279px; 7 colunas a partir de notebook (xl) */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0 xl:grid xl:grid-cols-7 xl:gap-3 xl:overflow-visible">
          {modalidades.map((m, i) => (
            <li key={m.title} style={{ "--i": i } as React.CSSProperties} className="reveal w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-[28%] xl:w-auto">
              <a
                href={whatsappLink(`Olá! Quero saber mais sobre ${m.title}.`)}
                target="_blank"
                rel="noopener"
                className="group relative flex aspect-square flex-col justify-between overflow-hidden glass lift rounded-xl p-5 lg:aspect-[5/6] xl:aspect-[3/4] xl:p-4"
              >
                <Mark className="pointer-events-none absolute -right-8 -top-6 h-40 w-40 opacity-[0.07]" />
                <span className="display-accent relative text-5xl xl:text-4xl">{String(i + 1).padStart(2, "0")}</span>
                <div className="relative xl:h-[7rem]">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold uppercase xl:text-xs">{m.title}</h3>
                    <Arrow className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-mute xl:text-[0.72rem]">{m.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
