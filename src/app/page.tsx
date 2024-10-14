import { CMSSectionRender } from '@/components/cms-render'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center">{CMSSectionRender()}</main>
      <Footer />
    </>
  )
}
