import type { SanityImageQueryResult } from "./sanityImageQueryResult"

export type IHeader = {
  logo: {
    dark: SanityImageQueryResult
    default: SanityImageQueryResult
  }
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
    }> | null
  }
}
