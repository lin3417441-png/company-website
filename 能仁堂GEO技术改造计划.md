# 能仁堂集团 GEO 技术改造 — AI 可执行计划

> 目标站点：https://nengrentang.com.cn
> 当前状态：robots.txt 存在但未精细化，llms.txt 缺失，JSON-LD 缺失，sitemap 域名指向不一致

---

## 任务 1：重写 robots.txt

**目标**：从通配放行升级为精细化 AI 爬虫管理，明确限速，修正 sitemap 域名

**操作**：将 `https://nengrentang.com.cn/robots.txt` 的内容替换为：

```
# ============================================
# robots.txt — 能仁堂集团 nengrentang.com.cn
# 最后更新：2026-07-24
# ============================================

# === AI 搜索引擎爬虫 — 放行 + 限速 ===

User-agent: GPTBot
Allow: /
Crawl-Delay: 10

User-agent: OAI-SearchBot
Allow: /
Crawl-Delay: 10

User-agent: ChatGPT-User
Allow: /
Crawl-Delay: 10

User-agent: Google-Extended
Allow: /
Crawl-Delay: 10

User-agent: Google-CloudVertexBot
Allow: /
Crawl-Delay: 10

User-agent: ClaudeBot
Allow: /
Crawl-Delay: 10

User-agent: Claude-Web
Allow: /
Crawl-Delay: 10

User-agent: PerplexityBot
Allow: /
Crawl-Delay: 10

User-agent: Applebot-Extended
Allow: /
Crawl-Delay: 10

User-agent: cohere-ai
Allow: /
Crawl-Delay: 10

User-agent: Bytespider
Allow: /
Crawl-Delay: 10

User-agent: DeepSeekBot
Allow: /
Crawl-Delay: 10

User-agent: MoonshotBot
Allow: /
Crawl-Delay: 10

User-agent: YuanbaoBot
Allow: /
Crawl-Delay: 10

User-agent: Baiduspider
Allow: /
Crawl-Delay: 10

User-agent: Sogou
Allow: /
Crawl-Delay: 10

User-agent: 360Spider
Allow: /
Crawl-Delay: 10

# === 传统搜索引擎 ===

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

# === 通用规则 ===

User-agent: *
Allow: /
Crawl-Delay: 30

# === Sitemap ===

Sitemap: https://nengrentang.com.cn/sitemap.xml
```

**关键变更说明**：
- 原 sitemap 指向 `www.nengrentang.com` → **修正为** `nengrentang.com.cn`
- 新增 16 个 AI 爬虫专用声明，全部加 `Crawl-Delay: 10`
- 通用 `*` 保留但加 `Crawl-Delay: 30` 兜底限速
- 如果你确认主域是 `www.nengrentang.com`，则把 sitemap 行改为 `Sitemap: https://www.nengrentang.com/sitemap.xml`，并且在 `nengrentang.com.cn` 和 `www.nengrentang.com` 两个域名下各放一份 robots.txt

**验收条件**：
```
浏览器访问 https://nengrentang.com.cn/robots.txt → 显示以上内容，无报错
```

---

## 任务 2：创建 llms.txt

**目标**：给 AI 爬虫一份结构化站点索引，让 AI 引擎知道你的网站有哪些核心内容

**操作**：在网站根目录创建 `https://nengrentang.com.cn/llms.txt`，内容如下：

```markdown
# 能仁堂集团

## 关于我们
https://nengrentang.com.cn/about
能仁堂集团成立于2016年，总部位于厦门，是一家集中医诊疗、康复疗养、文化研学、健康科技于一体的综合医疗集团。拥有8家下属机构、100+资深医师，由多位三甲医院退休主任级专家领衔坐诊。

## 医疗服务
https://nengrentang.com.cn/services
提供中医诊疗、康复疗养等全方位健康服务。

### 特色项目
- 体质调理: https://nengrentang.com.cn/services/constitution
- 余氏骨伤: https://nengrentang.com.cn/services/bone-injury
- 肥胖四高中医调理: https://nengrentang.com.cn/services/metabolic
- 女性康养: https://nengrentang.com.cn/services/womens-health
- 结节调理: https://nengrentang.com.cn/services/nodule
- 睡眠调理: https://nengrentang.com.cn/services/sleep
- 小儿推拿: https://nengrentang.com.cn/services/pediatric-massage
- 疼痛管理: https://nengrentang.com.cn/services/pain-management

## 能仁堂药业
https://nengrentang.com.cn/pharmacy

## 食养研学
https://nengrentang.com.cn/wellness
中医药研学中心，推广中医文化与养生知识。

## 联系我们
https://nengrentang.com.cn/contact
地址：厦门市思明区湖滨南路8-2-1
电话：0592-5156156
```

