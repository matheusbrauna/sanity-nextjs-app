import { defineField, defineType } from 'sanity'

export const ctaType = defineType({
  name: 'cta',
  title: 'CTA (Chamada Para a Ação)',
  type: 'object',
  fields: [
    defineField({
      name: 'showCTA',
      type: 'boolean',
      title: 'Adicionar CTA?',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Descrição do botão',
      hidden: ({ parent }) => !parent?.showCTA,
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Url/Link',
      hidden: ({ parent }) => !parent?.showCTA,
    }),
  ],
})
