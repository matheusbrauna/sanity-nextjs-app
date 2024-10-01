import { TiersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Sessão Hero',
  type: 'document',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Descrição',
    }),
    defineField({
      name: 'cta',
      type: 'string',
      title: 'CTA (Chamada para a ação)',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Imagem',
    }),
  ],
})
