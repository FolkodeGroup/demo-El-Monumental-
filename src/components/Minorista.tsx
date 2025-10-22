import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

/* const scrollSections = [
  { label: 'Inicio', hash: 'inicio' },
  { label: 'Empresa', hash: 'empresa' },
  { label: 'Catálogo', hash: 'catalogo' },
  { label: 'Preguntas', hash: 'recetas' },
  { label: 'Contacto', hash: 'contacto' },
]; */

const Minorista = () => {
  const navigate = useNavigate();
  const handleCartClick = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const handleClearCart = useCallback(() => {}, []);
  const whatsappLink = 'https://wa.me/5491131078008?text=Hola,%20quisiera%20hacer%20una%20consulta.';

  // Navegación a sección de la home
 /*  const handleSectionNav = (hash: string) => {
    navigate(`/?section=${hash}`);
  }; */

  return (
    <>
      <Header
        cartItemCount={0}
        onCartClick={handleCartClick}
        whatsappLink={whatsappLink}
        onClearCart={handleClearCart}
        hasItems={false}
      />
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-serif">Venta Minorista</h1>
        <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
          ¡Muy pronto vas a poder comprar tus cortes favoritos directo desde la web!<br />
          Estamos preparando una experiencia de compra pensada para vos.
        </p>
        <div className="text-2xl text-gray-500 font-semibold border-2 border-dashed border-primary rounded-lg px-8 py-6 bg-white/80">En construcción 🚧</div>
        {/* <nav className="mt-10 flex flex-wrap gap-4 justify-center">
          {scrollSections.map(s => (
            <button
              key={s.hash}
              className="text-primary underline hover:text-primary-dark transition-colors px-3 py-1"
              onClick={() => handleSectionNav(s.hash)}
            >
              {s.label}
            </button>
          ))}
        </nav> */}
      </section>
      <Footer />
    </>
  );
};

export default Minorista;
