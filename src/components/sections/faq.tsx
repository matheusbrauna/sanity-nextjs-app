import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FaqSection() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container gap-6 items-center px-6 md:px-28 justify-center">
        <div className="space-y-6 mb-8 md:mb-16">
          <h2 className="text-5xl font-light tracking-tighter leading-tight">
            Frequently asked questions
          </h2>
        </div>
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            <AccordionItem value="faq-1" className="bg-zinc-200 p-2 px-4">
              <AccordionTrigger className="text-xl font-normal tracking-normal">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam architecto pariatur, nam nisi temporibus veniam maiores
                perferendis adipisci similique veritatis, officia perspiciatis
                minima. Odio suscipit ipsam sunt rem tenetur dolores!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="bg-zinc-200 p-2 px-4">
              <AccordionTrigger className="text-xl font-normal tracking-normal">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam architecto pariatur, nam nisi temporibus veniam maiores
                perferendis adipisci similique veritatis, officia perspiciatis
                minima. Odio suscipit ipsam sunt rem tenetur dolores!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="bg-zinc-200 p-2 px-4">
              <AccordionTrigger className="text-xl font-normal tracking-normal">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam architecto pariatur, nam nisi temporibus veniam maiores
                perferendis adipisci similique veritatis, officia perspiciatis
                minima. Odio suscipit ipsam sunt rem tenetur dolores!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4" className="bg-zinc-200 p-2 px-4">
              <AccordionTrigger className="text-xl font-normal tracking-normal">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam architecto pariatur, nam nisi temporibus veniam maiores
                perferendis adipisci similique veritatis, officia perspiciatis
                minima. Odio suscipit ipsam sunt rem tenetur dolores!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
