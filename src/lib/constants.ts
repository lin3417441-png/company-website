/** 集团旗舰门诊地址（schema.org PostalAddress） */
export const GROUP_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '湖滨南路8-2-1',
  addressLocality: '厦门市',
  addressRegion: '福建省',
  addressCountry: 'CN',
} as const

export const GROUP_ADDRESS_DISPLAY = `${GROUP_ADDRESS.addressLocality}思明区${GROUP_ADDRESS.streetAddress}`

/** 能仁堂药业地址（schema.org PostalAddress） */
export const PHARMACY_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '湖里区祥店路岭南里48-101-1号（建发中央天成东门南侧商铺）',
  addressLocality: '厦门市',
  addressRegion: '福建省',
  addressCountry: 'CN',
} as const

export const PHARMACY_ADDRESS_DISPLAY = `${PHARMACY_ADDRESS.addressRegion}${PHARMACY_ADDRESS.addressLocality}${PHARMACY_ADDRESS.streetAddress}`

export const SITE_CONFIG = {
  name: '能仁堂集团',
  slogan: '能仁大愿，仁心仁术',
  description: '能仁堂集团致力于推动中医药健康文化的创造性转化与创新性发展。是一家集中医诊疗、康复疗养、文化研学、健康科技于一体的综合医疗集团',
  url: 'https://nengrentang.com.cn',
  address: GROUP_ADDRESS_DISPLAY,
  phone: '0592-5156156',
  email: '858888363@qq.com',
  founded: '2016',
  motto: '能仁大愿，仁心仁术',
}

export const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于我们' },
  { href: '/services', label: '医疗服务' },
  { href: '/pharmacy', label: '能仁堂药业' },
  { href: '/wellness', label: '食养研学' },
  { href: '/contact', label: '联系我们' },
]

/**
 * 营业时间统一数据源
 * clinic  —— 医疗机构 & 食养小屋  8:30-21:00
 * office  —— 集团行政              9:00-18:00
 */
export const BUSINESS_HOURS = {
  clinic: {
    display: '周一至周日 8:30 - 21:00',
    opens: '08:30',
    closes: '21:00',
  },
  office: {
    display: '周一至周日 9:00 - 18:00',
    opens: '09:00',
    closes: '18:00',
  },
  pharmacy: {
    display: '周一至周日 9:00 - 18:00',
    opens: '09:00',
    closes: '18:00',
  },
} as const

/** 生成 schema.org OpeningHoursSpecification（全周）*/
export function openingHoursSpec(type: keyof typeof BUSINESS_HOURS) {
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday',
  ]
  const { opens, closes } = BUSINESS_HOURS[type]
  return days.map((day) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${day}`,
    opens,
    closes,
  }))
}

export const FEATURE_PROJECTS = [
  { id: 1, name: '体质调理', description: '根据中医九种体质辨识，提供个性化的体质调理方案。' },
  { id: 2, name: '余氏骨伤', description: '传承余氏骨伤流派，运用传统手法治疗各类骨伤疾患。' },
  { id: 3, name: '肥胖四高', description: '中医调理肥胖、高血压、高血糖、高血脂、高尿酸等代谢问题。' },
  { id: 4, name: '女性康养', description: '专注女性健康，提供经、带、孕、产、更年期全周期中医调理。' },
  { id: 5, name: '结节调理', description: '运用中药内服外治，调理甲状腺结节、乳腺结节等。' },
  { id: 6, name: '睡眠调理', description: '中医辨证施治，改善失眠、多梦、易醒等睡眠障碍。' },
  { id: 7, name: '小儿推拿', description: '以手代药，运用小儿推拿手法，治疗和预防小儿常见病。' },
  { id: 8, name: '疼痛管理', description: '针灸、推拿、理疗综合运用，有效管理各类疼痛问题。' },
]
