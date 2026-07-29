import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Image from 'next/image'

export default function StorySection() {
  return (
    <section className="section-padding bg-warm-50 relative overflow-hidden">
      {/* Task 5: 大号书法字视觉锚点 — "仁"字代表核心价值 */}
      <span
        aria-hidden="true"
        className="absolute -top-16 -left-12 font-calligraphy text-[16rem] text-gold-500/[0.03] select-none pointer-events-none"
      >
        仁
      </span>

      <div className="container-custom relative z-10">
        <SectionTitle eyebrow="集团简介" title="承岐黄薪火，守古法初心" />
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection direction="left">
            <div className="space-y-4 leading-loose text-ink-600">
              <p>
                能仁堂集团2016年在美丽的鹭岛厦门成立。集团自创立伊始便始终恪守「能仁大愿，仁心仁术」的初心宗旨，深耕中医药健康领域。
              </p>
              <p>
                现已发展成为旗下拥有八家机构的综合医疗集团，涵盖多家名医荟萃的中医综合门诊部、一家功能科室齐全的二级中医院、药食同源食养小屋及拥有多项自主专利的健康科技公司，另设有中医药研学中心，构建起覆盖「医疗诊疗、康复疗养、文化研学、健康科技」的全产业链生态。
              </p>
              <p>
                集团旗下汇聚超百位资深医师，并由多位三甲医院退休主任级专家领衔坐诊，
                凭借丰富临床经验与深厚学术造诣，为每一位患者提供权威、精准、个性化的诊疗服务。
              </p>
              <p>
                主打体质调理、余氏骨伤、肥胖四高、女性康养、结节调理、睡眠调理、小儿推拿、疼痛管理八大中医特色项目，凝练出独具特色的「理疗治其外，中药调其内」诊疗方案，内外兼治，疗效显著，深受患者信赖。
              </p>
              <p className="border-l-2 border-gold-500 pl-4 font-serif text-ink-800">
                承岐黄薪火，守古法初心，融时代新思。以「将此深心奉医道，是则名为报师恩」赤诚之心传道授业，赓续中华医脉，护佑万家安康。
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative">
              {/* 错位金色边框 */}
              <div aria-hidden className="absolute -right-4 -top-4 h-full w-full rounded-md border border-gold-400/60" />
              <div className="relative h-80 overflow-hidden rounded-md shadow-lift sm:h-96">
                <Image
                  src="/about-hero.jpg"
                  alt="厦门集美能仁堂中医院"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
