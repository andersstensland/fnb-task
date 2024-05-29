export default {
  name: 'cart',
  title: 'Shopping Cart',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
      description: 'Identifier for the user this cart belongs to.',
    },
    {
      name: 'items',
      title: 'Items in Cart',
      type: 'array',
      of: [
        {
          type: 'cartItem',
        },
      ],
      description: 'List of items in the cart.',
    },
    {
      name: 'total',
      title: 'Total Cost',
      type: 'number',
      description: 'Total cost of the items in the cart.',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      description: 'The date and time when the cart was created.',
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      description: 'The date and time when the cart was last updated.',
    },
  ],
}
