import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* Section with centered title and feature cards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/8 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/3 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Centered title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Soluciones Innovadoras
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformamos la <span className="text-primary">gestión de tu préstamo vehicular</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Servicios diseñados para personas que buscan orden, ahorro y tranquilidad con tecnología de vanguardia.
            </p>
            
            {/* Stats strip */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Años</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Aprobación</div>
              </div>
            </div>
          </div>

          {/* Feature cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💰",
                title: "Tasas competitivas",
                desc: "Las mejores tasas del mercado desde 1.5% mensual con términos flexibles y transparentes.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: "🏢",
                title: "Proceso rápido",
                desc: "Aprobación en 24 horas con documentación mínima y sin complicaciones.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: "🌱",
                title: "Sin cambio de titular",
                desc: "Mantienes la propiedad de tu vehículo mientras obtienes el financiamiento que necesitas.",
                color: "from-primary to-orange-600"
              },
              {
                icon: "🛡️",
                title: "Seguridad garantizada",
                desc: "Procesos seguros y confiables respaldados por años de experiencia en el sector financiero.",
                color: "from-purple-500 to-indigo-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border bg-white hover:bg-primary/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container with gradient */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl filter drop-shadow-sm">{feature.icon}</span>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <StatsSection />
      <ProcessSection />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
