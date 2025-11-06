import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            מוכנים להביא יצירת אומנות הביתה?
          </h2>
          <p className="text-lg opacity-90">
            כל מארז מגיע אליכם תוך 7 ימי עסקים בלבד. משלוח חינם לכל הארץ!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/products">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                התחילו לקנות עכשיו
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                יש לכם שאלות? צרו קשר
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
