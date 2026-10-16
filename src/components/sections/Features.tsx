import { features } from "@/content/site";
import { featureIcons } from "../Icons";
import { Mark } from "../Mark";

export function Features() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden border-y border-line bg-ink-2 py-10 lg:py-14">
      <Mark className="float pointer-events-none absolute -left-16 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 opacity-[0.16] lg:h-96 lg:w-96" />
      <Mark className="float pointer-events-none absolute -right-20 top-1/2 -z-10 h-72 w-72 -translate-y-1/3 opacity-[0.12] [animation-delay:-4s] lg:h-96 lg:w-96" />
      <ul className="container-x grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {features.map((f, i) => {
          const Icon = featureIcons[f.icon];
          return (
            <li
              key={f.title}
              style={{ "--i": i } as React.CSSProperties}
              className="reveal glass lift flex flex-col gap-3 rounded-xl p-5 lg:p-7"
            >
              <Icon className="h-9 w-9 text-brand" />
              <h3 className="text-sm font-bold uppercase tracking-wide">{f.title}</h3>
              <p className="max-w-[230px] text-[0.82rem] leading-relaxed text-white/70">{f.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
