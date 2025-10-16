const Hero = () => {
  return (
    <section id="inicio" className="relative py-16 md:py-24 bg-gradient-to-r from-secondary to-text-primary text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide font-serif">Desde 1996: Tradición Industrial</h1>
          <p className="text-xl mb-8 max-w-lg">Carnes premium con trazabilidad garantizada. Calidad que se siente en cada corte.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#catalogo" className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors text-center">
              Ver Catálogo
            </a>
            <a href="#empresa" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-text-primary transition-colors text-center">
              Nuestra Historia
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img src="/logoMonumental.webp" alt="Logo El Monumental" className="rounded-xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-lg" />
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg font-bold">
              ¡Nueva Temporada!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
