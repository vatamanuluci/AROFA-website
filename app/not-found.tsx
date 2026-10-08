"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { isLocale, localizeHref, type Locale } from "@/lib/i18n"

export default function NotFound() {
  const pathname = usePathname()
  const firstSegment = pathname.split("/").filter(Boolean)[0]
  const locale: Locale = isLocale(firstSegment) ? firstSegment : "ro"
  const text = {
    ro: { title: "Pagina căutată nu există.", body: "Linkul poate fi vechi sau incomplet. Revino la pagina principală sau contactează echipa AROFA.", home: "Înapoi la pagina principală", contact: "Contactează AROFA" },
    en: { title: "This page does not exist.", body: "The link may be outdated or incomplete. Return to the home page or contact the AROFA team.", home: "Back to home", contact: "Contact AROFA" },
    fr: { title: "Cette page n’existe pas.", body: "Le lien est peut-être ancien ou incomplet. Revenez à l’accueil ou contactez l’équipe AROFA.", home: "Retour à l’accueil", contact: "Contacter AROFA" },
    nl: { title: "Deze pagina bestaat niet.", body: "De link is mogelijk verouderd of onvolledig. Ga terug naar de startpagina of neem contact op met AROFA.", home: "Terug naar home", contact: "Contacteer AROFA" },
  }[locale]
  return (
    <main>
      <Header locale={locale} />
      <section className="bg-anthracite text-white">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-5">404</p>
          <h1 className="text-4xl lg:text-6xl font-medium mb-6">{text.title}</h1>
          <p className="max-w-2xl text-lg text-white/75 mb-8">
            {text.body}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={localizeHref("/", locale)} className="bg-nardo px-6 py-3 font-medium hover:bg-nardo/90 transition-colors">
              {text.home}
            </Link>
            <Link href={localizeHref("/contact", locale)} className="border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">
              {text.contact}
            </Link>
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  )
}
