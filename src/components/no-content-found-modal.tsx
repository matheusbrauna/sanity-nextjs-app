'use client'

import { useNoContentFoundModal } from '@/hooks/use-no-content-found-modal'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import {
  ArrowRightIcon,
  Link1Icon,
  LinkBreak1Icon,
} from '@radix-ui/react-icons'
import { ArrowRight, Link2Icon, Link2Off } from 'lucide-react'

export function NoContentFoundModal({ isOpen }: { isOpen: boolean }) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Nenhum conteúdo foi encontrado</AlertDialogTitle>
          <AlertDialogDescription>
            Parece que você ainda não adicionou nenhum conteúdo no seu admin.
            Acesse o seu painel e comece a criar sua página!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className={cn(
              buttonVariants({
                variant: 'link',
              })
            )}
            asChild
          >
            <Link href="/admin">
              Ir para painel admin
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
