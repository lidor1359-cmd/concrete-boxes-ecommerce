"use client"

import { Product } from '@/types/product'
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
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 dark:bg-black/20">
      <Link href={`/products/${product.id}`}>
        <div
          className="aspect-[3/4] w-full rounded-lg bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${product.image || 'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800'}")`
          }}
        />
      </Link>
      <div className="flex flex-col">
        <Link href={`/products/${product.id}`}>
          <p className="text-lg font-medium leading-normal text-gray-900 hover:text-primary transition-colors dark:text-white">
            {product.name}
          </p>
        </Link>
        <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>
        <p className="mt-1 text-base font-medium leading-normal text-primary">
          ₪{product.price}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap justify-center gap-3">
        <button
          onClick={handleAddToCart}
          className="h-10 grow cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-background-dark transition-transform hover:scale-105"
        >
          <span className="truncate">הוסף לעגלה</span>
        </button>
        <Link href={`/products/${product.id}`} className="h-10 grow">
          <button className="h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-200 px-4 text-sm font-bold leading-normal tracking-[0.015em] text-gray-800 transition-colors hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
            <span className="truncate">פרטים נוספים</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
