import Link from 'next/link'
import { Icons } from '@/components/icons'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '../mode-toggle'

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>
          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {' '}
                Email{' '}
              </label>
              <Input
                className="w-full border p-6 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />
              <Button
                type="button"
                className="absolute end-0 top-1/2 -translate-y-1/2 px-8 py-6"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>
            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <Link
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <Icons.Facebook className="size-6" />
              </Link>
              <ModeToggle />
              <Link
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Icons.Instagram className="size-6" />
              </Link>
              <Link
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <Icons.Twitter className="size-6" />
              </Link>
              <Link
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <Icons.GitHub className="size-6" />
              </Link>
              <Link
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Dribbble</span>
                <Icons.Dribbble className="size-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium"> Services </strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    {' '}
                    Marketing{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <strong className="font-medium">About</strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <strong className="font-medium">Support</strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground transition hover:text-muted-foreground/75"
                    href="#"
                  >
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8">
          <p className="text-center text-xs/relaxed">
            © Company 2022. All rights reserved.
            <br />
            Created with{' '}
            <Link
              href="#"
              className="text-muted-foreground underline transition hover:text-muted-foreground/75"
            >
              Laravel{' '}
            </Link>
            and{' '}
            <Link
              href="#"
              className="text-muted-foreground underline transition hover:text-muted-foreground/75"
            >
              Laravel Livewire
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
