import { cn } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/client'
import { HERO_QUERY } from '@/sanity/lib/queries'
import { ArrowTopRightIcon } from '@sanity/icons'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '../ui/button'
import ProseText from '../prose'
import { getCroppedImageSrc } from '@/sanity/lib/image'
import { getImageDimensions } from '@sanity/asset-utils'

export default async function HeroSection(props: {
  id: string
}) {
  const data = await sanityFetch({
    query: HERO_QUERY,
    params: {
      key: props.id,
    },
  })

  if (!data?.data) {
    return notFound()
  }

  const {
    idSection,
    content,
    ctaDescription,
    ctaLink,
    image,
    imageAlt,
    imageOnRight,
    imageOnBottom,
  } = data.data

  const imageUrl = await getCroppedImageSrc(image!)
  const { width, height } = await getImageDimensions(imageUrl)

  return (
    <section
      className="w-full flex justify-center py-12 md:py-24 lg:py-32"
      id={String(idSection).slice(1)}
    >
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <div
          className={cn(
            'space-y-4',
            imageOnRight ? 'lg:order-0' : 'lg:order-1',
            imageOnBottom ? 'max-lg:order-first' : 'max-lg:order-last'
          )}
        >
          <div className="space-y-6">
            <ProseText>
              <PortableText value={content!} />
            </ProseText>
          </div>
          {ctaLink && (
            <Button asChild>
              <Link href={ctaLink} target="_blank">
                {ctaDescription}
                <ArrowTopRightIcon style={{ fontSize: 23 }} />
              </Link>
            </Button>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={imageAlt ?? ''}
            width={width}
            height={height}
            priority
          />
        </div>
      </div>
    </section>
  )
}
