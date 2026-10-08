"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { copy, localizeHref, type Locale } from "@/lib/i18n"
import { whatsappConsultantHref } from "@/lib/contact-links"
import { ConsultationRequestButton } from "@/components/consultation-request-button"

const baseSlides = [
  {
    id: 1,
    title: "Design,",
    subtitle: "alege stilul care ți se potrivește",
    description: "Cu ferestrele AROFA, fiecare cameră din casa ta exprimă un stil unic, alcătuit din detalii rafinate. Ferestrele AROFA au fost concepute pentru a se adapta oricărei nevoi arhitecturale. Linii drepte și elegante, cu un design modern, sau colțuri rotunjite pentru un stil mai romantic și mai simplu.",
    cta: "Descoperă stilul AROFA",
    ctaHref: "/ferestre",
    image: "/photos/10.png"
  },
  {
    id: 2,
    title: "AROFA",
    subtitle: "îți oferă mai mult",
    description: "Materialele, feroneria, vitrajul și finisajele sunt alese în funcție de cerințele proiectului. Echipa verifică împreună cu tine configurația, compatibilitatea și condițiile de garanție aplicabile produselor selectate.",
    cta: "Află mai multe",
    ctaHref: "/despre-noi",
    image: "/photos/15.png"
  },
  {
    id: 3,
    title: "CONSILIERE",
    subtitle: "personalizată",
    description: "Când alegi produsele AROFA, te bucuri și de consiliere personalizată. Imediat ce intri în showroomul nostru, vei fi însoțit în alegerea soluțiilor proiectate special pentru nevoile tale. Consilierii noștri de vânzări îți vor explica fiecare detaliu pentru ca tu să ai parte de confortul pe care ți-l dorești.",
    cta: "Cere oferta",
    ctaHref: "/solicita-oferta",
    image: "/photos/14.png"
  },
]

const localizedSlides: Record<Exclude<Locale, "ro">, { title: string; subtitle: string; description: string; cta: string }[]> = {
  en: [
    { title: "Design,", subtitle: "choose the style that suits you", description: "AROFA windows adapt to contemporary and classic architecture through balanced proportions, refined details and flexible finishes.", cta: "Discover AROFA design" },
    { title: "AROFA", subtitle: "offers more", description: "From materials and hardware to assembly and finishing, each stage is controlled to deliver consistent quality and long-term reliability.", cta: "Learn more" },
    { title: "PERSONALISED", subtitle: "advice", description: "Our team helps you compare products, performance levels and installation options so that every choice fits your project.", cta: "Request a quote" },
  ],
  fr: [
    { title: "Design,", subtitle: "choisissez le style qui vous ressemble", description: "Les fenêtres AROFA s’adaptent aux architectures contemporaines et classiques grâce à des proportions équilibrées et des finitions flexibles.", cta: "Découvrir le design AROFA" },
    { title: "AROFA", subtitle: "vous offre davantage", description: "Des matériaux à la quincaillerie, de l’assemblage aux finitions, chaque étape est contrôlée pour garantir qualité et fiabilité.", cta: "En savoir plus" },
    { title: "CONSEIL", subtitle: "personnalisé", description: "Notre équipe vous aide à comparer les produits, les performances et les options de pose pour choisir la solution adaptée.", cta: "Demander un devis" },
  ],
  nl: [
    { title: "Design,", subtitle: "kies de stijl die bij u past", description: "AROFA-ramen passen bij hedendaagse en klassieke architectuur dankzij evenwichtige verhoudingen, verfijnde details en flexibele afwerkingen.", cta: "Ontdek AROFA-design" },
    { title: "AROFA", subtitle: "biedt meer", description: "Van materialen en beslag tot assemblage en afwerking wordt elke stap gecontroleerd voor constante kwaliteit en betrouwbaarheid.", cta: "Meer informatie" },
    { title: "PERSOONLIJK", subtitle: "advies", description: "Ons team helpt u producten, prestaties en plaatsingsopties te vergelijken zodat elke keuze bij uw project past.", cta: "Offerte aanvragen" },
  ],
}

const sectionTitles: Record<Locale, [string, string]> = {
  ro: ["Detalii", "de valoare"], en: ["Details", "that matter"], fr: ["Des détails", "qui comptent"], nl: ["Details", "die ertoe doen"],
}

export function ValueDetailsSlider({ locale = "ro" }: { locale?: Locale }) {
  const text = copy[locale].home
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = locale === "ro" ? baseSlides : baseSlides.map((slide, index) => ({ ...slide, ...localizedSlides[locale][index] }))

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const slide = slides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-anthracite py-12 text-white lg:py-16">
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between lg:mb-10">
          <h2 className="text-3xl lg:text-5xl">
            <span className="font-medium">{sectionTitles[locale][0]}</span>
            <span className="font-light"> {sectionTitles[locale][1]}</span>
          </h2>
          
          {/* Navigation */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              aria-label={locale === "ro" ? "Detaliul anterior" : "Previous detail"}
              className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label={locale === "ro" ? "Detaliul următor" : "Next detail"}
              className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider Content */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl lg:text-3xl mb-6">
              <span className="font-bold">{slide.title}</span>
              <span className="font-light"> {slide.subtitle}</span>
            </h3>
            <p className="mb-6 leading-relaxed text-white/75">
              {slide.description}
            </p>
            <Link
              href={localizeHref(slide.ctaHref, locale)}
              className="group inline-flex items-center gap-2 text-white transition-colors hover:text-primary"
            >
              <Plus className="w-4 h-4" />
              <span>{slide.cta}</span>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 border-t border-white/15 pt-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="mb-2 text-2xl lg:text-3xl">
              <span className="font-medium">{text.consultingTitle}</span>
              <span className="font-light"> {text.consultingTitleLight}</span>
            </h3>
            <p className="max-w-3xl leading-relaxed text-white/70">{text.consultingText}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href={whatsappConsultantHref(locale)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white transition-colors hover:text-primary">
              <Plus className="h-4 w-4" />{text.whatsapp}
            </Link>
            <ConsultationRequestButton locale={locale} heading="Contact" className="inline-flex items-center gap-2 text-white transition-colors hover:text-primary">
              <Plus className="h-4 w-4" />Contact
            </ConsultationRequestButton>
          </div>
        </div>
      </div>
    </section>
  )
}
