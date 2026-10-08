"use client"

import { useState } from "react"
import { HelpCircle, X, MessageSquare, Phone, MapPin, FileText } from "lucide-react"
import Link from "next/link"
import { whatsappConsultantHref } from "@/lib/contact-links"
import { copy, localizeHref, type Locale } from "@/lib/i18n"

export function FloatingHelpButton({ locale = "ro" }: { locale?: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const text = copy[locale]
  const helpLinks = [
    { icon: FileText, label: text.nav.requestQuote, href: localizeHref("/solicita-oferta", locale) },
    { icon: MessageSquare, label: "WhatsApp", href: whatsappConsultantHref(locale), external: true },
    { icon: Phone, label: "Contact", href: localizeHref("/contact", locale) },
    { icon: MapPin, label: text.home.findRepresentative, href: localizeHref("/reprezentante", locale) },
  ]

  return (
    <>
      <Link
        href={whatsappConsultantHref(locale)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-4 bottom-4 z-50 flex min-h-14 items-center justify-center gap-3 bg-[#25D366] px-5 font-semibold text-white shadow-xl md:hidden"
        aria-label={text.nav.whatsapp}
      >
        <MessageSquare className="h-5 w-5" />
        <span>{text.nav.whatsapp}</span>
      </Link>
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      {/* Help Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-2xl w-64 animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="bg-nardo text-white p-4">
            <h4 className="font-semibold">{text.home.whatLookingFor}</h4>
            <p className="text-sm text-white/80">{text.home.needHelp}</p>
          </div>
          <ul className="p-2">
            {helpLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? (locale === "ro" ? "Închide meniul de ajutor" : "Close help menu") : text.home.needHelp}
        aria-expanded={isOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isOpen 
            ? "bg-anthracite text-white" 
            : "bg-nardo text-white hover:scale-105"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="flex flex-col items-center">
            <HelpCircle className="w-6 h-6" />
            <span className="text-[10px] mt-0.5">{locale === "ro" ? "Ajutor" : "Help"}</span>
          </div>
        )}
      </button>
      </div>
    </>
  )
}
