import Image from "next/image";
import { modalidades, whatsappLink } from "@/content/site";
import { Arrow } from "../Icons";

export function Modalidades() {
  return (
    <section id="modalidades" className="py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-brand">Nossas modalidades</p>
          <h2 className="mt-3">
            <span className="display block text-4xl">Treine do seu</span>
            <span className="display-accent block text-5xl">Jeito</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Aqui você encontra diversas modalidades para todos os objetivos e níveis de condicionamento.
          </p>
          <a href="#horarios" className="btn btn-outline mt-7 !py-2.5 !text-[0.72rem]">
            Ver todas as modalidades <Arrow />
          </a>
        </div>

        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
          {modalidades.map((m) => (
            <li key={m.title} className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-auto">
              <a
                href={whatsappLink(`Olá! Quero saber mais sobre ${m.title}.`)}
                target="_blank"
                rel="noopener"
                className="group relative block aspect-[4/5] overflow-hidden rounded-md border border-line bg-ink-3 lg:aspect-[3/4]"
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(min-width:1024px) 18vw, 70vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold uppercase">{m.title}</h3>
                    <Arrow className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs leading-snug text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    {m.text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
