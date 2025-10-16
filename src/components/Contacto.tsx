import { contactOptions } from '../data.ts';

const Contacto = () => {
  return (
    <section id="contacto" className="py-16 bg-secondary text-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-wide">Contactanos</h2>
          <p className="max-w-2xl mx-auto text-lg">¿Tienes alguna consulta? Estamos aquí para ayudarte</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Canales de Atención</h3>

            <div className="space-y-6">
              {contactOptions.map(option => (
                <div key={option.id} className="flex items-start p-4 bg-background bg-opacity-10 rounded-lg">
                  <div className="mr-4 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{option.name}</h4>
                    <p className="text-accent">{option.number}</p>
                    <a href={`https://wa.me/${option.number}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition-colors">
                      Contactar por WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Envianos tu Consulta</h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-1 font-medium">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Tipo de Consulta</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary">
                  <option>Mayorista</option>
                  <option>Minorista</option>
                  <option>Proveedores</option>
                  <option>RRHH</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
