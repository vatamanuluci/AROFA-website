export const locales = ["ro", "en", "fr", "nl"] as const

export type Locale = (typeof locales)[number]

export const localeLabels: Record<Locale, string> = {
  ro: "RO",
  en: "EN",
  fr: "FR",
  nl: "NL",
}

export const localeFlags: Record<Locale, string> = {
  ro: "/flags/ro.svg",
  en: "/flags/gb.svg",
  fr: "/flags/fr.svg",
  nl: "/flags/be.svg",
}

export const localeNames: Record<Locale, string> = {
  ro: "Română",
  en: "English",
  fr: "Français",
  nl: "Nederlands",
}

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale)
}

export function splitLocaleFromSlug(slug: string[]) {
  if (isLocale(slug[0]) && slug[0] !== "ro") {
    return { locale: slug[0], slug: slug.slice(1) }
  }

  return { locale: "ro" as Locale, slug }
}

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//") || locale === "ro") return href
  return `/${locale}${href === "/" ? "" : href}`
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean)
  if (isLocale(segments[0])) segments.shift()
  const basePath = segments.length ? `/${segments.join("/")}` : ""
  const localizedPath = locale === "ro" ? basePath || "/" : `/${locale}${basePath}`
  return `${localizedPath}?lang=${locale}`
}

type CommonCopy = {
  nav: {
    residentialDoors: string
    industrialDoors: string
    windows: string
    rollerShutters: string
    blinds: string
    solarScreens: string
    installation: string
    architects: string
    shop: string
    whatsapp: string
    requestQuote: string
    search: string
    searchPlaceholder: string
    noResults: string
    viewAll: string
  }
  page: {
    talkToConsultant: string
    pageContents: string
    recommendedSteps: string
    steps: string[]
    quickContact: string
    usefulLinks: string
    continueBrowsing: string
    applications: string
    options: string
    choosingTitle: string
  }
  home: {
    heroSubtitle: string
    heroLight: string
    heroClips: string
    learnMore: string
    whatLookingFor: string
    needHelp: string
    portfolioEyebrow: string
    portfolioTitle: string
    portfolioIntro: string
    quoteTitle: string
    quoteText: string
    quoteWhatsapp: string
    quoteContact: string
    materialTitle: string
    materialTitleLight: string
    consultingTitle: string
    consultingTitleLight: string
    consultingText: string
    whatsapp: string
    findRepresentative: string
  }
  footer: {
    description: string
    appointment: string
    products: string
    company: string
    support: string
    rights: string
    privacy: string
    terms: string
    cookies: string
  }
}

