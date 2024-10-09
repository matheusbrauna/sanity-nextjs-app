import { TiersIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page-builder',
  type: 'document',
  title: 'Page',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Home page',
      readOnly: true,
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      options: {
        insertMenu: {
          views: [
            { name: 'list' },
            {
              name: 'grid',
              previewImageUrl: schemaTypeName =>
                `/static/preview-${schemaTypeName}.png`,
            },
          ],
        },
      },
      of: [
        // Sections
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'about',
          type: 'about',
        }),
        defineArrayMember({
          name: 'resource',
          type: 'resource',
        }),
        defineArrayMember({
          name: 'faq',
          type: 'faq',
        }),
      ],
    }),
  ],
})
