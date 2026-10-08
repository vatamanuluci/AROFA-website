"use client"

import { useState, type ReactNode } from "react"
import { QuoteRequestModal } from "@/components/quote-request-modal"
import type { Locale } from "@/lib/i18n"

type ConsultationRequestButtonProps = {
  locale: Locale
  children: ReactNode
  className?: string
  heading?: string
}

export function ConsultationRequestButton({ locale, children, className = "", heading }: ConsultationRequestButtonProps) {
  const [open, setOpen] = useState(false)
  const defaultHeading = locale === "en" ? "Request a consultation" : locale === "fr" ? "Demander un conseil" : locale === "nl" ? "Advies aanvragen" : "Solicit\u0103 consultan\u021b\u0103"

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <QuoteRequestModal open={open} onClose={() => setOpen(false)} locale={locale} heading={heading ?? defaultHeading} />
    </>
  )
}
