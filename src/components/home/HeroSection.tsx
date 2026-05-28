'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 py-24 sm:py-32 lg:py-40">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gold-300 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mx-auto mb-6 inline-block rounded-2xl bg-white/90 p-3 backdrop-blur-sm sm:p-4">
            <Image src="/logo.png" alt="能仁堂" width={110} height={110} className="h-20 w-auto sm:h-28" />
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-wider text-white sm:text-5xl lg:text-6xl">
            能仁堂集团
          </h1>
          <p className="mt-4 text-lg tracking-[0.3em] text-gold-300 sm:text-xl">
            能者爱人 · 医者仁心
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-loose tracking-wider text-warm-200 sm:text-xl"
        >
          传承精华，守正创新 — 集医疗诊疗、康复疗养、文化研学、健康科技于一体的综合医疗集团
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <Button href="/about" variant="primary" size="lg">
            了解更多
          </Button>
        </motion.div>
      </div>

      {/* 底部云纹分隔 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z"
            fill="var(--color-warm-50)"
          />
        </svg>
      </div>
    </section>
  )
}
