import Image from 'next/image'
import Link from 'next/link'
import NavigationHeader from '../ui/navigation-header'
import type { IHeader } from '@/types/headerType'

export function Header({ logo, eventName, headerMenu }: IHeader) {
  return (
    <header className="bg-background w-full hidden lg:flex justify-center shadow-sm">
      <div className="flex h-16 items-center justify-between container">
        <Link href="#" className="inline-block" prefetch={false}>
          {logo ? (
            <Image
              className="max-w-prose max-h-14"
              src={logo}
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
