import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Providers } from './providers'
import { personalInfo } from '@/lib/data'
import './globals.css'

// Google Fonts configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// Metadata for SEO
export const metadata: Metadata = {
  title: `${personalInfo.name} — Portfolio`,
  description: `${personalInfo.tagline} — Computer Science & IoT Engineer. Portfolio showcasing projects, experience, and skills in software development, machine learning, and IoT.`,
  keywords: [
    'Kosma Gąsiorowski',
    'Portfolio',
    'Computer Science',
    'IoT',
    'Software Developer',
    'Machine Learning',
    'C++',
    'Python',
    'Salesforce',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kosmagasiorowski.com',
    title: `${personalInfo.name} — Portfolio`,
    description: `${personalInfo.tagline} — Computer Science & IoT Engineer`,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} — Portfolio`,
    description: `${personalInfo.tagline} — Computer Science & IoT Engineer`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
