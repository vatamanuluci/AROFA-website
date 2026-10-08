"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus, HelpCircle, MessageSquare } from "lucide-react"
import { copy, localizeHref, type Locale } from "@/lib/i18n"

type HeroSlide = {
  id: number
  title: string
  subtitle: string
  cta: string
  ctaHref: string
  image: string
  windowImage?: string | null
}

export function HeroSlider({ locale = "ro" }: { locale?: Locale }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const text = copy[locale]
  const slides: HeroSlide[] = [
    { id: 1, title: "AROFA", subtitle: text.home.heroSubtitle, cta: text.home.learnMore, ctaHref: "/despre-noi", image: "/photos/10.png", windowImage: null },
    { id: 2, title: "AROFA View", subtitle: text.home.heroLight, cta: text.home.learnMore, ctaHref: "/ferestre", image: "/photos/17.jpg" },
    { id: 3, title: "Alu-Clips", subtitle: text.home.heroClips, cta: text.home.learnMore, ctaHref: "/ferestre", image: "/photos/15.png" },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative bg-anthracite overflow-hidden">
      {/* Slides */}
      <div className="relative min-h-[600px] lg:min-h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 h-full relative z-10">
              <div className="flex items-center h-full min-h-[600px] lg:min-h-[700px]">
                <div className="max-w-xl">
                  {/* Window Preview Image */}
                  {slide.windowImage && (
                    <div className="mb-4 w-24 h-32 relative">
                      <Image
                        src={slide.windowImage}
                        alt="Window preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  
                  {/* Brand Card */}
                  <div className="bg-nardo p-8 lg:p-10 text-white max-w-md">
                    {index === 0 ? <h1 className="text-3xl lg:text-4xl mb-4 leading-tight">
                      <span className="font-bold">{slide.title}</span>
                      <br />
                      <span className="font-light">{slide.subtitle}</span>
                    </h1> : <h2 className="text-3xl lg:text-4xl mb-4 leading-tight">
                      <span className="font-bold">{slide.title}</span>
                      <br />
                      <span className="font-light">{slide.subtitle}</span>
                    </h2>}
                    <Link 
                      href={localizeHref(slide.ctaHref, locale)}
                      className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all mt-4"
                    >
                      <Plus className="w-4 h-4" />
                      {slide.cta}
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        <button
          onClick={prevSlide}
          aria-label={locale === "ro" ? "Slide anterior" : "Previous slide"}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label={locale === "ro" ? "Slide următor" : "Next slide"}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Help Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-nardo text-white flex items-center">
          <Link href={localizeHref("/ferestre", locale)} className="flex items-center gap-3 px-6 py-4 hover:bg-nardo/90 transition-colors border-r border-white/20">
            <HelpCircle className="w-8 h-8" />
            <span>{text.home.whatLookingFor}</span>
          </Link>
          <Link href={localizeHref("/contact", locale)} className="flex items-center gap-3 px-6 py-4 hover:bg-nardo/90 transition-colors">
            <MessageSquare className="w-8 h-8" />
            <span>{text.home.needHelp}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
