import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { CartContext as CartContextInterface, CartItem } from 'src/types/types';

const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[] | null>(null);
  const [subtotal, setSubtotal] = useState(0);

  // Actions
  const addToCart = (item: CartItem) => {
    const { id, quantity } = item;
    if (!cart) {
      setCart([item]);
    } else {
      const isInCart = cart.some((item) => item.id === id);
      if (isInCart) {
        const newCart = cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        setCart(newCart);
      } else {
        setCart((prev) => [...prev!, item]);
      }
    }
  };

  const removeFromCart = (id: number) => {
    if (cart) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart.length ? newCart : null);
    }
  };

  const actions = {
    addToCart,
    removeFromCart
  };

  useEffect(() => {
    setSubtotal(
      cart
        ? cart.reduce((a, { price, quantity }) => {
            const itemSubTotal = price * quantity;
            return a + itemSubTotal;
          }, 0)
        : 0
    );
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, subtotal, actions }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context as CartContextInterface;
};
