import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'

export default function AboutSection() {
  return (
    <section className="w-full flex justify-center py-12">
      <div className="container">
        <div className="grid gap-6 md:gap-16 w-11/12 items-center px-6 py-6 md:px-28 lg:grid-cols-2 justify-center relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[400%] after:bg-gray-200 after:-z-[1]">
          <AspectRatio ratio={400 / 400}>
            <Image src="https://placehold.co/400x400" alt="Description" fill />
          </AspectRatio>
          <div className="space-y-4">
            <div className="space-y-6">
              <h2 className="text-5xl font-light tracking-tighter leading-tight">
                About
              </h2>
              <p className="text-muted-foreground text-base w-4/5">
                This is the space to introduce visitors to the business or
                brand. Briefly explain who's behind it, what it does and what
                makes it unique. Share its core values and what this site has to
                offer.
              </p>
            </div>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
