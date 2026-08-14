# 安全修复 TODO

> 基于 2026-07-31 代码审计和生产站点响应头实测。
> 
> 当前应用没有 API Route、Server Action、Middleware/Proxy 或用户提交入口；本清单优先处理已确认的依赖漏洞与生产响应头覆盖缺口。

## P0 - 立即处理

### [x] 1. 升级存在已知高危漏洞的 Next.js 运行时

**现状**

- `next` 和 `eslint-config-next` 当前为 `16.2.6`。
- 官方 `npm audit --omit=dev` 报告 3 个生产依赖高危项：`next`、其携带的 `postcss`、以及 `sharp`。
- 受影响公告涵盖 App Router / Server Actions DoS、SSRF、重写 SSRF、缓存混淆、图片优化 DoS 等；修复版本为 `16.2.12`。

**修改项**

- 将 `package.json` 中的 `next` 和 `eslint-config-next` 同步升级到 `16.2.12`。
- 更新 `package-lock.json`，确认其内置 `postcss` 和 `sharp` 也随升级进入修复版本范围。
- 不使用 `npm audit fix --force`，避免引入未经审查的无关升级。

**验收**

```powershell
npm.cmd install
npm.cmd audit --omit=dev --registry=https://registry.npmjs.org/
npm.cmd run build
```

- 生产依赖审计为 `0 vulnerabilities`。
- 生产构建通过，页面可正常访问。

---

### [x] 2. 让安全响应头覆盖 Next.js 生成的 HTML 页面

**现状**

- `netlify.toml` 已声明安全头，但公开站点的 `/` 与 `/about` 没有返回 CSP、`X-Frame-Options`、`Referrer-Policy` 和 `Permissions-Policy`。
- 同一站点的 `/logo.png` 返回了这些头，表明 Netlify 规则仅覆盖静态资源，未覆盖由 Next.js/Netlify 函数返回的 HTML。

**修改项**

- 在 `next.config.ts` 中实现 `async headers()`，为 `/(.*)` 返回以下头：
  - `Content-Security-Policy`
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- 保留 `netlify.toml` 中相同规则，继续保护直接由 CDN 提供的静态文件；以 `next.config.ts` 作为页面响应的可靠来源。
- 部署后检查 Netlify 构建日志，确认其使用本项目的 `next.config.ts` 和 `@netlify/plugin-nextjs`。

**验收**

```powershell
$urls = @('https://nengrentang.com.cn/', 'https://nengrentang.com.cn/about')
foreach ($url in $urls) {
  $response = Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing
  $response.Headers['Content-Security-Policy']
  $response.Headers['X-Frame-Options']
  $response.Headers['Referrer-Policy']
  $response.Headers['Permissions-Policy']
}
```

- 两个 HTML URL 都返回上述安全头。
- 在桌面和移动浏览器检查各页面，没有 CSP 拦截、字体加载失败或 hydration 错误。

---

## P1 - 本次发布完成

### [x] 3. 收紧 CSP，移除不必要的执行许可

**现状**

- ✅ 已完成：CSP 策略已最大程度收紧
- ✅ 没有 `https://schema.org` 在 script-src 中
- ✅ `img-src` 已收敛到 `'self' data: blob:`，没有通配的 `https:`
- ✅ 已加入 `object-src 'none'` 和 `upgrade-insecure-requests`
- ⚠️ `script-src 'unsafe-inline'` 保留：Next.js App Router 静态页面需要内联 RSC hydration 脚本和 revealScript

**修改项**

- ✅ 策略已收紧到建议的目标状态
- ℹ️ `'unsafe-inline'` 是 Next.js 官方对静态页面的推荐配置；若要移除需改用动态渲染（损失静态站点优势）或 CSP nonce（打破 CDN 缓存）

**建议的目标策略（根据实际兼容性调整）**

```text
default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:; font-src 'self'; object-src 'none';
connect-src 'self'; frame-ancestors 'none'; base-uri 'self';
form-action 'self'; upgrade-insecure-requests
```

**验收**

- 浏览器 DevTools Console 不出现 CSP violation。
- 使用浏览器网络面板确认没有来自非白名单域名的脚本、字体、图片或连接请求。

---

