import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { sanityFetch } from '@/sanity/lib/client'
import { ACCORDION_QUERY } from '@/sanity/lib/queries'
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

  const { idSection, heading, description, accordionList } = data

  return (
    <section
      className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-secondary"
      id={String(idSection).slice(1)}
    >
      <div className="container gap-6 items-center px-6 md:px-28 justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <h2 className="text-5xl font-light tracking-tighter leading-tight">
            {heading}
          </h2>
          {description && (
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          )}
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
