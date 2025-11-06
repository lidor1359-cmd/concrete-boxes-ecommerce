import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 md:gap-20 md:py-16">
          <HeroSection />

          {/* Featured Products */}
          <section>
            <h2 className="px-4 pb-4 pt-5 text-center text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white md:text-3xl">
              המארזים הנמכרים ביותר
            </h2>
            <FeaturedProducts />
          </section>

          {/* About Section */}
          <section className="grid items-center gap-8 rounded-xl bg-white p-6 dark:bg-black/20 md:grid-cols-2 md:gap-12 md:p-10">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">הסיפור מאחורי הפסלים</h3>
              <p className="text-gray-600 dark:text-gray-300">
                כל יצירה היא עדות לתשוקה שלנו לחומר הגלם. אנו יוצקים כל פסל בעבודת יד קפדנית, מה שמבטיח שכל פריט הוא ייחודי,
                עם אופי ומרקם משלו. אנו מאמינים ביופי שבפשטות ובקסם של הלא-מושלם, ומביאים לביתכם אמנות שמספרת סיפור.
              </p>
            </div>
            <div
              className="order-1 h-64 w-full rounded-lg bg-cover bg-center md:order-2 md:h-full"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=1200')`
              }}
            />
          </section>

          {/* Image Gallery */}
          <section>
            <h2 className="px-4 pb-4 pt-5 text-center text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white md:text-3xl">
              בהשראת הטקסטורה
            </h2>
            <div className="columns-2 gap-4 p-4 md:columns-3 lg:columns-4">
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800"
                alt="יצירת בטון על מדף עץ"
              />
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800"
                alt="פנים מינימליסטי עם אגרטל בטון"
              />
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1596265371388-43edbaadab94?q=80&w=800"
                alt="מרקם של פסל בטון"
              />
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=800"
                alt="תחתיות בטון על שולחן קפה"
              />
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800"
                alt="צורת בטון מופשטת"
              />
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800"
                alt="יד נוגעת במרקם של פסל בטון"
              />
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1571175351748-991d6299b2b4?q=80&w=800"
                alt="פסלי בטון בשורה"
              />
              <img
                className="mb-4 w-full rounded-lg"
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800"
                alt="אוסף פסלי בטון בעבודת יד על שולחן"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
