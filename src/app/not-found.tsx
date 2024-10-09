import Notfound from '@/components/icons/not-found-404'
import Notfoundbg from '@/components/icons/not-found-bg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-secondary-950 h-screen flex items-center justify-center">
      <Notfoundbg />
      <div className="w-full relative overflow-hidden flex flex-col items-center justify-center">
        <Notfound />
        <div className="max-w-xl text-black flex flex-col items-center justify-center my-5">
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center font-semibold italic">
            "Você chegou onde nem o Wi-Fi alcança... mas calma, vamos te ajudar
            a voltar ao caminho certo!"
          </p>
        </div>
        <Button asChild>
          <Link href="/">Leve-me de volta à civilização!</Link>
        </Button>
      </div>
    </section>
  )
}
