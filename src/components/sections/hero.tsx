import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import { HERO_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { ArrowTopRightIcon } from '@sanity/icons'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { cn } from '@/lib/utils'

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

  return (
    <section
      className="w-full flex justify-center py-12 md:py-24 lg:py-32"
      id={String(idSection).slice(1)}
    >
      <div className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div
          className={cn(
            'space-y-4',
            imageOnRight ? 'lg:order-0' : 'lg:order-1',
            imageOnBottom ? 'max-lg:order-first' : 'max-lg:order-last'
          )}
        >
          <div className="space-y-6">
            <div
              className="prose
              prose-h1:text-foreground prose-strong:text-foreground prose-h1:text-5xl prose-h1:xl:text-7xl prose-h1:font-semibold prose-h1:tracking-tighter prose-h1:leading-tight
              prose-h2:text-5xl prose-h2:font-light prose-h2:tracking-tighter prose-h2:leading-tight
              prose-h3:text-4xl prose-h3:font-light prose-h3:tracking-tighter prose-h3:leading-tight
              prose-h4:text-3xl prose-h4:font-light prose-h4:tracking-tighter prose-h4:leading-tight
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
        <AspectRatio ratio={600 / 600}>
          <Image
            src={image ?? ''}
            alt={imageAlt ?? ''}
            fill
            className="absolute inset-0 object-cover object-center rounded-md"
          />
        </AspectRatio>
      </div>
    </section>
  )
}
