'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavigationHeader from '../ui/navigation-header'
import type { IHeader } from '@/types/headerType'
import { useTheme } from 'next-themes'
import { getCroppedImageSrc } from '@/sanity/lib/image'
import { useEffect, useState } from 'react'

export function Header({ logo, eventName, headerMenu }: IHeader) {
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
    <header className="bg-background w-full hidden lg:flex justify-center shadow-sm">
      <div className="flex h-16 items-center justify-between container">
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

        <NavigationHeader headerMenu={headerMenu} />
      </div>
    </header>
  )
}
