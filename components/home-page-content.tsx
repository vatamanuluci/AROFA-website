import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { MaterialSection } from "@/components/material-section"
import { OfferSection } from "@/components/offer-section"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ValueDetailsSlider } from "@/components/value-details-slider"
import { ProjectsTabs } from "@/components/projects-tabs"
import { AboutSection } from "@/components/about-section"
import { InspirationGallery } from "@/components/inspiration-gallery"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { FloatingHelpButton } from "@/components/floating-help-button"
import type { Locale } from "@/lib/i18n"

export function HomePageContent({ locale = "ro" }: { locale?: Locale }) {
  return (
    <main className="pb-20 md:pb-0">
      <Header locale={locale} />
      <HeroSlider locale={locale} />
      <MaterialSection locale={locale} />
      <PortfolioGrid locale={locale} />
      <OfferSection locale={locale} />
      <ValueDetailsSlider locale={locale} />
      <ProjectsTabs locale={locale} />
      <AboutSection locale={locale} />
      <InspirationGallery locale={locale} />
      <PartnersSection locale={locale} />
      <Footer locale={locale} />
      <FloatingHelpButton locale={locale} />
    </main>
  )
}
