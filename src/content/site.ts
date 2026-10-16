/**
 * Todo o conteúdo editável do site fica aqui.
 * Itens marcados com TODO são provisórios e precisam ser confirmados com a academia.
 */

export const site = {
  name: "Interfit Academia",
  shortName: "Inter Fit",
  description:
    "Na Inter Fit você encontra estrutura completa, profissionais qualificados e um ambiente feito para te motivar todos os dias.",
  instagram: "https://www.instagram.com/interfitacademia/",
  instagramHandle: "@interfitacademia",
  // TODO: confirmar número oficial (formato 55 + DDD + número, só dígitos)
  whatsapp: "5500000000000",
  // TODO: confirmar
  phone: "(00) 00000-0000",
  email: "contato@interfitacademia.com.br",
  address: "Endereço da academia, 000 — Bairro, Cidade/UF",
  mapsUrl: "https://maps.google.com",
};

export const whatsappLink = (msg = "Olá! Quero saber mais sobre a Interfit.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const hero = {
  eyebrow: "Mais que uma academia",
  title: ["A sua melhor", "Versão", "começa aqui"],
  text: "Na Inter Fit, você encontra estrutura completa, profissionais qualificados e um ambiente feito para te motivar todos os dias.",
  cta: {
    label: "Agende sua aula experimental",
    message: "Olá! Quero agendar uma aula experimental na Interfit.",
  },
  secondary: "Ver planos",
  note: "Atendimento direto pelo WhatsApp, sem compromisso.",
  motto: ["Disciplina", "Foco", "Resultados"],
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

export const features = [
  {
    icon: "dumbbell",
    title: "Musculação",
    text: "Equipamentos modernos e acompanhamento profissional.",
  },
  {
    icon: "group",
    title: "Aulas coletivas",
    text: "Mais energia, motivação e resultados com nossos treinos em grupo.",
  },
  {
    icon: "heart",
    title: "Saúde e bem-estar",
    text: "Cuide do seu corpo e da sua mente.",
  },
  {
    icon: "pin",
    title: "Estrutura completa",
    text: "Ambiente climatizado, espaço amplo e moderno.",
  },
] as const;

export const modalidades = [
  { title: "Musculação", text: "Treino de força com orientação em todos os horários." },
  { title: "Aulas coletivas", text: "Ritmo, energia e turma para te manter constante." },
  { title: "Funcional", text: "Movimentos completos para condicionamento e agilidade." },
  { title: "Pilates", text: "Postura, mobilidade e fortalecimento do core." },
  { title: "Ballet", text: "Técnica, leveza e expressão para todas as idades." },
];

// TODO: valores e benefícios provisórios — substituir pelos planos reais
export const planos = [
  {
    name: "Mensal",
    price: "000",
    period: "/mês",
    perks: ["Musculação livre", "Avaliação física", "Acesso em todos os horários"],
    highlight: false,
  },
  {
    name: "Semestral",
    price: "000",
    period: "/mês",
    perks: ["Tudo do Mensal", "Aulas coletivas", "1 mês de Funcional grátis"],
    highlight: true,
  },
  {
    name: "Anual",
    price: "000",
    period: "/mês",
    perks: ["Tudo do Semestral", "Pilates ou Ballet", "Congelamento de 30 dias"],
    highlight: false,
  },
];

// TODO: confirmar horários
export const horarios = [
  { dia: "Segunda a sexta", hora: "05h30 – 23h00" },
  { dia: "Sábado", hora: "08h00 – 14h00" },
  { dia: "Domingo e feriados", hora: "08h00 – 12h00" },
];
