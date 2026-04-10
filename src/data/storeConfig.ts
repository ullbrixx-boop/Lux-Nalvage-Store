export const storeConfig = {
  brand: {
    name: "Lux Nalvage",
    tagline: "Diseño esencial. Selección curada.",
    description: "Una tienda moderna, minimalista y confiable con estética premium.",
  },
  currencyCode: "COP" as const,
  trustMessages: [
    "Envíos disponibles",
    "Pago contra entrega",
    "Compra segura",
    "Atención al cliente",
    "Proveedor verificado",
  ],
  shipping: {
    headline: "Envío rápido y confirmación",
    details: "Te contactamos para confirmar tu pedido. Pagas al recibir.",
  },
  contact: {
    email: "hola@luxnalvage.com",
    phone: "+57 300 123 4567",
    whatsapp: "https://wa.me/573001234567",
    address: "Bogotá, Colombia",
    hours: "Lun - Vie: 9am - 6pm",
  },
} as const;
