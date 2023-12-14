import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muturi | Software Engineer',
  description: 'This is my Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="path/to/favicon.ico" />
      </head>
      <body className={`{inter.className} bg-primary w-full overflow-hidden`} >{children}</body>
    </html>
  )
}
