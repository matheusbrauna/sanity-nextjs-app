import { cn } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/client'
import { OFFSET_QUERY } from '@/sanity/lib/queries'
import { ArrowTopRightIcon } from '@sanity/icons'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '../ui/button'
import ProseText from '../prose'
import { getImageDimensions } from '@sanity/asset-utils'
import { getCroppedImageSrc } from '@/sanity/lib/image'

export default async function OffsetSection(props: {
  id: string
}) {
  const data = await sanityFetch({
    query: OFFSET_QUERY,
    params: {
      key: props.id,
    },
  })

  if (!data?.data) {
    return notFound()
  }

  const {
    content,
    ctaDescription,
    ctaLink,
    image,
    imageAlt,
    idSection,
    imageOnRight,
    imageOnBottom,
  } = data.data

  const imageUrl = await getCroppedImageSrc(image!)
  const { width, height } = await getImageDimensions(imageUrl)

  return (
    <section
      className="w-full flex justify-center py-12 md:py-24 lg:py-32 overflow-hidden"
      id={String(idSection).slice(1)}
    >
      <div className="container">
        <div className="grid gap-16 md:gap-16 w-full items-center py-6 sm:grid-cols-2 justify-center relative after:rounded-md after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[400%] after:bg-secondary after:-z-[1]">
          <div className="flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={imageAlt ?? ''}
              width={width}
              height={height}
              priority
            />
          </div>
          <div
            className={cn(
              'space-y-4',
              imageOnRight ? 'lg:-order-1' : 'lg:order-0',
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
        </div>
      </div>
    </section>
  )
}
