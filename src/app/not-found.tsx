import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="font-serif text-8xl font-bold text-primary-200">404</p>
        <h1 className="mt-4 font-serif text-2xl font-bold text-ink-900">
          此方无此页
        </h1>
        <p className="mt-2 text-ink-500">
          抱歉，您访问的页面不存在，如同一剂不对症的药方。
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            返回首页
          </Button>
        </div>
      </div>
    </div>
  )
}
