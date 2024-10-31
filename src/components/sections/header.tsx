import { cn } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import NavigationHeader from '../ui/navigation-header'
export default async function Header() {
  const data = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!data) {
    return notFound()
  }

  const { eventName, logo } = data

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

        <NavigationHeader />
      </div>
    </header>
  )
}
