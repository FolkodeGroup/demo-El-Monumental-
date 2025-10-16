import type { Product } from '../data';

interface CartModalProps {
  isOpen: boolean;
  cartItems: Product[];
  onClose: () => void;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
  onRemoveItem: (itemId: number) => void;
  whatsappNumber: string;
  onClearCart: () => void;
}

const CartModal = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  whatsappNumber,
  onClearCart,
}: CartModalProps) => {
  if (!isOpen) return null;

  // Group products and count quantities
  const groupedCart = cartItems.reduce((acc, product) => {
    const existing = acc.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, [] as (Product & { quantity: number })[]);

  const totalPrice = groupedCart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const generateWhatsAppMessage = () => {
    let message = 'Hola, quisiera consultar por el siguiente pedido:\n\n';
    groupedCart.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total estimado: $${totalPrice.toFixed(2)}*`;
    return encodeURIComponent(message);
  };

  const handleSendOrder = () => {
    const link = `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(link, '_blank');
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold font-serif">Mi Pedido</h2>
          <button onClick={onClose} className="text-3xl leading-none p-2 hover:text-red-600">&times;</button>
        </div>
        
        {groupedCart.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {groupedCart.map(item => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-grow">
                  <p className="font-bold">{item.name} <span className="text-sm font-normal text-gray-500">(${item.price.toFixed(2)} c/u)</span></p>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} 
                      className="px-2 py-0.5 border rounded hover:bg-gray-100 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} 
                      className="px-2 py-0.5 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 font-semibold">
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}

        {groupedCart.length > 0 && (
          <div className="border-t pt-4 mt-4 flex justify-between items-center">
            <div className="font-bold text-xl">
              <span>Total:</span>
              <span className="ml-2">${totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={handleSendOrder}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              Cotizar por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
