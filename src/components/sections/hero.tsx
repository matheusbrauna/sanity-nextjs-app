import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import { HERO_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/client'

export default async function HeroSection() {
  const hero = await sanityFetch({
    query: HERO_QUERY,
  })

  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-6 md:px-28 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="space-y-6">
            <h1 className="text-5xl xl:text-7xl font-semibold tracking-tighter leading-tight">
              {hero?.title}
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {hero?.description}
            </p>
          </div>
          <Button type="button">{hero?.cta}</Button>
        </div>
        <AspectRatio ratio={600 / 600}>
          <Image
            src={hero?.heroImage ?? ''}
            alt="Description"
            fill
            className="absolute inset-0 object-cover object-center rounded-md"
          />
        </AspectRatio>
      </div>
    </section>
  )
}
