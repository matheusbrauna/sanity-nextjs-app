import { LogoJsIcon } from '@sanity/icons'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'

export function Header() {
  return (
    <header className="bg-background w-full flex justify-center shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 container">
        <Link href="#" className="flex items-center" prefetch={false}>
          <LogoJsIcon fontSize={50} />
          <span className="sr-only">Empresa XPTO</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                href={''}
                className="text-base font-medium text-muted-foreground hover:underline"
                prefetch={false}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href={''}
                className="text-base font-medium text-muted-foreground hover:underline"
                prefetch={false}
              >
                Sobre
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
