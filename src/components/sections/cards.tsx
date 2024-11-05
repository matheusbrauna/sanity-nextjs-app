import { sanityFetch } from '@/sanity/lib/client'
import { CARD_QUERY } from '@/sanity/lib/queries'
import { ArrowTopRightIcon } from '@sanity/icons'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import ProseText from '../prose'

export default async function CardSection(props: {
  id: string
}) {
  const data = await sanityFetch({
    query: CARD_QUERY,
    params: {
      key: props.id,
    },
  })

  if (!data?.data) {
    return notFound()
  }

  const { idSection, content, cardList } = data.data

  return (
    <section
      className="w-full flex justify-center py-12 md:py-24 lg:py-32"
      id={String(idSection).slice(1)}
    >
      <div className="container gap-6 items-center justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
        <ProseText>
            <PortableText value={content!} />
          </ProseText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {cardList?.map(card => {
            const {
              id,
              image,
              imageAlt,
              title,
              description,
              ctaDescription,
              ctaLink,
            } = card
            return (
              <>
                <Card key={id}>
                  <CardHeader className="space-y-4">
                    <AspectRatio ratio={365 / 200}>
                      <Image
                        src={image ?? ''}
                        alt={imageAlt ?? ''}
                        fill
                        className="absolute inset-0 object-contain object-center rounded-md"
                      />
                    </AspectRatio>
                    <CardTitle className="text-2xl font-medium">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    {ctaLink && (
                      <Button asChild>
                        <Link href={ctaLink} target="_blank">
                          {ctaDescription}
                          <ArrowTopRightIcon style={{ fontSize: 23 }} />
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
                <Card key={id}>
                  <CardHeader className="space-y-4">
                    <AspectRatio ratio={365 / 200}>
                      <Image
                        src={image ?? ''}
                        alt={imageAlt ?? ''}
                        fill
                        className="absolute inset-0 object-contain object-center rounded-md"
                      />
                    </AspectRatio>
                    <CardTitle className="text-2xl font-medium">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    {ctaLink && (
                      <Button asChild>
                        <Link href={ctaLink} target="_blank">
                          {ctaDescription}
                          <ArrowTopRightIcon style={{ fontSize: 23 }} />
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}
