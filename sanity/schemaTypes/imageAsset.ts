export default {
  name: 'imageAsset',
  title: 'Image Asset',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'nb', title: 'Norwegian (Bokmål)', type: 'string'},
        {name: 'nn', title: 'Norwegian (Nynorsk)', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'nb', title: 'Norwegian (Bokmål)', type: 'text'},
        {name: 'nn', title: 'Norwegian (Nynorsk)', type: 'text'},
        {name: 'en', title: 'English', type: 'text'},
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'object',
          fields: [
            {name: 'nb', title: 'Norwegian (Bokmål)', type: 'string'},
            {name: 'nn', title: 'Norwegian (Nynorsk)', type: 'string'},
            {name: 'en', title: 'English', type: 'string'},
          ],
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'object',
          fields: [
            {name: 'nb', title: 'Norwegian (Bokmål)', type: 'string'},
            {name: 'nn', title: 'Norwegian (Nynorsk)', type: 'string'},
            {name: 'en', title: 'English', type: 'string'},
          ],
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required().error('You must fill out the alternative text.'),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.en', // Defaulting to English in previews, adjust as needed
      media: 'image',
    },
  },
}
