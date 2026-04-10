import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Share2, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
              <Shield className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              Política de Privacidad
            </h1>
            <p className="text-gray-600">
              Última actualización: Abril 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-8">
            <p className="text-gray-600 leading-relaxed">
              En Lux Nalvage, tu privacidad es nuestra prioridad. Esta política describe cómo 
              recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro sitio web.
            </p>

            {/* Data Collection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Información que Recopilamos</h2>
              </div>
              <p className="text-gray-600 mb-3">Podemos recopilar la siguiente información:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Información de contacto:</strong> nombre, email, teléfono, dirección de envío
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Información de pedidos:</strong> productos comprados, historial de compras
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Información técnica:</strong> dirección IP, navegador, dispositivo
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Preferencias:</strong> productos vistos, lista de deseos
                </li>
              </ul>
            </section>

            {/* Usage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Cómo Usamos tu Información</h2>
              </div>
              <p className="text-gray-600 mb-3">Utilizamos tu información para:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Procesar y enviar tus pedidos
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Comunicarnos sobre tu pedido (confirmaciones, envíos)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Proporcionar soporte al cliente
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Mejorar nuestros productos y servicios
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Enviar comunicaciones promocionales (solo si aceptaste)
                </li>
              </ul>
            </section>

            {/* Protection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Seguridad de la Información</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
              </p>
              <ul className="space-y-2 text-gray-600 mt-3">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Conexiones SSL/TLS encriptadas en todo el sitio
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  No almacenamos información de pago sensible
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Acceso restringido a datos personales (solo personal autorizado)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Auditorías regulares de seguridad
                </li>
              </ul>
            </section>

            {/* Sharing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Compartir Información</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                No vendemos ni alquilamos tu información personal. Solo compartimos datos con:
              </p>
              <ul className="space-y-2 text-gray-600 mt-3">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Transportadoras:</strong> para realizar la entrega de tus pedidos
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar el sitio
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <strong>Cumplimiento legal:</strong> cuando sea requerido por ley
                </li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-medium mb-4">Cookies y Tecnologías Similares</h2>
              <p className="text-gray-600 leading-relaxed">
                Usamos cookies para mejorar tu experiencia: recordar tu carrito, analizar tráfico 
                y personalizar contenido. Puedes desactivar cookies en tu navegador, aunque esto 
                puede afectar la funcionalidad del sitio.
              </p>
            </section>

            {/* Rights */}
            <section>
              <h2 className="text-xl font-medium mb-4">Tus Derechos</h2>
              <p className="text-gray-600 mb-3">Tienes derecho a:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Acceder a tu información personal
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Corregir datos inexactos
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Solicitar la eliminación de tus datos
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Retirar tu consentimiento de marketing
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-medium">Contacto</h2>
              </div>
              <p className="text-gray-600">
                Si tienes preguntas sobre esta política o deseas ejercer tus derechos, contáctanos:
              </p>
              <div className="mt-3 text-gray-600">
                <p>Email: privacidad@luxnalvage.com</p>
                <p>Dirección: Bogotá, Colombia</p>
              </div>
            </section>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">¿Preguntas sobre privacidad?</p>
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
