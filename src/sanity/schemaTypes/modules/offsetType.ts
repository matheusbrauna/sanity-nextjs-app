import { MasterDetailIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const offsetType = defineType({
  name: 'offset-section',
  title: 'Offset',
  type: 'object',
  icon: MasterDetailIcon,
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
