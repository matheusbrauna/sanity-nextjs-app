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
      type: 'object',
      group: 'general',
      options: {
        columns: 3,
      },
      fields: [
        defineField({
          name: 'favicon',
          title: 'Favicon',
          description:
            'Ícone pequeno associado ao site, exibido na aba do navegador.',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'default',
          title: 'Padrão',
          description: 'Padrão, também será usado no modo light.',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'dark',
          description: 'Variação da logo para o modo escuro.',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descrição',
      group: 'general',
    }),
    defineField({
      name: 'copyright',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
        },
      ],
      group: 'general',
    }),
    defineField({
      name: 'ogimage',
      title: 'Open Graph Image',
      description:
        'Imagem Open Graph: serve para enriquecer a prévia do seu link nas redes sociais.',
      type: 'image',
      options: {
        hotspot: true,
      },
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
