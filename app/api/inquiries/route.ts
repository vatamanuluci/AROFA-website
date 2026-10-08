import { Resend } from "resend"
import { NextResponse } from "next/server"
import { AROFA_EMAIL } from "@/lib/contact-info"

type InquiryPayload = {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
  phone?: unknown
  company?: unknown
  cui?: unknown
  subject?: unknown
  city?: unknown
  timeSlot?: unknown
  message?: unknown
  consent?: unknown
  website?: unknown
}

const attempts = new Map<string, { count: number; resetAt: number }>()
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT = 5
const RATE_WINDOW = 15 * 60 * 1000

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character] ?? character)
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  const now = Date.now()
  if (attempts.size > 5000) {
    for (const [key, value] of attempts) {
      if (value.resetAt <= now) attempts.delete(key)
    }
  }
  const current = attempts.get(ip)
  if (current && current.resetAt > now && current.count >= RATE_LIMIT) {
    return NextResponse.json({ code: "RATE_LIMITED" }, { status: 429 })
  }
  attempts.set(ip, current && current.resetAt > now
    ? { ...current, count: current.count + 1 }
    : { count: 1, resetAt: now + RATE_WINDOW })

  let payload: InquiryPayload
  try {
    payload = await request.json() as InquiryPayload
  } catch {
    return NextResponse.json({ code: "INVALID_REQUEST" }, { status: 400 })
  }

  if (payload.website) return NextResponse.json({ ok: true })

  const firstName = clean(payload.firstName, 100)
  const lastName = clean(payload.lastName, 100)
  const email = clean(payload.email, 200)
  const phone = clean(payload.phone, 40)
  const company = clean(payload.company, 150)
  const cui = clean(payload.cui, 50)
  const subject = clean(payload.subject, 200)
  const city = clean(payload.city, 100)
  const timeSlot = clean(payload.timeSlot, 50)
  const message = clean(payload.message, 3000)

  if (!firstName || !lastName || !emailPattern.test(email) || !phone || !subject || !city || !timeSlot || !message || !payload.consent) {
    return NextResponse.json({ code: "INVALID_FIELDS" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.BUSINESS_EMAIL || process.env.INQUIRY_TO_EMAIL || AROFA_EMAIL
  if (!apiKey || !to) {
    return NextResponse.json({ code: "DELIVERY_NOT_CONFIGURED" }, { status: 503 })
  }

  const resend = new Resend(apiKey)
  const rows = [
    ["Nume", firstName], ["Prenume", lastName], ["Email", email], ["Telefon", phone],
    ["Companie", company || "-"], ["C.U.I.", cui || "-"], ["Subiect", subject],
    ["Localitate livrare și/sau montaj", city], ["Interval orar", timeSlot], ["Mesaj", message],
  ]
  const html = rows.map(([label, value]) =>
    `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br>")}</p>`
  ).join("")

  try {
    const { error } = await resend.emails.send({
      from: process.env.INQUIRY_FROM_EMAIL || "Site AROFA <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Mesaj de contact AROFA: ${subject.replace(/[\r\n]/g, " ")}`,
      html,
    })
    if (error) {
      console.error("[contact] Notification error:", error)
      return NextResponse.json({ code: "DELIVERY_FAILED" }, { status: 502 })
    }
  } catch (error) {
    console.error("[contact] Notification error:", error)
    return NextResponse.json({ code: "DELIVERY_FAILED" }, { status: 502 })
  }

  // Confirmation is best-effort: the Resend free tier may reject unverified recipients.
  try {
    const { error } = await resend.emails.send({
      from: process.env.INQUIRY_FROM_EMAIL || "Site AROFA <onboarding@resend.dev>",
      to: email,
      subject: "Am primit solicitarea ta",
      html: `<div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto;"><h1>Mulțumim, ${escapeHtml(firstName)}!</h1><p>Am primit mesajul tău și revenim în cel mai scurt timp.</p></div>`,
    })
    if (error) console.warn("[contact] Confirmation email skipped:", error)
  } catch (error) {
    console.warn("[contact] Confirmation email skipped:", error)
  }

  return NextResponse.json({ ok: true })
}
