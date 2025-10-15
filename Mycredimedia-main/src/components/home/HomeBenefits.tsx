import { CheckCircle, Clock, Shield } from "lucide-react";

const HomeBenefits = () => {
  const benefits = [
    { text: "Aprobación en 24 horas", icon: Clock },
    { text: "Sin cambio de titular", icon: Shield },
    { text: "Mantienes tu vehículo", icon: CheckCircle },
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestros Beneficios</h2>
        <p className="text-muted-foreground">Las ventajas de elegir MyCredimedia</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center p-6 rounded-lg border">
            <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold">{benefit.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBenefits;