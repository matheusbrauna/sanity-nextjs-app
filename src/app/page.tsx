import AboutSection from '@/components/sections/about'
import FaqSection from '@/components/sections/faq'
import Header from '@/components/sections/header'
import HeroSection from '@/components/sections/hero'
import ResourceSection from '@/components/sections/resource'

export default async function Page() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <main className="flex flex-col justify-center">
        <HeroSection />
        <AboutSection />
        <ResourceSection />
        <FaqSection />
      </main>
    </div>
  )
}