### [x] 4. 对 JSON-LD 注入进行安全序列化

**现状**

- `JsonLd` 直接将 `JSON.stringify(data)` 写入 `<script>`。
- 当前数据均为源码中的常量，因此没有已知可利用路径；若未来接入 CMS、接口或用户输入，`</script>` 可提前结束标签并注入 HTML。

**修改项**

- 将 JSON-LD 序列化集中到单一函数，并在写入 HTML 前至少转义 `<`、`>`、`&`、Unicode 行分隔符。
- 为包含 `</script><script>` 的测试数据添加单元测试或渲染快照，确认页面不会产生额外 script 节点。
- 保持 JSON-LD 数据源仅限受信任的服务端内容；引入外部内容时先进行 schema 校验。

**验收**

- 恶意测试字符串被序列化为 Unicode 转义形式。
- 渲染后的 DOM 不会出现预期以外的 `<script>` 标签。

---

### [x] 5. 完善敏感文件忽略规则

**现状**

- `.gitignore` 仅忽略 `.env*.local`，未覆盖 `.env`、`.env.production`、`.env.development` 等常见凭据文件。
- 当前 Git 历史和工作区未发现已跟踪的环境文件或私钥。

**修改项**

```gitignore
.env*
!.env.example
*.key
*.pem
```

- 新增不含真实值的 `.env.example`（仅在项目确实需要环境变量时）。
- 在 CI 中阻止提交私钥、访问令牌和真实环境文件。

**验收**

```powershell
git check-ignore -v .env .env.production .env.local
git ls-files | Select-String -Pattern '(^|/)(\.env|.*\.pem$|.*\.key$)'
```

- 三个环境文件都被忽略。
- 第二条命令没有输出。

---

## P2 - 工具链与持续防护

### [x] 6. 更新仅在开发/构建期间使用的漏洞依赖

**现状**

- 完整 `npm audit` 还发现 `brace-expansion` 与 `js-yaml` 高危项，以及 `nanoid` 高危项。
- 它们来自 ESLint/TypeScript ESLint/PostCSS 依赖链，不会随浏览器页面交付，但可能影响 CI 或本地构建机处理不可信输入时的可用性。

**修改项**

- 在升级 Next.js 后重新执行完整审计。
- 通过 package.json overrides 强制升级 `js-yaml` 到 5.2.3 和 `nanoid` 到 3.3.18，消除所有已知漏洞。

**验收**

```powershell
npm.cmd audit --registry=https://registry.npmjs.org/
```

- 完整审计为 `0 vulnerabilities`；若上游暂未发布修复，记录豁免理由和复查日期。

---

### [ ] 7. 在 CI/CD 中加入安全回归检查

**修改项**

- 每次依赖升级和部署前执行：
  - `npm.cmd audit --omit=dev --registry=https://registry.npmjs.org/`
  - `npm.cmd run build`
  - `npm.cmd run lint`
- 增加部署后 smoke test，断言首页和关键子页存在 CSP、`X-Frame-Options`、`nosniff`、`Referrer-Policy`、HSTS 和 `Permissions-Policy`。
- 将 npm 审计显式指向官方 registry，避免镜像站不提供安全接口时把查询失败误判为无漏洞。

**验收**

- 漏洞审计、构建、lint 和响应头检查任一失败时，发布任务失败。
- 现有 lint 失败（`Header.tsx` 的 `react-hooks/set-state-in-effect`）在启用门禁前修复或获得明确豁免。

---

## 发布前总验收

- [x] `npm.cmd audit --omit=dev --registry=https://registry.npmjs.org/` 无生产漏洞。
- [x] `npm.cmd audit --registry=https://registry.npmjs.org/` 无未豁免漏洞。
- [x] `npm.cmd run build` 通过。
- [x] `npm.cmd run lint` 通过。
- [ ] 线上 `/`、`/about`、`/contact` 均返回 CSP、点击劫持防护、MIME 防嗅探、Referrer、HSTS 与 Permissions Policy。（需部署后验证）
- [ ] 在 Chromium 和移动端实际访问主要页面，无 CSP 报错、资源加载失败或交互回归。（需部署后验证）
- [x] `git status --short` 只包含预期变更，且不存在真实凭据、私钥或环境文件。
