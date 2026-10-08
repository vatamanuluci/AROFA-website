"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search, Instagram, Linkedin, Facebook, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { ArofaLogo } from "./arofa-logo"
import { QuoteRequestModal } from "./quote-request-modal"
import { sitePages } from "@/lib/site-content"
import { whatsappConsultantHref } from "@/lib/contact-links"
import { copy, localeFlags, localeLabels, localeNames, locales, localizeHref, switchLocalePath, type Locale } from "@/lib/i18n"
import { getLocalizedPage } from "@/lib/localized-content"

export function Header({ locale = "ro" }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<number | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const pathname = usePathname()
  const text = copy[locale]
  const topNavItems = [
    { label: text.nav.whatsapp, href: whatsappConsultantHref(locale), icon: "chat", external: true },
  ]
  const mainNavItems = [
    { label: text.nav.residentialDoors, href: localizeHref("/usi", locale) },
    { label: text.nav.industrialDoors, href: localizeHref("/usi-de-garaj-industriale", locale) },
    { label: text.nav.windows, href: localizeHref("/ferestre", locale) },
    { label: locale === "en" ? "Shading systems" : locale === "fr" ? "Systemes de protection solaire" : locale === "nl" ? "Zonwering" : "Sisteme de umbrire", href: localizeHref("/sisteme-umbrire", locale) },
    { label: text.nav.installation, href: localizeHref("/servicii-de-montaj", locale) },
    { label: locale === "en" ? "About AROFA" : locale === "fr" ? "A propos d'AROFA" : locale === "nl" ? "Over AROFA" : "Despre AROFA", href: localizeHref("/despre-noi", locale) },
  ]
  const mobileNavPaths = [
    [["usi", "aluminiu"], ["usi", "pvc"], ["usi-culisante"], ["usi-de-garaj"]],
    [["usi-de-garaj-industriale", "automatizare-control-acces"], ["usi-de-garaj-industriale", "dimensionare"], ["usi-de-garaj-industriale", "montaj-service"]],
    [["ferestre", "aluminiu"], ["ferestre", "pvc"], ["ferestre", "lemn"], ["ferestre", "fier"], ["plase-insecte"]],
    [["sisteme-umbrire", "rulouri", "aplicate"], ["sisteme-umbrire", "rulouri", "integrate"], ["sisteme-umbrire", "jaluzele", "manuale"], ["sisteme-umbrire", "jaluzele", "motorizate"], ["sisteme-umbrire", "screensolar", "manual"], ["sisteme-umbrire", "screensolar", "motorizat"]],
    [["servicii-de-montaj", "masuratori-planificare"], ["servicii-de-montaj", "ferestre-usi"], ["servicii-de-montaj", "usi-garaj-industriale"], ["servicii-de-montaj", "sisteme-umbrire"]],
    [["calitate-certificata"], ["montaj-profesionist"], ["durabilitate"], ["case-history"], ["contact"]],
  ]
  const mobileNavSections = mainNavItems.map((item, index) => ({
    ...item,
    children: mobileNavPaths[index].map((slug) => ({
      href: localizeHref(`/${slug.join("/")}`, locale),
      label: getLocalizedPage(slug, locale)?.title ?? slug[slug.length - 1]?.replaceAll("-", " ") ?? "",
    })),
  }))
  const overviewLabel = locale === "en" ? "View overview" : locale === "fr" ? "Voir l’ensemble" : locale === "nl" ? "Bekijk overzicht" : "Vezi prezentarea"
  const searchableSlugs = new Set(["usi", "usi-de-garaj-industriale", "ferestre", "sisteme-umbrire", "servicii-de-montaj", "despre-noi", "contact"])
  const searchResults = searchQuery.trim().length === 0
    ? []
    : sitePages.filter((page) => searchableSlugs.has(page.slug.join("/"))).map((page) => getLocalizedPage(page.slug, locale) ?? page).filter((page) => {
        const haystack = `${page.title} ${page.description} ${page.eyebrow}`.toLowerCase()
        return haystack.includes(searchQuery.toLowerCase())
      }).slice(0, 8)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden bg-anthracite text-white md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end py-2 gap-6 text-sm">
            <div className="flex items-center gap-6">
              {topNavItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.external ? item.href : localizeHref(item.href, locale)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  {item.icon === "architect" && (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
                    </svg>
                  )}
                  {item.icon === "store" && (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  )}
                  {item.icon === "chat" && (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338A9.956 9.956 0 0012 22z" />
                      <path d="M9 12h.01M12 12h.01M15 12h.01" />
                    </svg>
                  )}
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 pl-4 border-l border-white/20">
              <a href="https://www.instagram.com/arofa_romania/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <span className="sr-only">Instagram AROFA</span>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://ro.linkedin.com/company/arofa-romania" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn AROFA</span>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/AROFARomania" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <span className="sr-only">Facebook AROFA</span>
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-anthracite text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <ArofaLogo locale={locale} />

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-2 py-4 text-[12px] hover:text-primary transition-colors inline-block 2xl:px-3 2xl:text-sm"
                  >
                    {item.label}
                  </Link>
              ))}
              
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="ml-1 px-3 py-2 bg-nardo text-white text-[13px] font-medium hover:bg-nardo/90 transition-colors 2xl:ml-2 2xl:px-5 2xl:text-sm"
              >
                {text.nav.requestQuote}
              </button>
              
              <button 
                onClick={() => setSearchOpen(true)}
                aria-label={text.nav.search}
                className="ml-3 p-2 hover:text-primary transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <div className="ml-2 flex items-center border-l border-white/20 pl-2" aria-label="Language selector">
                {locales.map((language) => (
                  <Link
                    key={language}
                    href={switchLocalePath(pathname, language)}
                    prefetch={false}
                    aria-label={localeNames[language]}
                    title={localeNames[language]}
                    className={`flex items-center gap-1 px-1.5 py-2 text-[10px] font-semibold transition-colors 2xl:gap-1.5 2xl:px-2 2xl:text-[11px] ${language === locale ? "bg-white/10 text-primary" : "text-white/65 hover:bg-white/5 hover:text-white"}`}
                  >
                    <Image src={localeFlags[language]} alt="" width={20} height={14} className="h-3.5 w-5 object-cover" />
                    <span>{localeLabels[language]}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white/5 text-white xl:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] bg-anthracite text-white z-50 overflow-y-auto shadow-2xl">
          <div className="container mx-auto px-4 py-6">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {mobileNavSections.map((item, index) => {
                const isOpen = openMobileSection === index
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left text-base font-medium"
                      onClick={() => setOpenMobileSection(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-5 w-5 flex-none transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="pb-4">
                        <Link
                          href={item.href}
                          className="mb-1 flex min-h-11 items-center gap-2 bg-white/5 px-4 text-sm font-semibold text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {overviewLabel}<ChevronRight className="h-4 w-4" />
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex min-h-11 items-center px-4 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                setQuoteModalOpen(true)
              }}
              className="mt-6 block min-h-12 w-full bg-nardo px-4 py-3 text-center font-medium text-white"
            >
              {text.nav.requestQuote}
            </button>
            <div className="mt-6 grid grid-cols-4 gap-1 border-t border-white/10 pt-5">
              {locales.map((language) => (
                <Link
                  key={language}
                  href={switchLocalePath(pathname, language)}
                  prefetch={false}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={localeNames[language]}
                  className={`flex min-h-11 flex-col items-center justify-center gap-1 px-1 py-2 text-xs font-semibold ${language === locale ? "bg-nardo text-white" : "text-white/65"}`}
                >
                  <Image src={localeFlags[language]} alt="" width={24} height={16} className="h-4 w-6 object-cover" />
                  <span>{localeLabels[language]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-anthracite/95 z-50 flex items-center justify-center">
          <button 
            onClick={() => {
              setSearchOpen(false)
              setSearchQuery("")
            }}
            className="absolute top-8 right-8 text-white hover:text-primary"
            aria-label={locale === "ro" ? "Închide căutarea" : "Close search"}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-2xl px-4">
            <h4 className="text-white text-center mb-6 text-xl">{text.nav.search}</h4>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" />
              <input 
                type="text"
                placeholder={text.nav.searchPlaceholder}
                className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl py-4 pl-14 pr-4 focus:outline-none focus:border-primary"
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
            <div className="mt-8 space-y-3">
              {searchQuery.trim().length === 0 && (
                <p className="text-center text-white/60">
                  {locale === "ro" ? "Caută produse, materiale sau servicii." : locale === "fr" ? "Recherchez des produits, matériaux ou services." : locale === "nl" ? "Zoek producten, materialen of diensten." : "Search products, materials or services."}
                </p>
              )}
              {searchQuery.trim().length > 0 && searchResults.length === 0 && (
                <p className="text-center text-white/60">{text.nav.noResults}</p>
              )}
              {searchResults.map((page) => (
                <Link
                  key={page.slug.join("/")}
                  href={localizeHref(`/${page.slug.join("/")}`, locale)}
                  className="block border border-white/10 px-5 py-4 text-white hover:border-primary/40 hover:bg-white/5 transition-colors"
                  onClick={() => {
                    setSearchOpen(false)
                    setSearchQuery("")
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-primary mb-1">{page.eyebrow}</p>
                      <p className="font-medium">{page.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/60" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <QuoteRequestModal open={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} locale={locale} />
    </header>
  )
}
