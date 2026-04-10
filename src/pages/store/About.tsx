import { motion } from "framer-motion";
import { Gem, Shield, Truck, Heart, Award, Users } from "lucide-react";
import { storeConfig } from "@/data/storeConfig";

const values = [
  {
    icon: Gem,
    title: "Excelencia",
    description: "Seleccionamos cada producto con los más altos estándares de calidad y diseño.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Tu seguridad es nuestra prioridad. Compra con total tranquilidad.",
  },
  {
    icon: Truck,
    title: "Compromiso",
    description: "Envíos rápidos y seguros a cualquier parte del país.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y eso se refleja en cada detalle.",
  },
];

const stats = [
  { value: "10K+", label: "Clientes Satisfechos" },
  { value: "50K+", label: "Productos Entregados" },
  { value: "99%", label: "Reviews Positivas" },
  { value: "24h", label: "Soporte Disponible" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Hero */}
      <div className="bg-[#0A0A0A] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
              Sobre {storeConfig.brand.name}
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              {storeConfig.brand.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light tracking-wide mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {storeConfig.brand.name} nació de una visión simple: hacer accessible el lujo a quienes valoran la calidad 
                y el diseño. Comenzamos como un pequeño emprendimiento con una gran ambición: cambiar la forma en que 
                las personas descubren y adquieren productos premium.
              </p>
              <p>
                Hoy, nos hemos convertido en un destino de confianza para miles de clientes que buscan lo mejor en 
                tecnología, hogar, moda y estilo de vida. Cada producto en nuestro catálogo es cuidadosamente 
                seleccionado para cumplir con nuestros exigentes estándares de calidad.
              </p>
              <p>
                Nuestra filosofía es simple: ofrecer productos excepcionales, un servicio al cliente incomparable 
                y una experiencia de compra sin igual.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop" 
                alt="Equipo Lux Nalvage" 
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light tracking-wide mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Los principios que guían cada decisión y cada interacción con nuestros clientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0A0A0A] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-light text-[#D4AF37] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-wide mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Un grupo apasionado de profesionales dedicados a brindarte la mejor experiencia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl p-12 text-center"
        >
          <Users className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h3 className="text-xl font-medium mb-4">Únete a Nuestro Equipo</h3>
          <p className="text-gray-600 max-w-lg mx-auto mb-6">
            Siempre estamos buscando talento apasionado que comparta nuestra visión de excelencia. 
            Si te interesa formar parte de {storeConfig.brand.name}, nos encantaría conocerte.
          </p>
          <a
            href={`mailto:${storeConfig.contact.email}?subject=Oportunidades Laborales`}
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline"
          >
            Envía tu CV
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
