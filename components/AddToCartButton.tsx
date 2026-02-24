'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';
import { FiShoppingCart, FiCheck } from 'react-icons/fi';

interface AddToCartButtonProps {
  product: Product;
  selectedColor?: string;
  selectedSize?: string;
  quantity: number;
  className?: string;
}

export default function AddToCartButton({
  product,
  selectedColor,
  selectedSize,
  quantity,
  className = '',
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);



  return (
    <button
      onClick={handleAddToCart}
      className={`group relative w-full overflow-hidden rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] ${className}`}
    >

    </button>
  );
}