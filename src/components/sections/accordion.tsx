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
import ProseText from '../prose'

export default async function AccordionSection(props: {
  id: string
}) {
  const data = await sanityFetch({
    query: ACCORDION_QUERY,
    params: {
      key: props.id,
    },
  })

  if (!data?.data) {
    return notFound()
  }

  const { idSection, content, accordionList } = data.data

  return (
    <section
      className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-secondary"
      id={String(idSection).slice(1)}
    >
      <div className="container gap-6 items-center justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <ProseText>
            <PortableText value={content!} />
          </ProseText>
        </div>
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {accordionList?.map(item => {
              const { id, heading, body } = item

              return (
                <AccordionItem
                  value={id}
                  className="p-2 px-4 bg-muted-foreground/5"
                  key={id}
                >
                  <AccordionTrigger>{heading}</AccordionTrigger>
                  <AccordionContent>{body}</AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
