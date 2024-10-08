import { InlineIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: InlineIcon,
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
        Rule.max(256).warning(
          'O corpo do texto deve ter no máximo 256 caracteres'
        ),
    }),
    defineField({
      name: 'heroImage',
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
