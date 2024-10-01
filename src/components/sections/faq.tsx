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

  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container gap-6 items-center px-6 md:px-28 justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <h2 className="text-5xl font-light tracking-tighter leading-tight">
            Perguntas frequentes
          </h2>
        </div>
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faq.map(faqItem => {
              return (
                <AccordionItem
                  value={faqItem.id}
                  className="bg-zinc-200 p-2 px-4"
                  key={faqItem.id}
                >
                  <AccordionTrigger className="text-xl font-normal tracking-normal">
                    {faqItem.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faqItem.answer}
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
