'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <AnimatedSection>
        <div className="flex h-full items-center justify-center rounded-lg bg-primary-50 p-12 text-center">
          <div>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <span className="text-3xl">&#10003;</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink-900">提交成功</h3>
            <p className="mt-2 text-ink-500">感谢您的咨询，我们将尽快与您联系。</p>
            <Button variant="ghost" className="mt-6" onClick={() => setSubmitted(false)}>
              继续留言
            </Button>
          </div>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <AnimatedSection direction="right">
      <form onSubmit={handleSubmit} className="rounded-lg bg-warm-50 p-6 shadow-sm sm:p-8">
        <h2 className="mb-6 font-serif text-2xl font-bold text-ink-900">在线留言</h2>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-ink-700">姓名 *</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-warm-300 bg-warm-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink-700">电话 *</label>
              <input
                type="tel"
                required
                className="w-full rounded-lg border border-warm-300 bg-warm-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink-700">邮箱</label>
            <input
              type="email"
              className="w-full rounded-lg border border-warm-300 bg-warm-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink-700">咨询内容 *</label>
            <select
              required
              className="w-full rounded-lg border border-warm-300 bg-warm-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            >
              <option value="">请选择</option>
              <option value="clinic">门诊预约</option>
              <option value="pharmacy">药品咨询</option>
              <option value="food-therapy">食养方案</option>
              <option value="education">研学报名</option>
              <option value="other">其他</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink-700">详细描述 *</label>
            <textarea
              required
              rows={4}
              className="w-full rounded-lg border border-warm-300 bg-warm-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            提交咨询
          </Button>
        </div>
      </form>
    </AnimatedSection>
  )
}
