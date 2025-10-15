const HomeGallery = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestra Galería</h2>
        <p className="text-muted-foreground">Conoce nuestros proyectos y servicios</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
            <span className="text-primary font-semibold">Imagen {item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeGallery;