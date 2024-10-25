import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'
import { count } from '@/sanity/utils'

export default defineType({
  name: 'navigation',
  title: 'Navegação',
  icon: LinkIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare: ({ title, items }) => ({
      title,
      subtitle: count(items),
    }),
  },
})
