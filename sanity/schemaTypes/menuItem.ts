export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {name: 'nb', title: 'Norwegian (Bokmål)', type: 'string'},
        {name: 'nn', title: 'Norwegian (Nynorsk)', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
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
      name: 'allergies',
      title: 'Allergies',
      type: 'text',
    },
    {
      name: 'imageAsset',
      title: 'Image Asset',
      type: 'reference',
      to: [{type: 'imageAsset'}],
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'cost',
              title: 'Cost',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
}
