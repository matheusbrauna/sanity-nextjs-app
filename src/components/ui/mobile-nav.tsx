'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Icons } from '../icons'
import { ThemeToggle } from '../theme-toggle'
import { Button } from './button'
import MenuLinkItem from './menu-link-item'
import LinkList from './menu-link-list'
import { NavigationMenu, NavigationMenuList } from './navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from './sheet'
import type { IHeader } from '@/types/headerType'
import { useTheme } from 'next-themes'
import { getCroppedImageSrc } from '@/sanity/lib/image'

export function MobileNav({ logo, eventName, headerMenu }: IHeader) {
  const { theme } = useTheme()

  const logoImage = getCroppedImageSrc(
    theme === 'dark' ? logo.dark : logo.default
  )
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
                src={logoImage}
                alt={eventName!}
                width={96}
                height={96}
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <NavigationMenu>
            <div className="w-full">
              <NavigationMenuList className="flex-col w-full">
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
              </NavigationMenuList>
            </div>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
      <ThemeToggle />
    </div>
  )
}
