import { cn } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import NavigationHeader from '../ui/navigation-header'
export default async function Header() {
  const header = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!header) {
    return notFound()
  }

  const { eventName, logo } = header

  return (
    <header className="bg-background w-full flex justify-center shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 container">
        <Link
          href="#"
          className={cn('inline-block', logo && 'max-w-[250px]')}
          prefetch={false}
        >
          {logo ? (
            <div className="relative w-12 h-12">
              <Image className="inline-block" src={logo} alt={eventName} fill />
            </div>
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
