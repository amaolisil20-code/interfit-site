import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — A sua melhor versão começa aqui`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/img/hero.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#05090c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
