import type { Money } from "@/lib/money";

export type ProductMedia = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  price: Money;
  compareAtPrice?: Money;
  tags: string[];
  media: ProductMedia[];
  variants: ProductVariant[];
  collectionHandles: string[];
};

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  heroMedia: ProductMedia;
};

const currencyCode = "COP" as const;

export const collections: Collection[] = [
  {
    id: "col_essential",
    handle: "essential",
    title: "Essential",
    description: "Piezas esenciales con presencia y detalle.",
    heroMedia: {
      src: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&h=600&fit=crop",
      alt: "Colección Essential",
    },
  },
  {
    id: "col_new",
    handle: "new",
    title: "Nuevos",
    description: "Lanzamientos y selecciones recientes.",
    heroMedia: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      alt: "Colección Nuevos",
    },
  },
  {
    id: "col_featured",
    handle: "featured",
    title: "Destacados",
    description: "Los favoritos por diseño, calidad y demanda.",
    heroMedia: {
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      alt: "Colección Destacados",
    },
  },
];

export const products: Product[] = [
  {
    id: "prod_01",
    handle: "lux-minimal-watch",
    title: "Reloj Minimal",
    subtitle: "Acero cepillado · Cristal resistente",
    description:
      "Una pieza esencial con líneas limpias y un acabado sobrio. Diseñado para acompañarte en todo contexto.",
    highlights: ["Diseño limpio y atemporal", "Acabado premium", "Ideal para regalo"],
    specs: [
      { label: "Material", value: "Acero" },
      { label: "Resistencia", value: "Uso diario" },
      { label: "Estilo", value: "Minimal" },
    ],
    price: { amount: 189900, currencyCode },
    compareAtPrice: { amount: 229900, currencyCode },
    tags: ["featured", "new"],
    media: [{ src: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop", alt: "Reloj Minimal" }],
    variants: [{ id: "var_01a", title: "Única", availableForSale: true }],
    collectionHandles: ["essential", "featured", "new"],
  },
  {
    id: "prod_02",
    handle: "lux-premium-earbuds",
    title: "Auriculares Premium",
    subtitle: "Sonido limpio · Estuche compacto",
    description:
      "Auriculares pensados para un uso real: cómodos, discretos y con un sonido claro.",
    highlights: ["Diseño discreto", "Controles simples", "Excelente relación diseño/valor"],
    specs: [
      { label: "Conexión", value: "Bluetooth" },
      { label: "Estuche", value: "Compacto" },
      { label: "Uso", value: "Diario" },
    ],
    price: { amount: 159900, currencyCode },
    tags: ["featured"],
    media: [{ src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop", alt: "Auriculares Premium" }],
    variants: [
      { id: "var_02a", title: "Negro", availableForSale: true },
      { id: "var_02b", title: "Blanco", availableForSale: true },
    ],
    collectionHandles: ["essential", "featured"],
  },
  {
    id: "prod_03",
    handle: "lux-leather-wallet",
    title: "Billetera Slim",
    subtitle: "Perfil delgado · Tacto suave",
    description:
      "Una billetera de perfil delgado, con presencia premium y una sensación precisa al tacto.",
    highlights: ["Perfil slim", "Detalles discretos", "Diseño listo para el día a día"],
    specs: [
      { label: "Formato", value: "Slim" },
      { label: "Capacidad", value: "Tarjetas + billetes" },
      { label: "Acabado", value: "Mate" },
    ],
    price: { amount: 79900, currencyCode },
    tags: ["new"],
    media: [{ src: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop", alt: "Billetera Slim" }],
    variants: [
      { id: "var_03a", title: "Grafito", availableForSale: true },
      { id: "var_03b", title: "Café", availableForSale: true },
    ],
    collectionHandles: ["essential", "new"],
  },
  {
    id: "prod_04",
    handle: "lux-sunglasses-classic",
    title: "Gafas Classic",
    subtitle: "Protección UV · Montura ligera",
    description:
      "Gafas de sol con diseño atemporal, montura ligera y protección UV400. Un complemento esencial.",
    highlights: ["Protección UV400", "Montura resistente", "Estilo versátil"],
    specs: [
      { label: "Protección", value: "UV400" },
      { label: "Material", value: "Acetato" },
      { label: "Peso", value: "Ligero" },
    ],
    price: { amount: 129900, currencyCode },
    compareAtPrice: { amount: 159900, currencyCode },
    tags: ["featured", "new"],
    media: [{ src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop", alt: "Gafas Classic" }],
    variants: [
      { id: "var_04a", title: "Negro", availableForSale: true },
      { id: "var_04b", title: "Carey", availableForSale: true },
    ],
    collectionHandles: ["essential", "featured", "new"],
  },
  {
    id: "prod_05",
    handle: "lux-backpack-urban",
    title: "Mochila Urban",
    subtitle: "Impermeable · Compartimentos inteligentes",
    description:
      "Mochila diseñada para el día a día urbana. Impermeable, con compartimentos organizados y diseño minimal.",
    highlights: ["Material impermeable", "Porta laptop", "Diseño minimalista"],
    specs: [
      { label: "Capacidad", value: "20L" },
      { label: "Material", value: "Poliéster premium" },
      { label: "Compartimentos", value: "3 principales" },
    ],
    price: { amount: 219900, currencyCode },
    tags: ["featured"],
    media: [{ src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop", alt: "Mochila Urban" }],
    variants: [{ id: "var_05a", title: "Gris", availableForSale: true }],
    collectionHandles: ["essential", "featured"],
  },
  {
    id: "prod_06",
    handle: "lux-cable-organizer",
    title: "Organizador de Cables",
    subtitle: "Silicona premium · Sistema modular",
    description:
      "Organizador de cables de silicona premium. Sistema modular que se adapta a tus necesidades.",
    highlights: ["Silicona premium", "Sistema modular", "Adhesivo reutilizable"],
    specs: [
      { label: "Material", value: "Silicona" },
      { label: "Piezas", value: "7 unidades" },
      { label: "Adhesivo", value: "3M" },
    ],
    price: { amount: 45900, currencyCode },
    tags: ["new"],
    media: [{ src: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&h=600&fit=crop", alt: "Organizador de Cables" }],
    variants: [{ id: "var_06a", title: "Gris", availableForSale: true }],
    collectionHandles: ["new"],
  },
  {
    id: "prod_07",
    handle: "lux-notebook-premium",
    title: "Libreta Premium",
    subtitle: "Papel de calidad · Tapa rígida",
    description:
      "Libreta con tapa rígida texturizada y papel de alta calidad. Ideal para notas, sketches o journaling.",
    highlights: ["Papel 100gsm", "Tapa rígida", "Cierre elástico"],
    specs: [
      { label: "Páginas", value: "240" },
      { label: "Tamaño", value: "A5" },
      { label: "Papel", value: "100gsm" },
    ],
    price: { amount: 58900, currencyCode },
    compareAtPrice: { amount: 69900, currencyCode },
    tags: ["featured"],
    media: [{ src: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop", alt: "Libreta Premium" }],
    variants: [
      { id: "var_07a", title: "Negro", availableForSale: true },
      { id: "var_07b", title: "Azul", availableForSale: true },
    ],
    collectionHandles: ["essential", "featured"],
  },
  {
    id: "prod_08",
    handle: "lux-bottle-minimal",
    title: "Botella Minimal",
    subtitle: "Acero inoxidable · Doble pared",
    description:
      "Botella térmica de doble pared con aislamiento al vacío. Mantiene bebidas frías 24h o calientes 12h.",
    highlights: ["Doble pared", "Acero inoxidable", "500ml"],
    specs: [
      { label: "Capacidad", value: "500ml" },
      { label: "Material", value: "Acero 304" },
      { label: "Aislamiento", value: "12h caliente / 24h frío" },
    ],
    price: { amount: 89900, currencyCode },
    tags: ["new"],
    media: [{ src: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop", alt: "Botella Minimal" }],
    variants: [
      { id: "var_08a", title: "Negro", availableForSale: true },
      { id: "var_08b", title: "Blanco", availableForSale: true },
      { id: "var_08c", title: "Verde", availableForSale: true },
    ],
    collectionHandles: ["essential", "new"],
  },
];

export function getCollectionByHandle(handle: string) {
  return collections.find((c) => c.handle === handle);
}

export function getProductByHandle(handle: string) {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCollection(handle: string) {
  return products.filter((p) => p.collectionHandles.includes(handle));
}
