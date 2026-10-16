import { whatsappLink } from "@/content/site";
import { Arrow } from "../Icons";
import { Mark } from "../Mark";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-line bg-ink-2">
      <Mark className="pointer-events-none absolute -left-10 top-1/2 -z-10 h-[220%] -translate-y-1/2 opacity-[0.07]" />
      <div className="reveal container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="border-l-4 border-brand pl-4">
          <p className="text-sm font-bold uppercase">Pronto para</p>
          <p className="display-accent text-4xl">Começar?</p>
        </div>
        <p className="max-w-[300px] text-sm leading-relaxed text-white/80">
          Faça parte da nossa família e descubra todo o potencial que existe em você.
        </p>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-primary self-start md:self-auto">
          Fale conosco <Arrow />
        </a>
      </div>
    </section>
  );
}
