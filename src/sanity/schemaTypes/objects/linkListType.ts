import { count } from '@/sanity/utils'
import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const linkListType = defineType({
  name: 'linkList',
  title: 'Lista de Links',
  icon: LinkIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      type: 'link',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
  preview: {
    select: {
      link: 'link',
      links: 'links',
    },
    prepare: ({ link, links }) => ({
      title: link.label || link.internal?.title,
      subtitle: count(links, 'link'),
    }),
  },
})
