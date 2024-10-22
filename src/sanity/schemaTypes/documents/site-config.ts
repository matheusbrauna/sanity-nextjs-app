import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const siteConfig = defineType({
  name: 'site',
  title: 'Configurações gerais do site',
  type: 'document',
  groups: [
    { name: 'general', title: 'Geral', default: true },
    { name: 'navigation', title: 'Navegação' },
    { name: 'theme', title: 'Tema' },
  ],
  icon: CogIcon,
  fields: [
    defineField({
      name: 'eventName',
      type: 'string',
      title: 'Nome do evento',
      group: 'general',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      group: 'general',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descrição',
      group: 'general',
    }),
    defineField({
      name: 'primaryColor',
      type: 'color',
      title: 'Cor primária',
      group: 'theme',
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
      group: 'theme',
    }),
    defineField({
      name: 'headerMenu',
      type: 'reference',
      to: [{ type: 'navigation' }],
      group: 'navigation',
    }),
    defineField({
      name: 'footerMenu',
      type: 'reference',
      to: [{ type: 'navigation' }],
      group: 'navigation',
    }),
    defineField({
      name: 'social',
      type: 'reference',
      to: [{ type: 'navigation' }],
      group: 'navigation',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Configurações do site',
    }),
  },
})
