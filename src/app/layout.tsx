import type { Metadata } from "next"
import { Ma_Shan_Zheng, Noto_Serif_SC } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import JsonLd from "@/components/ui/JsonLd"
import RevealController from "@/components/ui/RevealController"
import { SITE_CONFIG, GROUP_ADDRESS } from "@/lib/constants"

// 标题用 Noto Serif SC；正文走系统字体（见 globals.css 的 --font-sans），
// 避免为中文正文拉取大量 CJK unicode-range 分片。
const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
})

// 书法体仅用于十余个装饰字，不 preload，按 unicode-range 按需加载。
const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ma-shan-zheng",
  display: "swap",
  preload: false,
})

/**
 * 滚动入场的触发脚本。
 *
 * 内联并置于 <body> 首位，早于 hydration 执行，因此入场不依赖 React，
 * 首屏元素不会因为等 JS 而推迟可见（LCP 不受影响）。
 * 只有这段脚本成功执行才会加上 reveal-ready，隐藏态才生效——
 * 无 JS 或偏好减少动效时内容直接可见。
 */
const revealScript = `(function(){try{if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(!('IntersectionObserver' in window))return;var d=document;d.documentElement.classList.add('reveal-ready');var start=function(){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-revealed');io.unobserve(e.target)}})},{rootMargin:'-80px'});d.querySelectorAll('[data-reveal]').forEach(function(el){io.observe(el)})};if(d.readyState==='loading'){d.addEventListener('DOMContentLoaded',start)}else{start()}}catch(e){document.documentElement.classList.remove('reveal-ready')}})();`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["中医", "中医门诊", "中药", "食养", "研学", "健康养生", "能仁堂"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/about-hero.jpg",
        width: 1706,
        height: 1279,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  description: SITE_CONFIG.description,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  foundingDate: SITE_CONFIG.founded,
  address: GROUP_ADDRESS,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body
        className={`min-h-screen ${notoSerifSC.variable} ${maShanZheng.variable}`}
      >
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <RevealController />
      </body>
    </html>
  )
}
