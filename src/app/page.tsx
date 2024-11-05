import CMSSectionRender from '@/components/cms-render'
import { Footer } from '@/components/sections/footer'
import Header from '@/components/sections/header'
import { MobileNav } from '@/components/ui/mobile-nav'
import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import NotFound from './not-found'

export default async function Page() {
  const data = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })
  const header = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!data || !header) {
    return NotFound()
  }

  const { eventName, logo } = data

  const { headerMenu } = header

  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] min-h-screen">
      <Header />
      <MobileNav eventName={eventName!} logo={logo!} headerMenu={headerMenu!} />
      <main className="flex flex-col justify-center">{CMSSectionRender()}</main>
      <Footer />
    </div>
  )
}
