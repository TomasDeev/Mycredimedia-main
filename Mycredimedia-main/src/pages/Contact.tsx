import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+1 (809) 596-7222",
      description: "Lun-Vie: 9AM-6PM | Sáb: 9AM-1PM"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@mycredimedia.com", 
      description: "Respuesta en 24 horas"
    },
    {
      icon: MapPin,
      title: "Dirección Principal",
      value: "Av. Rómulo Betancourt 283, Bella Vista",
      description: "Distrito Nacional, Rep. Dom."
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      value: "Lunes a Sábado",
      description: "Lun-Vie: 9:00 AM - 6:00 PM | Sáb: 9:00 AM - 1:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Contacta</span> con Nosotros
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte con tu financiamiento vehicular. 
              Contáctanos en cualquiera de nuestras sucursales en República Dominicana.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="font-medium text-foreground mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellidos</Label>
                        <Input id="lastName" placeholder="Tus apellidos" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+1 (809) 000-0000" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Asunto</Label>
                      <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-0">
                    <div className="h-80 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2861284087!2d-70.0104!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e2b3456789%3A0x12345!2sAv.%20Rómulo%20Betancourt%20283!5e0!3m2!1ses!2sdo!4v1234567890"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación MyCredimedia"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">¿Necesitas Ayuda Inmediata?</h3>
                    <p className="text-muted-foreground mb-4">
                      Llámanos ahora y obtén una cotización inmediata para tu préstamo vehicular.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        <Phone className="w-4 h-4 mr-2" />
                        +1 (809) 596-7222
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Mail className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              ¿Listo para obtener tu préstamo?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Solicita tu préstamo ahora y obtén una respuesta en menos de 24 horas.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/solicitar-prestamo")}
            >
              Solicitar Préstamo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;