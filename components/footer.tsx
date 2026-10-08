import Link from "next/link"
import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { ArofaLogo } from "./arofa-logo"
import { copy, localizeHref, type Locale } from "@/lib/i18n"
import { getLocalizedPage } from "@/lib/localized-content"
import { AROFA_EMAIL, AROFA_PHONE } from "@/lib/contact-info"

const footerLinks = {
  products: {
    title: "Produse",
    links: [
      { label: "Tâmplărie din aluminiu", href: "/ferestre/aluminiu" },
      { label: "Tâmplărie din PVC", href: "/ferestre/pvc" },
      { label: "Ferestre Lemn", href: "/ferestre/lemn" },
      { label: "Ferestre Fier", href: "/ferestre/fier" },
      { label: "Uși culisante", href: "/usi-culisante" },
      { label: "Uși de intrare", href: "/usi" },
      { label: "Uși de garaj", href: "/usi-de-garaj" },
      { label: "Uși de garaj industriale", href: "/usi-de-garaj-industriale" },
      { label: "Sisteme de umbrire", href: "/sisteme-umbrire" },
      { label: "Verande", href: "/verande" },
      { label: "Servicii de montaj", href: "/servicii-de-montaj" },
    ]
  },
  company: {
    title: "Companie",
    links: [
      { label: "Despre noi", href: "/despre-noi" },
      { label: "Calitate certificată", href: "/calitate-certificata" },
      { label: "Montaj profesionist", href: "/montaj-profesionist" },
      { label: "Durabilitate", href: "/durabilitate" },
      { label: "Cariere", href: "/cariere" },
      { label: "Proiecte", href: "/case-history" },
    ]
  },
  support: {
    title: "Suport",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Reprezentanțe", href: "/reprezentante" },
      { label: "Solicită oferta", href: "/solicita-oferta" },
      { label: "Showroom virtual", href: "/showroom-virtual" },
      { label: "FAQ", href: "/faq" },
    ]
  },
}

const visibleFooterLinks: Record<string, string[]> = {
  products: ["/usi", "/usi-de-garaj-industriale", "/ferestre", "/sisteme-umbrire", "/servicii-de-montaj"],
  company: ["/despre-noi"],
  support: ["/contact"],
}

export function Footer({ locale = "ro" }: { locale?: Locale }) {
  const text = copy[locale].footer
  const phone = process.env.NEXT_PUBLIC_AROFA_PHONE || AROFA_PHONE
  const localizedFooterLinks = Object.fromEntries(Object.entries(footerLinks).map(([key, section]) => [key, {
    ...section,
    title: key === "products" ? text.products : key === "company" ? text.company : text.support,
    links: section.links.filter((link) => visibleFooterLinks[key].includes(link.href)).map((link) => ({
      ...link,
      href: localizeHref(link.href, locale),
      label: getLocalizedPage(link.href.split("/").filter(Boolean), locale)?.title ?? link.label,
    })),
  }])) as typeof footerLinks

  return (
    <footer className="bg-anthracite text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <ArofaLogo locale={locale} size="footer" className="mb-6" />
            
            <p className="text-white/70 mb-6 max-w-sm">
              {text.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`mailto:${AROFA_EMAIL}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                {AROFA_EMAIL}
              </a>
              {phone && (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  {phone}
                </a>
              )}
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{text.appointment}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/arofa_romania/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram AROFA"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-nardo hover:border-nardo transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://ro.linkedin.com/company/arofa-romania" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn AROFA"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-nardo hover:border-nardo transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/AROFARomania" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook AROFA"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-nardo hover:border-nardo transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.values(localizedFooterLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} AROFA. {text.rights}</p>
            <div className="flex gap-6">
              <Link href={localizeHref("/politica-confidentialitate", locale)} className="hover:text-primary transition-colors">
                {text.privacy}
              </Link>
              <Link href={localizeHref("/termeni-conditii", locale)} className="hover:text-primary transition-colors">
                {text.terms}
              </Link>
              <Link href={localizeHref("/cookies", locale)} className="hover:text-primary transition-colors">
                {text.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
