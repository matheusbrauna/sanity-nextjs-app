import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BackToTop } from '../back-to-top'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import NavigationFooter from '../ui/navigation-footer'

export async function Footer() {
  const data = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!data) {
    return notFound()
  }

  const { eventName, logo, description, copyright } = data

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
                {logo ? (
                  <Image
                    className="max-w-prose max-h-16"
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
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-muted-foreground lg:text-left">
              {description}
            </p>
          </div>

          <div className="flex justify-center">
            <NavigationFooter />
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
