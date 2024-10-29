import CMSSectionRender from '@/components/cms-render'
import { Footer } from '@/components/sections/footer'
import Header from '@/components/sections/header'

export default function Page() {
  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] min-h-screen">
      <Header />
      <main className="flex flex-col justify-center">{CMSSectionRender()}</main>
      <Footer />
    </div>
  )
}
