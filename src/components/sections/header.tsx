'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavigationHeader from '../ui/navigation-header'
import type { IHeader } from '@/types/headerType'
import { useTheme } from 'next-themes'
import { getCroppedImageSrc } from '@/sanity/lib/image'

export function Header({ logo, eventName, headerMenu }: IHeader) {
  const { theme } = useTheme()

  const logoImage = getCroppedImageSrc(
    theme === 'dark' ? logo.dark : logo.default
  )
  return (
    <header className="bg-background w-full hidden lg:flex justify-center shadow-sm">
      <div className="flex h-16 items-center justify-between container">
        <Link href="#" className="inline-block" prefetch={false}>
          {logo ? (
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
