import { Car, CreditCard, Shield, Clock, DollarSign, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Préstamos con Vehículo",
      description: "Financiamiento hasta el 70% del valor de tu vehículo sin cambio de titular",
      features: ["Mantienes tu vehículo", "Proceso 100% digital", "Sin avales necesarios"]
    },
    {
      icon: CreditCard,
      title: "Compra de Vehículos",
      description: "Te ayudamos a financiar la compra de tu vehículo nuevo o usado",
      features: ["Hasta 5 años de plazo", "Tasa preferencial", "Entrega inmediata"]
    },
    {
      icon: Shield,
      title: "Proceso Seguro",
      description: "Todas las transacciones están respaldadas y son completamente seguras",
      features: ["Protección legal", "Contratos certificados", "Respaldo jurídico"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Aprobación Rápida",
      description: "24 horas",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Tasa Competitiva",
      description: "Desde 1.5%",
      color: "text-primary"
    },
    {
      icon: FileCheck,
      title: "Documentos Mínimos",
      description: "Solo matrícula",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Servicios de <span className="text-primary">Crédito a tu Medida</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones de préstamos flexibles y seguras para que puedas 
            manejar el vehículo de tus sueños hoy mismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${benefit.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className={`text-2xl font-bold ${benefit.color} mb-1`}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;