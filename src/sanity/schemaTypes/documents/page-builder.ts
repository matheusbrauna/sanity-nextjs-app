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
      title: 'Módulos da página',
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
          name: 'offset-section',
          type: 'offset-section',
        }),
        defineArrayMember({
          name: 'cards',
          type: 'card',
        }),
        defineArrayMember({
          name: 'accordion',
          type: 'accordion',
        }),
      ],
    }),
  ],
})
