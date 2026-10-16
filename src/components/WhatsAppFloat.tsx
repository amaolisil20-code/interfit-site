import { whatsappLink } from "@/content/site";
import { Chat } from "./Icons";

/** Atalho fixo para o WhatsApp no mobile; aparece depois da abertura (nos navegadores sem scroll-driven, fica sempre visível). */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Quero agendar uma aula experimental na Interfit.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fab fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-ink shadow-lg shadow-black/40 transition-transform hover:scale-105 lg:hidden"
    >
      <Chat className="h-7 w-7" />
    </a>
  );
}
