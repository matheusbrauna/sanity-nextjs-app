import { InlineIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Título',
      validation: e => e.required(),
    }),
    defineField({
      name: 'idSection',
      type: 'string',
      title: 'ID seção',
      description:
        'Utilize o símbolo "#" e de um nome para esse seção. e.g: #sobre-nos',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descrição',
      validation: Rule =>
        Rule.max(256).warning(
          'O corpo do texto deve ter no máximo 256 caracteres'
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
