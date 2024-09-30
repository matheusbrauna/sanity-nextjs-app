import { Button } from '../ui/button'

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
          <div className="w-full md:w-fit border-2">
            <div className="space-y-4 p-6">
              <div className="overflow-hidden h-48">
                <img
                  src="https://placehold.co/365x200"
                  width="365"
                  height="200"
                  alt="Description"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-2xl font-normal tracking-normal">
                Article Title
              </h3>
              <p className="text-muted-foreground text-base">
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="w-full md:w-fit border-2">
            <div className="space-y-4 p-6">
              <div className="overflow-hidden h-48">
                <img
                  src="https://placehold.co/365x200"
                  width="365"
                  height="200"
                  alt="Description"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-2xl font-normal tracking-normal">
                Article Title
              </h3>
              <p className="text-muted-foreground text-base">
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="w-full md:w-fit border-2">
            <div className="space-y-4 p-6">
              <div className="overflow-hidden h-48">
                <img
                  src="https://placehold.co/365x200"
                  width="365"
                  height="200"
                  alt="Description"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-2xl font-normal tracking-normal">
                Article Title
              </h3>
              <p className="text-muted-foreground text-base">
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
