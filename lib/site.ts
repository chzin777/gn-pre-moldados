// Dados centrais da empresa. Troque o WhatsApp pelo número real quando tiver.
// Formato do WhatsApp: código país + DDD + número, só dígitos. Ex.: 5544999998888

export const site = {
  name: "GN Pré-moldados",
  shortName: "GN",
  slogan: "Qualidade que sustenta, confiança que constrói.",
  description:
    "Lajes, pingadeiras e blocos EPS pré-moldados com qualidade que sustenta e confiança que constrói. Peça seu orçamento.",
  whatsapp: {
    // +55 62 9558-9798
    number: "556295589798",
    message: "Olá! Vim pelo site e gostaria de um orçamento de pré-moldados.",
  },
  city: "Goiânia / GO",
  // Domínio: usa NEXT_PUBLIC_SITE_URL se existir (ex.: domínio real ou URL .vercel.app);
  // senão cai no placeholder. Sem domínio ainda? Pode deixar como está.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.gnpremoldados.com.br",
  address: {
    locality: "Goiânia",
    region: "GO",
    country: "BR",
  },
} as const;

// Palavras-chave para SEO (busca no Google)
export const keywords = [
  "lajes",
  "lajes pré-moldadas",
  "lajes treliçadas",
  "lajes personalizadas",
  "serviço de laje",
  "fábrica de lajes",
  "laje para laje",
  "bloco",
  "blocos de concreto",
  "blocos EPS",
  "bloco de isopor para laje",
  "pré-moldados",
  "pre moldados",
  "pré moldados de concreto",
  "premoldados",
  "pingadeiras",
  "vigotas",
  "canaletas",
  "postes de concreto",
  "mourões",
  "pré-moldados Goiânia",
  "lajes Goiânia",
  "GN Pré-moldados",
];

export function whatsappUrl(extraMessage?: string) {
  const text = encodeURIComponent(extraMessage ?? site.whatsapp.message);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

export type ProductId =
  | "laje"
  | "bloco-eps"
  | "pingadeira"
  | "bloco-concreto"
  | "canaleta"
  | "poste";

export interface Product {
  id: ProductId;
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "laje",
    name: "Lajes Treliçadas",
    tagline: "Estrutura leve, montagem rápida",
    description:
      "Lajes treliçadas pré-moldadas que aceleram a obra e reduzem o uso de escoramento. Alta resistência para residências e comércios.",
    features: [
      "Vigotas treliçadas de alta resistência",
      "Vãos otimizados conforme projeto",
      "Menos escoramento, obra mais rápida",
      "Padronização e controle de qualidade",
    ],
  },
  {
    id: "bloco-eps",
    name: "Blocos EPS",
    tagline: "Leveza e isolamento térmico",
    description:
      "Blocos de EPS de enchimento que aliviam o peso da laje e melhoram o conforto térmico e acústico do ambiente.",
    features: [
      "Redução significativa de peso próprio",
      "Isolamento térmico e acústico",
      "Fácil manuseio e encaixe",
      "Dimensões sob medida",
    ],
  },
  {
    id: "pingadeira",
    name: "Pingadeiras",
    tagline: "Proteção que prolonga a vida da obra",
    description:
      "Pingadeiras pré-moldadas que protegem muros e paredes da água da chuva, evitando infiltração e manchas ao longo do tempo.",
    features: [
      "Acabamento uniforme e durável",
      "Desvio eficiente da água da chuva",
      "Protege contra infiltração e mofo",
      "Diversos comprimentos disponíveis",
    ],
  },
  {
    id: "bloco-concreto",
    name: "Blocos de Concreto",
    tagline: "Alvenaria estrutural e de vedação",
    description:
      "Blocos de concreto vibrado com dimensões padronizadas para alvenaria estrutural e de vedação. Resistência uniforme e assentamento rápido.",
    features: [
      "Resistência controlada por lote",
      "Modulação que reduz quebras",
      "Furos para passagem de instalações",
      "Linhas estrutural e de vedação",
    ],
  },
  {
    id: "canaleta",
    name: "Canaletas",
    tagline: "Vergas, contravergas e cintas",
    description:
      "Blocos canaleta em formato “U” para execução de vergas, contravergas e cintas de amarração com armadura e concreto.",
    features: [
      "Formato “U” para receber armadura",
      "Reforço sobre vãos de portas e janelas",
      "Compatível com a modulação dos blocos",
      "Mais agilidade na amarração",
    ],
  },
  {
    id: "poste",
    name: "Postes e Mourões",
    tagline: "Cercas e divisas que duram",
    description:
      "Postes e mourões de concreto armado para cercas e divisas. Alta durabilidade, resistentes ao tempo e à umidade — sem apodrecer como a madeira.",
    features: [
      "Concreto armado de alta durabilidade",
      "Furos para passagem de arame",
      "Não apodrece nem é atacado por cupim",
      "Comprimentos e seções sob medida",
    ],
  },
];

