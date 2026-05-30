import type { Metadata } from "next"
import { Ma_Shan_Zheng } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import { SITE_CONFIG } from "@/lib/constants"

const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calligraphy",
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["中医", "中医门诊", "中药", "食养", "研学", "健康养生", "能仁堂"],
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "zh_CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`min-h-screen ${maShanZheng.variable}`}>
        <Header />
        <main className="pt-16 sm:pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}