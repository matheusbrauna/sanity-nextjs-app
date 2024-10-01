import type { SchemaTypeDefinition } from 'sanity'

import { generalConfig } from '@/sanity/schemaTypes/general-config'
import { faq } from '@/sanity/schemaTypes/faq'
import { hero } from '@/sanity/schemaTypes/hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, faq, generalConfig],
}
