import Image from "next/image"
import type { Locale } from "@/lib/i18n"

const partners = [
  { name: "Cortizo", src: "/cortizo-logo-png_seeklogo-332836.png" },
  { name: "Kömmerling", src: "/kommerling-logo-png_seeklogo-79611.png" },
  { name: "Renson", src: "/renson-logo-png_seeklogo-381231%20(1).png" },
  { name: "Reynaers Aluminium", src: "/reynaers-aluminium-logo-png_seeklogo-616899%20(1).png" },
  { name: "VEKA", src: "/veka-logo-png_seeklogo-252874%20(1).png" },
]

const headings: Record<Locale, string> = {
  ro: "Colaboratori",
  en: "Our partners",
  fr: "Nos partenaires",
  nl: "Onze partners",
}

export function PartnersSection({ locale = "ro" }: { locale?: Locale }) {
  return (
    <section className="border-t border-border bg-background py-14 lg:py-18" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4">
        <h2 id="partners-heading" className="mb-8 text-center text-2xl font-medium text-foreground lg:text-3xl">
          {headings[locale]}
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <li key={partner.name} className="flex h-32 items-center justify-center border border-border bg-white p-4 lg:h-36 lg:p-6">
              <Image
                src={partner.src}
                alt={partner.name}
                width={600}
                height={600}
                className="h-full w-full object-contain"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
