import Image from "next/image";

/**
 * Logo oficial (public/img/logo.jpg, 105x114 — baixa resolução).
 * Trocar por SVG/PNG em alta quando a academia enviar.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/img/logo.jpg"
      alt="Interfit Academia"
      width={105}
      height={114}
      priority
      className={`h-14 w-auto rounded-lg ${className}`}
    />
  );
}
