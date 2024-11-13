'use client'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { BackToTop } from '../back-to-top'
import NavigationFooter from '../ui/navigation-footer'
import type { IFooter } from '@/types/footerType'
import { useTheme } from 'next-themes'
import { getCroppedImageSrc } from '@/sanity/lib/image'
import { useEffect, useState } from 'react'

export function Footer({
  eventName,
  logo,
  description,
  copyright,
  footerMenu,
}: IFooter) {
  const [logoImage, setLogoImage] = useState('')
  const { theme } = useTheme()

  useEffect(() => {
    if (logo && logo?.default != null) {
      const currentLogo =
        theme === 'dark' ? (logo && logo?.dark!) || logo.default : logo.default

      const logoImage = getCroppedImageSrc(currentLogo)
      setLogoImage(logoImage)
    }
  }, [theme, logo])

  return (
    <footer>
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <BackToTop />
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-primary lg:justify-start">
              <Link href="#" className="inline-block" prefetch={false}>
                {logo && logo?.default != null ? (
                  <Image
                    className="max-w-prose max-h-14"
                    src={logoImage}
                    alt={eventName!}
                    width={96}
                    height={96}
                  />
                ) : (
                  <span className="text-gradient text-lg font-medium">
                    {eventName}
                  </span>
                )}
                <span className="sr-only">{eventName}</span>
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-muted-foreground lg:text-left">
              {description}
            </p>
          </div>

          <div className="flex justify-center">
            <NavigationFooter footerMenu={footerMenu} />
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground lg:text-right">
          <p> Copyright &copy; {new Date().getFullYear()}.</p>
          {copyright ? <PortableText value={copyright} /> : eventName}
        </div>
      </div>
    </footer>
  )
}
