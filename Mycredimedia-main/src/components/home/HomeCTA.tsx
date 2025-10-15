import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HomeCTA = () => {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para obtener tu préstamo vehicular?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Obtén financiamiento hasta el 70% del valor de tu vehículo con las mejores tasas del mercado.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Solicitar Préstamo Ahora
        </Button>
      </Card>
    </section>
  );
};

export default HomeCTA;