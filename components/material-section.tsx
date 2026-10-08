import Image from "next/image"
import { copy, type Locale } from "@/lib/i18n"
import { getLocalizedPage } from "@/lib/localized-content"

const materialSubtitles: Record<string, Record<Locale, string>> = {
  alu: {
    ro: "Soluțiile AROFA din aluminiu includ ferestre, uși de intrare și sisteme pentru deschideri vitrate ample.",
    en: "AROFA aluminium joinery includes windows, entrance doors and systems for large glazed openings.",
    fr: "Les menuiseries en aluminium AROFA comprennent des fenêtres, des portes d’entrée et des systèmes pour grandes baies vitrées.",
    nl: "Het aluminium schrijnwerk van AROFA omvat ramen, voordeuren en systemen voor grote glaspartijen.",
  },
  pvc: {
    ro: "AROFA îți pune la dispoziție o gamă completă de tâmplărie din PVC: ferestre, uși de intrare și uși culisante.",
    en: "AROFA offers a complete range of PVC joinery, including windows, entrance doors and sliding doors.",
    fr: "AROFA propose une gamme complète de menuiseries en PVC : fenêtres, portes d’entrée et portes coulissantes.",
    nl: "AROFA biedt een compleet assortiment PVC-schrijnwerk: ramen, voordeuren en schuifdeuren.",
  },
}

const materialTaglines: Record<string, Record<Locale, string>> = {
  alu: {
    ro: "DESIGN – STABILITATE – DURABILITATE",
    en: "DESIGN – STABILITY – DURABILITY",
    fr: "DESIGN – STABILITÉ – DURABILITÉ",
    nl: "DESIGN – STABILITEIT – DUURZAAMHEID",
  },
  pvc: {
    ro: "IZOLAȚIE – PERSONALIZARE – COST OPTIM",
    en: "INSULATION – CUSTOMISATION – VALUE",
    fr: "ISOLATION – PERSONNALISATION – BUDGET MAÎTRISÉ",
    nl: "ISOLATIE – MAATWERK – GOEDE PRIJS-KWALITEIT",
  },
}
const materials = [
  {
    id: "alu",
    title: "T\u00e2mpl\u0103rie din aluminiu",
    description: "Aluminiul este alegerea potrivită pentru proiecte moderne, deschideri mari și fațade în care tâmplăria are un rol vizual important.",
    benefits: [
      "Stabilitate pentru suprafețe vitrate generoase și utilizare intensă",
      "Profile elegante, culori variate și finisaje premium",
      "Rezistență bună la exterior și comportament solid în timp"
    ],
    tagline: "DESIGN – STABILITATE – DURABILITATE",
    image: "/photos/15.png",
    watermark: "ALU"
  },
  {
    id: "pvc",
    title: "T\u00e2mpl\u0103rie din PVC",
    description: "PVC-ul răspunde foarte bine nevoilor locuințelor moderne, mai ales când cauți eficiență energetică, întreținere simplă și un buget bine controlat:",
    benefits: [
      "Izolație termică și fonică excelentă",
      "Variante constructive, culori, folieri sau placare cu aluminiu",
      "Rezistență la agenți atmosferici și utilizare zilnică",
      "Cost optim pentru renovări, apartamente și case noi"
    ],
    tagline: "IZOLAȚIE – PERSONALIZARE – COST OPTIM",
    image: "/photos/2.png",
    watermark: "PVC"
  },
]

export function MaterialSection({ locale = "ro" }: { locale?: Locale }) {
  const text = copy[locale].home
  const localizedMaterials = materials.map((material) => {
    const slug = material.id === "alu" ? ["ferestre", "aluminiu"] : ["ferestre", "pvc"]
    const page = getLocalizedPage(slug, locale)
    const subtitle = materialSubtitles[material.id][locale]
    return {
      ...material,
      subtitle,
      title: locale === "ro" ? material.title : page?.title ?? material.title,
      description: page?.intro ?? material.description,
      benefits: page?.highlights.slice(0, 3) ?? material.benefits,
      tagline: materialTaglines[material.id][locale],
    }
  })
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-3xl lg:text-5xl mb-12 lg:mb-20">
          <span className="font-medium">{text.materialTitle}</span>
          <span className="font-light"> {text.materialTitleLight}</span>
        </h1>

        {/* Material Cards */}
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          {localizedMaterials.map((material) => (
            <div key={material.id} className="flex h-full flex-col">
              {/* Content */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-medium mb-4">{material.title}</h3>
                <div className="text-foreground/80 space-y-4">
                  <p>{material.description}</p>
                  {material.benefits && (
                    <ul className="space-y-2">
                      {material.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                  {material.subtitle && (
                    <p>{material.subtitle}</p>
                  )}
                </div>
                
                <p className="text-primary font-bold mt-6 mb-6">{material.tagline}</p>

              </div>

              {/* Image */}
              <div className="relative mt-10 flex flex-1 items-center justify-center">
                {/* Watermark */}
                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[180px] font-bold leading-none text-foreground/5 lg:text-[240px]">
                  {material.watermark}
                </span>
                <div className="relative z-10 flex min-h-[260px] justify-center">
                  <Image
                    src={material.image}
                    alt={material.title}
                    width={1448}
                    height={1086}
                    className="h-auto max-h-[300px] w-auto object-contain lg:max-h-[340px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
