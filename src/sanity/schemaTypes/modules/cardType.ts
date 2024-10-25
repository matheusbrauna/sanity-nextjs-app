import { getBlockText } from '@/sanity/utils'
import { InlineElementIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const cardType = defineType({
  type: 'object',
  name: 'card',
  title: 'Cards',
  icon: InlineElementIcon,
  description:
    'Cards podem ser usados para agregar informações pequenas e isoladas.',
  fields: [
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
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
      name: 'cardList',
      title: 'Lista de Cards',
      description: 'Você pode alterar a ordem dos Cards movendo-os.',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Pergunta e Resposta',
          fields: [
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
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: e => e.required(),
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              validation: Rule =>
                Rule.max(524).warning(
                  'O corpo do texto deve ter no máximo 524 caracteres'
                ),
            }),
            defineField({
              name: 'cta',
              title: 'CTA (Chamada Para a Ação)',
              type: 'cta',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: 'Card',
    }),
  },
})
