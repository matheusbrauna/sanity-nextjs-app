import type { ReactNode } from 'react'

interface props {
  children: ReactNode
}
export default function ProseText({ children }: props) {
  return (
    <div
      className="prose
    prose-h1:text-foreground
    prose-h2:text-foreground
    prose-h3:text-foreground
    prose-h4:text-foreground
    prose-h5:text-foreground
    prose-h6:text-foreground
    prose-strong:text-foreground
    prose-h1:text-4xl prose-h1:xl:text-7xl prose-h1:font-semibold prose-h1:tracking-tighter prose-h1:leading-tight
    prose-h2:text-3xl prose-h2:xl:text-5xl prose-h2:font-light prose-h2:tracking-tighter prose-h2:leading-tight
    prose-h3:text-2xl prose-h3:xl:text-5xl prose-h3:font-light prose-h3:tracking-tighter prose-h3:leading-tight
    prose-h4:text-3xl prose-h4:xl:text-4xl prose-h4:font-light prose-h4:tracking-tighter prose-h4:leading-tight
    prose-h5:text-2xl prose-h5:xl:text-4xl prose-h5:font-light prose-h5:tracking-tighter prose-h5:leading-tight
    prose-h6:text-1xl prose-h6:xl:text-3xl prose-h6:font-light prose-h6:tracking-tighter prose-h6:leading-tight
    prose-p:text-muted-foreground prose-p:md:text-xl/relaxed prose-p:lg:text-base/relaxed prose-p:xl:text-xl/relaxed
    "
    >
      {children}
    </div>
  )
}
