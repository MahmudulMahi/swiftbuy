'use client';

import { useState } from 'react';
import ProductImage from './ProductImage';


export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Use the first image as default if no images provided
  const displayImages = images.length > 0 ? images : [];
  const selectedImage = displayImages[selectedImageIndex] || '';

  if (displayImages.length === 0) {
    return null;
  }



  return (
    <div className="space-y-5">
      {/* Main Image */}
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-200">
        <div
          key={selectedImageIndex}
          className="h-full w-full animate-fade-in"
        >
          <ProductImage
            src={selectedImage}
            alt={`${productName} - Image ${selectedImageIndex + 1}`}
            width={800}
            height={800}
            className="h-full w-full object-cover object-center transition-opacity duration-300"
            fallbackText={productName}
          />
        </div>
      </div>


    </div>
  );
}