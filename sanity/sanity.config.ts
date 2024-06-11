import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {languageFilter} from '@sanity/language-filter'

export default defineConfig({
  name: 'default',
  title: 'FNB',

  projectId: 'lvs6uzbo',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    languageFilter({
      supportedLanguages: [
        {id: 'nb', title: 'Norwegian (Bokmål)'},
        {id: 'nn', title: 'Norwegian (Nynorsk)'},
        {id: 'en', title: 'English'},
        // Add other languages as needed
      ],
      defaultLanguages: ['en'],
      documentTypes: ['menuItem', 'menuSubcategory', 'menuCategory', 'imageAsset'], // Apply to these types
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
