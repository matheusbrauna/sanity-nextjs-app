import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { generateStyleObject } from '@/lib/generate-style-object'
import { cn } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import type { CSSProperties } from 'react'
import { getCroppedImageSrc } from '@/sanity/lib/image'

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
  const generalConfig = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!generalConfig) {
    return notFound()
  }

  const { eventName, description, logo, ogimage } = generalConfig

  const style = (await generateStyleObject()) as CSSProperties
  const favicon = getCroppedImageSrc(logo?.favicon!)
  const ogImage = getCroppedImageSrc(ogimage)

  return (
    <html
      lang="pt-BR"
      style={style}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <title>{eventName ?? ''}</title>
        <link
          rel="icon"
          href={favicon ?? ''}
          type="image/x-icon"
          sizes="32x32"
        />
        <link
          rel="icon"
          href={favicon ?? ''}
          type="image/x-icon"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href={favicon ?? ''}
          type="image/x-icon"
          sizes="180x180"
        />
        <meta name="description" content={description ?? ''} />
        <meta property="og:title" content={eventName ?? ''} />
        <meta name="og:description" content={description ?? ''} />
        <meta property="og:type" content="website" />
        <meta name="og:image" content={ogImage ?? ''} />
        <meta name="og:url" content={process.env.NEXT_PUBLIC_BASE_URL!} />
      </head>
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
