"use client"

import { Product } from '@/types/product'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-muted overflow-hidden">
          {/* Placeholder for product image */}
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span>תמונת מוצר</span>
          </div>
          {product.featured && (
            <Badge className="absolute top-2 left-2">מומלץ</Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">₪{product.price}</span>
          <Badge variant="outline" className="text-xs">
            {product.size === 'small' && 'קטן'}
            {product.size === 'medium' && 'בינוני'}
            {product.size === 'large' && 'גדול'}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="lg" onClick={handleAddToCart}>
          <ShoppingCart className="ml-2 h-4 w-4" />
          הוסף לעגלה
        </Button>
      </CardFooter>
    </Card>
  )
}
