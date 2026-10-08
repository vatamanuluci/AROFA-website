import type { MetadataRoute } from "next"
import { indexableSitePages } from "@/lib/site-content"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arofa.ro"
  const lastModified = new Date("2026-09-30")
  const localizedEntries = (["en", "fr", "nl"] as const).flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...indexableSitePages.map((page) => ({
      url: `${baseUrl}/${locale}/${page.slug.join("/")}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: page.slug.length === 1 ? 0.75 : 0.65,
    })),
  ])

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...indexableSitePages.map((page) => ({
      url: `${baseUrl}/${page.slug.join("/")}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: page.slug.length === 1 ? 0.8 : 0.7,
    })),
    ...localizedEntries,
  ]
}
