const HomeMosaic = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-muted-foreground">Soluciones completas para tus necesidades financieras</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-primary font-semibold">Servicio {item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMosaic;