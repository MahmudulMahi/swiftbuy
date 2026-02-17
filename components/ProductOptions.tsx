'use client';

import { useState } from 'react';
import { Product } from '@/types/product';

interface ProductOptionsProps {
  product: Product;
  onSelectionChange?: (selections: {
    color?: string;
    size?: string;
    quantity: number;
  }) => void;
}

export default function ProductOptions({
  product,
  onSelectionChange,
}: ProductOptionsProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);

  const maxQuantity = product.stock || 99;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    notifyChange(color, selectedSize, quantity);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    notifyChange(selectedColor, size, quantity);
  };

  const handleQuantityChange = (newQuantity: number) => {
    const clampedQuantity = Math.max(1, Math.min(newQuantity, maxQuantity));
    setQuantity(clampedQuantity);
    notifyChange(selectedColor, selectedSize, clampedQuantity);
  };

  const notifyChange = (
    color: string | null,
    size: string | null,
    qty: number
  ) => {
    if (onSelectionChange) {
      onSelectionChange({
        color: color || undefined,
        size: size || undefined,
        quantity: qty,
      });
    }
  };

  return (
    <div className="space-y-8 border-t border-gray-200 pt-8">
      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <div className="flex items-center justify-start mb-4">
            <label className="block text-base font-semibold text-gray-900 mr-2">
              Color
            </label>
            {selectedColor && (
              <span className="text-sm font-medium text-gray-600">
                ({selectedColor})
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => {
              const isSelected = selectedColor === color;
              const colorValue = getColorValue(color);
              
              return (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-gray-900 ring-2 ring-gray-900 ring-offset-2 scale-110 shadow-lg'
                      : 'border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-md'
                  }`}
                  style={
                    colorValue
                      ? {
                          backgroundColor: colorValue,
                        }
                      : undefined
                  }
                  aria-label={`Select color ${color}`}
                  aria-pressed={isSelected}
                  title={color}
                >
                  {!colorValue && (
                    <span className={`text-xs font-semibold ${
                      isSelected ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {color.charAt(0).toUpperCase()}
                    </span>
                  )}
                  {isSelected && colorValue && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white drop-shadow-md"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}

                </button>
              );
            })}
          </div>
        </div>
      )}




    </div>
  );
}