**注意**：上面 `services/xxx` 路径是假设路径。你需要根据实际网站路径修正。如果这些特色项目页面还没有独立 URL，当前阶段可以先只列已有页面。

**验收条件**：
```
浏览器访问 https://nengrentang.com.cn/llms.txt → 显示以上内容，无报错
```

---

## 任务 3：官网首页添加 JSON-LD 结构化数据

**目标**：让 AI 引擎理解你的品牌实体信息，这是 GEO 评分中权重最高的技术信号

**操作**：在首页 `<head>` 或 `</body>` 前插入以下 `<script>` 标签：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "能仁堂集团",
  "alternateName": "厦门能仁堂",
  "description": "能仁堂集团致力于推动中医药健康文化的创造性转化与创新性发展。是一家集中医诊疗、康复疗养、文化研学、健康科技于一体的综合医疗集团。",
  "url": "https://nengrentang.com.cn",
  "telephone": "0592-5156156",
  "email": "858888363@qq.com",
  "foundingDate": "2016",
  "founder": {
    "@type": "Person",
    "name": "能仁堂创始人"
  },
  "medicalSpecialty": [
    "TraditionalChineseMedicine",
    "Acupuncture",
    "HerbalMedicine",
    "PreventiveMedicine"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "湖滨南路8-2-1",
    "addressLocality": "厦门市",
    "addressRegion": "福建省",
    "addressCountry": "CN"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "厦门"
    }
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "能仁堂集团"
  },
  "sameAs": [
    "https://nengrentang.com.cn",
    "https://zhanfu.com.cn"
  ],
  "knowsAbout": [
    "中医体质调理",
    "余氏骨伤",
    "中医肥胖四高调理",
    "女性康养",
    "结节调理",
    "睡眠调理",
    "小儿推拿",
    "疼痛管理",
    "药食同源养生"
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "100+"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    }
  ]
}
</script>
```

**验收条件**：
```
使用 Google Rich Results Test 或 https://validator.schema.org/ 校验 JSON-LD 无错误
```

---

## 任务 4：创建 FAQPage JSON-LD（推荐优先做）

**目标**：FAQ 是 AI 引擎最偏好的内容格式。创建专属 FAQ 页面或直接在首页/服务页嵌入。

**操作**：在首页或服务页面添加：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "能仁堂集团是正规医疗机构吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "能仁堂集团是正规中医医疗集团，旗下拥有四家门诊部及一家二级中医院，所有医师均持有合法执业资质。"
      }
    },
    {
      "@type": "Question",
      "name": "能仁堂有哪些特色诊疗项目？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "能仁堂提供八大特色项目：体质调理、余氏骨伤、肥胖四高中医调理、女性康养、结节调理、睡眠调理、小儿推拿、疼痛管理。"
      }
    },
    {
      "@type": "Question",
      "name": "能仁堂的地址在哪里？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "能仁堂总部位于厦门市思明区湖滨南路8-2-1，咨询电话：0592-5156156。"
      }
    },
    {
      "@type": "Question",
      "name": "能仁堂的门诊时间是什么时候？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "能仁堂门诊时间为周一至周日 8:00 - 21:00。"
      }
    },
    {
      "@type": "Question",
      "name": "能仁堂擅长治疗哪些疾病？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "能仁堂在体质调理、骨伤疾患（余氏骨伤流派）、肥胖及四高（高血压/高血糖/高血脂/高尿酸）、女性经带孕产更年期问题、甲状腺/乳腺结节、失眠障碍、小儿常见病、各类疼痛管理等方面有丰富临床经验。"
      }
    }
  ]
}
</script>
```

**验收条件**：
```
搜索"能仁堂"等关键词时，AI 引擎如果引用这 5 个 Q&A 中的内容就算成功
```

---

## 任务 5：页面 JS 渲染评估

**目标**：确认核心内容是否对 AI 爬虫可见

**当前风险**：
- 首页有"加载中..."字样，说明内容是通过 JS 动态加载的
- 部分 AI 爬虫（如较早版本的 GPTBot、部分中文爬虫）不执行 JS，可能看不到内容

