"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus, Instagram } from "lucide-react"
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
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image) => (
            <Link
              key={image.id}
              href="https://www.instagram.com/arofa_romania/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-nardo/0 group-hover:bg-nardo/50 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
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
  )
}
