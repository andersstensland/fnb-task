export default {
  name: 'menuCategory',
  title: 'Menu Category',
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
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Enter a number to set the order of the categories',
    },
    {
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'menuSubcategory'}]}],
    },
  ],
}
