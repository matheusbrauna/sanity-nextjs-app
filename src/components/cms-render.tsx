import { sanityFetch } from '@/sanity/lib/client'
import { PAGEBUILDER_QUERY } from '@/sanity/lib/queries'
import { CMSSection } from './CMSSection/cms-section'
import { NoContentFoundModal } from './no-content-found-modal'

export default async function CMSSectionRender() {
  const page = await sanityFetch({
    query: PAGEBUILDER_QUERY,
  })

  if (!page?.data) {
    return <NoContentFoundModal isOpen={!page?.data} />
  }

  return page.data.map(section => {
    const { id, componentName } = section
    const Component = CMSSection[componentName]

    return <Component key={id} {...section} />
  })
}
