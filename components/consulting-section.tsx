import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { whatsappConsultantHref } from "@/lib/contact-links"
import { copy, localizeHref, type Locale } from "@/lib/i18n"

export function ConsultingSection({ locale = "ro" }: { locale?: Locale }) {
  const text = copy[locale].home
  return (
    <section className="relative py-16 lg:py-24 bg-anthracite text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/photos/14.png"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/90 to-anthracite/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h3 className="text-3xl lg:text-4xl mb-6">
            <span className="font-medium">{text.consultingTitle}</span>
            <span className="font-light"> {text.consultingTitleLight}</span>
          </h3>
          
          <p className="text-white/80 mb-8 leading-relaxed">
            {text.consultingText}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={whatsappConsultantHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Plus className="w-4 h-4" />
              {text.whatsapp}
            </Link>
            <Link
              href={localizeHref("/contact", locale)}
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Plus className="w-4 h-4" />
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative consultant image */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
        <Image
          src="/photos/4.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-anthracite" />
      </div>
    </section>
  )
}
