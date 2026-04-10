import { motion } from "framer-motion";
import { RotateCcw, Calendar, Package, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Returns() {
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
              <RotateCcw className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              Cambios y Devoluciones
            </h1>
            <p className="text-gray-600">
              Última actualización: Abril 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-8">
            {/* Guarantee */}
            <div className="bg-[#D4AF37]/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
              <h2 className="text-xl font-medium mb-2">Garantía de Satisfacción 30 Días</h2>
              <p className="text-gray-600">
                Si no estás completamente satisfecho con tu compra, tienes 30 días para devolverla. 
                Te devolvemos el 100% de tu dinero, sin preguntas.
              </p>
            </div>

            {/* Timeframe */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Plazo para Devoluciones</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tienes hasta 30 días calendario desde la fecha de recepción del producto para 
                solicitar una devolución. Pasados estos 30 días, no podremos aceptar devoluciones 
                excepto en casos de garantía del fabricante.
              </p>
            </section>

            {/* Conditions */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Condiciones de Devolución</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Para que una devolución sea aceptada, el producto debe cumplir con:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Estar sin usar y en perfecto estado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Incluir empaque original completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Todos los accesorios y manuales incluidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Comprobante de compra (email de confirmación)</span>
                </li>
              </ul>
            </section>

            {/* Non-returnable */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-5 h-5 text-red-500" />
                <h2 className="text-xl font-medium">Productos No Aplicables</h2>
              </div>
              <p className="text-gray-600 mb-3">
                No aceptamos devoluciones de:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  Productos usados o dañados por el cliente
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  Productos sin empaque original
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  Productos personalizados o hechos a medida
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">•</span>
                  Productos en oferta especial "venta final"
                </li>
              </ul>
            </section>

            {/* Process */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Proceso de Devolución</h2>
              </div>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37] bg-[#D4AF37]/10 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium">Contacta a soporte</p>
                    <p className="text-sm text-gray-600">Escríbenos por email o WhatsApp con tu número de pedido.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37] bg-[#D4AF37]/10 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium">Recibe instrucciones</p>
                    <p className="text-sm text-gray-600">Te enviaremos una guía de devolución y número de autorización.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37] bg-[#D4AF37]/10 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium">Empaqueta el producto</p>
                    <p className="text-sm text-gray-600">Incluye el producto, accesorios y número de autorización.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37] bg-[#D4AF37]/10 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                  <div>
                    <p className="font-medium">Recolección o envío</p>
                    <p className="text-sm text-gray-600">Coordinamos recolección gratuita o puedes enviarlo tú mismo.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-[#D4AF37] bg-[#D4AF37]/10 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                  <div>
                    <p className="font-medium">Reembolso</p>
                    <p className="text-sm text-gray-600">Una vez recibido e inspeccionado, procesamos tu reembolso en 3-5 días hábiles.</p>
                  </div>
                </li>
              </ol>
            </section>

            {/* Important */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Notas Importantes</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  El costo de envío de devolución es gratis por defecto del producto.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Si cambias de opinión, el costo de envío de retorno puede aplicar.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Los reembolsos se procesan al método de pago original (contra entrega = transferencia bancaria).
                </li>
              </ul>
            </section>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">¿Necesitas iniciar una devolución?</p>
              <Link to="/contact">
                <Button className="bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white">
                  Contactar Soporte
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
