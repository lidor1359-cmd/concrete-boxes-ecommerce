"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProductFiltersProps {
  selectedSize: string | null
  selectedCategory: string | null
  onSizeChange: (size: string | null) => void
  onCategoryChange: (category: string | null) => void
  onReset: () => void
}

const sizes = ['small', 'medium', 'large']
const sizeLabels: Record<string, string> = {
  small: 'קטן',
  medium: 'בינוני',
  large: 'גדול',
}

const categories = [
  'מתנות',
  'חנוכת בית',
  'מתנות מיוחדות',
  'מתנות לאישה',
  'עיצוב הבית',
  'מתנות לחגים',
]

export function ProductFilters({
  selectedSize,
  selectedCategory,
  onSizeChange,
  onCategoryChange,
  onReset,
}: ProductFiltersProps) {
  const hasFilters = selectedSize || selectedCategory

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">סינון מוצרים</h3>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={onReset}>
            נקה הכל
          </Button>
        )}
      </div>

      {/* Size Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm">גודל</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <Badge
              key={size}
              variant={selectedSize === size ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => onSizeChange(selectedSize === size ? null : size)}
            >
              {sizeLabels[size]}
            </Badge>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm">קטגוריה</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() =>
                onCategoryChange(selectedCategory === category ? null : category)
              }
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
