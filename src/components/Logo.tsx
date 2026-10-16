import Image from "next/image";

/**
 * Ícone oficial da Interfit (public/img/logo.png, 225x225 — resolução limitada).
 * Já contém o nome "ACADEMIA INTERFIT". Trocar por SVG quando a academia enviar.
 */
export function Logo({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <Image
      src="/img/logo.png"
      alt="Interfit Academia"
      width={225}
      height={225}
      priority
      className={`shrink-0 rounded-full ${className}`}
    />
  );
}
