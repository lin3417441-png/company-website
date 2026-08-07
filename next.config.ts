import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// 字体已全部自托管（public/fonts/），不再依赖 Google Fonts CDN。
const CSP = [
  "default-src 'self'",
  // App Router 的静态 HTML 包含 Next.js Flight/RSC 内联脚本；没有它们，
  // loading.tsx 永远不会被替换为页面内容。Next.js 官方文档对静态页面
  // 推荐使用 unsafe-inline；需要 nonce 时必须改为动态渲染。
  //
  // 'unsafe-eval' 只在 development 下追加：React 的开发版用 eval() 实现
  // 调试功能（跨环境重建调用栈等），缺了它浏览器控制台会报
  // "eval() is not supported in this environment"。React 生产版不使用
  // eval()，所以 next build / 线上响应头里不会出现这一项 —— 这也是为什么
  // 不能简单地把它加进常量了事：那等于为了开发便利永久放宽线上策略，
  // 而 'unsafe-eval' 会让注入的字符串具备可执行性，是 XSS 的主要跳板。
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
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
