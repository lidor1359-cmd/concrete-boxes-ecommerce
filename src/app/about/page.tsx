import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StorySection } from '@/components/StorySection'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Sparkles, Award, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="border-b bg-muted/30">
          <div className="container py-16 px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              אודות יצירות בטון
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              מסע אישי מתחביב לעסק, מצבא לאמנות
            </p>
          </div>
        </div>

        {/* Story Section */}
        <StorySection />

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                הערכים שלנו
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                מה שמנחה אותנו בכל יצירה
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">אהבה בכל פרט</h3>
                  <p className="text-sm text-muted-foreground">
                    כל יצירה נעשית באהבה ותשומת לב לפרטים הקטנים ביותר
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">ייחודיות</h3>
                  <p className="text-sm text-muted-foreground">
                    כל מוצר הוא ייחודי ונעשה בעבודת יד, אין שני מוצרים זהים לחלוטין
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">איכות מעולה</h3>
                  <p className="text-sm text-muted-foreground">
                    משתמשים רק בחומרים האיכותיים ביותר לעמידות לאורך זמן
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">שירות אישי</h3>
                  <p className="text-sm text-muted-foreground">
                    אנחנו כאן עבורכם - שירות אישי ומסור לכל לקוח
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                תהליך היצירה
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                איך מארז בטון הופך ליצירת אומנות
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg">עיצוב והכנה</h3>
                <p className="text-sm text-muted-foreground">
                  כל מוצר מתוכנן בקפידה, מהתבנית ועד לפרטים הקטנים
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg">יציקה ועיצוב</h3>
                <p className="text-sm text-muted-foreground">
                  יציקת הבטון בעבודת יד ועיצוב המרקם והצורה הייחודית
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg">גימור ואריזה</h3>
                <p className="text-sm text-muted-foreground">
                  שלב הגימור הסופי ואריזה קפדנית למשלוח בטוח
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">רוצים להתייעץ?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              יש לכם שאלה או רוצים עזרה בבחירת המוצר המושלם? אנחנו כאן בשבילכם!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@concrete-art.co.il" className="text-primary hover:underline">
                info@concrete-art.co.il
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a href="tel:0501234567" className="text-primary hover:underline">
                050-1234567
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
