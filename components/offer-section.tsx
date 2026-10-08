import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { whatsappOfferHref } from "@/lib/contact-links"
import { copy, type Locale } from "@/lib/i18n"
import { ConsultationRequestButton } from "@/components/consultation-request-button"

export function OfferSection({ locale = "ro" }: { locale?: Locale }) {
  const text = copy[locale].home
  return (
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/photos/12.png"
              alt=""
              width={1448}
              height={1086}
              className="max-w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-medium mb-8">{text.quoteTitle}</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              {text.quoteText}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href={whatsappOfferHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-lg font-bold text-foreground transition-colors hover:text-primary"
              >
                {text.quoteWhatsapp}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive transition-transform group-hover:translate-x-1">
                  <ChevronRight className="h-5 w-5 text-white" />
                </span>
              </Link>
              <ConsultationRequestButton
                locale={locale}
                heading={text.quoteContact}
                className="group inline-flex items-center gap-3 text-lg font-bold text-foreground transition-colors hover:text-primary"
              >
                {text.quoteContact}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive transition-transform group-hover:translate-x-1">
                  <ChevronRight className="h-5 w-5 text-white" />
                </span>
              </ConsultationRequestButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
