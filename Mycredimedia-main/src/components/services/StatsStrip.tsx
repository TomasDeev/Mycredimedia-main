const StatsStrip = () => {
  return (
    <section className="bg-primary/5 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2500+", label: "Clientes satisfechos" },
            { number: "98%", label: "Tasa de aprobación" },
            { number: "24h", label: "Tiempo de respuesta" },
            { number: "10+", label: "Años de experiencia" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;