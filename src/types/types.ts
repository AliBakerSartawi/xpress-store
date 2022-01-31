import { Dispatch, SetStateAction } from 'react';

export interface Item {
  id: number;
  img: string;
  name: string;
  size: string;
  previousPrice?: number;
  price: number;
}

export interface CartItem {
  id: number;
  img: string;
  name: string;
  size: string | number;
  quantity: number;
  price: number;
}

export interface CartContext {
  cart: CartItem[] | null;
  setCart: Dispatch<SetStateAction<CartItem[] | null>>;
  subtotal: number;
  addToCart: (item: CartItem) => void
}
