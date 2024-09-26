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
      name: 'eventColors',
      type: 'object',
      title: 'Cores do evento',
      fields: [
        { name: 'primaryColor', type: 'color', title: 'Cor primária' },
        { name: 'secondaryColor', type: 'color', title: 'Cor secundária' },
      ],
    }),
    defineField({
      name: 'baseColor',
      type: 'string',
      title: 'Cor base',
      initialValue: '#ffffff',
      options: {
        list: [
          { title: 'Branco', value: '#ffffff' },
          { title: 'Cinza (claro)', value: '#fafafa' },
          { title: 'Acinzentado (claro)', value: '#f3f2f1' },
          { title: 'Preto', value: '#000000' },
          { title: 'Cinza (escuro)', value: '#0c0d0d' },
          { title: 'Acinzentado (escuro)', value: '#0f0f10' },
        ],
      },
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
