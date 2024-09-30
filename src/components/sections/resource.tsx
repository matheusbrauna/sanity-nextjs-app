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

export default function ResourceSection() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container gap-6 items-center px-6 md:px-28 justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <h2 className="text-5xl font-light tracking-tighter leading-tight">
            Resource
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="space-y-4">
              <AspectRatio ratio={365 / 200}>
                <Image
                  src="https://placehold.co/365x200"
                  alt="Description"
                  fill
                  className="absolute inset-0 object-cover object-center rounded-md"
                />
              </AspectRatio>
              <CardTitle className="text-2xl font-medium">
                Article Title
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="space-y-4">
              <AspectRatio ratio={365 / 200}>
                <Image
                  src="https://placehold.co/365x200"
                  alt="Description"
                  fill
                  className="absolute inset-0 object-cover object-center rounded-md"
                />
              </AspectRatio>
              <CardTitle className="text-2xl font-medium">
                Article Title
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="space-y-4">
              <AspectRatio ratio={365 / 200}>
                <Image
                  src="https://placehold.co/365x200"
                  alt="Description"
                  fill
                  className="absolute inset-0 object-cover object-center rounded-md"
                />
              </AspectRatio>
              <CardTitle className="text-2xl font-medium">
                Article Title
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
