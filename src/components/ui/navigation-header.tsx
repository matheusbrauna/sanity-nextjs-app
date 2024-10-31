import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { ThemeToggle } from '../theme-toggle'
import MenuLinkItem from './menu-link-item'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './navigation-menu'
import LinkList from './menu-link-list'

export default async function NavigationHeader() {
  const header = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  if (!header) {
    return notFound()
  }

  const { headerMenu } = header

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {headerMenu?.items?.map(item =>
          item._type === 'link' ? (
            <MenuLinkItem link={item} key={item._key} />
          ) : (
            <LinkList
              key={item._key}
              link={{
                label: item.label ?? '',
              }}
              links={headerMenu.items ?? []}
            />
          )
        )}
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
