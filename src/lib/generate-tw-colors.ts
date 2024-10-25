import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'

export async function generateTWColors() {
  const generalConfig = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  return {
    primaryColor: generalConfig?.primaryColor,
    radius: generalConfig?.roundingOfComponents,
  }
}
