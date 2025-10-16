import { useState } from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  whatsappLink: string;
  onClearCart: () => void;
  hasItems: boolean;
}

const Header = ({ cartItemCount, onCartClick, whatsappLink, onClearCart, hasItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConsultaClick = (e: React.MouseEvent) => {
    if (hasItems) {
      // Previene la navegación por defecto del <a> si hay items, para usar window.open
      e.preventDefault();
      window.open(whatsappLink, '_blank');
      onClearCart();
    }
    // Si no hay items, el <a> funcionará normalmente.
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logoMonumental.webp" alt="Logo El Monumental" className="w-12 h-12 mr-3" />
          <h1 className="text-2xl font-bold tracking-wider uppercase font-serif text-text-primary">El Monumental</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="font-medium hover:text-primary transition-colors">Inicio</a>
          <a href="#empresa" className="font-medium hover:text-primary transition-colors">Empresa</a>
          <a href="#catalogo" className="font-medium hover:text-primary transition-colors">Catálogo</a>
          <a href="#recetas" className="font-medium hover:text-primary transition-colors">Recetas</a>
          <a href="#contacto" className="font-medium hover:text-primary transition-colors">Contacto</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={onCartClick} className="relative p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            onClick={handleConsultaClick}
          >
            Consulta
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-6 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#empresa" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Empresa</a>
            <a href="#catalogo" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Catálogo</a>
            <a href="#recetas" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Recetas</a>
            <a href="#contacto" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors w-full text-center"
              onClick={handleConsultaClick}
            >
              Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;