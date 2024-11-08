import { ThemeToggle } from '../theme-toggle'
import MenuLinkItem from './menu-link-item'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './navigation-menu'
import LinkList from './menu-link-list'
import type { IHeader } from '@/types/headerType'

export default async function NavigationHeader({
  headerMenu,
}: Pick<IHeader, 'headerMenu'>) {
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
