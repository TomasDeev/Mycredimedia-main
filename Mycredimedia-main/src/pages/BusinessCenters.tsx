import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const BusinessCenters = () => {
  const centers = [
    {
      name: "Sucursal Rómulo Betancourt",
      address: "Av. Rómulo Betancourt 283, Bella Vista Distrito Nacional, Rep. Dom.",
      phone: "809-555-0001",
      hours: "Lun-Vie: 9:00 AM - 6:00 PM | Sáb: 9:00 AM - 1:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2861284087!2d-70.0104!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e2b3456789%3A0x12345!2sAv.%20Rómulo%20Betancourt%20283!5e0!3m2!1ses!2sdo!4v1234567890"
    },
    {
      name: "Sucursal Prolongación 27",
      address: "Prolongación 27 de Febrero, #580, Plaza Bohemia, Local 103, Santo Domingo Oeste, frente a la Cerveceria",
      phone: "809-555-0002",
      hours: "Lun-Vie: 9:00 AM - 6:00 PM | Sáb: 9:00 AM - 1:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2861284087!2d-70.0104!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e2b3456789%3A0x12345!2sProlongación%2027%20de%20Febrero!5e0!3m2!1ses!2sdo!4v1234567890"
    },
    {
      name: "Sucursal Villa Mella",
      address: "Plaza del Norte, Av. Hermanas Mirabal, Villa Mella, Santo Domingo Norte República Dominicana",
      phone: "809-555-0003",
      hours: "Lun-Vie: 9:00 AM - 6:00 PM | Sáb: 9:00 AM - 1:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2861284087!2d-70.0104!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e2b3456789%3A0x12345!2sAv.%20Hermanas%20Mirabal!5e0!3m2!1ses!2sdo!4v1234567890"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16 pt-32">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros <span className="text-primary">Centros de Negocios</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visítanos en cualquiera de nuestras sucursales ubicadas estratégicamente
            en República Dominicana para brindarte el mejor servicio.
          </p>
        </div>

        {/* Business Centers */}
        <div className="space-y-12">
          {centers.map((center, index) => (
            <Card
              key={index}
              className="overflow-hidden animate-scale-in hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Info Section */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">
                    {center.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{center.address}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{center.phone}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{center.hours}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                      Cómo Llegar
                    </button>
                  </div>
                </CardContent>

                {/* Map Section */}
                <div className="relative h-64 lg:h-full min-h-[300px]">
                  <iframe
                    src={center.mapUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${center.name}`}
                  ></iframe>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contáctanos o visita cualquiera de nuestras sucursales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Llamar Ahora
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                Enviar WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default BusinessCenters;