import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { copy, localizeHref, type Locale } from "@/lib/i18n"
import { getLocalizedPage } from "@/lib/localized-content"

const mainCategorySlugs = [
  ["usi"],
  ["usi-de-garaj"],
  ["usi-de-garaj-industriale"],
  ["ferestre"],
  ["sisteme-umbrire"],
  ["sisteme-umbrire", "rulouri"],
  ["sisteme-umbrire", "screensolar"],
  ["sisteme-umbrire", "jaluzele"],
  ["servicii-de-montaj"],
]

const romanianCategoryCopy: Record<string, { title: string; description: string }> = {
  usi: {
    title: "U\u0219i de intrare AROFA",
    description: "U\u0219i de intrare din PVC \u0219i aluminiu pentru siguran\u021b\u0103, izola\u021bie, design coerent \u0219i utilizare confortabil\u0103.",
  },
  "usi-de-garaj-industriale": {
    title: "U\u0219i de garaj industriale",
    description: "U\u0219i industriale pentru hale, depozite, spa\u021bii logistice \u0219i zone cu trafic intens, configurate pentru fluxuri profesionale.",
  },
  "usi-de-garaj": {
    title: "U\u0219i de garaj",
    description: "U\u0219i de garaj reziden\u021biale, configurate pentru siguran\u021b\u0103, func\u021bionare lin\u0103 \u0219i integrare în fa\u021bada casei.",
  },
  ferestre: {
    title: "Ferestre AROFA",
    description: "Solu\u021bii complete AROFA pentru ferestre premium, adaptate proiectelor reziden\u021biale \u0219i comerciale.",
  },
  "sisteme-umbrire": {
    title: "Sisteme de umbrire",
    description: "Rulouri, screen solar \u0219i jaluzele pentru controlul luminii, protec\u021bie solar\u0103, intimitate \u0219i confort termic.",
  },
  "sisteme-umbrire/rulouri": {
    title: "Rulouri",
    description: "Rulouri pentru protec\u021bie solar\u0103, intimitate \u0219i confort termic, cu ac\u021bionare manual\u0103 sau motorizat\u0103.",
  },
  "sisteme-umbrire/screensolar": {
    title: "Screen solar",
    description: "Screen solar pentru filtrarea luminii, reducerea aportului termic \u0219i protejarea intimit\u0103\u021bii.",
  },
  "sisteme-umbrire/jaluzele": {
    title: "Jaluzele",
    description: "Jaluzele pentru reglarea luminii \u0219i a intimit\u0103\u021bii, disponibile cu ac\u021bionare manual\u0103 sau motorizat\u0103.",
  },
  "servicii-de-montaj": {
    title: "Servicii de montaj",
    description: "Montaj AROFA coordonat profesionist, pentru performan\u021b\u0103 real\u0103 \u0219i comportament corect \u00een exploatare.",
  },
}

export function PortfolioGrid({ locale = "ro" }: { locale?: Locale }) {
  const text = copy[locale].home
  const categories = mainCategorySlugs.flatMap((slug) => {
    const page = getLocalizedPage(slug, locale)
    const slugKey = slug.join("/")
    const romanianCopy = romanianCategoryCopy[slugKey]
    return page && romanianCopy ? [{
      ...page,
      title: locale === "ro" ? romanianCopy.title : page.title,
      description: locale === "ro" ? romanianCopy.description : page.description,
      href: localizeHref(`/${slugKey}`, locale),
    }] : []
  })

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{text.portfolioEyebrow}</p>
          <h2 className="mb-5 text-3xl font-medium lg:text-5xl">{text.portfolioTitle}</h2>
          <p className="text-lg leading-relaxed text-foreground/70">{text.portfolioIntro}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group border border-border bg-secondary p-6 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{category.title}</h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-destructive text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/70">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
