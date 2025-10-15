import { useState } from "react";
import { ChevronDown } from "lucide-react";

const InteractiveFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuáles son los requisitos para solicitar un préstamo?",
      answer: "Necesitas ser mayor de edad, tener ingresos comprobables y el vehículo debe estar libre de gravámenes."
    },
    {
      question: "¿Cuánto tiempo tarda la aprobación?",
      answer: "El proceso de aprobación toma entre 24 a 48 horas hábiles una vez entregada toda la documentación."
    },
    {
      question: "¿Puedo mantener mi vehículo?",
      answer: "Sí, mantienes la posesión y uso de tu vehículo durante todo el período del préstamo."
    }
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
        <p className="text-muted-foreground">Resolvemos tus dudas más comunes</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === index && (
              <div className="p-4 border-t bg-gray-50">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveFAQ;