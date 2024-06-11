export default {
  name: 'menuSubcategory',
  title: 'Menu Subcategory',
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
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    },
  ],
}
