'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="group"
    >
      <SunIcon className="h-[1.5rem] w-[1.3rem] text-muted-foreground group-hover:text-foreground dark:hidden" />
      <MoonIcon className="hidden h-4 w-4 text-muted-foreground group-hover:text-foreground dark:block" />
      <span className="sr-only">Mudar tema</span>
    </Button>
  )
}
