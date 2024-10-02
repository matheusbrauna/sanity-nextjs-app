import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { sanityFetch } from '@/sanity/lib/client'
import { FAQ_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export default async function FaqSection() {
  const faq = await sanityFetch({
    query: FAQ_QUERY,
  })

  if (!faq) {
    return notFound()
  }

  const { heading, description, faqList } = faq

  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container gap-6 items-center px-6 md:px-28 justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <h2 className="text-5xl font-light tracking-tighter leading-tight">
            {heading}
          </h2>
          {faq?.description && (
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          )}
        </div>
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqList?.map(item => {
              return (
                <AccordionItem
                  value={item.id}
                  className="bg-zinc-200 p-2 px-4"
                  key={item.id}
                >
                  <AccordionTrigger className="text-xl font-normal tracking-normal">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
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
