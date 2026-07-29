import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不在响应头中暴露 Next.js 版本信息
  poweredByHeader: false,
  // 启用 gzip 压缩（本地预览和不带压缩的托管平台均受益）
  compress: true,
};

export default nextConfig;
