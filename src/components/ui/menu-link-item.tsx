import { NavigationMenuItem } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './navigation-menu'

type Props = {
  link: {
    _key: string
    _type: 'link'
    label?: string
    type?: 'external' | 'internal'
    external?: string
    params?: string
  }
}

export default function MenuLinkItem({ link }: Props) {
  if (link?.type === 'internal')
    return (
      <NavigationMenuItem>
        <Link href={link?.params ?? ''} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {link?.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )

  if (link?.type === 'external' && link.external)
    return (
      <NavigationMenuItem>
        <Link href={link.external} legacyBehavior passHref>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            target="_blank"
          >
            {link?.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
}
