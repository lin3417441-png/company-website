# 能仁堂集团官网

能仁堂集团总部位于厦门，是一家深耕中医药健康领域的综合医疗集团。本站点为集团官方展示门户，用于介绍旗下门诊、中医院、药店及健康科技业务，传递中医文化与诊疗服务信息。

## 技术栈

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript 5
- Framer Motion 12
- Lucide React

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 生产构建
npm run lint     # 代码检查
```

## 环境变量

当前版本无必需环境变量。项目早期曾使用 SMTP 邮件通知与在线留言表单，已在新版本中移除。

若未来需要新增环境变量，请在项目根目录创建 `.env.example` 作为模板约定：

```bash
# .env.example
# 示例变量，请复制为 .env.local 后填入真实值
# SOME_API_KEY=your_key_here
```

## 项目结构

```
src/
  app/           — Next.js App Router 页面
  components/    — React 组件（按页面与通用分类）
  lib/           — 工具函数与常量
  types/         — TypeScript 类型定义
public/          — 静态资源（图片、字体等）
```

## 部署

通过 Netlify 自动部署，配置见 `netlify.toml`：

| 项 | 值 |
|---|---|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node 版本 | 20 |
| Next.js 插件 | `@netlify/plugin-nextjs` |

## 版权

© 2016–2026 能仁堂集团 · 保留所有权利
