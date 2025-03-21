import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './_components/shared/footer'
import Navbar from './_components/shared/nav'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tushdev.co/'),
  alternates: {
    canonical: 'https://tushdev.co/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  title: 'Muturi David | Software Engineer',
  description: 'Building innovative solutions with AI/ML and modern web technologies.',
  robots: 'index, follow',
  openGraph: {
    title: 'Muturi David | Software Engineer',
    description: 'Building innovative solutions with AI/ML and modern web technologies.',
    url: 'https://tushdev.co/',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-primary w-full overflow-y-visible overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-Q4XL9FK10T" />
    </html>
  )
}
