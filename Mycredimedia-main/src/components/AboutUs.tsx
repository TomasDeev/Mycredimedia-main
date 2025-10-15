import { Users, Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const AboutUs = () => {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation(0.2);
  const valuesRef = useStaggerAnimation(0.15);

  const values = [
    {
      icon: Award,
      title: "Profesionalidad",
      description: "Nuestro servicio es personalizado y altamente profesional."
    },
    {
      icon: Heart,
      title: "Honestidad", 
      description: "Con nuestros clientes y socios nuestra relación es de transparencia, lealtad e integridad."
    },
    {
      icon: Users,
      title: "Confianza",
      description: "Damos lo que ofrecemos y mucho más."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* About Us Header */}
        <div ref={titleRef as any} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Sobre <span className="text-primary">Nosotros</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              MyCredimedia fue fundada en Santo Domingo, en el año 2012, por el grupo NSP, 
              con el objetivo de dar a las personas la posibilidad de acceder a préstamos 
              ultra rápidos en el ramo de vehículos usados y otras áreas. Actualmente 
              concentra sus operaciones en el área metropolitana, enfocados en proveer 
              servicios integrados y soluciones ágiles de alta confiabilidad.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div ref={cardsRef as any} className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Misión</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Proveer soluciones de crédito no bancario, de manera oportuna y 
                enfocada en satisfacer a nuestros clientes a mediano y largo plazo.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="w-10 h-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Visión</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Posicionarnos como líderes en servicios de préstamos ultra rápidos, 
                brindando una experiencia de alta calidad, que sea reconocida por 
                nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div ref={contentRef as any} className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">
            Nuestros <span className="text-primary">Valores</span>
          </h3>
        </div>

        <div ref={valuesRef as any} className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;