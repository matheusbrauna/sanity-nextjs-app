import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import { sanityFetch } from '@/sanity/lib/client'
import { OFFSET_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@sanity/icons'
import { PortableText } from 'next-sanity'
import { cn } from '@/lib/utils'

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

  return (
    <section
      className="w-full flex justify-center overflow-hidden py-12"
      id={String(idSection).slice(1)}
    >
      <div className="container">
        <div className="grid gap-6 md:gap-16 w-11/12 items-center py-6 sm:grid-cols-2 justify-center relative after:rounded-md after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[400%] after:bg-secondary after:-z-[1]">
          <AspectRatio ratio={400 / 400}>
            <Image
              src={image ?? ''}
              alt={imageAlt ?? ''}
              fill
              className="absolute inset-0 object-contain object-center"
              priority
            />
          </AspectRatio>
          <div
            className={cn(
              'space-y-4',
              imageOnRight ? 'lg:-order-1' : 'lg:order-0',
              imageOnBottom ? 'max-lg:order-first' : 'max-lg:order-last'
            )}
          >
            <div className="space-y-6">
              <div
                className="
                prose
                prose-h1:text-foreground
                prose-h2:text-foreground
                prose-h3:text-foreground
                prose-h4:text-foreground
                prose-h5:text-foreground
                prose-h6:text-foreground
                prose-strong:text-foreground
                prose-h1:text-5xl prose-h1:xl:text-7xl prose-h1:font-semibold prose-h1:tracking-tighter prose-h1:leading-tight
                prose-h2:text-5xl prose-h2:font-light prose-h2:tracking-tighter prose-h2:leading-tight
                prose-h3:text-4xl prose-h3:font-light prose-h3:tracking-tighter prose-h3:leading-tight
                prose-h4:text-3xl prose-h4:font-light prose-h4:tracking-tighter prose-h4:leading-tight
                prose-h5:text-3xl prose-h5:font-light prose-h5:tracking-tighter prose-h5:leading-tight
                prose-h6:text-3xl prose-h6:font-light prose-h6:tracking-tighter prose-h6:leading-tight
                prose-p:text-muted-foreground prose-p:md:text-xl/relaxed prose-p:lg:text-base/relaxed prose-p:xl:text-xl/relaxed
                "
              >
                <PortableText value={content!} />
              </div>
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
