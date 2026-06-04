import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './App.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NexOra',
  description:
    'Privacy-friendly web analytics made and hosted in Germany — powerful, cookie-free, and fully compliant with GDPR, CCPA, and PECR.',
  keywords: ['web analytics', 'privacy', 'GDPR', 'cookie-free', 'NexOra'],
  openGraph: {
    title: 'NexOra',
    description: 'Privacy-friendly web analytics — powerful, cookie-free, GDPR compliant.',
    type: 'website',
  },
}

import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
