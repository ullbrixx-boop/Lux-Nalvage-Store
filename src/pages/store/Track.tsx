import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, Truck, CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TrackingStep {
  status: string;
  location: string;
  date: string;
  time: string;
  completed: boolean;
  current: boolean;
}

const mockTrackingData: TrackingStep[] = [
  {
    status: "Pedido Confirmado",
    location: "Sistema",
    date: "10 Abr 2026",
    time: "14:30",
    completed: true,
    current: false,
  },
  {
    status: "En Preparación",
    location: "Almacén Central",
    date: "10 Abr 2026",
    time: "16:45",
    completed: true,
    current: false,
  },
  {
    status: "Enviado",
    location: "Centro de Distribución",
    date: "11 Abr 2026",
    time: "09:20",
    completed: true,
    current: true,
  },
  {
    status: "En Tránsito",
    location: "En camino a destino",
    date: "Pendiente",
    time: "--:--",
    completed: false,
    current: false,
  },
  {
    status: "Entregado",
    location: "Dirección de entrega",
    date: "Pendiente",
    time: "--:--",
    completed: false,
    current: false,
  },
];

export default function Track() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId && email) {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-3">
            Rastrear Pedido
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Ingresa tu número de pedido y email para consultar el estado de tu envío en tiempo real.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8"
        >
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Número de Pedido</label>
              <Input
                type="text"
                placeholder="Ej: ORD-ABC123XYZ"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white gap-2"
            >
              <Search className="w-4 h-4" />
              Buscar Pedido
            </Button>
          </form>
        </motion.div>

        {/* Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Order Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Pedido</p>
                  <p className="text-lg font-medium">{orderId || "ORD-DEMO123"}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  Entrega estimada: 13-15 Abr 2026
                </div>
              </div>

              {/* Progress Steps */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-6">
                  {mockTrackingData.map((step, index) => (
                    <div key={index} className="relative flex gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${
                          step.completed
                            ? "bg-[#D4AF37] text-white"
                            : step.current
                            ? "bg-[#D4AF37]/20 text-[#D4AF37] border-2 border-[#D4AF37]"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : step.current ? (
                          <Truck className="w-5 h-5" />
                        ) : (
                          <Clock className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h4
                            className={`font-medium ${
                              step.current ? "text-[#D4AF37]" : step.completed ? "text-gray-900" : "text-gray-400"
                            }`}
                          >
                            {step.status}
                            {step.current && (
                              <span className="ml-2 text-xs bg-[#D4AF37] text-white px-2 py-0.5 rounded">
                                Actual
                              </span>
                            )}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {step.date} • {step.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {step.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-[#0A0A0A] text-white rounded-2xl p-6 text-center">
              <Package className="w-8 h-8 mx-auto mb-3 text-[#D4AF37]" />
              <h3 className="font-medium mb-2">¿Problemas con tu envío?</h3>
              <p className="text-sm text-gray-400 mb-4">
                Si tu pedido no ha llegado en la fecha estimada o tienes alguna duda, contáctanos.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A0A0A]">
                Contactar Soporte
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
