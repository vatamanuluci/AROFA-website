import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, ChevronRight, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingHelpButton } from "@/components/floating-help-button"
import { InquiryForm } from "@/components/inquiry-form"
import { QuoteRequestPageModal } from "@/components/quote-request-modal"
import { ConsultationRequestButton } from "@/components/consultation-request-button"
import { HomePageContent } from "@/components/home-page-content"
import { isGeneratedProductPage, sitePages } from "@/lib/site-content"
import { copy, localizeHref, splitLocaleFromSlug, type Locale } from "@/lib/i18n"
import { getLocalizedPage } from "@/lib/localized-content"
import { getProductDetails } from "@/lib/product-details"
import { whatsappConsultantHref } from "@/lib/contact-links"
import { AROFA_EMAIL, AROFA_PHONE } from "@/lib/contact-info"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  return [
    ...sitePages.map((page) => ({ slug: page.slug })),
    ...(["en", "fr", "nl"] as const).flatMap((locale) => [
      { slug: [locale] },
      ...sitePages.map((page) => ({ slug: [locale, ...page.slug] })),
    ]),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const localized = splitLocaleFromSlug(slug)
  const page = localized.slug.length ? getLocalizedPage(localized.slug, localized.locale) : undefined

  if (localized.slug.length === 0) {
    const titles: Record<Locale, string> = { ro: "AROFA", en: "AROFA | Windows, doors and shading", fr: "AROFA | Fenêtres, portes et protections solaires", nl: "AROFA | Ramen, deuren en zonwering" }
    const descriptions: Record<Locale, string> = {
      ro: "Ferestre, uși, sisteme de umbrire și montaj pentru proiecte rezidențiale, comerciale și industriale.",
      en: "Windows, doors, shading systems and installation for residential, commercial and industrial projects.",
      fr: "Fenêtres, portes, protections solaires et pose pour les projets résidentiels, commerciaux et industriels.",
      nl: "Ramen, deuren, zonwering en plaatsing voor residentiële, commerciële en industriële projecten.",
    }
    const localePath = localized.locale === "ro" ? "/" : `/${localized.locale}`
    return {
      title: titles[localized.locale],
      description: descriptions[localized.locale],
      alternates: {
        canonical: localePath,
        languages: { "x-default": "/", ro: "/", en: "/en", fr: "/fr", "nl-BE": "/nl" },
      },
      openGraph: {
        title: titles[localized.locale],
        description: descriptions[localized.locale],
        type: "website",
        url: localePath,
        siteName: "AROFA",
        locale: localized.locale === "fr" ? "fr_FR" : localized.locale === "nl" ? "nl_BE" : localized.locale === "en" ? "en_GB" : "ro_RO",
      },
      twitter: { card: "summary_large_image", title: titles[localized.locale], description: descriptions[localized.locale] },
    }
  }

  if (!page) {
    return {
      title: "Page unavailable | AROFA",
      robots: { index: false, follow: false },
    }
  }

  const title = page.seoTitle ?? `${page.title} | AROFA`
  const isDraftProductPage = isGeneratedProductPage(localized.slug)

  return {
    title,
    description: page.description,
    robots: isDraftProductPage ? { index: false, follow: true } : undefined,
    alternates: {
      canonical: `/${slug.join("/")}`,
      languages: {
        "x-default": `/${localized.slug.join("/")}`,
        ro: `/${localized.slug.join("/")}`,
        en: `/en/${localized.slug.join("/")}`,
        fr: `/fr/${localized.slug.join("/")}`,
        "nl-BE": `/nl/${localized.slug.join("/")}`,
      },
    },
    openGraph: {
      title,
      description: page.description,
      type: "website",
      url: `/${slug.join("/")}`,
      siteName: "AROFA",
      locale: localized.locale === "fr" ? "fr_FR" : localized.locale === "nl" ? "nl_BE" : localized.locale === "en" ? "en_GB" : "ro_RO",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
    },
  }
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params
  const localized = splitLocaleFromSlug(slug)
  const { locale } = localized
  if (localized.slug.length === 0) return <HomePageContent locale={locale} />

  const page = getLocalizedPage(localized.slug, locale)
  const slugPath = localized.slug.join("/")
  const showContactForm = slugPath === "contact"
  const text = copy[locale]
  const productDetails = getProductDetails(localized.slug, locale)
  const mainPageSlugs = new Set(["usi", "usi-de-garaj-industriale", "ferestre", "sisteme-umbrire", "servicii-de-montaj", "despre-noi", "contact"])
  const relatedMainPages = page?.relatedLinks?.filter((link) => mainPageSlugs.has(link.href.replace(/^\//, "")))
  const actionCopy = {
    ro: { eyebrow: "Acțiune directă", offerTitle: "Configurează cererea de ofertă", contactTitle: "Trimite un mesaj clar și complet", offerText: "Selectează categoriile relevante și descrie cerințele proiectului.", contactText: "Folosește formularul pentru întrebări, programări și clarificări despre produse sau montaj.", showroom: "Consultanță prin formular și programare în showroom.", social: "Canale sociale: Instagram, LinkedIn și Facebook AROFA" },
    en: { eyebrow: "Direct enquiry", offerTitle: "Configure your quote request", contactTitle: "Send us a clear project enquiry", offerText: "Select the relevant categories and describe your project requirements.", contactText: "Use the form for questions, appointments and product or installation advice.", showroom: "Advice through the form and showroom appointments.", social: "Social channels: Instagram, LinkedIn and Facebook AROFA" },
    fr: { eyebrow: "Demande directe", offerTitle: "Configurez votre demande de devis", contactTitle: "Envoyez-nous une demande claire", offerText: "Sélectionnez les catégories concernées et décrivez les exigences du projet.", contactText: "Utilisez le formulaire pour vos questions, rendez-vous et conseils sur les produits ou la pose.", showroom: "Conseil via le formulaire et rendez-vous au showroom.", social: "Réseaux sociaux : Instagram, LinkedIn et Facebook AROFA" },
    nl: { eyebrow: "Directe aanvraag", offerTitle: "Stel uw offerteaanvraag samen", contactTitle: "Stuur ons een duidelijke projectaanvraag", offerText: "Selecteer de relevante categorieën en beschrijf uw projectvereisten.", contactText: "Gebruik het formulier voor vragen, afspraken en advies over producten of plaatsing.", showroom: "Advies via het formulier en afspraken in de showroom.", social: "Sociale kanalen: Instagram, LinkedIn en Facebook AROFA" },
  }[locale]

  if (!page) {
    notFound()
  }

  return (
    <main className="pb-20 md:pb-0">
      <Header locale={locale} />

      <section className="bg-anthracite text-white">
        <div className="container mx-auto px-4 py-14 sm:py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-5">{page.eyebrow}</p>
            <h1 className="mb-5 text-3xl font-medium leading-tight sm:text-4xl lg:mb-6 lg:text-6xl">{page.title}</h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">{page.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              {page.ctaLabel && page.ctaHref && (
                page.ctaHref === "/contact" ? (
                  <ConsultationRequestButton
                    locale={locale}
                    className="inline-flex min-h-12 items-center justify-center gap-3 bg-nardo px-6 py-3 font-medium text-white transition-colors hover:bg-nardo/90"
                  >
                    {page.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </ConsultationRequestButton>
                ) : (
                  <Link
                    href={localizeHref(page.ctaHref, locale)}
                    className="inline-flex min-h-12 items-center justify-center gap-3 bg-nardo px-6 py-3 font-medium text-white transition-colors hover:bg-nardo/90"
                  >
                    {page.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )
              )}
              <a
                href={whatsappConsultantHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 px-6 py-3 text-white transition-colors hover:bg-white/5"
              >
                {text.page.talkToConsultant}
                <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium mb-6">{text.page.pageContents}</h2>
              <p className="text-foreground/75 text-lg leading-relaxed mb-8">{page.description}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {page.highlights.map((highlight) => (
                  <div key={highlight} className="bg-secondary p-5 border border-border">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="w-4 h-4" />
                      </span>
                      <p className="text-foreground/85 leading-relaxed">
                        {highlight.includes(": ") ? (
                          <><strong>{highlight.slice(0, highlight.indexOf(": "))}:</strong> {highlight.slice(highlight.indexOf(": ") + 2)}</>
                        ) : highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-secondary border border-border p-6 lg:p-8">
              <h3 className="text-2xl font-medium mb-5">{text.page.recommendedSteps}</h3>
              <ul className="space-y-4 text-foreground/80">
                {text.page.steps.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-primary mb-3">{text.page.quickContact}</p>
                <div className="space-y-2 text-foreground/80">
                  <p>Email: <a className="hover:text-primary" href={`mailto:${AROFA_EMAIL}`}>{AROFA_EMAIL}</a></p>
                  <p>Telefon: <a className="hover:text-primary" href={`tel:${AROFA_PHONE.replace(/\s/g, "")}`}>{AROFA_PHONE}</a></p>
                  <p>Instagram: @arofa_romania</p>
                  <p>{actionCopy.showroom}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {productDetails && (
        <section className="border-y border-border bg-secondary py-16 lg:py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-3 lg:gap-14">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-primary">{text.page.applications}</p>
              <ul className="space-y-3 text-foreground/80">
                {productDetails.applications.map((item) => <li key={item} className="border-b border-border pb-3">{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-primary">{text.page.options}</p>
              <ul className="space-y-3 text-foreground/80">
                {productDetails.options.map((item) => <li key={item} className="border-b border-border pb-3">{item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="mb-5 text-2xl font-medium">{text.page.choosingTitle}</h2>
              <p className="leading-relaxed text-foreground/75">{productDetails.choosing}</p>
            </div>
          </div>
        </section>
      )}

      {showContactForm && (
        <section className="bg-secondary py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-primary mb-4">{actionCopy.eyebrow}</p>
                <h2 className="text-3xl lg:text-4xl font-medium mb-5">
                  {actionCopy.contactTitle}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {actionCopy.contactText}
                </p>
                <div className="space-y-3 text-foreground/80">
                  <p>Email: <a className="hover:text-primary" href={`mailto:${AROFA_EMAIL}`}>{AROFA_EMAIL}</a></p>
                  <p>Telefon: <a className="hover:text-primary" href={`tel:${AROFA_PHONE.replace(/\s/g, "")}`}>{AROFA_PHONE}</a></p>
                  <p>{actionCopy.social}</p>
                </div>
              </div>
              <InquiryForm locale={locale} />
            </div>
          </div>
        </section>
      )}

      {relatedMainPages && relatedMainPages.length > 0 && (
        <section className="bg-secondary py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">{text.page.usefulLinks}</p>
                <h2 className="text-3xl lg:text-4xl font-medium">{text.page.continueBrowsing}</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {relatedMainPages.map((link) => (
                <Link
                  key={link.href}
                  href={localizeHref(link.href, locale)}
                  className="group bg-background border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground">{getLocalizedPage(link.href.split("/").filter(Boolean), locale)?.title ?? link.label}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive text-white transition-transform group-hover:translate-x-1">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer locale={locale} />
      <FloatingHelpButton locale={locale} />
      {slugPath === "solicita-oferta" && <QuoteRequestPageModal locale={locale} />}
    </main>
  )
}
