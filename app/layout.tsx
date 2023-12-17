import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { title } from 'process'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muturi | Web & Mobile developer',
  description: 'I am highly passionate about creating sleek and reliable software.',
  robots: 'index, follow',  
  openGraph: {
    title: 'Muturi | Web & Mobile developer',
    description: 'Passionate web developer who loves creating sleek and reliable software.',
    url: 'https://tushdev-portfolio.vercel.app/',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-primary w-full overflo-y-visible overflow-x-hidden`} >{children}</body>
    </html>
  )
}
