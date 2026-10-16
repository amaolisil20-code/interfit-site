import { features } from "@/content/site";
import { featureIcons } from "../Icons";

export function Features() {
  return (
    <section id="sobre" className="border-y border-line bg-ink-2">
      <ul className="container-x grid grid-cols-2 gap-x-4 lg:grid-cols-4 lg:gap-px">
        {features.map((f, i) => {
          const Icon = featureIcons[f.icon];
          return (
            <li
              key={f.title}
              style={{ "--i": i } as React.CSSProperties}
              className={`reveal flex flex-col gap-3 px-2 py-7 lg:px-8 lg:py-9 ${i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"}`}
            >
              <Icon className="h-9 w-9 text-brand" />
              <h3 className="text-sm font-bold uppercase tracking-wide">{f.title}</h3>
              <p className="max-w-[230px] text-[0.82rem] leading-relaxed text-mute">{f.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
