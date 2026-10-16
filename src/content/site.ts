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
  // Número da bio do Instagram; confirmar se é o WhatsApp de atendimento
  whatsapp: "5534996701212",
  phone: "(34) 99670-1212",
  email: "contato@interfitacademia.com.br",
  // TODO: confirmar cidade/UF (inferido pelo DDD 34 e pelo bairro Taiaman)
  address: "R. dos Taroís, 459 — Taiaman, Uberlândia/MG",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("R. dos Taroís, 459 - Taiaman, Uberlândia - MG"),
  convenios: ["Gympass", "TotalPass"],
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
  card: {
    label: "Aula experimental",
    text: "Conheça a estrutura e treine com orientação, sem compromisso.",
  },
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
  { title: "Nutri", text: "Acompanhamento nutricional alinhado ao seu treino." },
  { title: "Muay Thai", text: "Técnica, condicionamento e energia nas aulas de luta." },
  { title: "FitDance", text: "Dança e ritmo para treinar se divertindo." },
  { title: "GAP", text: "Glúteos, abdômen e pernas com foco em definição." },
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
    perks: ["Tudo do Mensal", "Aulas coletivas", "Acesso às modalidades"],
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
