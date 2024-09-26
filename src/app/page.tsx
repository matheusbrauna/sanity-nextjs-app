import { Button } from '@/components/ui/button'
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

  return <Button>Clica aqui {generalConfig.eventName}</Button>
}
