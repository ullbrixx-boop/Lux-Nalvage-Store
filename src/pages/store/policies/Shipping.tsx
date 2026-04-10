import { motion } from "framer-motion";
import { Truck, Clock, MapPin, Package, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              Política de Envíos
            </h1>
            <p className="text-gray-600">
              Última actualización: Abril 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-8">
            {/* Coverage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Cobertura</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Realizamos envíos a todo Colombia. Trabajamos con las principales transportadoras 
                (Servientrega, Inter Rapidísimo, Coordinadora) para garantizar la entrega segura y 
                oportuna de tus productos. Para zonas rurales o de difícil acceso, el tiempo de entrega 
                puede extenderse 1-2 días adicionales.
              </p>
            </section>

            {/* Times */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Tiempos de Entrega</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Ciudades principales</span>
                  <span className="text-[#D4AF37] font-medium">2-3 días hábiles</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Otras ciudades</span>
                  <span className="text-[#D4AF37] font-medium">3-5 días hábiles</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Zonas rurales</span>
                  <span className="text-[#D4AF37] font-medium">5-7 días hábiles</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Los tiempos de entrega comienzan a contar desde el siguiente día hábil después de la confirmación del pedido.
              </p>
            </section>

            {/* Cost */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Costos de Envío</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ofrecemos envío gratis en todos los pedidos superiores a $150,000 COP. Para pedidos 
                de menor valor, el costo de envío se calcula automáticamente al momento del checkout 
                según la ubicación de entrega, con tarifas desde $12,000 COP.
              </p>
              <div className="bg-[#D4AF37]/10 rounded-lg p-4">
                <p className="text-sm text-[#D4AF37] font-medium">
                  🎉 Envío gratis en pedidos superiores a $150,000 COP
                </p>
              </div>
            </section>

            {/* Process */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Proceso de Envío</h2>
              </div>
              <ol className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37]">1.</span>
                  Recibes confirmación de tu pedido por email.
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37]">2.</span>
                  Preparamos y empacamos tu pedido (1-2 días hábiles).
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37]">3.</span>
                  Enviamos tu pedido y te proporcionamos número de guía.
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37]">4.</span>
                  Recibes tu pedido en la dirección indicada.
                </li>
              </ol>
            </section>

            {/* Important */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Información Importante</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Asegúrate de proporcionar una dirección completa y correcta.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Incluye un número de teléfono activo para coordinar la entrega.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Alguien debe estar disponible para recibir el paquete.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Revisa el paquete antes de aceptarlo. Si hay daños, rechaza la entrega.
                </li>
              </ul>
            </section>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">¿Preguntas sobre tu envío?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/track">
                  <Button variant="outline">Rastrear Pedido</Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white">
                    Contactar Soporte
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