export const differentials = [
  {
    title: "Qualidade certificada",
    description:
      "Controle rigoroso em cada peça produzida, do traço do concreto à cura.",
  },
  {
    title: "Prazo que respeita sua obra",
    description: "Produção planejada e entrega no tempo combinado.",
  },
  {
    title: "Entrega na obra",
    description: "Logística própria para levar os pré-moldados até você.",
  },
  {
    title: "Atendimento técnico",
    description: "Orientação sobre dimensionamento, vãos e aplicação correta.",
  },
];

// Galeria de obras — troque `image` pelo caminho real em /public quando tiver as fotos.
export interface Obra {
  title: string;
  location: string;
  category: string;
  image?: string;
  /** Várias imagens = carrossel. Tem prioridade sobre `image`. */
  images?: string[];
}

// Fotos: imagens de stock (Unsplash) como exemplo. Troque pelos caminhos das
// fotos reais das suas obras quando tiver (ex.: "/obras/laje-residencial.jpg").
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&q=70&auto=format&fit=crop`;

export const obras: Obra[] = [
  {
    title: "Concretagem de laje residencial — 180 m²",
    location: "Goiânia / GO",
    category: "Laje treliçada",
    images: [
      "https://www.tecnosilbr.com.br/wp-content/uploads/2018/02/image1-1-1024x768-1.jpg",
      "https://cdn.oantagonista.com/uploads/2026/06/Laje1.png",
    ],
  },
  { title: "Estrutura em alvenaria estrutural", location: "Senador Canedo / GO", category: "Blocos de concreto", image: "https://estudeengenharia.com/wp-content/uploads/2024/10/alv_est-1024x486.png" },
  { title: "Obra em execução", location: "Trindade / GO", category: "Pré-moldados GN", image: "https://www.cimentoitambe.com.br/wp-content/uploads/2019/12/concretagem.jpg" },
  { title: "Projeto e dimensionamento", location: "Goiânia / GO", category: "Assistência técnica", image: "https://wikihaus.com.br/wikihauslab/2017/wp-content/uploads/2017/10/imagem-1.jpg" },
];

// avatar: fotos de stock (randomuser.me) como exemplo. rating em estrelas (1-5).
export const depoimentos = [
  {
    quote:
      "A laje chegou no prazo e o pessoal ainda orientou a equipe na montagem. Obra rendeu muito mais.",
    author: "Marcos Vinícius",
    role: "Construtor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote:
      "Conheci a GN há pouco tempo e já virou minha indicação certa: padrão de qualidade e entrega no prazo que eu posso confiar pro cliente.",
    author: "Eng. Patrícia Lemes",
    role: "Engenheira civil",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    quote:
      "Pedi orçamento pelo WhatsApp e em minutos já tinha tudo certo. Bloco EPS deixou a laje bem mais leve.",
    author: "João Ribeiro",
    role: "Cliente residencial",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
];

export const normas = [
  { code: "NBR 14859", title: "Lajes pré-fabricadas — requisitos" },
  { code: "NBR 6118", title: "Projeto de estruturas de concreto" },
  { code: "NBR 6136", title: "Blocos vazados de concreto" },
];

export const atuacao = {
  base: "Região Metropolitana de Goiânia / GO",
  raio: "Entrega em obra num raio de até 80 km",
  cidades: [
    "Goiânia",
    "Aparecida de Goiânia",
    "Senador Canedo",
    "Trindade",
    "Goianira",
    "Nerópolis",
    "Hidrolândia",
    "Bela Vista de Goiás",
  ],
};

export const faqs = [
  {
    q: "Vocês fazem entrega na obra?",
    a: "Sim. Temos logística própria para entrega na sua obra. Consulte a região atendida ao pedir o orçamento pelo WhatsApp.",
  },
  {
    q: "Como funciona o orçamento de laje?",
    a: "Precisamos das medidas do vão (largura x comprimento) e da finalidade (residencial, comercial, cobertura). Com isso indicamos o tipo de vigota e a quantidade de blocos.",
  },
  {
    q: "Qual o prazo de produção e entrega?",
    a: "O prazo varia conforme o volume e a região. Peças padrão costumam ter pronta saída; sob medida têm prazo informado no orçamento.",
  },
  {
    q: "Os blocos EPS substituem qualquer enchimento?",
    a: "O EPS é indicado para aliviar o peso da laje e melhorar o conforto térmico. A escolha do enchimento ideal depende do projeto — orientamos no atendimento.",
  },
  {
    q: "Vocês atendem pessoa física e construtoras?",
    a: "Sim, atendemos tanto o cliente final quanto construtoras e revendas, com condições conforme o volume.",
  },
];
