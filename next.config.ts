import type { NextConfig } from "next";

// 字体已全部自托管（public/fonts/），不再依赖 Google Fonts CDN。
const CSP = [
  "default-src 'self'",
  // App Router 的静态 HTML 包含 Next.js Flight/RSC 内联脚本；没有它们，
  // loading.tsx 永远不会被替换为页面内容。Next.js 官方文档对静态页面
  // 推荐使用 unsafe-inline；需要 nonce 时必须改为动态渲染。
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "object-src 'none'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  // 不在响应头中暴露 Next.js 版本信息
  poweredByHeader: false,
  // 启用 gzip 压缩（本地预览和不带压缩的托管平台均受益）
  compress: true,
  // 安全响应头：覆盖 Next.js 渲染的 HTML 页面。
  // netlify.toml 中保留相同规则以保护直接由 CDN 提供的静态文件。
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
