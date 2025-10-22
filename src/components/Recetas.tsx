const Recetas = () => {
  return (
    <section id="recetas" className="py-16 bg-[#f7d6d6]"> {/* rojo claro */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-wide">Preguntas Frecuentes</h2>
          <p className="max-w-2xl mx-auto text-lg">Encontrá preguntas que nos hacen frecuentemente</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

      <div className="bg-background rounded-xl overflow-hidden border border-gray-200"></div>
        <p>1- ¿Cual es la zona de entrega?</p>
        <p>Entregamos en casi todos los barrios de AMBA y en ciertas localidades que superen el monto requerido.</p>
        <br />
        <p>2- ¿Existe un monto mínimo de pedido?</p>
        <p>Sí, por cuestiones logísticas, el monto mínimo para los pedidos online, provisoriamente es de $10.000.-</p>
        <br />
        <p>3- ¿Hasta qué hora puedo realizar un pedido?</p>
        <p>Los pedidos se pueden hacer las 24hs, los 365 días del año! Si querés recibir o retirar tu pedido en el día, deberás hacerlo antes de las 19 hs si lo necesitás en el día.</p>
      </div>
    </section>
  );
};

export default Recetas;
