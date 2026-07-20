import type { Metadata } from "next"
import { Ma_Shan_Zheng, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import JsonLd from "@/components/ui/JsonLd"
import { SITE_CONFIG } from "@/lib/constants"

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
})

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
})

const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ma-shan-zheng",
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
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
  address: {
    "@type": "PostalAddress",
    streetAddress: "思明区湖滨南路8-2-1",
    addressLocality: "厦门市",
    addressRegion: "福建省",
    addressCountry: "CN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body
        className={`min-h-screen ${notoSerifSC.variable} ${notoSansSC.variable} ${maShanZheng.variable}`}
      >
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
