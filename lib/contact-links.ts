import type { Locale } from "@/lib/i18n"
import { AROFA_WHATSAPP_NUMBER } from "@/lib/contact-info"

const whatsappNumber = (process.env.NEXT_PUBLIC_AROFA_WHATSAPP_NUMBER || AROFA_WHATSAPP_NUMBER).replace(/\D/g, "")

const messages: Record<Locale, { offer: string; consultant: string }> = {
  ro: { offer: "Bună ziua! Aș dori o ofertă pentru produse AROFA.", consultant: "Bună ziua! Aș vrea să discut cu un consultant AROFA." },
  en: { offer: "Hello! I would like a quote for AROFA products.", consultant: "Hello! I would like to speak with an AROFA consultant." },
  fr: { offer: "Bonjour ! Je souhaite recevoir un devis pour des produits AROFA.", consultant: "Bonjour ! Je souhaite échanger avec un conseiller AROFA." },
  nl: { offer: "Hallo! Ik ontvang graag een offerte voor AROFA-producten.", consultant: "Hallo! Ik wil graag met een AROFA-adviseur spreken." },
}

export function whatsappLink(message: string) {
  const recipient = whatsappNumber ? `/${whatsappNumber}` : ""
  return `https://wa.me${recipient}?text=${encodeURIComponent(message)}`
}

export function whatsappOfferHref(locale: Locale = "ro") {
  return whatsappLink(messages[locale].offer)
}

export function whatsappConsultantHref(locale: Locale = "ro") {
  return whatsappLink(messages[locale].consultant)
}
