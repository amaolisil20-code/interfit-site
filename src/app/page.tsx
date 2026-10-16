import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Modalidades } from "@/components/sections/Modalidades";
import { Planos } from "@/components/sections/Planos";
import { HorariosContato } from "@/components/sections/HorariosContato";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Modalidades />
        <Planos />
        <HorariosContato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
