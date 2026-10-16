import Image from "next/image";

/**
 * Símbolo da Interfit para uso gráfico (texturas grandes e discretas).
 * Usa o ícone oficial (public/img/logo.png) — o mesmo da Logo, sem recriações.
 * Passe tamanho e opacidade via className.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <Image src="/img/logo.png" alt="" aria-hidden="true" width={225} height={225} className={`rounded-full ${className}`} />
  );
}
