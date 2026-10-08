"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { InquiryForm } from "@/components/inquiry-form"
import type { Locale } from "@/lib/i18n"

type QuoteRequestModalProps = {
  open: boolean
  onClose: () => void
  locale: Locale
  heading?: string
}

export function QuoteRequestModal({ open, onClose, locale, heading }: QuoteRequestModalProps) {
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section role="dialog" aria-modal="true" aria-labelledby="quote-modal-title" className="relative my-auto w-full max-w-3xl bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-8">
          <h2 id="quote-modal-title" className="text-xl font-medium sm:text-2xl">
            {heading ?? (locale === "en" ? "Request a quote" : locale === "fr" ? "Demander un devis" : locale === "nl" ? "Offerte aanvragen" : "Solicită o ofertă")}
          </h2>
          <button type="button" onClick={onClose} aria-label={locale === "en" ? "Close" : locale === "fr" ? "Fermer" : locale === "nl" ? "Sluiten" : "Închide"} className="flex h-10 w-10 items-center justify-center text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto p-4 sm:p-8">
          <InquiryForm locale={locale} />
        </div>
      </section>
    </div>
  )
}

export function QuoteRequestPageModal({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(true)
  return <QuoteRequestModal open={open} onClose={() => setOpen(false)} locale={locale} />
}
