/**
 * Símbolo da Interfit, redesenhado em vetor a partir do ícone do Instagram:
 * moldura quadrada (lados de cima/direita brancos, esquerda/baixo amarelos)
 * com dois halteres na diagonal. Fonte única: Logo, texturas e favicon usam esta geometria.
 * Trocar pelo SVG oficial quando a academia enviar.
 */
function Dumbbell({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(45)`} fill={color}>
      <rect x="-9" y="-1.9" width="18" height="3.8" />
      <rect x="-13" y="-7.5" width="5" height="15" rx="1" />
      <rect x="8" y="-7.5" width="5" height="15" rx="1" />
      <rect x="-17" y="-4.5" width="3.5" height="9" rx="1" />
      <rect x="13.5" y="-4.5" width="3.5" height="9" rx="1" />
    </g>
  );
}

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <g transform="rotate(-3 50 50)">
        <path d="M14 11V86H89" stroke="var(--color-brand)" strokeWidth="7.5" />
        <path d="M10 14H86V90" stroke="#fff" strokeWidth="7.5" />
        <Dumbbell x={38} y={63} color="var(--color-brand)" />
        <Dumbbell x={62} y={37} color="#fff" />
      </g>
    </svg>
  );
}
