import { InlineElementIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const resourceType = defineType({
  type: 'document',
  name: 'resource',
  title: 'Cartões',
  icon: InlineElementIcon,
  description:
    'Cartões podem ser usados para agregar informações pequenas e isoladas.',
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
      name: 'cardList',
      title: 'Lista de cartões',
      description: 'Você pode alterar a ordem dos cartões movendo-os.',
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
              title: 'Imagem',
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
              name: 'showCTA',
              type: 'boolean',
              title: 'Adicionar CTA?',
            }),
            defineField({
              name: 'ctaInfo',
              type: 'object',
              title: 'Informações do Botão',
              fields: [
                defineField({
                  name: 'ctaDescription',
                  type: 'string',
                  title: 'CTA (Chamada para a ação)',
                }),
                defineField({
                  name: 'ctaLink',
                  type: 'url',
                  title: 'Url',
                }),
              ],
              hidden: ({ parent }) => !parent?.showCTA,
            }),
          ],
        }),
      ],
    }),
  ],
})
