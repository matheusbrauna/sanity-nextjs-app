import { getBlockText } from '@/sanity/utils'
import { MasterDetailIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const offsetType = defineType({
  name: 'offset-section',
  title: 'Offset',
  type: 'object',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      title: 'Conteúdo',
      description: 'Conteúdo da seção',
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
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        }),
        defineField({
          name: 'onRight',
          title: 'Exibir à direita',
          type: 'boolean',
          description: 'Exibir à direita do conteúdo no computador.',
          initialValue: false,
        }),
        defineField({
          name: 'onBottom',
          title: 'Exibir abaixo',
          type: 'boolean',
          description: 'Exibir abaixo do conteúdo no celular',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA (Chamada Para a Ação)',
      type: 'cta',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: 'Offset',
    }),
  },
})
