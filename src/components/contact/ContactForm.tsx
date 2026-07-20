'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-lg border border-warm-300 bg-warm-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setState('submitting')
    setErrorMsg('')

    const data = new FormData(form)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          topic: data.get('topic'),
          message: data.get('message'),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) {
        setErrorMsg(json.error || '提交失败，请稍后重试')
        setState('error')
        return
      }
      setState('success')
    } catch {
      setErrorMsg('网络异常，请稍后重试')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <AnimatedSection>
        <div className="flex h-full items-center justify-center rounded-lg bg-primary-50 p-12 text-center">
          <div>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <span className="text-3xl">&#10003;</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink-900">提交成功</h3>
            <p className="mt-2 text-ink-500">感谢您的咨询，我们将尽快与您联系。</p>
            <Button variant="ghost" className="mt-6" onClick={() => setState('idle')}>
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
              <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-ink-700">姓名 *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                maxLength={50}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-ink-700">电话 *</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-ink-700">邮箱</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              maxLength={100}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-topic" className="mb-1 block text-sm font-medium text-ink-700">咨询内容 *</label>
            <select
              id="contact-topic"
              name="topic"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>请选择</option>
              <option value="clinic">门诊预约</option>
              <option value="pharmacy">药品咨询</option>
              <option value="food-therapy">食养方案</option>
              <option value="education">研学报名</option>
              <option value="other">其他</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-ink-700">详细描述 *</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              maxLength={2000}
              className={inputClass}
            />
          </div>
          {state === 'error' && (
            <p className="rounded-lg bg-cinnabar-50 px-4 py-2.5 text-sm text-cinnabar-600">
              {errorMsg}
            </p>
          )}
          <Button type="submit" variant="primary" className="w-full" disabled={state === 'submitting'}>
            {state === 'submitting' ? '提交中…' : '提交咨询'}
          </Button>
        </div>
      </form>
    </AnimatedSection>
  )
}
