'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-24 sm:py-32 lg:py-40">
      {/* 噪点纹理叠加 */}
      <div className="bg-noise absolute inset-0 mix-blend-overlay z-0 pointer-events-none opacity-40"></div>

      {/* 装饰性背景 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[30rem] w-[30rem] rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[25rem] w-[25rem] rounded-full bg-cinnabar-900 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 减弱 Logo 的重量感：缩小尺寸，去掉厚重的卡片背景 */}
          <div className="mx-auto mb-10 sm:mb-14 inline-block">
            <Image src="/logo.png" alt="能仁堂" width={80} height={80} className="h-16 w-auto sm:h-20 drop-shadow-md opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <h1 className="font-calligraphy text-5xl tracking-[0.25em] text-white sm:text-6xl lg:text-7xl">
            能仁堂集团
          </h1>
          <p className="mt-8 text-lg tracking-[0.5em] text-gold-300 sm:text-xl font-light">
            能仁大愿 · 仁心仁术
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto mt-12 max-w-2xl text-base leading-[2.5] tracking-widest text-warm-200 sm:text-lg opacity-90"
        >
          传承精华，守正创新<br className="hidden sm:block" />集医疗诊疗、康复疗养、文化研学、健康科技于一体的综合医疗集团
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-14"
        >
          <Button href="/about" variant="secondary" size="lg">
            了解更多
          </Button>
        </motion.div>
      </div>

      {/* 底部云纹分隔 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full translate-y-1">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H0Z" fill="var(--color-warm-50)" opacity="0.3" />
          <path d="M0 120L60 115C120 110 240 100 360 97.5C480 95 600 100 720 102.5C840 105 960 105 1080 102.5C1200 100 1320 95 1380 92.5L1440 90V120H0Z" fill="var(--color-warm-50)" opacity="0.5" />
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z" fill="var(--color-warm-50)" />
        </svg>
      </div>
    </section>
  )
}
