import Image from "next/image";
import { whatsappLink } from "@/content/site";
import { Arrow } from "../Icons";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-line bg-ink-2">
      <div className="absolute inset-y-0 left-0 -z-10 hidden w-[28%] md:block">
        <Image src="/img/pesos.jpg" alt="" fill sizes="28vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-2" />
      </div>
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:pl-[24%]">
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
