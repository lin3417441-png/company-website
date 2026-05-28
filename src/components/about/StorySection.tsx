'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Image from 'next/image'

export default function StorySection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <SectionTitle title="集团简介" />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                能仁堂集团于2016年丙申年在美丽的鹭岛厦门应运而生。集团自创立伊始便始终恪守"仁心仁术，治病救人"的初心宗旨，深耕中医药健康领域。
              </p>
              <p>
                现已发展成为拥有四家名医荟萃的专业门诊部、一家功能齐全的二级中医院、两家中医药研学中心及一家有多项自主专利的健康科技公司于一体的综合医疗集团，
                还拥有一家药店和一家药食同源门店，构建起覆盖"医疗诊疗、康复疗养、文化研学、健康科技"的全产业链生态。
              </p>
              <p>
                集团旗下汇聚超百位资深医师，并由多位三甲医院退休主任级专家领衔坐诊，
                凭借丰富临床经验与深厚学术造诣，为每一位患者提供权威、精准、个性化的诊疗服务。
              </p>
              <p>
                传承精华，守正创新，能仁堂集团始终致力于推动中医药健康文化的创造性转化与创新性发展，
                积极践行"以治病为中心"向"以健康为中心"的理念转变，为忙碌的现代人传递科学的大健康观念。
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image
                src="/about-hero.jpg"
                alt="厦门集美能仁堂中医院"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
