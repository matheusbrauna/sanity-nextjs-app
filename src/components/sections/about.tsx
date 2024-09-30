import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'

export default function AboutSection() {
  return (
    <section className="w-full xl:w-11/12 flex justify-center py-12 md:py-24 lg:py-32 bg-gray-200 rounded-e-sm">
      <div className="container grid gap-6 items-center px-6 md:px-28 lg:grid-cols-2 justify-center">
        <AspectRatio ratio={400 / 400}>
          <Image
            src="https://placehold.co/400x400"
            alt="Description"
            fill
            className="absolute inset-0 object-cover object-center rounded-md"
          />
        </AspectRatio>
        <div className="space-y-4">
          <div className="space-y-6">
            <h2 className="text-5xl font-light tracking-tighter leading-tight">
              About
            </h2>
            <p className="text-muted-foreground text-base w-4/5">
              This is the space to introduce visitors to the business or brand.
              Briefly explain who's behind it, what it does and what makes it
              unique. Share its core values and what this site has to offer.
            </p>
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  )
}
