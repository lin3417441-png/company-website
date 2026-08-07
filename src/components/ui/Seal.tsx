/**
 * 朱红印章
 *
 * 为什么用手绘 SVG 路径而不是字体：
 * public/fonts 下的书法体是**子集化**的（ma-shan-zheng 子集仅 5.8KB，
 * 只含站内既有的十几个装饰字），任何新字符都会渲染成豆腐块；而且马善政
 * 是行楷，本就没有印章需要的篆书结构。所以印文以路径直接描出，
 * 既不新增字体依赖，也不受子集限制。
 *
 * 印文取「能仁堂印」四字，按篆刻的四字方印惯例作 2×2 回字序排布
 * （右上→右下→左上→左下）。字形是篆意简化：保留篆书的方折、
 * 等线、密排特征，不追求严格篆法 —— 实物印章在 80px 尺度下同样
 * 不以可读为目的，形准让位于气韵。
 *
 * 做旧处理（纯 SVG 滤镜，无额外请求）：
 *   - feTurbulence + feDisplacementMap 让边框与笔画不规则位移，
 *     模拟刀刻崩口，去掉"矢量完美"的塑料感。
 *   - 阈值化噪点当蒙版，做出印泥没吃透纸的斑驳留白。
 */

interface SealProps {
  className?: string
  /** 边长（px），默认 80 */
  size?: number
  /** id 前缀 —— 同页多枚印章时避免 SVG filter id 冲突 */
  idPrefix?: string
}

export default function Seal({
  className = '',
  size = 80,
  idPrefix = 'seal',
}: SealProps) {
  const roughId = `${idPrefix}-rough`
  const inkId = `${idPrefix}-ink`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="能仁堂印"
    >
      <defs>
        {/* 刀刻崩口：低频湍流驱动位移，幅度压在 2 以内以免糊掉字形 */}
        <filter id={roughId} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08"
            numOctaves="4"
            seed="7"
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="1.8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* 印泥斑驳：阈值化噪点做蒙版，只在噪声峰值处透空 */}
        <filter id={inkId} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            seed="23"
            result="grain"
          />
          {/* 陡斜率 + 高截距 = 硬阈值：噪声低于 0.58 全实、高于 0.67 透空，
              只有分布顶端约两成变成崩口，印章主体仍是实心朱红。
              斜率放缓会让整枚印章半透明发灰，那是脏而不是旧。 */}
          <feColorMatrix
            in="grain"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 -12 8"
            result="mask"
          />
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>
      </defs>

      <g filter={`url(#${roughId})`}>
        <g filter={`url(#${inkId})`}>
          {/* 外框 —— 四角略偏，避免绝对笔直 */}
          <path
            d="M6.5 6 L93.5 6.5 L93 93.5 L6 93 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinejoin="miter"
          />

          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            {/* ============ 右上「能」 ============ */}
            {/* 左半「厶+月」意象：上下两个方框密排 */}
            <path d="M53 17 L64 17 L64 27 L53 27 Z" />
            <path d="M53 32 L64 32 L64 44 L53 44 Z" />
            <path d="M53 38 L64 38" />
            {/* 右半「匕匕」：两组方折 */}
            <path d="M70 17 L81 17 L81 29" />
            <path d="M70 23 L76 23" />
            <path d="M70 32 L81 32 L81 44 L70 44" />
            <path d="M70 38 L76 38" />

            {/* ============ 右下「仁」 ============ */}
            {/* 单人旁：竖 + 短撇，篆书作两笔垂直 */}
            <path d="M56 56 L56 86" />
            <path d="M56 62 L50 56" />
            {/* 「二」：篆书两横等长、间距开阔 */}
            <path d="M64 64 L84 64" />
            <path d="M64 80 L84 80" />

            {/* ============ 左上「堂」 ============ */}
            {/* 上部「⺌」：三点作三竖 */}
            <path d="M20 16 L20 21" />
            <path d="M27 15 L27 21" />
            <path d="M34 16 L34 21" />
            {/* 「冖」宝盖 */}
            <path d="M15 25 L39 25" />
            {/* 中部「口」 */}
            <path d="M20 30 L34 30 L34 39 L20 39 Z" />
            {/* 底部「土」 */}
            <path d="M27 39 L27 44" />
            <path d="M14 44 L40 44" />

            {/* ============ 左下「印」 ============ */}
            {/* 左半「爪」意象：竖 + 两横折 */}
            <path d="M15 56 L15 78" />
            <path d="M15 62 L26 62 L26 56" />
            <path d="M15 70 L26 70 L26 78" />
            {/* 右半「卩」：竖折 + 长竖 */}
            <path d="M32 56 L41 56 L41 68 L32 68" />
            <path d="M36 68 L36 87" />
          </g>
        </g>
      </g>
    </svg>
  )
}
