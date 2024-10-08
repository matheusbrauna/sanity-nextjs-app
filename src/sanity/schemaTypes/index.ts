import type { SchemaTypeDefinition } from 'sanity'

import { generalConfig } from '@/sanity/schemaTypes/general-config'
import { faqType } from '@/sanity/schemaTypes/faq'
import { heroType } from '@/sanity/schemaTypes/heroType'
import { resourceType } from '@/sanity/schemaTypes/resourceType'
import { aboutType } from './aboutType'
import { pageType } from './page-builder'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, resourceType, aboutType, faqType, generalConfig, pageType],
}
