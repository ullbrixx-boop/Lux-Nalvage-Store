import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center py-16">
      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Code */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop" 
              alt="Página no encontrada" 
              className="w-64 h-48 object-cover rounded-2xl mx-auto opacity-80"
              loading="lazy"
            />
          </div>
          
          <div className="text-6xl md:text-7xl font-light text-[#D4AF37]/30 mb-4">
            404
          </div>
          
          <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-4">
            Página no encontrada
          </h1>
          
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
            No te preocupes, te ayudamos a encontrar lo que necesitas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver Atrás
            </Button>
            
            <Link to="/">
              <Button className="bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white gap-2">
                <Home className="w-4 h-4" />
                Ir al Inicio
              </Button>
            </Link>
          </div>

          {/* Suggested Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">¿Buscabas alguna de estas páginas?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/shop"
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm hover:border-[#D4AF37] transition-colors"
              >
                Tienda
              </Link>
              <Link
                to="/track"
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm hover:border-[#D4AF37] transition-colors"
              >
                Rastrear Pedido
              </Link>
              <Link
                to="/help"
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm hover:border-[#D4AF37] transition-colors"
              >
                Ayuda
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm hover:border-[#D4AF37] transition-colors"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
