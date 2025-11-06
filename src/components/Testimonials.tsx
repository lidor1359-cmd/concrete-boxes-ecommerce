import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/lib/data'
import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            אלפי לקוחות מרוצים ברחבי הארץ כבר נהנים מיצירות הבטון שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString('he-IL')}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
