"use client"

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { ProductFilters } from '@/components/ProductFilters'
import { products } from '@/lib/data'

export default function ProductsPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = products.filter((product) => {
    if (selectedSize && product.size !== selectedSize) return false
    if (selectedCategory && product.category !== selectedCategory) return false
    return true
  })

  const handleReset = () => {
    setSelectedSize(null)
    setSelectedCategory(null)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b bg-muted/30">
          <div className="container py-12 px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              כל המוצרים שלנו
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              מבחר רחב של יצירות בטון בעבודת יד, בגדלים ומחירים שונים
            </p>
          </div>
        </div>

        <div className="container py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 border rounded-lg p-6 bg-card">
                <ProductFilters
                  selectedSize={selectedSize}
                  selectedCategory={selectedCategory}
                  onSizeChange={setSelectedSize}
                  onCategoryChange={setSelectedCategory}
                  onReset={handleReset}
                />
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  מציג {filteredProducts.length} מוצרים
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">
                    לא נמצאו מוצרים התואמים לסינון שבחרת
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
