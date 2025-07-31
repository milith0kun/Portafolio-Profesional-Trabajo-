import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Portafolio Personal - Ingeniero de Sistemas',
    template: '%s | Portafolio Personal'
  },
  description:
    'Portafolio profesional de Ingeniero de Sistemas especializado en desarrollo web, aplicaciones móviles y análisis de datos. Blog técnico y showcase de proyectos.',
  keywords: [
    'portafolio',
    'desarrollador',
    'ingeniero sistemas',
    'web',
    'móvil',
    'análisis datos',
    'freelance'
  ],
  authors: [{ name: 'Ingeniero de Sistemas' }],
  creator: 'Ingeniero de Sistemas',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tu-dominio.com',
    title: 'Portafolio Personal - Ingeniero de Sistemas',
    description:
      'Portafolio profesional con proyectos de desarrollo web, móvil y análisis de datos',
    siteName: 'Portafolio Personal'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio Personal - Ingeniero de Sistemas',
    description:
      'Portafolio profesional con proyectos de desarrollo web, móvil y análisis de datos'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'tu-google-verification-code'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
