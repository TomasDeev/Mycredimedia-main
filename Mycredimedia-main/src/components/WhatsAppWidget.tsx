import { MessageSquare, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "18095967222";
  const message = "¡Hola! Me interesa obtener información sobre sus préstamos vehiculares.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      {/* WhatsApp Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-border animate-fade-in mb-4">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">MyCredimedia</h3>
                <p className="text-xs opacity-90">En línea</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                ¡Hola! 👋 Somos MyCredimedia. ¿En qué podemos ayudarte hoy?
              </p>
              <p className="text-xs text-gray-500 mt-1">Hace unos segundos</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-800">
                Opciones rápidas:
              </p>
              <div className="space-y-2">
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                  💰 Información sobre préstamos
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                  🚗 Financiamiento de vehículos
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                  📍 Ubicaciones y horarios
                </button>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative group">
        {/* 3D Shadow Effect */}
        <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl animate-pulse-glow" />
        
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-float"
        >
          <MessageSquare className="w-8 h-8 text-white" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-xs text-white font-bold">1</span>
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-20" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;