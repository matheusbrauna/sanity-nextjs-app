import { siteConfig } from '@/sanity/schemaTypes/documents/site-config'
import { accordionType } from '@/sanity/schemaTypes/modules/accordionType'
import { heroType } from '@/sanity/schemaTypes/modules/heroType'
import { cardType } from '@/sanity/schemaTypes/modules/cardType'
import { offsetType } from './modules/offsetType'
import { pageType } from './documents/page-builder'
import { ctaType } from './objects/ctaType'
import navigation from './documents/navigation'
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
