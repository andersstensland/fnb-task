export default {
  name: 'menuSubcategory',
  title: 'Menu Subcategory',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    },
  ],
}
