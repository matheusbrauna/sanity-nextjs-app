import LinkList from './menu-link-list'
import { NavigationMenu, NavigationMenuList } from './navigation-menu'
import type { IFooter } from '@/types/footerType'

export default async function NavigationFooter({
  footerMenu,
}: Pick<IFooter, 'footerMenu'>) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
        {footerMenu?.items?.map(item =>
          item._type === 'link' ? (
            <li key={item._key}>
              <a
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href={item.params}
              >
                {item.label}
              </a>
            </li>
          ) : (
            <LinkList
              key={item._key}
              link={{
                label: item.label ?? '',
              }}
              links={footerMenu.items ?? []}
            />
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
