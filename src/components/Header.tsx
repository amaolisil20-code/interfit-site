"use client";

import { useEffect, useState } from "react";
import { nav, whatsappLink } from "@/content/site";
import { Logo } from "./Logo";
import { Arrow } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "#inicio";
      for (const item of nav) {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top < 120) current = item.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div aria-hidden="true" className="progress absolute inset-x-0 bottom-0 h-0.5 bg-brand" />
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="#inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative py-2 text-[0.78rem] font-semibold uppercase tracking-wide transition-colors hover:text-brand ${
                    active === item.href
                      ? "text-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-brand"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-outline hidden !py-2.5 lg:inline-flex">
          Comece agora <Arrow />
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-brand transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line lg:hidden" aria-label="Menu móvel">
          <ul className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-wide hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-primary w-full justify-center">
                Comece agora <Arrow />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
