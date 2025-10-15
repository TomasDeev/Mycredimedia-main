import { TrendingUp, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const StatsSection = () => {
  const titleRef = useScrollAnimation();
  const statsRef = useStaggerAnimation(0.1);

  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Clientes Atendidos",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      number: "RD$500M+",
      label: "Préstamos Otorgados",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Award,
      number: "12",
      label: "Años de Experiencia",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Clock,
      number: "2",
      label: "Horas Promedio",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Números que nos <span className="text-white">Respaldan</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Más de una década brindando soluciones de préstamos confiables en República Dominicana
          </p>
        </div>

        <div ref={statsRef as any} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 group"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium group-hover:text-primary">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;