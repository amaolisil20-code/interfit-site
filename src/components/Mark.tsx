/**
 * Símbolo da Interfit (Z amarelo + X branco) em tamanho gráfico.
 * Mesma geometria do Logo provisório; trocar pelo SVG oficial quando existir.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M6 7h28L6 33h28" stroke="var(--color-brand)" strokeWidth="5" strokeLinejoin="round" />
      <path d="M6 7l28 26M34 7L6 33" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}
