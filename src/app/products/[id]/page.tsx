"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { products } from '@/lib/data'
import { ShoppingCart, Truck, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id === productId)
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
    }
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">המוצר לא נמצא</h1>
            <Link href="/products">
              <Button>חזרה לכל המוצרים</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b">
          <div className="container py-4 px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                דף הבית
              </Link>
              <ArrowRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-primary">
                מוצרים
              </Link>
              <ArrowRight className="h-4 w-4" />
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="container py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                <p className="text-muted-foreground">תמונת מוצר ראשית</p>
                {product.featured && (
                  <Badge className="absolute top-4 left-4">מומלץ</Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-muted rounded-lg cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge variant="outline">
                    {product.size === 'small' && 'קטן'}
                    {product.size === 'medium' && 'בינוני'}
                    {product.size === 'large' && 'גדול'}
                  </Badge>
                </div>
                <p className="text-4xl font-bold">₪{product.price}</p>
              </div>

              <div className="border-t pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">כמות:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="w-full" onClick={handleAddToCart}>
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  הוסף לעגלה - ₪{product.price * quantity}
                </Button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">משלוח חינם</p>
                    <p className="text-sm text-muted-foreground">
                      7 ימי עסקים לכל הארץ
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">איכות מובטחת</p>
                    <p className="text-sm text-muted-foreground">
                      כל מוצר עובר בדיקת איכות קפדנית
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t bg-muted/30 py-16">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8">מוצרים דומים</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
