'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'
import { resolve } from './src/sanity/presentation/resolve'

import { presentationTool } from 'sanity/presentation'
import { colorInput } from '@sanity/color-input'
const singletonTypes = ['site']
export default defineConfig({
  name: 'default',
  title: 'ProjetoXPTO',
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schemaTypes,
    templates: templates =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.includes(schemaType)
      ),
  },
  document: {
    actions: (input, { schemaType }) =>
      singletonTypes.includes(schemaType)
        ? input.filter(
            ({ action }) =>
              action &&
              ['publish', 'discardChanges', 'restore'].includes(action)
          )
        : input,
  },
  plugins: [
    colorInput(),
    structureTool({ name: 'content', title: 'Conteúdo', structure }),
    presentationTool({
      name: 'editor',
      title: 'Editor Visual',
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  tasks: { enabled: false },
  scheduledPublishing: { enabled: false },
})
