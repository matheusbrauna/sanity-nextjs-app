import { getBlockText } from '@/sanity/utils'
import { UlistIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const accordionType = defineType({
  type: 'object',
  name: 'accordion',
  title: 'Accordion',
  icon: UlistIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Título',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      description: 'Título da seção',
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
  preview: {
    select: {
      content: 'content',
      image: 'image',
    },
    prepare: ({ content, image }) => ({
      title: getBlockText(content),
      subtitle: 'Accordion',
      image,
    }),
  },
})
