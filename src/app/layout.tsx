import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { generateStyleObject } from '@/lib/generate-style-object'
import { cn } from '@/lib/utils'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
import type { CSSProperties } from 'react'
import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { getCroppedImageSrc } from '@/sanity/lib/image'

export async function generateMetadata() {
  const generalConfig = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  const { eventName, description, logo, ogimage } = generalConfig

  const favicon = logo ? getCroppedImageSrc(logo?.favicon) : ''
  const ogImage = ogimage ? getCroppedImageSrc(ogimage) : ''

  return {
    title: eventName,
    icons: favicon,
    description: description,
    keywords: ['Next.js'],
    openGraph: {
      type: 'website',
      url: process.env.NEXT_PUBLIC_BASE_URL!,
      title: eventName,
      siteName: eventName,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: 'pt_BR',
    },
    authors: [
      {
        name: 'CRIA<DIGI>',
        url: 'https://criadigi.com.br',
      },
    ],
    creator: 'CRIA<DIGI>',
    publisher: 'CRIA<DIGI>',
  }
}

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const style = (await generateStyleObject()) as CSSProperties

  return (
    <html
      lang="pt-BR"
      style={style}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          geistSans.variable
        )}
      >
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
