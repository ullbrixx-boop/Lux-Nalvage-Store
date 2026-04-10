import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Package, Truck, Mail, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { storeConfig } from "@/data/storeConfig";

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order") || "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-[80vh] bg-[#F8F8F8]">
      {/* Hero Success */}
      <div className="bg-[#0A0A0A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-light tracking-wide mb-4"
          >
            ¡Gracias por tu compra!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-md mx-auto"
          >
            Tu pedido ha sido recibido y está siendo procesado. Te mantendremos informado sobre el estado de tu envío.
          </motion.p>
        </div>
      </div>

      {/* Order Details */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-1">Número de pedido</p>
            <p className="text-xl font-medium tracking-wider">{orderId}</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-medium text-sm mb-1">Pedido Confirmado</h3>
              <p className="text-xs text-gray-500">Hemos recibido tu pedido correctamente</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-medium text-sm mb-1">En Preparación</h3>
              <p className="text-xs text-gray-500">Empaquetando tu pedido con cuidado</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-medium text-sm mb-1">En Camino</h3>
              <p className="text-xs text-gray-500">Recibirás tu pedido en 3-5 días hábiles</p>
            </div>
          </div>

          {/* Email Notice */}
          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl mb-8">
            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm text-blue-900 mb-1">Confirmación por email</h4>
              <p className="text-sm text-blue-700">
                Hemos enviado un resumen de tu pedido a tu correo electrónico. Si no lo recibes en los próximos minutos, revisa tu carpeta de spam.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/track" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <Truck className="w-4 h-4" />
                Rastrear Pedido
              </Button>
            </Link>
            <Link to="/shop" className="flex-1">
              <Button className="w-full bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white gap-2">
                Seguir Comprando
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6 text-center"
        >
          <h3 className="font-medium mb-2">¿Necesitas ayuda?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier duda sobre tu pedido.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href={`mailto:${storeConfig.contact.email}`} className="text-[#D4AF37] hover:underline">
              {storeConfig.contact.email}
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a href={`tel:${storeConfig.contact.phone.replace(/\s/g, "")}`} className="text-[#D4AF37] hover:underline">
              {storeConfig.contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
