import { client, sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'
import { LogoJsIcon } from '@sanity/icons'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BackToTop } from '../back-to-top'

export async function Footer() {
  const data = await sanityFetch({ query: GENERAL_CONFIG_QUERY })

  if (!data) {
    return notFound()
  }

  return (
    <footer>
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <BackToTop />
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-primary lg:justify-start">
              <Link href="#" className="flex items-center" prefetch={false}>
                <LogoJsIcon fontSize={50} />
                <span className="sr-only">Empresa XPTO</span>
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-muted-foreground lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#services"
              >
                {' '}
                About{' '}
              </a>
            </li>

            <li>
              <a
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#services"
              >
                {' '}
                Services{' '}
              </a>
            </li>

            <li>
              <a
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#services"
              >
                {' '}
                Projects{' '}
              </a>
            </li>

            <li>
              <a
                className="text-muted-foreground transition hover:text-muted-foreground/75"
                href="#services"
              >
                {' '}
                Blog{' '}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground lg:text-right">
          Copyright &copy; {new Date().getFullYear()}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
