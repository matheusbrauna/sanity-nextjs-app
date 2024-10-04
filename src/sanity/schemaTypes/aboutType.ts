import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Sessão Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Título',
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
      title: 'Imagem',
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
})
