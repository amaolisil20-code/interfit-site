import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { Instagram } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-xs font-semibold uppercase tracking-wide text-mute hover:text-brand">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram da Interfit" className="text-white hover:text-brand">
          <Instagram className="h-6 w-6" />
        </a>
      </div>
      <p className="container-x mt-8 text-xs text-mute">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
