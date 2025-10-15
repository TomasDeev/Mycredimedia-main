const InteractiveTimeline = () => {
  const steps = [
    { title: "Solicitud", desc: "Completa tu solicitud en línea" },
    { title: "Evaluación", desc: "Evaluamos tu vehículo y documentos" },
    { title: "Aprobación", desc: "Recibe la aprobación en 24 horas" },
    { title: "Desembolso", desc: "Obtén tu dinero de forma segura" }
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Proceso Simple y Rápido</h2>
        <p className="text-muted-foreground">En solo 4 pasos obtienes tu préstamo</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              {index + 1}
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveTimeline;