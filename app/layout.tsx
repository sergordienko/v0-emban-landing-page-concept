import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Emban — Customer Analytics for ClickHouse',
  description: 'Self-hosted customer-facing analytics layer for SaaS products on ClickHouse. Build dashboards, publish live versions, create signed tenant-scoped embed sessions.',
  generator: 'Emban',
  keywords: ['ClickHouse', 'analytics', 'SaaS', 'embedded analytics', 'self-hosted', 'customer-facing dashboards'],
}

export const viewport = {
  themeColor: '#f8f9fa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${inter.variable} font-mono antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
