"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 flex justify-center bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:bg-background-dark/80">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-4 text-gray-800 dark:text-white">
          <Link href="/" className="flex items-center gap-4">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">יצירות בטון</h2>
          </Link>
        </div>

        <div className="hidden items-center gap-9 md:flex">
          <Link href="/" className="text-sm font-medium leading-normal text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            דף הבית
          </Link>
          <Link href="/products" className="text-sm font-medium leading-normal text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            מוצרים
          </Link>
          <Link href="/about" className="text-sm font-medium leading-normal text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            אודות
          </Link>
          <Link href="/contact" className="text-sm font-medium leading-normal text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            צור קשר
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <button className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 text-primary transition-colors hover:bg-primary/30">
              <span className="material-symbols-outlined">shopping_cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-background-dark">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </Link>

          <button
            className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-t bg-background-light dark:bg-background-dark md:hidden">
          <nav className="container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            <Link href="/" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              דף הבית
            </Link>
            <Link href="/products" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              מוצרים
            </Link>
            <Link href="/about" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              אודות
            </Link>
            <Link href="/contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              צור קשר
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
