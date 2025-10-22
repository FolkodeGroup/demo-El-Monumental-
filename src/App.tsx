import { useMemo, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BannerSlider from './components/BannerSlider';
import Empresa from './components/Empresa';
import Catalogo from './components/Catalogo';
import Recetas from './components/Recetas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartModal from './components/CartModal';
import Mayorista from './components/Mayorista';
import Minorista from './components/Minorista';
import TikTokSection from './components/TikTokSection';

import type { Product } from './data';

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Espera a que el DOM esté listo
    }
  }, [location]);

  const totalItemsInCart = useMemo(() => {
    // Esto agrupa los productos y suma sus cantidades para mostrar el número correcto en el ícono del carrito.
    const grouped = cart.reduce((acc, product) => {
      const existing = acc.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, [] as (Product & { quantity: number })[]);
    return grouped.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const onUpdateQuantity = (itemId: number, newQuantity: number) => {
    const productToUpdate = cart.find(p => p.id === itemId);
    if (!productToUpdate) return;

    const otherItems = cart.filter(p => p.id !== itemId);
    const updatedItems = Array(newQuantity).fill(productToUpdate);

    setCart([...otherItems, ...updatedItems]);
  };

  const onRemoveItem = (itemId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const onClearCart = () => {
    setCart([]);
  };

  const whatsappLink = useMemo(() => {
    const whatsappNumber = "5491131078008"; // Tu número de WhatsApp
    if (cart.length === 0) {
      return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quisiera hacer una consulta.')}`;
    }

    const grouped = cart.reduce((acc, product) => {
      const existing = acc.find(item => item.id === product.id);
      if (existing) existing.quantity += 1;
      else acc.push({ ...product, quantity: 1 });
      return acc;
    }, [] as (Product & { quantity: number })[]);
    const totalPrice = grouped.reduce((total, item) => total + (item.price * item.quantity), 0);

    let message = 'Hola, quisiera consultar por el siguiente pedido:\n\n';
    grouped.forEach(item => { message += `- ${item.name} (x${item.quantity})\n`; });
    message += `\n*Total estimado: $${totalPrice.toFixed(2)}*`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [cart]);

  return (
    <div className="bg-background text-text-primary font-sans">
      <Routes>
        <Route path="/mayorista" element={<Mayorista />} />
        <Route path="/minorista" element={<Minorista />} />
        <Route path="/" element={
          <>
            <Header
              cartItemCount={totalItemsInCart}
              onCartClick={() => setIsCartOpen(true)}
              whatsappLink={whatsappLink}
              onClearCart={onClearCart}
              hasItems={cart.length > 0}
            />
            <main>
              <BannerSlider />
              <Hero />
              <Empresa />
              <Catalogo addToCart={addToCart} />
              <TikTokSection />
              <Recetas />
              <Contacto />
            </main>
            <WhatsAppButton />
            <Footer />
            <CartModal
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cartItems={cart}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
              whatsappNumber="5491131078008"
              onClearCart={onClearCart}
            />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;