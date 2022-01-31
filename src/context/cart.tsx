import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { CartContext as CartContextInterface, CartItem } from 'src/types/types';

const CartContext = createContext<CartContextInterface>({
  cart: null,
  setCart: () => null,
  subtotal: 0
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[] | null>(null);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(cart ? cart.reduce((a, v) => a + v.price, 0) : 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)