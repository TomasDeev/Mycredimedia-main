import { Clock, CreditCard, DollarSign, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const titleRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation(0.15);
  const ctaRef = useScrollAnimation();

  const benefits = [
    {
      icon: Clock,
      title: "Desembolso inmediato",
      description: "Entendemos tu situación, por eso desembolsamos en 2 horas",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Facilidades de pago",
      description: "Realiza tus pagos a través de transferencias, depósitos o en nuestras oficinas",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Tasas bajas",
      description: "Te ofrecemos tasas comodísimas y hasta 60 meses para pagar",
      color: "text-primary"
    },
    {
      icon: UserCheck,
      title: "No importa tu historial",
      description: "No nos fijamos en tu historial crediticio, con nosotros tienes las puertas abiertas",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={titleRef as any} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Por qué nos <span className="text-primary">prefieren?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las ventajas que nos hacen la mejor opción para tus necesidades de préstamos
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={cardsRef as any} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${benefit.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef as any} className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Listo para obtener tu préstamo?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a miles de clientes satisfechos que han confiado en nosotros
            </p>
            <button 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              onClick={() => navigate("/solicitar-prestamo")}
            >
              Solicitar Préstamo Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;