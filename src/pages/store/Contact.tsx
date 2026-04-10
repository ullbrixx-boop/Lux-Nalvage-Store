import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { storeConfig } from "@/data/storeConfig";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hola@luxnalvage.com",
      href: "mailto:hola@luxnalvage.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 300 123 4567",
      href: "tel:+573001234567",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Bogotá, Colombia",
      href: "#",
    },
    {
      icon: Clock,
      label: "Horario",
      value: "Lun - Vie: 9am - 6pm",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            Contáctanos
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Asunto</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="¿Sobre qué nos quieres hablar?"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600 mb-6">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-green-900 mb-1">¿Prefieres WhatsApp?</h3>
                  <p className="text-sm text-green-700 mb-3">
                    Escríbenos directamente para una respuesta más rápida.
                  </p>
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline"
                  >
                    Abrir WhatsApp
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
