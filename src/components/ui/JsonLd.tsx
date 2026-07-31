/**
 * 将 JSON-LD 数据序列化为可安全嵌入 HTML 的字符串。
 * JSON.stringify 不转义 `<`、`>`、`&` 和 Unicode 行/段落分隔符，
 * 若字符串值中含 `</script>` 等序列，会提前结束 script 标签并注入任意 HTML。
 * U+2028/U+2029 用 split/join 处理，避免将其放入 regex 字面量（TS 语法限制）。
 */
function safeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .split(" ").join("\\u2028")
    .split(" ").join("\\u2029");
}

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
