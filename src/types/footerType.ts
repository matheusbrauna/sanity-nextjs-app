import type { SanityImageQueryResult } from './sanityImageQueryResult'

export type IFooter = {
  logo: {
    dark: SanityImageQueryResult
    default: SanityImageQueryResult
  }
  eventName: string
  footerMenu: {
    title: string | null
    items: Array<{
      _key: string
      _type: 'link'
      label?: string
      type?: 'external' | 'internal'
      external?: string
      params?: string
    }> | null
  }
  description: string | null
  copyright:
    | {
        children?:
          | {
              marks?: string[] | undefined
              text?: string | undefined
              _type: 'span'
              _key: string
            }[]
          | undefined
        style?: 'normal' | undefined
        listItem?: 'number' | 'bullet' | undefined
        markDefs?:
          | {
              href?: string | undefined
              _type: 'link'
              _key: string
            }[]
          | undefined
        level?: number | undefined
        _type: 'block'
        _key: string
      }[]
    | null
}
