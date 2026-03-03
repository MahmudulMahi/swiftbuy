import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductActions from '@/components/ProductActions';
import ProductDetailsTabs from '@/components/ProductDetailsTabs';
import RelatedProducts from '@/components/RelatedProducts';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href={`/?category=${product.category}`}
              className="hover:text-gray-900 transition-colors capitalize"
            >
              {product.category}
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Product Section */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          {/* Product Images */}
          <div className="sticky top-8 self-start">
            <ProductImageGallery
              images={product.images || [product.image]}
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Product Title & Price */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                <span className="text-lg font-normal text-gray-500">
                  {product.currency}
                </span>
              </div>
            </div>


            {/* Short Description */}
            <div className="mb-8">
              <p className="text-base leading-7 text-gray-600">
                {product.description}
              </p>
            </div>

            {/* Product Actions (Options, Add to Cart, Highlights) */}
            <ProductActions product={product} />
          </div>
        </div>


      </div>
    </>
  );
}