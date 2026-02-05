'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import ProductOptions from './ProductOptions';
import AddToCartButton from './AddToCartButton';
import ProductHighlights from './ProductHighlights';

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors?.[0]
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes?.[0]
  );
  const [quantity, setQuantity] = useState(1);



  return (
    <>
      {/* Product Options */}
      <div className="mb-8">
        <ProductOptions
          product={product}
          onSelectionChange={handleSelectionChange}
        />
      </div>

      {/* Add to Cart Section */}


      {/* Product Highlights */}
      <ProductHighlights />
    </>
  );
}