'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import Link from 'next/link'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu'
import { ThemeToggle } from '../theme-toggle'
import MenuLinkItem from '../ui/menu-link-item'
import LinkList from '../ui/menu-link-list'

type Props = {
  logo: string
  eventName: string
  headerMenu: {
    title: string | null
    items: Array<{
      _key: string
      _type: 'link'
      label?: string
      type?: 'external' | 'internal'
      external?: string
      params?: string
      internal: null
      link: null
      links: null
    }> | null
  }
}

export function MobileNav({ logo, eventName, headerMenu }: Props) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const [open, setOpen] = useState(false)

  if (isDesktop) return null

  return (
    <div className="flex h-16 items-center justify-between container w-full lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          >
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="space-y-4">
          <div className="w-full">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <Image
                className="max-w-prose max-h-10"
                src={logo}
                alt={eventName!}
                width={96}
                height={96}
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex-col w-full">
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
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
      <ThemeToggle />
    </div>
  )
}
