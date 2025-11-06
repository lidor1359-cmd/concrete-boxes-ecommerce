import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">אודות</h3>
            <p className="text-sm text-muted-foreground">
              יצירות בטון ייחודיות בעבודת יד. כל מוצר הוא יצירת אומנות שנעשתה באהבה ובקפידה.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">קישורים מהירים</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">דף הבית</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">מוצרים</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">אודות</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">צור קשר</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">שירות לקוחות</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary">משלוחים</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-primary">החזרות</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">שאלות נפוצות</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">תנאי שימוש</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">יצירת קשר</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>050-1234567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@concrete-art.co.il</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 יצירות בטון. כל הזכויות שמורות.</p>
          <p className="mt-2">משלוח תוך 7 ימי עסקים לכל הארץ</p>
        </div>
      </div>
    </footer>
  )
}
