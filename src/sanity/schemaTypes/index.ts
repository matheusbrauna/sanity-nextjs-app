import { siteConfig } from '@/sanity/schemaTypes/documents/site-config'
import { accordionType } from '@/sanity/schemaTypes/modules/accordionType'
import { cardType } from '@/sanity/schemaTypes/modules/cardType'
import { heroType } from '@/sanity/schemaTypes/modules/heroType'
import navigation from './documents/navigation'
import { pageType } from './documents/page-builder'
import { offsetType } from './modules/offsetType'
import { ctaType } from './objects/ctaType'
import { linkListType } from './objects/linkListType'
import { LinkType } from './objects/linkType'

export const schemaTypes = [
  heroType,
  cardType,
  offsetType,
  accordionType,
  siteConfig,
  pageType,
  ctaType,
  navigation,
  LinkType,
  linkListType,
]