export const copy: Record<Locale, CommonCopy> = {
  ro: {
    nav: { residentialDoors: "Uși rezidențiale", industrialDoors: "Uși industriale", windows: "Ferestre", rollerShutters: "Rulouri", blinds: "Jaluzele", solarScreens: "Screen solar", installation: "Servicii montaj", architects: "Zona Arhitecți", shop: "Magazin", whatsapp: "WhatsApp", requestQuote: "Solicită oferta", search: "Caută pe site", searchPlaceholder: "Caută...", noResults: "Nu am găsit rezultate.", viewAll: "Vezi toate" },
    page: { talkToConsultant: "Discută cu un consultant", pageContents: "Ce găsești pe această pagină", recommendedSteps: "Pași recomandați", steps: ["Alege categoria și materialul potrivite proiectului.", "Discută cerințele tehnice și bugetul cu echipa AROFA.", "Continuă cu oferta, măsurătorile și montajul coordonat."], quickContact: "Contact rapid", usefulLinks: "Legături utile", continueBrowsing: "Descoperă soluții complementare", applications: "Potrivit pentru", options: "Opțiuni disponibile", choosingTitle: "Cum alegi soluția potrivită" },
    home: { heroSubtitle: "calitate, rezistență și confort", heroLight: "Cu până la 29% mai multă lumină naturală", heroClips: "Placarea cu aluminiu a ferestrelor din PVC", learnMore: "Află mai multe", whatLookingFor: "Ce cauți?", needHelp: "Ai nevoie de ajutor?", portfolioEyebrow: "Portofoliu complet", portfolioTitle: "Soluții pentru fiecare tip de proiect", portfolioIntro: "Descoperă uși, ferestre și sisteme de umbrire pentru proiecte rezidențiale, comerciale și industriale.", quoteTitle: "Solicită oferta", quoteText: "Spune-ne ce produs te interesează și discută direct cu echipa AROFA.", quoteWhatsapp: "Cere ofertă pe WhatsApp", quoteContact: 'Solicită să fii contactat', materialTitle: "Materialul potrivit,", materialTitleLight: "prima ta alegere", consultingTitle: "Consilierea,", consultingTitleLight: "un serviciu esențial pentru proiectul tău", consultingText: "Echipa AROFA te ajută să compari materialele, sistemele de deschidere, nivelul de izolație și opțiunile de montaj.", whatsapp: "Discută pe WhatsApp", findRepresentative: "Găsește reprezentanță" },
    footer: { description: "AROFA dezvoltă soluții pentru ferestre, uși, umbrire și montaj coordonat.", appointment: "Programare în showroom și consultanță prin formularul din site.", products: "Produse", company: "Companie", support: "Suport", rights: "Toate drepturile rezervate.", privacy: "Politica de confidențialitate", terms: "Termeni și condiții", cookies: "Cookie-uri" },
  },
  en: {
    nav: { residentialDoors: "Residential doors", industrialDoors: "Industrial doors", windows: "Windows", rollerShutters: "Roller shutters", blinds: "Blinds", solarScreens: "Solar screens", installation: "Installation", architects: "Architects", shop: "Shop", whatsapp: "WhatsApp", requestQuote: "Request a quote", search: "Search the website", searchPlaceholder: "Search...", noResults: "No results found.", viewAll: "View all" },
    page: { talkToConsultant: "Talk to a consultant", pageContents: "Product overview", recommendedSteps: "Recommended steps", steps: ["Choose the right category and material for your project.", "Discuss technical requirements and budget with AROFA.", "Continue with the quotation, measurements and coordinated installation."], quickContact: "Quick contact", usefulLinks: "Useful links", continueBrowsing: "Explore complementary solutions", applications: "Recommended for", options: "Available options", choosingTitle: "How to choose the right solution" },
    home: { heroSubtitle: "quality, strength and comfort", heroLight: "Up to 29% more natural light", heroClips: "Aluminium cladding for PVC windows", learnMore: "Learn more", whatLookingFor: "What are you looking for?", needHelp: "Need help?", portfolioEyebrow: "Complete portfolio", portfolioTitle: "Solutions for every type of project", portfolioIntro: "Discover doors, windows and shading systems for residential, commercial and industrial projects.", quoteTitle: "Request a quote", quoteText: "Tell us which product you need and speak directly with the AROFA team.", quoteWhatsapp: "Request a quote on WhatsApp", quoteContact: 'Ask us to contact you', materialTitle: "The right material,", materialTitleLight: "your first choice", consultingTitle: "Expert advice,", consultingTitleLight: "an essential service for your project", consultingText: "AROFA helps you compare materials, opening systems, insulation levels and installation options.", whatsapp: "Chat on WhatsApp", findRepresentative: "Find a representative" },
    footer: { description: "AROFA develops coordinated solutions for windows, doors, shading and installation.", appointment: "Book a showroom visit or request advice through the website.", products: "Products", company: "Company", support: "Support", rights: "All rights reserved.", privacy: "Privacy policy", terms: "Terms and conditions", cookies: "Cookies" },
  },
  fr: {
    nav: { residentialDoors: "Portes résidentielles", industrialDoors: "Portes industrielles", windows: "Fenêtres", rollerShutters: "Volets roulants", blinds: "Stores", solarScreens: "Screens solaires", installation: "Services de pose", architects: "Espace architectes", shop: "Boutique", whatsapp: "WhatsApp", requestQuote: "Demander un devis", search: "Rechercher sur le site", searchPlaceholder: "Rechercher...", noResults: "Aucun résultat trouvé.", viewAll: "Voir tout" },
    page: { talkToConsultant: "Parler à un conseiller", pageContents: "Présentation du produit", recommendedSteps: "Étapes recommandées", steps: ["Choisissez la catégorie et le matériau adaptés à votre projet.", "Discutez des exigences techniques et du budget avec AROFA.", "Poursuivez avec le devis, les mesures et la pose coordonnée."], quickContact: "Contact rapide", usefulLinks: "Liens utiles", continueBrowsing: "Découvrir les solutions complémentaires", applications: "Recommandé pour", options: "Options disponibles", choosingTitle: "Comment choisir la bonne solution" },
    home: { heroSubtitle: "qualité, résistance et confort", heroLight: "Jusqu’à 29 % de lumière naturelle en plus", heroClips: "Habillage aluminium pour fenêtres PVC", learnMore: "En savoir plus", whatLookingFor: "Que recherchez-vous ?", needHelp: "Besoin d’aide ?", portfolioEyebrow: "Gamme complète", portfolioTitle: "Des solutions pour chaque projet", portfolioIntro: "Découvrez des portes, fenêtres et protections solaires pour les projets résidentiels, commerciaux et industriels.", quoteTitle: "Demander un devis", quoteText: "Indiquez-nous le produit recherché et échangez directement avec l’équipe AROFA.", quoteWhatsapp: "Demander un devis sur WhatsApp", quoteContact: 'Demander à être recontacté', materialTitle: "Le bon matériau,", materialTitleLight: "votre premier choix", consultingTitle: "Le conseil,", consultingTitleLight: "un service essentiel pour votre projet", consultingText: "AROFA vous aide à comparer les matériaux, les systèmes d’ouverture, l’isolation et les options de pose.", whatsapp: "Discuter sur WhatsApp", findRepresentative: "Trouver un représentant" },
    footer: { description: "AROFA développe des solutions coordonnées pour fenêtres, portes, protections solaires et pose.", appointment: "Prenez rendez-vous au showroom ou demandez conseil via le site.", products: "Produits", company: "Entreprise", support: "Assistance", rights: "Tous droits réservés.", privacy: "Politique de confidentialité", terms: "Conditions générales", cookies: "Cookies" },
  },
  nl: {
    nav: { residentialDoors: "Residentiële deuren", industrialDoors: "Industriële deuren", windows: "Ramen", rollerShutters: "Rolluiken", blinds: "Jaloezieën", solarScreens: "Zonwerende screens", installation: "Plaatsingsservice", architects: "Voor architecten", shop: "Winkel", whatsapp: "WhatsApp", requestQuote: "Offerte aanvragen", search: "Zoeken op de website", searchPlaceholder: "Zoeken...", noResults: "Geen resultaten gevonden.", viewAll: "Alles bekijken" },
    page: { talkToConsultant: "Praat met een adviseur", pageContents: "Productoverzicht", recommendedSteps: "Aanbevolen stappen", steps: ["Kies de juiste categorie en het juiste materiaal voor uw project.", "Bespreek technische eisen en budget met AROFA.", "Ga verder met offerte, opmetingen en gecoördineerde plaatsing."], quickContact: "Snel contact", usefulLinks: "Nuttige links", continueBrowsing: "Ontdek aanvullende oplossingen", applications: "Geschikt voor", options: "Beschikbare opties", choosingTitle: "Zo kiest u de juiste oplossing" },
    home: { heroSubtitle: "kwaliteit, stevigheid en comfort", heroLight: "Tot 29% meer natuurlijk licht", heroClips: "Aluminium bekleding voor PVC-ramen", learnMore: "Meer informatie", whatLookingFor: "Waar bent u naar op zoek?", needHelp: "Hulp nodig?", portfolioEyebrow: "Volledig assortiment", portfolioTitle: "Oplossingen voor elk project", portfolioIntro: "Ontdek deuren, ramen en zonwering voor residentiële, commerciële en industriële projecten.", quoteTitle: "Offerte aanvragen", quoteText: "Vertel ons welk product u zoekt en spreek rechtstreeks met het AROFA-team.", quoteWhatsapp: "Offerte aanvragen via WhatsApp", quoteContact: 'Vraag om contact', materialTitle: "Het juiste materiaal,", materialTitleLight: "uw eerste keuze", consultingTitle: "Deskundig advies,", consultingTitleLight: "een essentiële service voor uw project", consultingText: "AROFA helpt u materialen, openingssystemen, isolatieniveaus en plaatsingsopties te vergelijken.", whatsapp: "Chat via WhatsApp", findRepresentative: "Vind een vertegenwoordiger" },
    footer: { description: "AROFA ontwikkelt gecoördineerde oplossingen voor ramen, deuren, zonwering en plaatsing.", appointment: "Plan een showroombezoek of vraag advies via de website.", products: "Producten", company: "Bedrijf", support: "Ondersteuning", rights: "Alle rechten voorbehouden.", privacy: "Privacybeleid", terms: "Algemene voorwaarden", cookies: "Cookies" },
  },
}
