interface PageHeroProps {
  title: string
  subtitle: string
  /** 眉题（标题上方的小标签，默认为品牌名） */
  eyebrow?: string
}

export default function PageHero({ title, subtitle, eyebrow = '能仁堂集团' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-900 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* 背景层次 */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-gold-500/12 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-60" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 select-none vertical-text font-serif text-base text-warm-300/30 lg:block"
      >
        能仁大愿 · 仁心仁术
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold-500" />
          <span className="text-xs font-medium tracking-[0.4em] text-gold-400">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-6 font-serif text-4xl font-bold tracking-wide text-warm-50 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl leading-loose text-warm-300">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
