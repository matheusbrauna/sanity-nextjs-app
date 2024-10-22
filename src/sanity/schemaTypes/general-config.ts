import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const generalConfig = defineType({
  name: 'generalConfig',
  title: 'Configurações gerais',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'eventName',
      type: 'string',
      title: 'Nome do evento',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descrição',
    }),
    defineField({
      name: 'primaryColor',
      type: 'color',
      title: 'Cor primária',
    }),
    defineField({
      name: 'roundingOfComponents',
      type: 'string',
      title: 'Arredondamento dos components',
      initialValue: 'rounded',
      options: {
        list: [
          { title: 'Quadrado', value: 'square' },
          { title: 'Arredondado', value: 'rounded' },
          { title: 'Pílula', value: 'pill' },
        ],
      },
    }),
  ],
})
