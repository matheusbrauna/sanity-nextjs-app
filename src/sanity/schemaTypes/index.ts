import type { SchemaTypeDefinition } from 'sanity'

import { generalConfig } from '@/sanity/schemaTypes/general-config'
import { faq } from '@/sanity/schemaTypes/faq'
import { heroType } from '@/sanity/schemaTypes/heroType'
import { resourceType } from '@/sanity/schemaTypes/resourceType'
import { aboutType } from './aboutType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, resourceType, aboutType, faq, generalConfig],
}
