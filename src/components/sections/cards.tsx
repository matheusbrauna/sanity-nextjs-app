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
import { CARD_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@sanity/icons'
import { PortableText } from 'next-sanity'

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
          <div
            className="
<<<<<<< HEAD
              prose
              prose-h1:text-foreground
              prose-h2:text-foreground
              prose-h3:text-foreground
              prose-h4:text-foreground
              prose-h5:text-foreground
              prose-h6:text-foreground
              prose-strong:text-foreground
              prose-h1:text-5xl prose-h1:xl:text-7xl prose-h1:font-semibold prose-h1:tracking-tighter prose-h1:leading-tight
=======
              prose prose-h2:text-foreground prose-h1:text-foreground prose-strong:text-foreground prose-h3:text-foreground prose-h1:text-5xl prose-h1:xl:text-7xl prose-h1:font-semibold prose-h1:tracking-tighter prose-h1:leading-tight
>>>>>>> e68912bcc81883b9c295de0da1ddf31e9b86ae09
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
                        className="absolute inset-0 object-cover object-center rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
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
