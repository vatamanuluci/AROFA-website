"use client"

import { useState } from "react"
import Image from "next/image"
import type { Locale } from "@/lib/i18n"

const tabs = [
  { id: "locuinte", label: "Locuințe private" },
  { id: "comerciale", label: "Spații comerciale" },
  { id: "publice", label: "Clădiri publice" },
]

const projects = {
  locuinte: [
    {
      id: 1,
      title: "Vila Modernă București",
      location: "București, România",
      image: "/photos/1.png"
    },
    {
      id: 2,
      title: "Casa de Vacanță",
      location: "Brașov, România",
      image: "/photos/11.png"
    },
    {
      id: 3,
      title: "Apartament Penthouse",
      location: "Cluj-Napoca, România",
      image: "/photos/19.png"
    },
  ],
  comerciale: [
    {
      id: 4,
      title: "Centru de Afaceri",
      location: "Timișoara, România",
      image: "/photos/5.png"
    },
    {
      id: 5,
      title: "Hotel Boutique",
      location: "Sibiu, România",
      image: "/photos/9.png"
    },
    {
      id: 6,
      title: "Restaurant Modern",
      location: "Constanța, România",
      image: "/photos/3.jpg"
    },
  ],
  publice: [
    {
      id: 7,
      title: "Bibliotecă Municipală",
      location: "Iași, România",
      image: "/photos/17.jpg"
    },
    {
      id: 8,
      title: "Centru Cultural",
      location: "Oradea, România",
      image: "/photos/18.jpg"
    },
    {
      id: 9,
      title: "Spital Modern",
      location: "Craiova, România",
      image: "/photos/21.jpg"
    },
  ],
}

const projectCopy: Record<Locale, { tabs: string[]; title: string; subtitle: string; viewAll: string; inspiration: string; items: string[] }> = {
  ro: { tabs: ["Locuințe private", "Spații comerciale", "Clădiri publice"], title: "Idei pentru fiecare spațiu:", subtitle: "inspirație arhitecturală", viewAll: "Descoperă soluțiile AROFA", inspiration: "Imagine de inspirație", items: ["Vilă contemporană", "Casă de vacanță", "Apartament luminos", "Clădire de birouri", "Hotel boutique", "Restaurant contemporan", "Bibliotecă", "Centru cultural", "Spațiu medical"] },
  en: { tabs: ["Private homes", "Commercial spaces", "Public buildings"], title: "Ideas for every space:", subtitle: "architectural inspiration", viewAll: "Discover AROFA solutions", inspiration: "Inspiration image", items: ["Contemporary villa", "Holiday home", "Bright apartment", "Office building", "Boutique hotel", "Contemporary restaurant", "Library", "Cultural centre", "Healthcare space"] },
  fr: { tabs: ["Habitations privées", "Espaces commerciaux", "Bâtiments publics"], title: "Des idées pour chaque espace :", subtitle: "inspiration architecturale", viewAll: "Découvrir les solutions AROFA", inspiration: "Image d’inspiration", items: ["Villa contemporaine", "Maison de vacances", "Appartement lumineux", "Immeuble de bureaux", "Hôtel boutique", "Restaurant contemporain", "Bibliothèque", "Centre culturel", "Espace de santé"] },
  nl: { tabs: ["Privéwoningen", "Commerciële ruimtes", "Openbare gebouwen"], title: "Ideeën voor elke ruimte:", subtitle: "architecturale inspiratie", viewAll: "Ontdek AROFA-oplossingen", inspiration: "Inspiratiebeeld", items: ["Hedendaagse villa", "Vakantiewoning", "Licht appartement", "Kantoorgebouw", "Boetiekhotel", "Hedendaags restaurant", "Bibliotheek", "Cultureel centrum", "Zorgomgeving"] },
}

export function ProjectsTabs({ locale = "ro" }: { locale?: Locale }) {
  const [activeTab, setActiveTab] = useState("locuinte")
  const text = projectCopy[locale]
  const localizedTabs = tabs.map((tab, index) => ({ ...tab, label: text.tabs[index] }))

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <h2 className="text-3xl lg:text-5xl">
            <span className="font-medium">{text.title}</span>
            <br />
            <span className="font-light">{text.subtitle}</span>
          </h2>
          
          {/* Tabs */}
          <div className="flex gap-4">
            {localizedTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeTab === tab.id
                    ? "bg-nardo text-white"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[activeTab as keyof typeof projects].map((project) => (
            <div
              key={project.id}
              className="block relative overflow-hidden aspect-[3/2]"
            >
              <Image
                src={project.image}
                alt={`${text.inspiration}: ${text.items[project.id - 1]}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-1">{text.items[project.id - 1]}</h3>
                <p className="text-white/70 text-sm">{text.inspiration}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
