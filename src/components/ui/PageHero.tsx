import Eyebrow from '@/components/ui/Eyebrow'

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
        <Eyebrow variant="line" light>
          {eyebrow}
        </Eyebrow>
        {/* Task 6: 使用 text-h1 页面主标题 */}
        <h1 className="mt-6 font-serif text-h1 text-warm-50">
          {title}
        </h1>
        <p className="mt-5 max-w-xl leading-loose text-warm-300">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
