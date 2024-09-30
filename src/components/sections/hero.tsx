import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-6 md:px-28 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="space-y-6">
            <h1 className="text-5xl xl:text-7xl font-semibold tracking-tighter leading-tight">
              Write a Title Here. Click to Add and Edit Title Text.
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              This is a space to welcome visitors to the site. Add an engaging
              image or video.
            </p>
          </div>
          <Button type="button">Learn More</Button>
        </div>
        <AspectRatio ratio={600 / 600}>
          <Image
            src="https://placehold.co/600x600"
            alt="Description"
            fill
            className="absolute inset-0 object-cover object-center rounded-md"
          />
        </AspectRatio>
      </div>
    </section>
  )
}
