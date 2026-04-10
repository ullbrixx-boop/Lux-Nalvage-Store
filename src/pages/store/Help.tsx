import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Truck, RotateCcw, CreditCard, Package, ShieldCheck, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: "Envíos",
    question: "¿Cuánto tarda en llegar mi pedido?",
    answer: "Los envíos dentro de Colombia tardan entre 3-5 días hábiles. Para ciudades principales como Bogotá, Medellín, Cali y Barranquilla, el tiempo puede ser de 2-3 días hábiles.",
  },
  {
    category: "Envíos",
    question: "¿Cómo puedo rastrear mi pedido?",
    answer: "Una vez que tu pedido sea enviado, recibirás un email con el número de guía. También puedes rastrear tu pedido en la página 'Rastrear Pedido' ingresando tu número de orden y email.",
  },
  {
    category: "Pagos",
    question: "¿Qué métodos de pago aceptan?",
    answer: "Actualmente aceptamos pagos contra entrega (efectivo o datáfono al momento de recibir). Próximamente agregaremos pagos con tarjeta de crédito, débito y transferencias bancarias.",
  },
  {
    category: "Devoluciones",
    question: "¿Puedo devolver un producto?",
    answer: "Sí, tienes hasta 30 días calendario desde la recepción del producto para solicitar una devolución. El producto debe estar sin usar, en su empaque original y con todos los accesorios.",
  },
  {
    category: "Devoluciones",
    question: "¿Cómo solicito un cambio o devolución?",
    answer: "Contacta a nuestro equipo de soporte vía email o WhatsApp con tu número de pedido. Te guiaremos por el proceso y coordinaremos la recolección del producto sin costo adicional.",
  },
  {
    category: "Pedidos",
    question: "¿Puedo modificar mi pedido después de confirmarlo?",
    answer: "Si tu pedido aún no ha sido procesado, podemos ayudarte a modificarlo. Contacta lo antes posible a nuestro soporte para verificar el estado de tu orden.",
  },
  {
    category: "Productos",
    question: "¿Los productos tienen garantía?",
    answer: "Todos nuestros productos incluyen garantía del fabricante. Adicionalmente, ofrecemos 30 días de garantía de satisfacción: si no estás feliz con tu compra, te devolvemos el dinero.",
  },
  {
    category: "Seguridad",
    question: "¿Es seguro comprar en Lux Nalvage?",
    answer: "Absolutamente. Utilizamos conexiones seguras SSL y nunca almacenamos información de pago sensible. Tu privacidad y seguridad son nuestra prioridad.",
  },
];

const categories = [
  { icon: Truck, label: "Envíos", color: "bg-blue-50 text-blue-600" },
  { icon: RotateCcw, label: "Devoluciones", color: "bg-green-50 text-green-600" },
  { icon: CreditCard, label: "Pagos", color: "bg-purple-50 text-purple-600" },
  { icon: Package, label: "Pedidos", color: "bg-orange-50 text-orange-600" },
  { icon: ShieldCheck, label: "Seguridad", color: "bg-red-50 text-red-600" },
];

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            Centro de Ayuda
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Encuentra respuestas a las preguntas más comunes o contacta a nuestro equipo de soporte.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar respuestas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-14 pl-12 text-lg"
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat.label ? null : cat.label)
              }
              className={`p-4 rounded-xl border transition-all text-center ${
                selectedCategory === cat.label
                  ? "border-[#D4AF37] bg-[#D4AF37]/5"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className={`w-10 h-10 rounded-full ${cat.color} flex items-center justify-center mx-auto mb-2`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 mb-4">No encontramos resultados para tu búsqueda.</p>
              <Link to="/contact" className="text-[#D4AF37] hover:underline">
                Contacta a nuestro equipo de soporte →
              </Link>
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center p-8 bg-[#0A0A0A] text-white rounded-2xl"
        >
          <h3 className="text-xl font-medium mb-2">¿No encontraste lo que buscabas?</h3>
          <p className="text-gray-400 mb-6">
            Nuestro equipo de soporte está listo para ayudarte con cualquier duda adicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A0A0A]">
                Enviar Mensaje
              </Button>
            </Link>
            <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#D4AF37] hover:bg-[#B8962F] text-white">
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
