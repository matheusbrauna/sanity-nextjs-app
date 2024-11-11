import { NavigationMenuItem } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './navigation-menu'
import { cn } from '@/lib/utils'

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
      <NavigationMenuItem className="w-full lg:max-w-fit">
        <Link href={link?.params ?? ''} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'w-full lg:max-w-fit justify-start'
            )}
          >
            {link?.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )

  if (link?.type === 'external' && link.external)
    return (
      <NavigationMenuItem className="w-full lg:max-w-fit">
        <Link href={link.external} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'w-full lg:max-w-fit justify-start'
            )}
            target="_blank"
          >
            {link?.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
}
