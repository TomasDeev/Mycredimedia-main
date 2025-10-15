import { FileText, CreditCard, CheckCircle, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Solicita",
      description: "Completa nuestra solicitud online o visita nuestras oficinas con tu matrícula del vehículo",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: CreditCard,
      title: "2. Evaluamos", 
      description: "Nuestros expertos evalúan tu vehículo y determinan el monto disponible hasta el 70%",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: CheckCircle,
      title: "3. Aprobamos",
      description: "Recibe la aprobación en menos de 24 horas sin importar tu historial crediticio",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Car,
      title: "4. ¡Disfruta!",
      description: "Recibe tu dinero en 2 horas y mantén tu vehículo. ¡Es así de simple!",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Proceso <span className="text-primary">Súper Fácil</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En solo 4 pasos sencillos tendrás el dinero que necesitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines for larger screens */}
          <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-primary animate-pulse" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className="hover:shadow-elegant transition-all duration-500 hover:-translate-y-4 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 mt-4 group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-primary animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in" style={{ animationDelay: "1s" }}>
          <div className="inline-flex items-center space-x-4 bg-gradient-primary rounded-full p-2 pr-6 text-primary-foreground shadow-glow">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <span className="font-semibold">¿Listo para comenzar? ¡Solicita tu préstamo ahora!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;