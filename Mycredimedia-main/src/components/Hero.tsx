import React, { useState, useEffect } from 'react';
import { Play, Phone, Clock, MessageCircle, ChevronRight, Shield, TrendingUp, Users, MapPin } from 'lucide-react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const day = now.getDay();
      const hour = now.getHours();
      
      let open = false;
      if (day >= 1 && day <= 5) {
        open = hour >= 9 && hour < 18;
      } else if (day === 6) {
        open = hour >= 9 && hour < 13;
      }
      
      setIsOpen(open);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const stats = [
    { label: 'Clientes Activos', value: '5,000+', icon: Users },
    { label: 'Años de Experiencia', value: '12+', icon: TrendingUp },
    { label: 'Préstamos Aprobados', value: '8,000+', icon: Shield },
    { label: 'Cobertura Total', value: 'Santo Domingo', icon: MapPin }
  ];

      const benefits = [
    { label: 'Aprobación rápida', img: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png' },
    { label: 'Seguro y confiable', img: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Shield/3D/shield_3d.png' },
    { label: 'Atención dedicada', img: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Headphone/3D/headphone_3d.png' },
    { label: 'Dinero al instante', img: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Money%20bag/3D/money_bag_3d.png' },
  ];

  return (
    <section className="relative min-h-screen bg-white">
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#f9ad03]/20 rounded-full text-sm font-semibold text-[#f9ad03]">
                Fundado en Santo Domingo  2012
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Préstamos<br />
                con tu <span className="text-[#f9ad03]">vehículo</span><br />
                en garantía
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Obtén financiamiento inmediato usando tu vehículo como garantía.
                Procesos ágiles, atención cercana y desembolso rápido.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-[#f9ad03] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/solicitar-prestamo"
                className="bg-[#f9ad03] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#f9ad03]/90 transition-all duration-300"
              >
                Solicitar Préstamo Vehicular
              </a>
              <a 
                href="/careers"
                className="border-2 border-[#f9ad03] text-[#f9ad03] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#f9ad03] hover:text-black transition-all duration-300"
              >
                Postularse
              </a>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold text-gray-600 mb-4">Beneficios clave</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3">
                    <img src={b.img} alt={b.label} className="h-10 w-10 object-contain" />
                    <span className="text-sm text-gray-700">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl overflow-hidden border border-[#f9ad03]/20">
                                          <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline>
                <source src="/Logo mycredimedia intro.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contacto Ejecutivo</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#F9AA02]" />
                  <div>
                    <div className="text-gray-800 font-bold">+1 (809) 596-7222</div>
                    <div className="text-gray-600 text-sm">Línea Directa Ejecutiva</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-[#F9AA02]" />
                  <div>
                    <div className="text-gray-800 font-bold">{isOpen ? 'Abierto' : 'Cerrado'}</div>
                    <div className="text-gray-600 text-sm">Lun-Vie 9AM-6PM, Sáb 9AM-1PM</div>
                  </div>
                </div>

                {/* BotÃ³n de WhatsApp Ejecutivo eliminado a solicitud */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



