import { NextRequest, NextResponse } from "next/server"
import { isLocale, type Locale } from "@/lib/i18n"

const localeCookie = "arofa_locale"
const publicLocales = ["en", "fr", "nl"] as const
const botPattern = /bot|crawler|spider|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex/i

function detectBrowserLocale(header: string | null): Locale {
  if (!header) return "en"

  const preferences = header
    .split(",")
    .map((entry) => {
      const [language, qualityValue] = entry.trim().toLowerCase().split(";q=")
      return { language, quality: qualityValue ? Number(qualityValue) : 1 }
    })
    .filter((entry) => Number.isFinite(entry.quality) && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality)

  for (const preference of preferences) {
    const language = preference.language.split("-")[0]
    if (isLocale(language)) return language
  }

  return "en"
}

function localeFromPath(pathname: string): Locale | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0]
  return publicLocales.includes(firstSegment as (typeof publicLocales)[number])
    ? firstSegment as Locale
    : null
}

function setLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookie, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  })
  return response
}

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const requestedLocale = searchParams.get("lang")

  if (isLocale(requestedLocale)) {
    const cleanUrl = request.nextUrl.clone()
    cleanUrl.searchParams.delete("lang")
    return setLocaleCookie(NextResponse.redirect(cleanUrl), requestedLocale)
  }

  const pathLocale = localeFromPath(pathname)
  if (pathLocale) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-arofa-locale", pathLocale)
    return setLocaleCookie(NextResponse.next({ request: { headers: requestHeaders } }), pathLocale)
  }

  const userAgent = request.headers.get("user-agent") ?? ""
  if (botPattern.test(userAgent)) return NextResponse.next()

  const savedLocale = request.cookies.get(localeCookie)?.value
  const preferredLocale = isLocale(savedLocale)
    ? savedLocale
    : detectBrowserLocale(request.headers.get("accept-language"))

  if (preferredLocale === "ro") {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-arofa-locale", "ro")
    const response = NextResponse.next({ request: { headers: requestHeaders } })
    return savedLocale ? response : setLocaleCookie(response, preferredLocale)
  }

  const localizedUrl = request.nextUrl.clone()
  localizedUrl.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`
  return setLocaleCookie(NextResponse.redirect(localizedUrl), preferredLocale)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\..*).*)"],
}
