import Image from 'next/image'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { AspectRatio } from '../ui/aspect-ratio'
import { sanityFetch } from '@/sanity/lib/client'
import { RESOURCE_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@sanity/icons'

export default async function ResourceSection() {
  const resource = await sanityFetch({
    query: RESOURCE_QUERY,
  })

  if (!resource) {
    return notFound()
  }

  const { heading, description, cardList } = resource

  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container gap-6 items-center px-6 md:px-28 justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <h2 className="text-5xl font-light tracking-tighter leading-tight">
            {heading}
          </h2>
          {resource?.description && (
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
          {cardList.map(card => (
            <Card key={card.id}>
              <CardHeader className="space-y-4">
                <AspectRatio ratio={365 / 200}>
                  <Image
                    src={card.image ?? ''}
                    alt={card.title ?? ''}
                    fill
                    className="absolute inset-0 object-cover object-center rounded-md"
                  />
                </AspectRatio>
                <CardTitle className="text-2xl font-medium">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                {card.showCTA && (
                  <Button asChild>
                    <Link href={card.ctaLink} target="_blank">
                      {card.ctaDescription}
                      <ArrowTopRightIcon style={{ fontSize: 23 }} />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
