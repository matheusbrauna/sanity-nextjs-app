import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const generalConfig = defineType({
  name: 'generalConfig',
  title: 'Configurações gerais',
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'eventColors',
      type: 'object',
      title: 'Cores do evento',
      fields: [
        { name: 'primaryColor', type: 'color', title: 'Cor primária' },
        { name: 'secondaryColor', type: 'color', title: 'Cor secundária' },
        {
          name: 'baseColor',
          type: 'color',
          title: 'Cor base',
          options: {
            colorList: [
              { h: 0, s: 0, l: 100, a: 1 },
              { h: 0, s: 0, l: 98, a: 1 },
              { h: 30, s: 8, l: 95, a: 1 },
              { h: 0, s: 0, l: 0, a: 1 },
              { h: 180, s: 4, l: 5, a: 1 },
              { h: 240, s: 3, l: 6, a: 1 },
              { h: 240, s: 3, l: 6, a: 1 },
              { h: 240, s: 7, l: 8, a: 1 },
            ],
            disableAlpha: true,
          },
        },
      ],
    }),
    defineField({
      name: 'roundingOfComponents',
      title: 'Arredondamento dos components',
      type: 'string',
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
