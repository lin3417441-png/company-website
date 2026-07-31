import type { NextConfig } from "next";

// revealScript 内联块的 SHA-256 哈希（见 src/app/layout.tsx）。
// 脚本内容变动时需重新计算并同步更新此处与 netlify.toml。
// 计算方法（PowerShell）：
//   $bytes = [System.Text.Encoding]::UTF8.GetBytes($script)
//   [Convert]::ToBase64String(([System.Security.Cryptography.SHA256]::Create()).ComputeHash($bytes))
const REVEAL_SCRIPT_HASH = "'sha256-rwg5DgS+sHhJ5UqZclNEmsqKtRaoMKeL8v5duu5n36A='";

// 字体已全部自托管（public/fonts/），不再依赖 Google Fonts CDN。
const CSP = [
  "default-src 'self'",
  `script-src 'self' ${REVEAL_SCRIPT_HASH}`,
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
