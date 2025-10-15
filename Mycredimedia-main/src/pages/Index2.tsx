import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import SEO from "@/components/SEO";
import { Building2, ShieldCheck, HandCoins, Leaf } from "lucide-react";

import HomeCTA from "@/components/home/HomeCTA";

import ScrollToTop from "@/components/common/ScrollToTop";
import FloatingChat from "@/components/common/FloatingChat";
import InteractiveFAQ from "@/components/home/InteractiveFAQ";

import HomeBenefits from "@/components/home/HomeBenefits";

import HomeMosaic from "@/components/home/HomeMosaic";

const Feature = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <div
    className="group relative p-8 rounded-2xl border bg-card/60 hover:bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Gradient background on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Animated icon container */}
    <div className="relative z-10 mb-6">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
        <Icon className="text-primary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      </div>
    </div>

    <div className="relative z-10">
      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{desc}</p>
    </div>

    {/* Decorative element */}
    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
  </div>
);

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MyCredimedia",
    url: "/",
    logo: "/favicon.svg",
    description:
      "Soluciones de préstamos vehiculares en República Dominicana con las mejores tasas y procesos rápidos.",
  };

  return (
    <>
      <SEO
        title="MyCredimedia — Préstamos Vehiculares en República Dominicana"
        description="Obtén financiamiento hasta el 70% del valor de tu vehículo con las mejores tasas desde 1.5%. Proceso rápido y seguro."
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <Hero />

        <section className="container mx-auto py-16 md:py-24 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl" />

          <div className="relative z-10">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Soluciones Innovadoras
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Transformamos tu sueño de manejar en realidad
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soluciones de préstamos vehiculares diseñadas para que obtengas el financiamiento que necesitas de forma rápida y segura.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: HandCoins,
                  title: "Tasas competitivas",
                  desc: "Las mejores tasas del mercado desde 1.5% mensual con términos flexibles y transparentes."
                },
                {
                  icon: Building2,
                  title: "Proceso rápido",
                  desc: "Aprobación en 24 horas con documentación mínima y sin complicaciones."
                },
                {
                  icon: Leaf,
                  title: "Sin cambio de titular",
                  desc: "Mantienes la propiedad de tu vehículo mientras obtienes el financiamiento que necesitas."
                },
                {
                  icon: ShieldCheck,
                  title: "Seguridad garantizada",
                  desc: "Procesos seguros y confiables respaldados por años de experiencia en el sector financiero."
                }
              ].map((feature, index) => (
                <Feature
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  desc={feature.desc}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <HomeBenefits />

        <section className="container mx-auto pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Interactive image container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/lovable-uploads/20c8a5e2-cacd-47ec-b6fb-52b56035f7f9.png"
                  alt="MyCredimedia - Financiamiento de vehículos en República Dominicana"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card rounded-2xl p-6 shadow-xl border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  Confianza y Experiencia
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Experiencia que
                  <span className="text-primary"> inspira confianza</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Más de una década en el sector financiero nos permite ofrecer soluciones de préstamos vehiculares serias y eficientes, con procesos claros y un trato personalizado.
                </p>
              </div>

              {/* Key points */}
              <div className="grid gap-4">
                {[
                  { icon: Building2, text: "Más de 2,500 clientes satisfechos con nuestros servicios" },
                  { icon: Leaf, text: "Líderes en préstamos vehiculares en República Dominicana" },
                  { icon: HandCoins, text: "Transparencia financiera y tasas competitivas garantizadas" }
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/60 hover:bg-card transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HomeMosaic />

        <InteractiveFAQ />

        <HomeCTA />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingChat />
    </>
  );
};

export default Index;
