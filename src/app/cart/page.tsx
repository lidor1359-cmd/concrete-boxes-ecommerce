"use client"

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCart } from '@/contexts/CartContext'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
            <h1 className="text-2xl font-bold">העגלה שלך ריקה</h1>
            <p className="text-muted-foreground">
              נראה שעדיין לא הוספת מוצרים לעגלה שלך
            </p>
            <Link href="/products">
              <Button size="lg">התחל לקנות</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b bg-muted/30">
          <div className="container py-12 px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              העגלה שלי
            </h1>
            <p className="text-muted-foreground">
              סקור את המוצרים שבחרת והמשך לתשלום
            </p>
          </div>
        </div>

        <div className="container py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-muted rounded-md flex-shrink-0" />

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${item.id}`}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.category} • {item.size === 'small' && 'קטן'}
                          {item.size === 'medium' && 'בינוני'}
                          {item.size === 'large' && 'גדול'}
                        </p>
                        <p className="text-lg font-bold mt-2">₪{item.price}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-4 py-2 min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        סכום ביניים
                      </span>
                      <span className="font-semibold">
                        ₪{item.price * item.quantity}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">סיכום הזמנה</h2>

                  <div className="space-y-2 py-4 border-y">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">סכום ביניים</span>
                      <span>₪{getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">משלוח</span>
                      <span className="text-green-600 font-medium">חינם!</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-bold">
                    <span>סה"כ לתשלום</span>
                    <span>₪{getTotalPrice()}</span>
                  </div>

                  <Link href="/checkout">
                    <Button size="lg" className="w-full">
                      המשך לתשלום
                    </Button>
                  </Link>

                  <Link href="/products">
                    <Button variant="outline" size="lg" className="w-full">
                      המשך קניה
                    </Button>
                  </Link>

                  <div className="text-sm text-muted-foreground space-y-2 pt-4">
                    <p>✓ משלוח חינם לכל הארץ</p>
                    <p>✓ זמן אספקה: 7 ימי עסקים</p>
                    <p>✓ תשלום מאובטח</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
