import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué documentos necesito para solicitar un préstamo?",
      answer: "Para solicitar un préstamo con tu vehículo necesitas: matrícula del vehículo (debes ser el titular), cédula de identidad vigente, comprobante de ingresos y una tasación del vehículo (nosotros la realizamos)."
    },
    {
      question: "¿Cuánto tiempo toma la aprobación del préstamo?",
      answer: "Nuestro proceso de aprobación es muy rápido. Una vez que entregues todos los documentos requeridos, obtienes una respuesta en un máximo de 24 horas. En muchos casos, la aprobación puede ser el mismo día."
    },
    {
      question: "¿Puedo mantener mi vehículo durante el préstamo?",
      answer: "¡Sí! Una de nuestras principales ventajas es que puedes mantener y usar tu vehículo normalmente durante todo el período del préstamo. Solo necesitamos la matrícula como garantía."
    },
    {
      question: "¿Cuál es el monto máximo que puedo obtener?",
      answer: "Puedes obtener hasta el 70% del valor comercial de tu vehículo. El monto exacto depende del año, marca, modelo y estado del vehículo. Realizamos una tasación gratuita para determinar el valor."
    },
    {
      question: "¿Qué tasas de interés manejan?",
      answer: "Nuestras tasas son muy competitivas, comenzando desde 1.5% mensual. La tasa final depende del monto del préstamo, el plazo y tu perfil crediticio."
    },
    {
      question: "¿Qué tipos de vehículos aceptan como garantía?",
      answer: "Aceptamos automóviles, motocicletas, camiones ligeros y vehículos comerciales. El vehículo debe tener menos de 15 años de antigüedad y estar en buen estado."
    },
    {
      question: "¿Puedo pagar el préstamo antes del plazo establecido?",
      answer: "¡Por supuesto! Puedes realizar pagos anticipados o cancelar el préstamo en cualquier momento sin penalizaciones adicionales. Esto te ayudará a ahorrar en intereses."
    },
    {
      question: "¿Qué pasa si no puedo pagar una cuota?",
      answer: "Entendemos que pueden surgir dificultades. Te recomendamos contactarnos inmediatamente para buscar soluciones como reestructuración del préstamo o planes de pago flexibles."
    },
    {
      question: "¿Necesito un avalista o codeudor?",
      answer: "No, no necesitas avalista ni codeudor. Tu vehículo sirve como garantía suficiente para el préstamo, simplificando el proceso considerablemente."
    },
    {
      question: "¿Cómo se realiza la entrega del dinero?",
      answer: "Una vez aprobado el préstamo, puedes recibir el dinero mediante transferencia bancaria el mismo día o retirar un cheque en nuestras oficinas. Tú eliges la opción que más te convenga."
    }
  ];

  const categories = [
    "Proceso de Solicitud",
    "Documentación",
    "Términos y Condiciones",
    "Pagos y Plazos"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros 
              servicios de financiamiento vehicular.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in-up">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-6 py-2 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        <span className="text-base font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4">¿No encontraste tu respuesta?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está disponible para resolver cualquier duda específica 
              que puedas tener sobre nuestros servicios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contactar Especialista
              </Button>
              <Button variant="outline" size="lg">
                Chat en Vivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Proceso Rápido
              </h3>
              <p className="text-primary-foreground/80">
                Aprobación en 24 horas máximo
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Sin Complicaciones
              </h3>
              <p className="text-primary-foreground/80">
                Documentos mínimos requeridos
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Tasa Competitiva
              </h3>
              <p className="text-primary-foreground/80">
                Desde 1.5% mensual
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;