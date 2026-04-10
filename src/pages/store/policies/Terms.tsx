import { motion } from "framer-motion";
import { FileText, Scale, Gavel, ShoppingBag, AlertCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
              <FileText className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-gray-600">
              Última actualización: Abril 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-8">
            <p className="text-gray-600 leading-relaxed">
              Bienvenido a Lux Nalvage. Al acceder y utilizar nuestro sitio web, aceptas cumplir 
              con estos términos y condiciones. Por favor, léelos cuidadosamente antes de realizar 
              una compra.
            </p>

            {/* Acceptance */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Aceptación de Términos</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Al utilizar este sitio web, realizar un pedido o crear una cuenta, confirmas que 
                has leído, entendido y aceptado estos términos y condiciones en su totalidad. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestro sitio.
              </p>
            </section>

            {/* Orders */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Pedidos y Compras</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Todos los pedidos están sujetos a disponibilidad de stock.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Nos reservamos el derecho de rechazar o cancelar pedidos por cualquier motivo.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Los precios pueden cambiar sin previo aviso, pero no afectarán pedidos ya confirmados.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Nos esforzamos por mostrar los colores y descripciones más precisas posibles, 
                  pero las variaciones de pantalla pueden causar diferencias menores.
                </li>
              </ul>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-xl font-medium mb-4">Pagos</h2>
              <p className="text-gray-600 mb-3">Actualmente aceptamos:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Pago contra entrega (COD):</strong> pagas al recibir el producto en efectivo o datáfono
                </li>
              </ul>
              <p className="text-gray-600 mt-3">
                El pago debe realizarse completo al momento de la entrega. No se entregarán productos 
                sin el pago correspondiente.
              </p>
            </section>

            {/* Shipping */}
            <section>
              <h2 className="text-xl font-medium mb-4">Envíos</h2>
              <p className="text-gray-600 leading-relaxed">
                Los tiempos de envío son estimados y comienzan desde el siguiente día hábil después 
                de la confirmación del pedido. No somos responsables por retrasos causados por la 
                transportadora o circunstancias fuera de nuestro control (clima, desastres naturales, etc.).
              </p>
            </section>

            {/* Returns Ref */}
            <section>
              <h2 className="text-xl font-medium mb-4">Devoluciones</h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestra política de devoluciones permite cambios y devoluciones dentro de los 30 días 
                calendario posteriores a la recepción. Para más detalles, consulta nuestra{" "}
                <Link to="/policies/returns" className="text-[#D4AF37] hover:underline">
                  Política de Cambios y Devoluciones
                </Link>.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Propiedad Intelectual</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Todo el contenido de este sitio (logos, textos, imágenes, diseños) es propiedad de 
                Lux Nalvage o de sus proveedores y está protegido por derechos de autor y otras 
                leyes de propiedad intelectual. No puedes reproducir, distribuir o usar este 
                contenido sin nuestro permiso expreso por escrito.
              </p>
            </section>

            {/* Limitation */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Limitación de Responsabilidad</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lux Nalvage no será responsable por daños indirectos, incidentales o consecuentes 
                derivados del uso de nuestros productos o sitio web. Nuestra responsabilidad máxima 
                se limitará al valor de tu compra.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-xl font-medium mb-4">Modificaciones</h2>
              <p className="text-gray-600 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
                entrarán en vigor inmediatamente después de su publicación en el sitio. Es tu 
                responsabilidad revisar periódicamente estos términos.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-medium mb-4">Ley Aplicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa 
                será resuelta en los tribunales competentes de Bogotá, Colombia.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Contacto</h2>
              </div>
              <p className="text-gray-600">
                Si tienes preguntas sobre estos términos, contáctanos:
              </p>
              <div className="mt-3 text-gray-600">
                <p>Email: legal@luxnalvage.com</p>
                <p>Dirección: Bogotá, Colombia</p>
              </div>
            </section>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">¿Preguntas sobre nuestros términos?</p>
              <Link to="/contact">
                <Button className="bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white">
                  Contactar Nosotros
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
