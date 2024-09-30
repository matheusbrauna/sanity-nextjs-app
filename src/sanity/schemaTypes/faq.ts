import { UlistIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const faq = defineType({
  type: 'document',
  name: 'faq',
  title: 'Perguntas frequentes',
  icon: UlistIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'question',
      title: 'Pergunta',
      validation: e => e.required(),
    }),
    defineField({
      type: 'text',
      name: 'answer',
      title: 'Resposta',
      validation: e => e.required(),
    }),
  ],
})
