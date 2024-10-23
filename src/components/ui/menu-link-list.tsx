import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import React from 'react'
import MenuLinkItem from './menu-link-item'

export default function LinkList({ link, links }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          {links?.map((link, key) => (
            <li key={key}>
              <MenuLinkItem link={link} key={key} />
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
