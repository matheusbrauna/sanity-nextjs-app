import { sanityFetch } from '@/sanity/lib/client'
import { PAGEBUILDER_QUERY } from '@/sanity/lib/queries'
import { CMSSection } from './CMSSection/cms-section'

export async function CMSSectionRender() {
  const page = await sanityFetch({
    query: PAGEBUILDER_QUERY,
  })

  if (!page?.pageBuilder) {
    throw new Error('Component for section not found')
  }

  return page.pageBuilder.map(section => {
    const { id, componentName } = section
    const Component = CMSSection[componentName]

    return <Component key={id} {...section} />
  })
}
