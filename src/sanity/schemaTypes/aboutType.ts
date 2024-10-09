import { MasterDetailIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Sobre',
  type: 'object',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Título',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descrição',
      validation: Rule =>
        Rule.max(524).warning(
          'O corpo do texto deve ter no máximo 524 caracteres'
        ),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA (Chamada Para a Ação)',
      type: 'cta',
    }),
  ],
})
