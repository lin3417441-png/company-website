'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-calligraphy text-5xl text-primary-700">出错了</p>
      <p className="mt-4 text-ink-500">页面加载遇到问题，请稍后重试</p>
      {error.digest && (
        <p className="mt-2 text-xs text-ink-400">错误码：{error.digest}</p>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-primary-700 px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-primary-800"
        >
          重新加载
        </button>
        <Link
          href="/"
          className="rounded-md border border-warm-300 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-warm-100"
        >
          返回首页
        </Link>
      </div>
    </main>
  )
}
