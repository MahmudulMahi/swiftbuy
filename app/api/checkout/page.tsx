import { Suspense } from 'react';
import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

interface HomeProps {
  searchParams: Promise<{ category?: string }>;
}

function ProductGridFallback() {
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4 border-b border-gray-200 pb-4">
        <div className="h-6 w-16 animate-pulse rounded bg-gray-200"></div>
        <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
        <div className="h-6 w-24 animate-pulse rounded bg-gray-200"></div>
      </div>

    </div>
  );
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const category = params.category || 'all';

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Suspense fallback={<ProductGridFallback />}>
        <ProductGrid products={products} initialCategory={category} />
      </Suspense>
    </div>
  );
}