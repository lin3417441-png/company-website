'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html lang="zh-CN">
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '1rem',
          textAlign: 'center',
          fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif',
          background: '#faf7f2',
          color: '#2d1f0e',
          margin: 0,
        }}
      >
        <p style={{ fontSize: '2rem', color: '#7c3d0c' }}>遇到了严重错误</p>
        <p style={{ marginTop: '1rem', color: '#7a6a5a', fontSize: '0.95rem' }}>
          请刷新页面或稍后再试
        </p>
        {error.digest && (
          <p style={{ marginTop: '0.5rem', color: '#b0a090', fontSize: '0.75rem' }}>
            错误码：{error.digest}
          </p>
        )}
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            background: '#7c3d0c',
            color: '#fff',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          刷新重试
        </button>
      </body>
    </html>
  )
}
