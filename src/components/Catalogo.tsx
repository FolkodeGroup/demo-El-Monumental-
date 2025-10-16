import { useState } from 'react';
import { products as allProducts } from '../data.ts';
import type { Product } from '../data.ts';
import ProductGrid from './ProductGrid';

interface CatalogoProps {
  addToCart: (product: Product) => void;
}

const Catalogo = ({ addToCart }: CatalogoProps) => {
  const [filters, setFilters] = useState({
    category: 'all',
    type: 'all',
  });

  const filteredProducts = allProducts.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.type !== 'all' && product.type !== filters.type) return false;
    return true;
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <section id="catalogo" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-wide">Nuestro Catálogo</h2>
          <p className="max-w-2xl mx-auto text-lg">Selecciona tus productos favoritos y arma tu pedido en segundos</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Categoría</label>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="vacuno">Vacuno</option>
              <option value="pollo">Pollo</option>
              <option value="embutidos">Embutidos</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="premium">Premium</option>
              <option value="standard">Estándar</option>
              <option value="vegetarian">Vegetariano</option>
            </select>
          </div>
        </div>

        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </section>
  );
};

export default Catalogo;
