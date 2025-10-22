export interface Product {
  id: number;
  name: string;
  category: 'vacuno' | 'pollo' | 'embutidos';
  type: 'premium' | 'standard';
  price: number;
  description: string;
  image: string; // URL to image
}

export const products: Product[] = [
  { id: 1, name: 'Bife de Chorizo', category: 'vacuno', type: 'premium', price: 1200, description: 'Corte de carne premium de la mejor calidad', image: '/Bife-de-Chorizo.webp' },
  { id: 2, name: 'Vacio', category: 'vacuno', type: 'premium', price: 950, description: 'Corte de carne premium de la mejor calidad', image: '/vacio.webp' },
  { id: 3, name: 'Asado', category: 'vacuno', type: 'standard', price: 850, description: 'Corte de carne premium de la mejor calidad', image: '/asado.webp' },
  { id: 4, name: 'Pechuga de Pollo', category: 'pollo', type: 'standard', price: 450, description: 'Corte de carne premium de la mejor calidad', image: '/dos-pechugas-de-pollo.webp' },
  { id: 5, name: 'Milanesas de Ternera', category: 'embutidos', type: 'premium', price: 650, description: 'Corte de carne premium de la mejor calidad', image: '/milanesas.webp' },
  { id: 6, name: 'Chorizo', category: 'embutidos', type: 'standard', price: 750, description: 'Corte de carne premium de la mejor calidad', image: '/chorizo-criollo.webp' },
];

export const contactOptions = [
  { id: 'mayorista', name: 'Mayorista', number: '+5491131078008' },
  { id: 'minorista1', name: 'Minorista Línea 1', number: '+5491131078008' },
  { id: 'minorista2', name: 'Minorista Línea 2', number: '+5491131078008' },
];
