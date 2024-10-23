import Link from 'next/link'
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './navigation-menu'

export default function MenuLinkItem({ link }) {
  if (link?.type === 'internal')
    return (
      <NavigationMenuItem>
        <Link href={link.params} legacyBehavior passHref>
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