**操作步骤**：

1. 用 `curl` 或浏览器开发者工具查看页面原始 HTML：
   ```bash
   curl https://nengrentang.com.cn | grep -i "体质调理\|特色项目\|能仁堂"
   ```
   如果服务端渲染正常，原始 HTML 中应该直接包含这些内容文本。

2. 如果原始 HTML 中不包含上述内容（即全靠 JS 渲染），则需要联系开发团队做服务端渲染（SSR）改造，至少确保关键内容（品牌名、科室、地址、电话等）在原始 HTML 中就存在。

3. 使用 Google 的 URL Inspection Tool 或 Mobile-Friendly Test 查看 Googlebot 抓取到的页面快照，确认 Googlebot 能看到什么。

**验收条件**：
```
curl 或浏览器查看网页源代码，能直接看到"能仁堂集团"、"体质调理"等核心关键词，
而非仅看到"加载中..."或占位符。
```

---

## 任务 6：核心页面逐一添加 JSON-LD

**目标**：每个重要页面都有对应的结构化数据

**建议优先级**：

| 页面 | Schema 类型 | 优先级 |
|------|------------|--------|
| 首页 | MedicalClinic | P0 🔴 |
| about 页 | MedicalClinic + Organization | P1 🟡 |
| services 页 | MedicalBusiness + FAQPage | P1 🟡 |
| 各特色项目页（如存在独立页面） | MedicalProcedure / Therapy | P2 🟢 |
| contact 页 | LocalBusiness | P1 🟡 |
| pharmacy 页 | Pharmacy | P2 🟢 |
| wellness 页 | HealthClub | P2 🟢 |
| 后续新增科普文章 | Article + MedicalWebPage | P0 🔴 |

---

## 任务 7：跨平台品牌信息锚定

**目标**：确保能仁堂在各平台的品牌信息一致，AI 引擎跨平台验证时不会发现矛盾

**核对清单**：

| 信息项 | 官网 | 如有知乎号 | 如有小红书号 | 如有百度百科 |
|--------|------|-----------|------------|------------|
| 品牌名 | 能仁堂集团 | □ | □ | □ |
| 地址 | 厦门市思明区湖滨南路8-2-1 | □ | □ | □ |
| 电话 | 0592-5156156 | □ | □ | □ |
| 官网 | nengrentang.com.cn | □ | □ | □ |
| 业务描述 | 中医诊疗/康复疗养/文化研学/健康科技 | □ | □ | □ |
| 成立时间 | 2016 | □ | □ | □ |

---

## 执行顺序与工作量评估

```
🔴 任务 1：重写 robots.txt        → 5 分钟（直接上传文件）
🔴 任务 2：创建 llms.txt          → 10 分钟（确认路径后写文件）
🔴 任务 3：首页 JSON-LD           → 15 分钟（找开发插入首页模板）
🔴 任务 4：FAQ JSON-LD            → 10 分钟（可合并到任务 3）
🟡 任务 5：JS 渲染评估             → 30 分钟（跑 curl 检查，确认是否需改造）
🟡 任务 6：其他页面 JSON-LD       → 2-4 小时（每个页面 15-30 分钟）
🟢 任务 7：跨平台信息核对          → 1-2 小时（看你已在多少平台有帐号）
```

**总工作量**：如果开发配合且内容基本就绪，1-2 个工作日可完成所有技术配置。

---

## 后续内容建议

技术配置完成后，下一步需要创造**AI 引擎愿意引用的内容**：

1. 在官网开辟"科普文章"栏目，每篇用 Article + MedicalWebPage Schema
2. 至少创建 10-15 个 FAQ（覆盖患者高频问题）
3. 内容发布到知乎/小红书/头条号（AI 引擎跨平台抓取）
4. 补充百度百科词条（如符合收录标准）

这些内容是 sitemap 扩展的前提——等你有 20+ 优质内容页面了再更新 robots.txt 中的 sitemap。

---

## 验收总清单

```
□ robots.txt 上传并验证可访问
□ llms.txt 创建并验证可访问
□ 首页 JSON-LD 插入并通过 schema.org 校验
□ FAQPage JSON-LD 插入并通过校验
□ curl 检查原始 HTML 含核心内容
□ 其他核心页面 JSON-LD 添加完成
□ 跨平台品牌信息一致性核对完成
□ 3 天后在豆包/DeepSeek/Kimi 搜索"能仁堂"看是否提及
```
