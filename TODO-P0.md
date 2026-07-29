# TODO-P0 — 能仁堂集团官网 P0 修复清单

> 更新时间：2026-07-28

## ✅ 已完成

### Task 1 — 重写 AnimatedSection，消除 SSR opacity:0
**问题**：framer-motion `useInView` 将 `opacity:0;transform:translateY(40px)` 写入 SSR HTML，
每页16–20个元素对爬虫不可见，严重影响 GEO 收录质量。

**修改文件**：
- `src/components/ui/AnimatedSection.tsx` — 移除 framer-motion，改为纯服务端组件，输出 `data-reveal` 属性
- `src/components/ui/RevealController.tsx` **（新建）** — 客户端组件，处理客户端路由跳转后的重新绑定
- `src/app/globals.css` — 新增 `.reveal-ready [data-reveal]` CSS reveal 系统
- `src/app/layout.tsx` — `<body>` 起始处注入 IntersectionObserver 初始化脚本，添加 `<RevealController />`

---

### Task 2 — 字体瘦身：移除 Noto Sans SC
**问题**：`Noto_Sans_SC`（3 个字重）产生约 150+ CJK unicode-range woff2 片段（~10MB），
页面正文根本不依赖此字体。

**修改文件**：
- `src/app/layout.tsx` — 删除 `Noto_Sans_SC` import，`Noto_Serif_SC` 字重从3个裁至2个（`["400","700"]`，去掉600）
- `src/app/globals.css` — `--font-sans` 改为系统字体栈（PingFang SC / Microsoft YaHei / system-ui）

---

### Task 3 — 建立营业时间与地址单一数据源（修复编译报错）
**问题**：`layout.tsx` 引用了 `GROUP_ADDRESS`，但该符号未在 `constants.ts` 中定义，项目无法编译。
同时，营业时间在多处不一致（8:00 / 8:30 / 9:00–18:00 混用）。
用户确认正确时间：**医疗机构 & 食养小屋 8:30–21:00**。

**修改文件**：
- `src/lib/constants.ts` — 新增 `GROUP_ADDRESS`、`PHARMACY_ADDRESS`、`BUSINESS_HOURS`、`openingHoursSpec()`
- `src/components/home/HeroSection.tsx` — 门诊时间改用 `BUSINESS_HOURS.clinic.display`（8:30）
- `src/components/contact/ContactInfo.tsx` — 标签改为「门诊时间」，值改用 `BUSINESS_HOURS.clinic.display`
- `src/lib/clinics-data.ts` — 所有 `8:00-21:00` 统一改为 `8:30-21:00`
- `src/app/page.tsx` — JSON-LD `opens: '08:00'` → 改用 `openingHoursSpec('clinic')`，`address` 改用 `GROUP_ADDRESS`
- `src/app/services/page.tsx` — FAQ 答案内的门诊时间（8:00 → 8:30）
- `public/llms.txt` — 门诊时间（8:00 → 8:30）

---

### Task 4 — 修正 about 页机构数量描述
**问题**：原文「四家门诊部 + 一家医院 + 两家研学中心 + 一家科技公司 + 一家药店 + 两家食养店」=11，
用户确认实际为 **8家**。

**修改文件**：
- `src/components/about/StorySection.tsx` — 重写段落，改为「八家机构」+类型概述

---

### Task 5 — 删除死代码 robots.ts，补全 canonical
**问题**：`public/robots.txt`（静态文件）优先级高于 `src/app/robots.ts`（路由处理器），后者永远不会执行。
`public/robots.txt` 中 `Baiduspider` 重复声明两次。
各子页面 metadata 均缺少 `alternates.canonical`。

**修改文件**：
- `src/app/robots.ts` — 替换为废弃注释（sandbox 限制无法物理删除，功能无影响）
- `public/robots.txt` — 删除「传统搜索引擎」区域的重复 `Baiduspider` 条目
- `src/app/about/page.tsx` — 新增 `alternates: { canonical: '/about' }`
- `src/app/services/page.tsx` — 新增 `alternates: { canonical: '/services' }`
- `src/app/pharmacy/page.tsx` — 新增 `alternates: { canonical: '/pharmacy' }`
- `src/app/wellness/page.tsx` — 新增 `alternates: { canonical: '/wellness' }`
- `src/app/contact/page.tsx` — 新增 `alternates: { canonical: '/contact' }`

---

### Task 6 — 构建验证
**TypeScript 类型检查**：`tsc --noEmit` → **exit 0，无错误** ✅

**已确认**：
- `AnimatedSection.tsx` 不再含任何 framer-motion 代码 ✅
- `GROUP_ADDRESS` 等新常量正确导出 ✅
- 6个页面均有 `alternates.canonical`（包括首页） ✅
- 正文字体走系统字体栈，Noto Sans SC 已从 layout 移除 ✅

**注意**：Linux sandbox 运行 `npm run build` 时出现 Bus error（Next.js SWC 原生二进制在受限 bwrap 沙箱中崩溃，与代码无关）。
请在 Windows 本地运行 `npm run build` 做最终确认。

---

## ⏳ 后续建议（GEO 优化，非 P0）

- 添加 `.gitattributes`（`* text=auto eol=lf`）消除 CRLF→LF 噪声提交
- 在 `public/llms.txt` 补全更多结构化内容（FAQ、服务描述）供 AI 爬虫摘要
- 考虑将 `src/app/robots.ts` 彻底删除（在 Windows 本地执行 `git rm`）
- pharmacy/page.tsx 和 wellness/page.tsx 的 JSON-LD 可统一使用 `openingHoursSpec()`
