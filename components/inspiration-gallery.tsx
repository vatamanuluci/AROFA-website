"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Instagram, Maximize2, Plus, X } from "lucide-react"
import type { Locale } from "@/lib/i18n"

const galleryImages = [
  {
    id: 1,
    src: "/photos/1.png",
    alt: "Locuință modernă cu tâmplărie AROFA"
  },
  {
    id: 2,
    src: "/photos/2.png",
    alt: "Ferestre și uși vitrate AROFA"
  },
  {
    id: 3,
    src: "/photos/6.png",
    alt: "Proiect rezidențial cu tâmplărie închisă la culoare"
  },
  {
    id: 4,
    src: "/photos/11.png",
    alt: "Casă cu ferestre și uși AROFA"
  },
  {
    id: 5,
    src: "/photos/16.png",
    alt: "Ansamblu rezidențial echipat de AROFA"
  },
  {
    id: 6,
    src: "/photos/20.png",
    alt: "Fațadă din cărămidă cu tâmplărie AROFA"
  },
  {
    id: 7,
    src: "/photos/7.jpg",
    alt: "Proiect comercial cu fațadă vitrată AROFA"
  },
  {
    id: 8,
    src: "/photos/8.jpg",
    alt: "Montaj de fațadă vitrată pe șantier"
  },
  {
    id: 9,
    src: "/photos/13.png",
    alt: "Tâmplărie AROFA montată într-un proiect rezidențial"
  },
  {
    id: 10,
    src: "/photos/10.png",
    alt: "Ușă de intrare și ușă de garaj AROFA"
  },
  {
    id: 11,
    src: "/photos/15.png",
    alt: "Sisteme vitrate din aluminiu AROFA"
  },
  {
    id: 12,
    src: "/photos/17.jpg",
    alt: "Ferestre și rulouri pentru clădire rezidențială"
  },
]

const galleryCopy: Record<Locale, { title: string; subtitle: string; follow: string; more: string }> = {
  ro: { title: "Lasă-te", subtitle: "inspirat", follow: "Urmărește-ne pe Instagram", more: "Vezi mai multe imagini" },
  en: { title: "Find", subtitle: "inspiration", follow: "Follow us on Instagram", more: "View more images" },
  fr: { title: "Trouvez", subtitle: "l’inspiration", follow: "Suivez-nous sur Instagram", more: "Voir plus d’images" },
  nl: { title: "Laat u", subtitle: "inspireren", follow: "Volg ons op Instagram", more: "Bekijk meer beelden" },
}

export function InspirationGallery({ locale = "ro" }: { locale?: Locale }) {
  const text = galleryCopy[locale]
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex === null) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null)
      if (event.key === "ArrowLeft") setSelectedIndex((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length)
      if (event.key === "ArrowRight") setSelectedIndex((current) => current === null ? null : (current + 1) % galleryImages.length)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [selectedIndex])

  const closeLabel = locale === "en" ? "Close gallery" : locale === "fr" ? "Fermer la galerie" : locale === "nl" ? "Galerij sluiten" : "Închide galeria"
  const previousLabel = locale === "en" ? "Previous image" : locale === "fr" ? "Image précédente" : locale === "nl" ? "Vorige afbeelding" : "Imaginea anterioară"
  const nextLabel = locale === "en" ? "Next image" : locale === "fr" ? "Image suivante" : locale === "nl" ? "Volgende afbeelding" : "Imaginea următoare"

  return (
    <>
    <section className="bg-background py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl lg:text-5xl">
            <span className="font-medium">{text.title}</span>
            <span className="font-light"> {text.subtitle}</span>
          </h2>
          
          <Link
            href="https://www.instagram.com/arofa_romania/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            {text.follow}
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square overflow-hidden bg-secondary text-left"
              aria-label={`${image.alt}. ${locale === "ro" ? "Deschide imaginea" : "Open image"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-nardo/0 transition-colors group-hover:bg-nardo/45 group-focus-visible:bg-nardo/45">
                <Maximize2 className="h-7 w-7 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="https://www.instagram.com/arofa_romania/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Plus className="w-4 h-4" />
            {text.more}
          </Link>
        </div>
      </div>
    </section>
    {selectedIndex !== null && (
      <div
        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-3 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={galleryImages[selectedIndex].alt}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedIndex(null)
        }}
      >
        <button
          type="button"
          onClick={() => setSelectedIndex(null)}
          className="absolute right-3 top-3 z-20 flex h-12 w-12 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          aria-label={closeLabel}
        >
          <X className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)}
          className="absolute bottom-4 left-4 z-20 flex h-12 w-12 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20 sm:bottom-auto sm:left-6"
          aria-label={previousLabel}
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <div className="relative h-[78dvh] w-full max-w-6xl">
          <Image
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <button
          type="button"
          onClick={() => setSelectedIndex((selectedIndex + 1) % galleryImages.length)}
          className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20 sm:bottom-auto sm:right-6"
          aria-label={nextLabel}
        >
          <ChevronRight className="h-7 w-7" />
        </button>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
          {selectedIndex + 1} / {galleryImages.length}
        </div>
      </div>
    )}
    </>
  )
}
