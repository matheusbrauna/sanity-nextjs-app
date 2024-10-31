import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import React from 'react'
import MenuLinkItem from './menu-link-item'

type Props = {
  link: {
    label: string
  }
  links: {
    _key: string
    _type: 'link'
    label?: string
    type?: 'external' | 'internal'
    external?: string
    params?: string
  }[]
}

export default function LinkList({ link, links }: Props) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          {links?.map(link => (
            <li key={link._key}>
              <MenuLinkItem link={link} />
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
