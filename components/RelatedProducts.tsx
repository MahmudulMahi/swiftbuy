import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
  limit?: number;
}

export default function RelatedProducts({
  currentProduct,
  allProducts,
  limit = 4,
}: RelatedProductsProps) {
  // Get products from the same category, excluding the current product




  return (
    <section className="border-t border-gray-200 pt-12 mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">You may also like</h2>
        <a
          href={`/?category=${currentProduct.category}`}
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          View all →
        </a>
      </div>
  
    </section>
  );
}