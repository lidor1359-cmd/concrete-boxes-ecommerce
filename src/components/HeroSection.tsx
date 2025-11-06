import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                יצירות בטון ייחודיות
                <span className="block text-primary mt-2">לבית שלך</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                מארזים מיוחדים מבטון בעבודת יד, שנעשו באהבה ובקפידה. כל יצירה מספרת סיפור ומוסיפה נופך ייחודי לבית.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  לקטלוג המוצרים
                </Button>
              </Link>
              <Link href="#story">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  קראו את הסיפור שלי
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">תמונת Hero - יצירת בטון מרהיבה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
