import { sanityFetch } from '@/sanity/lib/client'
import { PAGEBUILDER_QUERY } from '@/sanity/lib/queries'
import { CMSSection } from './CMSSection/cms-section'

export default async function CMSSectionRender() {
  const page = await sanityFetch({
    query: PAGEBUILDER_QUERY,
  })
  const { pageBuilder } = page

  if (!pageBuilder) {
    throw new Error('Component for section not found')
  }

  return pageBuilder.map(section => {
    const { id, componentName } = section
    const Component = CMSSection[componentName]

    return <Component key={id} {...section} />
  })
}
