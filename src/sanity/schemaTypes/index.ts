import type { SchemaTypeDefinition } from 'sanity'

import { generalConfig } from '@/sanity/schemaTypes/general-config'
import { accordionType } from '@/sanity/schemaTypes/accordionType'
import { heroType } from '@/sanity/schemaTypes/heroType'
import { resourceType } from '@/sanity/schemaTypes/resourceType'
import { offsetType } from './offsetType'
import { pageType } from './page-builder'
import { ctaType } from './ctaType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType,
    resourceType,
    offsetType,
    accordionType,
    generalConfig,
    pageType,
    ctaType,
  ],
}
