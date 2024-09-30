import Header from '@/components/sections/header'
import HeroSection from '@/components/sections/hero'
import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export default async function Page() {
  const generalConfig = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!generalConfig) {
    return notFound()
  }

  return (
    <div className="flex flex-col justify-center">
      <Header />
      <main className="flex justify-center">
        <HeroSection />
      </main>
    </div>
  )
}
