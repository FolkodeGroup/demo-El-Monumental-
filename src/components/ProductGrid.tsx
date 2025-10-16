import ProductCard from './ProductCard';
import type { Product } from '../data.ts';

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductGrid = ({ products, addToCart }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;