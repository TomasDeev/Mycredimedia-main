import { CheckCircle, FileText, CreditCard, Banknote } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: FileText,
      title: "Documentación",
      desc: "Reúne los documentos necesarios para tu solicitud"
    },
    {
      icon: CheckCircle,
      title: "Evaluación",
      desc: "Evaluamos tu vehículo y capacidad de pago"
    },
    {
      icon: CreditCard,
      title: "Aprobación",
      desc: "Recibe la aprobación de tu préstamo"
    },
    {
      icon: Banknote,
      title: "Desembolso",
      desc: "Obtén tu dinero de forma rápida y segura"
    }
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
        <p className="text-muted-foreground">Simple, rápido y transparente</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;