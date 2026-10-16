import Image from "next/image";
import { Arrow } from "../Icons";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-[72px]">
      {/* Foto: ocupa a metade direita no desktop, fundo escurecido no mobile */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]">
        <Image
          src="/img/hero.jpg"
          alt="Aluna treinando na Interfit"
          fill
          priority
          sizes="(min-width:1024px) 62vw, 100vw"
          className="object-cover object-[30%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10 lg:via-ink/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-x grid min-h-[560px] items-center py-16 lg:min-h-[640px] lg:grid-cols-[1fr_auto]">
        <div className="max-w-[560px]">
          <p className="eyebrow mb-5 text-white/90">Mais que uma academia</p>
          <h1>
            <span className="display block text-[2.4rem] sm:text-6xl">A sua melhor</span>
            <span className="display-accent block py-1 text-[4.2rem] sm:text-[7.5rem]">Versão</span>
            <span className="display block text-[2.4rem] sm:text-6xl">começa aqui</span>
          </h1>
          <p className="mt-7 max-w-[440px] text-[0.98rem] leading-relaxed text-white/85">
            Na <strong className="font-semibold text-white">Inter Fit</strong>, você encontra estrutura completa,
            profissionais qualificados e um ambiente feito{" "}
            <strong className="font-semibold text-white">para te motivar todos os dias.</strong>
          </p>
          <a href="#planos" className="btn btn-primary mt-8">
            Conheça nossos planos <Arrow />
          </a>
        </div>

        <div className="hidden -rotate-6 self-center text-right lg:block">
          <p className="text-2xl font-medium uppercase leading-snug tracking-[0.18em]">
            Disciplina
            <br />
            Foco
            <br />
            Resultados
          </p>
          <span className="mt-2 ml-auto block h-1 w-14 rounded bg-brand" />
        </div>
      </div>
    </section>
  );
}
