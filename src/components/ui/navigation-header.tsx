import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import MenuLinkItem from './menu-link-item'
import LinkList from './menu-link-list'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './navigation-menu'
import Link from 'next/link'
import { ThemeToggle } from '../theme-toggle'

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
        {headerMenu?.items?.map(item => {
          switch (item._type) {
            case 'link':
              return <MenuLinkItem link={item} key={item._key} />

            case 'linkList':
              return <LinkList {...item} key={item._key} />

            default:
              return null
          }
        })}
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
