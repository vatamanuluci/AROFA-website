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
      <div className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[700px]">
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
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover object-center"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-anthracite/35 lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/55 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 h-full relative z-10">
              <div className="flex h-full min-h-[520px] items-end pb-20 pt-8 sm:min-h-[560px] sm:items-center sm:pb-8 lg:min-h-[700px]">
                <div className="w-full max-w-xl">
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
                  <div className="w-full max-w-[calc(100vw-2rem)] bg-nardo/95 p-5 text-white sm:max-w-md sm:p-7 lg:p-10">
                    {index === 0 ? <h1 className="mb-3 text-[30px] leading-tight sm:text-3xl lg:mb-4 lg:text-4xl">
                      <span className="block font-bold">{slide.title}</span>
                      <span className="mt-1 block break-words text-2xl font-light sm:text-3xl lg:text-4xl">{slide.subtitle}</span>
                    </h1> : <h2 className="mb-3 text-[30px] leading-tight sm:text-3xl lg:mb-4 lg:text-4xl">
                      <span className="block font-bold">{slide.title}</span>
                      <span className="mt-1 block break-words text-2xl font-light sm:text-3xl lg:text-4xl">{slide.subtitle}</span>
                    </h2>}
                    <Link 
                      href={localizeHref(slide.ctaHref, locale)}
                      className="mt-3 inline-flex min-h-11 items-center gap-2 text-white transition-all hover:gap-3 lg:mt-4"
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
      <div className="absolute bottom-4 right-4 z-20 flex gap-2 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
        <button
          onClick={prevSlide}
          aria-label={locale === "ro" ? "Slide anterior" : "Previous slide"}
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 disabled:opacity-50 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label={locale === "ro" ? "Slide următor" : "Next slide"}
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 sm:h-12 sm:w-12"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Help Bar */}
      <div className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 md:block">
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
