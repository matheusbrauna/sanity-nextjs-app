import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import { sanityFetch } from '@/sanity/lib/client'
import { OFFSET_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@sanity/icons'

export default async function OffsetSection(props: {
  id: string
}) {
  const data = await sanityFetch({
    query: OFFSET_QUERY,
    params: {
      key: props.id,
    },
  })

  if (!data) {
    return notFound()
  }

  const {
    heading,
    description,
    ctaDescription,
    ctaLink,
    image,
    imageAlt,
    idSection,
  } = data

  return (
    <section
      className="w-full flex justify-center py-12"
      id={String(idSection).slice(1)}
    >
      <div className="container">
        <div className="grid gap-6 md:gap-16 w-11/12 items-center px-6 py-6 md:px-28 lg:grid-cols-2 justify-center relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[400%] after:bg-secondary after:-z-[1]">
          <AspectRatio ratio={400 / 400}>
            <Image src={image ?? ''} alt={imageAlt} fill />
          </AspectRatio>
          <div className="space-y-4">
            <div className="space-y-6">
              <h2 className="text-5xl font-light tracking-tighter leading-tight">
                {heading}
              </h2>
              <p className="text-muted-foreground text-base w-4/5">
                {description}
              </p>
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
