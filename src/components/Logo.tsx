import { Mark } from "./Mark";

/**
 * Logo montada em vetor (símbolo + palavra) a partir do ícone da Interfit.
 * Nítida em qualquer tamanho; substituir pelo arquivo oficial quando existir.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Interfit Academia">
      <Mark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.5rem] font-semibold tracking-[0.6em] text-white/80">ACADEMIA</span>
        <span className="mt-1 text-[1.55rem] font-black italic tracking-tight text-white">INTERFIT</span>
      </span>
    </span>
  );
}
