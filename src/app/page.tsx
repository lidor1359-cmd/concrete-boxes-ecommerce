import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { StorySection } from '@/components/StorySection'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { Testimonials } from '@/components/Testimonials'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StorySection />
        <FeaturedProducts />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
