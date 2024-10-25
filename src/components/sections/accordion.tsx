import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { sanityFetch } from '@/sanity/lib/client'
import { ACCORDION_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

export default async function AccordionSection(props: {
  id: string
}) {
  const data = await sanityFetch({
    query: ACCORDION_QUERY,
    params: {
      key: props.id,
    },
  })

  if (!data) {
    return notFound()
  }

  const { idSection, content, accordionList } = data

  return (
    <section
      className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-secondary"
      id={String(idSection).slice(1)}
    >
      <div className="container gap-6 items-center px-6 md:px-28 justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <div
            className="prose
              prose-h1:text-5xl prose-h1:xl:text-7xl prose-h1:font-semibold prose-h1:tracking-tighter prose-h1:leading-tight
              prose-h2:text-5xl prose-h2:font-light prose-h2:tracking-tighter prose-h2:leading-tight
              prose-h3:text-4xl prose-h3:font-light prose-h3:tracking-tighter prose-h3:leading-tight
              prose-h4:text-3xl prose-h4:font-light prose-h4:tracking-tighter prose-h4:leading-tight
              prose-p:text-muted-foreground prose-p:md:text-xl/relaxed prose-p:lg:text-base/relaxed prose-p:xl:text-xl/relaxed
            "
          >
            <PortableText value={content} />
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {accordionList?.map(item => {
              const { id, heading, body } = item

              return (
                <AccordionItem
                  value={id}
                  className="p-2 px-4 bg-muted"
                  key={id}
                >
                  <AccordionTrigger className="text-xl font-normal tracking-normal">
                    {heading}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {body}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
