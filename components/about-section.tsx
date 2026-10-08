import Image from "next/image"
import Link from "next/link"
import { Plus, Award, Users, Factory, Globe } from "lucide-react"
import { localizeHref, type Locale } from "@/lib/i18n"

const stats = [
  { icon: Factory, value: "Portofoliu", label: "Ferestre, uși, umbrire și verande" },
  { icon: Users, value: "Consultanță", label: "Sprijin pentru configurare și alegere" },
  { icon: Award, value: "Calitate", label: "Atenție la detalii, materiale și montaj" },
  { icon: Globe, value: "Proiecte", label: "Rezidențial, comercial și industrial" },
]

const aboutCopy: Record<Locale, { title: string; subtitle: string; paragraphs: string[]; sectionHeading: string; benefits: string[]; cta: string; stats: [string, string][] }> = {
  ro: { title: "Montaj", subtitle: "profesionist", paragraphs: ["Suntem specializați în furnizarea și montajul sistemelor avansate de tâmplărie PVC și aluminiu, oferind soluții tehnice de o calitate excepțională pentru proiecte rezidențiale și comerciale.", "Aliniați riguros la normele standardului nZEB (Nearly Zero Energy Building), integrăm tehnologii de ultimă generație care reduc consumul de energie aproape de zero. Prin detalii de montaj specializate — inclusiv etanșarea tridimensională cu benzi barieră de vapori — garantăm eliminarea punților termice și o etanșeitate absolută."], sectionHeading: "De ce să colaborați cu noi?", benefits: ["Calitate certificată: Utilizăm exclusiv profile și vitraje premium, cu coeficienți remarcabili de izolare termică.", "Montaj de precizie: Tehnicienii noștri respectă cu strictețe protocoalele nZEB pentru a asigura continuitatea izolației.", "Consultanță tehnică: Oferim asistență completă, de la calculul coeficienților energetici până la recepția finală."], cta: "Află mai multe despre noi", stats: [["Portofoliu", "Ferestre, uși și umbrire"], ["Consultanță", "Sprijin pentru configurare"], ["Calitate", "Materiale și montaj atent"], ["Proiecte", "Rezidențial și industrial"]] },
  en: { title: "Professional", subtitle: "installation", paragraphs: ["We specialise in supplying and installing advanced PVC and aluminium joinery, delivering high-quality technical solutions for residential and commercial projects.", "Fully aligned with the nZEB (Nearly Zero Energy Building) standard, we use advanced technologies that bring energy consumption close to zero. Specialised installation details, including three-dimensional sealing with vapour barrier tapes, help eliminate thermal bridges and achieve excellent airtightness."], sectionHeading: "Why work with us?", benefits: ["Certified quality: We use premium profiles and glazing with outstanding thermal insulation performance.", "Precision installation: Our technicians follow nZEB protocols to ensure insulation continuity.", "Technical advice: We provide full support, from calculating energy performance coefficients through final handover."], cta: "Learn more about us", stats: [["Portfolio", "Windows, doors and shading"], ["Advice", "Support with configuration"], ["Quality", "Careful materials and installation"], ["Projects", "Residential and industrial"]] },
  fr: { title: "Pose", subtitle: "professionnelle", paragraphs: ["Nous sommes spécialisés dans la fourniture et la pose de menuiseries PVC et aluminium avancées, avec des solutions techniques de grande qualité pour les projets résidentiels et commerciaux.", "Conformément à la norme nZEB (Nearly Zero Energy Building), nous intégrons des technologies de pointe qui réduisent la consommation énergétique à un niveau proche de zéro. Des détails de pose spécialisés, notamment l’étanchéité tridimensionnelle avec des bandes pare-vapeur, contribuent à éliminer les ponts thermiques et à obtenir une excellente étanchéité à l’air."], sectionHeading: "Pourquoi nous choisir ?", benefits: ["Qualité certifiée : Nous utilisons exclusivement des profils et vitrages premium offrant d’excellentes performances d’isolation thermique.", "Pose de précision : Nos techniciens suivent rigoureusement les protocoles nZEB afin d’assurer la continuité de l’isolation.", "Conseil technique : Nous vous accompagnons du calcul des coefficients énergétiques jusqu’à la réception finale."], cta: "En savoir plus sur nous", stats: [["Gamme", "Fenêtres, portes et protections"], ["Conseil", "Aide à la configuration"], ["Qualité", "Matériaux et pose soignés"], ["Projets", "Résidentiel et industriel"]] },
  nl: { title: "Professionele", subtitle: "plaatsing", paragraphs: ["AROFA is gespecialiseerd in de levering en plaatsing van geavanceerd PVC- en aluminium schrijnwerk, met hoogwaardige technische oplossingen voor residentiële en commerciële projecten.", "Onze oplossingen voldoen aan de nZEB-norm (Nearly Zero Energy Building) en maken gebruik van geavanceerde technologieën die het energieverbruik bijna tot nul terugbrengen. Gespecialiseerde plaatsingsdetails, waaronder driedimensionale afdichting met dampremmende tapes, helpen koudebruggen te voorkomen en zorgen voor een uitstekende luchtdichtheid."], sectionHeading: "Waarom kiezen voor ons?", benefits: ["Gecertificeerde kwaliteit: We gebruiken uitsluitend premium profielen en beglazing met uitstekende thermische isolatiewaarden.", "Precisieplaatsing: Onze technici volgen de nZEB-protocollen nauwgezet om de isolatie doorlopend te houden.", "Technisch advies: We begeleiden u van de berekening van energieprestaties tot en met de uiteindelijke oplevering."], cta: "Meer over ons", stats: [["Gamma", "Ramen, deuren en zonwering"], ["Advies", "Hulp bij configuratie"], ["Kwaliteit", "Materialen en zorgvuldige plaatsing"], ["Projecten", "Residentieel en industrieel"]] },
}

export function AboutSection({ locale = "ro" }: { locale?: Locale }) {
  const text = aboutCopy[locale]
  const localizedStats = stats.map((stat, index) => ({ ...stat, value: text.stats[index][0], label: text.stats[index][1] }))
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/photos/21.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="relative bg-nardo p-5 text-white md:absolute md:-bottom-8 md:-right-4 md:p-6 lg:-right-8 lg:p-8">
              <div className="grid grid-cols-2 gap-5 lg:gap-6">
                {localizedStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 opacity-70" />
                    <div className="text-sm font-bold uppercase tracking-[0.14em]">{stat.value}</div>
                    <div className="text-xs opacity-70 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl lg:text-5xl mb-6">
              <span className="font-medium">{text.title}</span>
              <span className="font-light"> {text.subtitle}</span>
            </h2>
            
            <div className="text-foreground/80 space-y-4 mb-8">
              {text.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3 className="pt-2 text-xl font-medium text-foreground">{text.sectionHeading}</h3>
              <ul className="space-y-3">
                {text.benefits.map((benefit) => {
                  const [label, ...detail] = benefit.split(": ")
                  return (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span><strong>{label}:</strong> {detail.join(": ")}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <Link
              href={localizeHref("/despre-noi", locale)}
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Plus className="w-4 h-4" />
              {text.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
