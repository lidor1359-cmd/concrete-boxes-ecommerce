"use client"

import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">יצירות בטון</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              דף הבית
            </Link>
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
              מוצרים
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              אודות
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              צור קשר
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 flex flex-col gap-4">
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
