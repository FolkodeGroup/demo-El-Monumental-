const Recetas = () => {
  return (
    <section id="recetas" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-wide">Recetas Destacadas</h2>
          <p className="max-w-2xl mx-auto text-lg">Descubrí nuevas formas de disfrutar nuestros productos</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-background rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Receta Premium #{item}</h3>
                <p className="text-gray-600 mb-4">Aprende a preparar este delicioso plato con ingredientes de El Monumental</p>
                <button className="text-primary font-medium hover:underline">
                  Ver Receta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recetas;
