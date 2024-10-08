import CMSSectionRender from '@/components/cms-render'
import { Footer } from '@/components/sections/footer'
import Header from '@/components/sections/header'


export default async function Page() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <main className="flex flex-col justify-center">{CMSSectionRender()}</main>
      <Footer />
    </div>
  )
}
