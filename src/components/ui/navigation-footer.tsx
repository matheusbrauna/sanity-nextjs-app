import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import LinkList from './menu-link-list'
import { NavigationMenu, NavigationMenuList } from './navigation-menu'

export default async function NavigationFooter() {
  const footer = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!footer) {
    return notFound()
  }

  const { footerMenu } = footer

  return (
    <NavigationMenu>
      <NavigationMenuList className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
        {footerMenu?.items?.map(item => {
          switch (item._type) {
            case 'link':
              return (
                <li key={item._key}>
                  <a
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href={item.params}
                  >
                    {item.label}
                  </a>
                </li>
              )

            case 'linkList':
              return <LinkList {...item} key={key} />

            default:
              return null
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
