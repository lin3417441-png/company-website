const VALID_TOPICS = ['clinic', 'pharmacy', 'food-therapy', 'education', 'other'] as const

interface ContactPayload {
  name?: string
  phone?: string
  email?: string
  topic?: string
  message?: string
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: '请求格式错误' }, { status: 400 })
  }

  const name = body.name?.trim()
  const phone = body.phone?.trim()
  const email = body.email?.trim()
  const topic = body.topic?.trim()
  const message = body.message?.trim()

  if (!name || !phone || !topic || !message) {
    return Response.json({ ok: false, error: '请填写所有必填项' }, { status: 400 })
  }
  if (!/^[\d\s\-+()]{5,20}$/.test(phone)) {
    return Response.json({ ok: false, error: '电话号码格式不正确' }, { status: 400 })
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: '邮箱格式不正确' }, { status: 400 })
  }
  if (!VALID_TOPICS.includes(topic as (typeof VALID_TOPICS)[number])) {
    return Response.json({ ok: false, error: '咨询类型不正确' }, { status: 400 })
  }
  if (message.length > 2000) {
    return Response.json({ ok: false, error: '详细描述过长' }, { status: 400 })
  }

  // TODO: 接入邮件通知（如 Resend / Nodemailer SMTP）或写入数据库。
  // 目前先将留言记录到服务端日志，可在部署平台的日志中查看。
  console.log('[contact] 新留言', {
    name,
    phone,
    email: email || null,
    topic,
    message,
    at: new Date().toISOString(),
  })

  return Response.json({ ok: true })
}
