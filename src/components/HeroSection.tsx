import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2080")`
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white @[480px]:text-5xl">
              אמנות מבטון. יצירה בעבודת יד.
            </h1>
            <h2 className="text-base font-normal leading-normal text-white/90 @[480px]:text-lg">
              גלו מארזי פסלים ייחודיים לעיצוב הבית
            </h2>
          </div>
          <Link href="/products">
            <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-background-dark transition-transform hover:scale-105">
              <span className="truncate">לקטלוג המוצרים</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
