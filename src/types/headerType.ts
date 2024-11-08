export type IHeader = {
  logo: string
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
