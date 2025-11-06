import { ProductCard } from './ProductCard'
import { products } from '@/lib/data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4)

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            המוצרים המובילים שלנו
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            מבחר מיוחד של יצירות בטון בעבודת יד, שנבחרו במיוחד עבורכם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" variant="outline">
              לכל המוצרים
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
