import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { AROFA_EMAIL, AROFA_PHONE } from '@/lib/contact-info'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://arofa.ro'),
  title: 'AROFA | Ferestre, uși și sisteme de umbrire',
  description: 'Soluții configurabile pentru ferestre, uși, sisteme de umbrire și montaj, adaptate proiectelor rezidențiale, comerciale și industriale.',
  keywords: [
    'ferestre AROFA',
    'uși AROFA',
    'ferestre aluminiu',
    'ferestre PVC',
    'ferestre lemn',
    'ferestre fier',
    'uși de garaj',
    'sisteme de umbrire',
    'verande',
    'servicii de montaj'
  ],
  icons: {
    icon: '/icon.svg',
  },
  alternates: {
    canonical: '/',
    languages: {
      'x-default': '/',
      ro: '/',
      en: '/en',
      fr: '/fr',
      'nl-BE': '/nl',
    },
  },
  openGraph: {
    title: 'AROFA | Ferestre și Uși proiectate să reziste',
    description: 'Tâmplărie termoizolantă premium, soluții pentru aluminiu, PVC, lemn, fier, uși de garaj, verande și servicii de montaj.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'AROFA',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AROFA | Ferestre și Uși proiectate să reziste',
    description: 'Ferestre, uși, sisteme de umbrire și servicii de montaj pentru proiecte rezidențiale și comerciale.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b84d8',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const locale = requestHeaders.get('x-arofa-locale') ?? 'ro'
  const phone = process.env.NEXT_PUBLIC_AROFA_PHONE || AROFA_PHONE
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AROFA',
    url: 'https://arofa.ro',
    email: AROFA_EMAIL,
    ...(phone ? { telephone: phone } : {}),
    sameAs: [
      'https://www.instagram.com/arofa_romania/',
      'https://ro.linkedin.com/company/arofa-romania',
      'https://www.facebook.com/AROFARomania'
    ],
  }

  return (
    <html lang={locale === 'nl' ? 'nl-BE' : locale} className="bg-background" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
