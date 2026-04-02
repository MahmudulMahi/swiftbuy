'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    selectedColor?: string,
    selectedSize?: string
  ) => void;
  removeFromCart: (productId: string, selectedColor?: string, selectedSize?: string) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    selectedColor?: string ,
    selectedSize?: string
  ) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);



export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}