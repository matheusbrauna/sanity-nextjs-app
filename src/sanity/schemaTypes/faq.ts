import { UlistIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const faqType = defineType({
  type: 'document',
  name: 'faq',
  title: 'Perguntas frequentes',
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
      name: 'faqList',
      title: 'Lista de Perguntas',
      description: 'Você pode alterar a ordem da lista movendo os cartões.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Pergunta',
              type: 'string',
              validation: e => e.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Resposta',
              type: 'text',
              validation: e => e.required(),
            }),
          ],
          title: 'Pergunta e Resposta',
        }),
      ],
    }),
  ],
})
