import localFont from 'next/font/local'
import './globals.css'
import { cn, generateStyleObject } from '@/lib/utils'
import type { CSSProperties } from 'react'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'

import { ThemeProvider } from '@/providers/theme-provider'

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
          'bg-background font-sans antialiased flex flex-col justify-center',
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
          defaultTheme="light"
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
