/**
 * Logo provisório recriado em SVG a partir da identidade do Instagram.
 * Substituir pelo arquivo oficial (public/logo.svg) quando a academia enviar.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Interfit Academia">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <path d="M4 6h32L4 34h32" fill="none" stroke="var(--color-brand)" strokeWidth="4" strokeLinejoin="round" />
        <path d="M4 6l32 28M36 6L4 34" fill="none" stroke="#fff" strokeWidth="2.5" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[1.45rem] font-black italic tracking-tight">
          <span className="text-brand">INTER</span>
          <span className="text-white">FIT</span>
        </span>
        <span className="mt-0.5 text-[0.5rem] font-semibold tracking-[0.75em] text-white/80">ACADEMIA</span>
      </span>
    </span>
  );
}
