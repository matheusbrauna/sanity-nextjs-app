import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const LinkType = defineType({
  name: 'link',
  title: 'Link',
  icon: LinkIcon,
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      description: 'Título do link',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Tipo de link',
      description: 'Escolha o tipo de link (interno ou externo)',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'interno', value: 'internal' },
          { title: 'externo', value: 'external' },
        ],
      },
    }),
    defineField({
      name: 'external',
      placeholder: 'https://www.exemplo.com.br',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
      hidden: ({ parent }) => parent?.type !== 'external',
    }),
    defineField({
      name: 'params',
      title: 'Referência para seção',
      placeholder: '#seção',
      type: 'string',
      description: 'Utilize o símbolo "#" para referenciar uma seção na página',
      hidden: ({ parent }) => parent?.type !== 'internal',
    }),
  ],
  
})
