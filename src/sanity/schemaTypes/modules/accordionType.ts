import { UlistIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const accordionType = defineType({
  type: 'object',
  name: 'accordion',
  title: 'Accordion',
  icon: UlistIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Título',
      description: 'Título da seção',
      validation: e => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Descrição',
      description: 'Descrição opcional para esta seção',
    }),
    defineField({
      name: 'accordionList',
      title: 'Lista de items',
      description: 'Você pode alterar a ordem da lista movendo os cartões.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Título',
              type: 'string',
              validation: e => e.required(),
            }),
            defineField({
              name: 'body',
              title: 'Texto',
              type: 'text',
              validation: e => e.required(),
            }),
          ],
          title: 'Corpo do accordion',
        }),
      ],
    }),
  ],
})
